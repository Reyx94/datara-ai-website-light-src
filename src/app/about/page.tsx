import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { userRoles } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description:
    "peptides.cx is a structured community for peptide research, experience, safety, and vendor transparency — not a marketplace or a medical platform.",
}

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About"
        title="The Peptide Community Exchange"
        description="peptides.cx exists to make peptide information more honest and more structured — combining research, real-world reports, safety discussion, and vendor transparency in one responsible community."
      />
      <div className="container max-w-4xl space-y-8 py-10">
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">What we are</h2>
            <p className="mt-2 text-sm text-foreground/70">
              A structured community for recherche, experience reports, product transparency, vendor review,
              and responsible exchange. Modern, scientific, and controlled in tone.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">What we are not</h2>
            <p className="mt-2 text-sm text-foreground/70">
              We are not an uncontrolled marketplace and not a medical recommendation platform. No sourcing, no
              dose calculation, no cure claims, no individual treatment advice.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Member roles</h2>
          <p className="mt-1 text-sm text-foreground/70">
            Rights scale with trust. Commercial accounts are separated from ordinary members so advertising
            stays visible and consented.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="py-2 pr-4 font-semibold">Role</th>
                  <th className="py-2 font-semibold">Rights</th>
                </tr>
              </thead>
              <tbody>
                {userRoles.map((r) => (
                  <tr key={r.name} className="border-b border-border align-top">
                    <td className="py-3 pr-4 font-medium">{r.name}</td>
                    <td className="py-3 text-foreground/70">{r.rights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-secondary/30 p-6">
          <h2 className="text-xl font-semibold">Our commitments</h2>
          <ul className="mt-3 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
            <li>Clear advertising and affiliate labeling</li>
            <li>Consent-based tracking, easy to refuse</li>
            <li>Reviewed, paid vendor verification</li>
            <li>Human moderation with an appeals process</li>
            <li>Safety-first content boundaries</li>
            <li>No prescription-drug promotion to consumers</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/guidelines" className="font-medium text-primary hover:underline">
              Community Guidelines →
            </Link>
            <Link href="/affiliate-disclosure" className="font-medium text-primary hover:underline">
              Affiliate Disclosure →
            </Link>
            <Link href="/advertise" className="font-medium text-primary hover:underline">
              Advertise / Vendor plans →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
