// Public Supabase configuration. The URL and anon key are safe to expose to the
// browser (the anon key is protected by Row Level Security). The service-role key
// is server-only and must never be prefixed with NEXT_PUBLIC_.
export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ""
export const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""

/**
 * Whether the public Supabase env vars are present. Used to degrade gracefully
 * (show a "configure Supabase" notice) instead of crashing the build/runtime
 * when the project has not been wired up yet.
 */
export function isSupabaseConfigured(): boolean {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0
}
