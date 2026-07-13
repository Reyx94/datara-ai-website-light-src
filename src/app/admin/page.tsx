import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { PageHeader } from "@/components/site/page-header"
import { isSupabaseConfigured } from "@/lib/supabase/config"
import { createClient, getCurrentProfile } from "@/lib/supabase/server"
import { ALL_ROLES, ROLE_LABELS, STAFF_ROLES, type Profile, type UserRole } from "@/lib/supabase/types"
import { updateUserRole } from "./actions"

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin and moderation area.",
  robots: { index: false, follow: false },
}

// Reads auth cookies and live member data at request time.
export const dynamic = "force-dynamic"

export default async function AdminPage() {
  if (!isSupabaseConfigured()) {
    return (
      <div>
        <PageHeader eyebrow="Admin" title="Admin area" />
        <div className="container max-w-2xl py-10">
          <p className="rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            Authentication is not configured yet.
          </p>
        </div>
      </div>
    )
  }

  const session = await getCurrentProfile()
  if (!session) redirect("/login")
  const myRole = (session.profile?.role ?? "registered") as UserRole
  if (!STAFF_ROLES.includes(myRole)) redirect("/account")

  const isAdmin = myRole === "admin"

  const supabase = await createClient()
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200)
  const profiles = (data as Profile[] | null) ?? []

  return (
    <div>
      <PageHeader
        eyebrow="Admin"
        title="Admin & moderation"
        description={`Signed in as ${ROLE_LABELS[myRole]}. ${
          isAdmin ? "You can change member roles." : "Moderators can review, but only admins change roles."
        }`}
      />
      <div className="container py-10">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-secondary/50 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Username</th>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Trust</th>
                <th className="px-4 py-3 font-semibold">Joined</th>
                {isAdmin && <th className="px-4 py-3 font-semibold">Change role</th>}
              </tr>
            </thead>
            <tbody>
              {profiles.map((p) => (
                <tr key={p.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{p.username ?? "—"}</td>
                  <td className="px-4 py-3">{ROLE_LABELS[p.role]}</td>
                  <td className="px-4 py-3">{p.trust_level}</td>
                  <td className="px-4 py-3 text-foreground/60">
                    {new Date(p.created_at).toLocaleDateString()}
                  </td>
                  {isAdmin && (
                    <td className="px-4 py-3">
                      <form action={updateUserRole} className="flex items-center gap-2">
                        <input type="hidden" name="userId" value={p.id} />
                        <select
                          name="role"
                          defaultValue={p.role}
                          className="rounded-md border border-input bg-background px-2 py-1 text-xs"
                        >
                          {ALL_ROLES.map((r) => (
                            <option key={r} value={r}>
                              {ROLE_LABELS[r]}
                            </option>
                          ))}
                        </select>
                        <button
                          type="submit"
                          className="rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                        >
                          Save
                        </button>
                      </form>
                    </td>
                  )}
                </tr>
              ))}
              {profiles.length === 0 && (
                <tr>
                  <td colSpan={isAdmin ? 5 : 4} className="px-4 py-8 text-center text-foreground/60">
                    No members yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-foreground/60">
          Role changes are also enforced at the database level: Row Level Security restricts writes, and a
          guard trigger rejects role escalation by non-admins even if the UI is bypassed.
        </p>
      </div>
    </div>
  )
}
