import { cookies } from "next/headers"
import { createServerClient } from "@supabase/ssr"
import { createClient as createSbClient } from "@supabase/supabase-js"
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config"
import type { Profile } from "./types"

// Server-side Supabase client bound to the request's cookies (App Router).
export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          )
        } catch {
          // Called from a Server Component — cookie writes are handled by middleware.
        }
      },
    },
  })
}

// Service-role client for privileged admin operations. Server-only. Never expose
// this key to the browser. Returns null if the key is not configured.
export function createAdminClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!SUPABASE_URL || !serviceKey) return null
  return createSbClient(SUPABASE_URL, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

// Fetch the current user's profile (or null if signed out / unconfigured).
export async function getCurrentProfile(): Promise<{
  userId: string
  email: string | null
  profile: Profile | null
} | null> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return null

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  return { userId: user.id, email: user.email ?? null, profile: (profile as Profile) ?? null }
}
