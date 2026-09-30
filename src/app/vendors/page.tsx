import type { Metadata } from "next"
import Link from "next/link"
import { vendors } from "@/lib/vendors"
import { PageHeader } from "@/components/site/page-header"
import { VendorDisclaimer } from "@/components/compliance/disclaimers"
import { VerifiedBadge } from "@/components/compliance/ad-label"

export const metadata: Metadata = {
  title: "Verified Vendors",
  description:
    "A reviewed, paid vendor directory. Verification checks identity and submitted documents — it is not a quality, safety, or legality guarantee.",
}

export default function VendorsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Commercial · Transparency"
        title="Verified Vendor Directory"
        description="Not a marketplace. Vendors join through a reviewed, paid verification program. The directory exists for transparency, not endorsement."
      />

      <div className="container space-y-6 py-10">
        <VendorDisclaimer />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-foreground/70">{vendors.length} verified listings (example data)</p>
          <Link
            href="/vendor-application"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Apply to become a vendor
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {vendors.map((v) => (
            <Link
              key={v.slug}
              href={`/vendors/${v.slug}`}
              className="card-hover flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold">{v.name}</h2>
                  <p className="text-xs uppercase tracking-wide text-foreground/50">
                    {v.plan} · {v.region}
                  </p>
                </div>
                <VerifiedBadge label={v.status} />
              </div>
              <p className="mt-3 flex-1 text-sm text-foreground/70">{v.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {v.coaAvailable && (
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-foreground/70">
                    COA available
                  </span>
                )}
                {v.labTested && (
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-foreground/70">
                    Third-party tested
                  </span>
                )}
                {v.categories.slice(0, 2).map((c) => (
                  <span key={c} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-foreground/70">
                    {c}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
