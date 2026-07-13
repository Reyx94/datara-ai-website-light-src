import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { sendEmail, welcomeEmail, isEmailConfigured } from "@/lib/email/resend"

// Handles the email-confirmation / OAuth code exchange redirect from Supabase.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/account"

  if (code && isSupabaseConfigured()) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Send a welcome email once, on first confirmation, if Resend is configured.
      const user = data.user
      const alreadyWelcomed = user?.user_metadata?.welcomed === true
      if (user?.email && isEmailConfigured() && !alreadyWelcomed) {
        const username = (user.user_metadata?.username as string | undefined) ?? null
        const mail = welcomeEmail(username)
        await sendEmail({ to: user.email, subject: mail.subject, html: mail.html, text: mail.text })
        await supabase.auth.updateUser({ data: { welcomed: true } })
      }
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`)
}
