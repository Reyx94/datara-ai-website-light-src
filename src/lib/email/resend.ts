// Minimal Resend client using the REST API (no extra dependency, runs on any
// runtime). Emails are sent only when RESEND_API_KEY is configured; otherwise
// this is a no-op so the app keeps working without email set up.

const RESEND_ENDPOINT = "https://api.resend.com/emails"

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY)
}

export interface SendEmailInput {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

export async function sendEmail(input: SendEmailInput): Promise<{ ok: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, error: "RESEND_API_KEY not configured" }

  const from = process.env.RESEND_FROM ?? "peptides.cx <onboarding@peptides.cx>"

  try {
    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: input.to,
        subject: input.subject,
        html: input.html,
        text: input.text,
      }),
    })
    if (!res.ok) {
      const detail = await res.text().catch(() => "")
      return { ok: false, error: `Resend ${res.status}: ${detail}` }
    }
    return { ok: true }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "Unknown email error" }
  }
}

export function welcomeEmail(username: string | null): { subject: string; html: string; text: string } {
  const name = username || "there"
  const subject = "Welcome to peptides.cx"
  const text = `Hi ${name},

Your peptides.cx account is active. You now have access to the community forum,
peptide library, experience reports, and safety resources.

A reminder: peptides.cx is an educational community. Content is not medical advice.

— The peptides.cx team`
  const html = `<!doctype html>
<html>
  <body style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; color:#1f2937; line-height:1.6; padding:24px;">
    <h1 style="font-size:20px;">Welcome to peptides.cx</h1>
    <p>Hi ${name},</p>
    <p>Your account is active. You now have access to the community forum, peptide library,
    experience reports, and safety resources.</p>
    <p style="color:#6b7280;font-size:13px;">A reminder: peptides.cx is an educational community.
    Content is not medical advice, dosing instruction, or sourcing guidance.</p>
    <p style="margin-top:24px;">
      <a href="https://peptides.cx/library" style="background:#2563eb;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;">Explore the library</a>
    </p>
    <p style="color:#9ca3af;font-size:12px;margin-top:32px;">— The peptides.cx team</p>
  </body>
</html>`
  return { subject, html, text }
}
