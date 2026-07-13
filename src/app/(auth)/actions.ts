"use server"

import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { isSupabaseConfigured } from "@/lib/supabase/config"

export type AuthState = { error?: string; message?: string }

export async function signIn(_prev: AuthState, formData: FormData): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: "Authentication is not configured yet." }

  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return { error: error.message }

  revalidatePath("/", "layout")
  redirect("/account")
}

export async function signUp(_prev: AuthState, formData: FormData): Promise<AuthState> {
  if (!isSupabaseConfigured()) return { error: "Authentication is not configured yet." }

  const email = String(formData.get("email") ?? "")
  const password = String(formData.get("password") ?? "")
  const username = String(formData.get("username") ?? "")

  const origin = (await headers()).get("origin") ?? ""

  const supabase = await createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
      data: { username },
    },
  })
  if (error) return { error: error.message }

  return {
    message:
      "Check your email to confirm your account. After confirming, you can sign in.",
  }
}

export async function signInWithProvider(formData: FormData): Promise<void> {
  const provider = String(formData.get("provider") ?? "")
  if (provider !== "google" && provider !== "apple") return
  if (!isSupabaseConfigured()) redirect("/login?error=not-configured")

  const origin = (await headers()).get("origin") ?? ""
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: `${origin}/auth/callback` },
  })
  if (error || !data.url) redirect("/login?error=oauth")
  redirect(data.url)
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient()
    await supabase.auth.signOut()
  }
  revalidatePath("/", "layout")
  redirect("/login")
}
