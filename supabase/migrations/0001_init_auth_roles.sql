-- peptides.cx — auth, profiles, and role model
-- Safe to run multiple times (idempotent where practical).

-- 1. Role enum -------------------------------------------------------------
do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type public.user_role as enum (
      'guest',
      'registered',
      'trusted',
      'premium',
      'expert',
      'vendor',
      'vendor_pro',
      'sponsor_vendor',
      'moderator',
      'admin'
    );
  end if;
end$$;

-- 2. Profiles table (1:1 with auth.users) ----------------------------------
create table if not exists public.profiles (
  id             uuid primary key references auth.users (id) on delete cascade,
  username       text unique,
  role           public.user_role not null default 'registered',
  country        text,
  premium_status boolean not null default false,
  vendor_status  text,
  expert_status  text,
  trust_level    int not null default 0,
  warnings_count int not null default 0,
  suspended_until timestamptz,
  banned_at      timestamptz,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

-- 3. Auto-create a profile whenever a new auth user signs up ----------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. keep updated_at fresh --------------------------------------------------
create or replace function public.touch_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_touch_updated_at on public.profiles;
create trigger profiles_touch_updated_at
  before update on public.profiles
  for each row execute function public.touch_updated_at();

-- 5. Helper: is the current user staff (moderator/admin)? -------------------
create or replace function public.is_staff()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('moderator', 'admin')
  );
$$;

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

-- 6. Row Level Security -----------------------------------------------------
alter table public.profiles enable row level security;

-- Everyone can read public profile info.
drop policy if exists "profiles_read_all" on public.profiles;
create policy "profiles_read_all"
  on public.profiles for select
  using (true);

-- Users can update their own profile, but NOT their own role / status fields
-- (those are enforced separately below via a restrictive trigger).
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Staff (moderator/admin) can update any profile.
drop policy if exists "profiles_update_staff" on public.profiles;
create policy "profiles_update_staff"
  on public.profiles for update
  using (public.is_staff())
  with check (public.is_staff());

-- 7. Prevent non-admins from escalating their own role ----------------------
create or replace function public.guard_role_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role and not public.is_admin() then
    raise exception 'Only admins can change roles';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_guard_role on public.profiles;
create trigger profiles_guard_role
  before update on public.profiles
  for each row execute function public.guard_role_change();

-- 8. Backfill profiles for any pre-existing auth users ----------------------
insert into public.profiles (id, username)
select u.id, coalesce(u.raw_user_meta_data ->> 'username', split_part(u.email, '@', 1))
from auth.users u
on conflict (id) do nothing;

-- 9. Promote the first admin ------------------------------------------------
-- After you sign up, set your own account to admin by running (replace email):
--   update public.profiles set role = 'admin'
--   where id = (select id from auth.users where email = 'you@example.com');
