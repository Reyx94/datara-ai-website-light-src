import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { VendorDisclaimer } from "@/components/compliance/disclaimers"
import { VendorApplicationForm } from "./vendor-application-form"

export const metadata: Metadata = {
  title: "Vendor Application",
  description:
    "Apply to the peptides.cx Verified Vendor Program. Verification reviews identity and submitted business documents — it is not a product endorsement.",
}

const statuses = [
  "Applied",
  "Under Review",
  "Verified",
  "Verified Pro",
  "Sponsor",
  "Needs Update",
  "Suspended",
  "Rejected",
  "Removed",
]

export default function VendorApplicationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Commercial"
        title="Become a Verified Vendor"
        description="Vendors participate only through a reviewed, paid program. Submit your business details below; an admin reviews every application before it goes live."
      />
      <div className="container max-w-3xl space-y-6 py-10">
        <VendorDisclaimer />

        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Application status flow</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {statuses.map((s) => (
              <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/70">
                {s}
              </span>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/60">
            See plans and pricing on the <Link href="/advertise" className="text-primary underline">Advertise</Link> page.
          </p>
        </div>

        <VendorApplicationForm />
      </div>
    </div>
  )
}
