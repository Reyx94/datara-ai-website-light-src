import type { Metadata } from "next"
import Link from "next/link"
import { redirect } from "next/navigation"
import { PageHeader } from "@/components/site/page-header"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { getCurrentProfile } from "@/lib/supabase/server"
import { ROLE_LABELS, STAFF_ROLES, type UserRole } from "@/lib/supabase/types"
import { signOut } from "../(auth)/actions"

export const metadata: Metadata = {
  title: "Account",
  description: "Your peptides.cx account.",
  robots: { index: false, follow: true },
}

// Reads auth cookies at request time.
export const dynamic = "force-dynamic"

export default async function AccountPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div>
        <PageHeader eyebrow="Account" title="Account" />
        <div className="container max-w-2xl py-10">
          <p className="rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            Authentication is not configured yet. Set the Supabase environment variables to enable accounts.
          </p>
        </div>
      </div>
    )
  }

  const session = await getCurrentProfile()
  if (!session) redirect("/login")

  const role = (session.profile?.role ?? "registered") as UserRole
  const isStaff = STAFF_ROLES.includes(role)

  const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <div className="flex justify-between border-b border-border py-3 text-sm">
      <span className="text-foreground/60">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )

  return (
    <div>
      <PageHeader eyebrow="Account" title={session.profile?.username ?? "Your account"} />
      <div className="container max-w-2xl space-y-6 py-10">
        <div className="rounded-xl border border-border bg-card p-6">
          <Row label="Email" value={session.email ?? "—"} />
          <Row label="Username" value={session.profile?.username ?? "—"} />
          <Row label="Role" value={ROLE_LABELS[role]} />
          <Row label="Premium" value={session.profile?.premium_status ? "Active" : "—"} />
          <Row label="Trust level" value={session.profile?.trust_level ?? 0} />
        </div>

        <div className="flex flex-wrap gap-3">
          {isStaff && (
            <Link
              href="/admin"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Open admin area
            </Link>
          )}
          <form action={signOut}>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Sign out
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
