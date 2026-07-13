import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getVendor, vendors } from "@/lib/vendors"
import { Breadcrumbs } from "@/components/site/page-header"
import { VendorDisclaimer, AffiliateDisclosure } from "@/components/compliance/disclaimers"
import { VerifiedBadge, AdLabel } from "@/components/compliance/ad-label"
import { ReportButton } from "@/components/compliance/report-button"

export function generateStaticParams() {
  return vendors.map((v) => ({ slug: v.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const v = getVendor(slug)
  if (!v) return { title: "Vendor not found" }
  return { title: `${v.name} — Verified Vendor`, description: v.summary }
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-0.5 border-b border-border py-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-sm text-foreground/60">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}

export default async function VendorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const v = getVendor(slug)
  if (!v) notFound()

  return (
    <div className="pb-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendors", href: "/vendors" },
          { label: v.name },
        ]}
      />

      <div className="container max-w-3xl pt-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">{v.name}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <VerifiedBadge label={v.status} />
              <span className="text-sm text-foreground/60">{v.plan}</span>
              {v.affiliateEnabled && <AdLabel kind="Affiliate Link" />}
            </div>
          </div>
          <ReportButton label="Report vendor" contentType="vendor" />
        </div>

        <p className="mt-4 text-foreground/80">{v.summary}</p>

        <div className="mt-6 space-y-4">
          <VendorDisclaimer />
          {v.affiliateEnabled && <AffiliateDisclosure />}
        </div>

        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-foreground/60">
            Verification details
          </h2>
          <Row label="Region" value={v.region} />
          <Row label="Ships to" value={v.shipsTo} />
          <Row label="Product categories" value={v.categories.join(", ")} />
          <Row
            label="Website"
            value={
              <a
                href={v.website}
                target="_blank"
                rel="nofollow noopener sponsored"
                className="text-primary hover:underline"
              >
                {v.website.replace(/^https?:\/\//, "")}
              </a>
            }
          />
          <Row label="COA section" value={v.coaAvailable ? "Available" : "Not provided"} />
          <Row label="Third-party lab testing" value={v.labTested ? "Provided" : "Not provided"} />
          <Row label="Verification date" value={v.verificationDate} />
          <Row label="Last review date" value={v.lastReviewDate} />
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Public Q&amp;A</h3>
            <p className="mt-1 text-sm text-foreground/70">
              Members can ask questions about quality, testing, shipping, and support. Medical-outcome claims
              are not permitted.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="font-semibold">Complaints</h3>
            <p className="mt-1 text-sm text-foreground/70">
              Complaints are moderated. Evidence is submitted privately to moderators; unproven fraud
              accusations are not published.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
