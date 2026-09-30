# peptides.cx — The Peptide Community Exchange

An educational community platform for peptide research, real-world experience reports, safety
discussion, and verified vendor transparency. **Content is not medical advice.**

Built with Next.js 15 (App Router), Tailwind CSS, and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Structure

| Area | Path |
| --- | --- |
| Homepage | `src/app/page.tsx` |
| Forum categories | `src/app/forum/` (config in `src/lib/site.ts`) |
| Peptide Library (evidence-scored) | `src/app/library/` (data in `src/lib/peptides.ts`) |
| Experience report form | `src/app/new-experience-report/` |
| Vendors & application | `src/app/vendors/`, `src/app/vendor-application/` |
| Deals (labeled advertising) | `src/app/deals/` |
| Compliance UI (disclaimers, ad labels, cookie consent, report button) | `src/components/compliance/` |
| Auth & roles (Supabase) | `src/lib/supabase/`, `src/app/login/`, `src/app/account/`, `src/app/admin/` |
| Legal pages | `src/app/{privacy,terms,imprint,guidelines,affiliate-disclosure,cookie-settings}/` |

## Authentication (Supabase)

Users and admins are backed by Supabase Auth + a `profiles` table with a role model.

1. Run the migration in the Supabase SQL editor: `supabase/migrations/0001_init_auth_roles.sql`.
2. Copy `.env.local.example` to `.env.local` and fill the values from
   Supabase → Project Settings → API:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (server-only)
   Set the same variables in Vercel → Settings → Environment Variables.
3. Sign up at `/login`, then promote your account to admin (see the note at the bottom of the
   migration file). Admins manage member roles at `/admin`.

Role changes are enforced in the database (RLS + a guard trigger), not just the UI. The app builds
and runs even when Supabase env vars are absent — auth-gated pages show a "not configured" notice.

### Email (Resend)

Transactional email uses Resend via its REST API (`src/lib/email/resend.ts`). Set `RESEND_API_KEY`
and `RESEND_FROM` (a verified sender domain) to enable the welcome email sent after account
confirmation. For the sign-up *confirmation* email itself, configure Resend as the custom SMTP
provider in Supabase → Authentication → Emails → SMTP settings.

## Going live on Vercel (checklist)

1. Merge this branch (PR #1) into the Vercel production branch, or point the project's production
   branch at it. `vercel.json` pins the framework to Next.js.
2. In Vercel → Settings → Environment Variables, add: `NEXT_PUBLIC_SUPABASE_URL`,
   `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`, `RESEND_FROM`.
3. Run `supabase/migrations/0001_init_auth_roles.sql` in the Supabase SQL editor.
4. In Supabase → Authentication → URL Configuration, set the Site URL and add
   `https://<your-domain>/auth/callback` as a redirect URL.
5. (Optional) Configure Resend as the Supabase SMTP provider for confirmation emails.
6. Add the custom domain `peptides.cx` in Vercel and point DNS at it.

## Compliance notes

- All advertising is labeled (Ad / Sponsored / Affiliate Link / Paid Placement).
- Non-essential cookies (analytics, affiliate tracking, marketing) stay off until the user opts in;
  rejecting is as easy as accepting (`src/components/compliance/cookie-consent.tsx`).
- Privacy, Terms, and Imprint pages are structural templates — replace with reviewed legal text
  before launch.
