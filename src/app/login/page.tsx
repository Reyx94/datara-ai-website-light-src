import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { PageHeader } from "@/components/site/page-header"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { getCurrentProfile } from "@/lib/supabase/server"
import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Login / Join",
  description: "Sign in or create a peptides.cx community account.",
  robots: { index: false, follow: true },
}

// Checks the session (auth cookies) at request time.
export const dynamic = "force-dynamic"

export default async function LoginPage() {
  const configured = isSupabaseConfigured()
  if (configured) {
    const session = await getCurrentProfile()
    if (session) redirect("/account")
  }

  return (
    <div>
      <PageHeader eyebrow="Community" title="Login / Join" description="Access the community, watchlists, and premium features." />
      <div className="container max-w-md py-10">
        <LoginForm configured={configured} />
      </div>
    </div>
  )
}
