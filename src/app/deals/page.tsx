import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { AffiliateDisclosure, SafetyWarningBox } from "@/components/compliance/disclaimers"
import { AdLabel, VerifiedBadge, type AdLabelKind } from "@/components/compliance/ad-label"
import { ReportButton } from "@/components/compliance/report-button"

export const metadata: Metadata = {
  // Deals is a commercial page; keep it out of the primary editorial index.
  robots: { index: false, follow: true },
  title: "Deals & Discounts",
  description:
    "Clearly labeled commercial offers from verified partners. Prescription medicines and products with health claims are not promoted.",
}

type ProductClass = "Green" | "Amber"

interface Deal {
  vendor: string
  title: string
  category: string
  region: string
  code: string
  expiry: string
  productClass: ProductClass
  label: AdLabelKind
  cta: string
  href: string
}

const deals: Deal[] = [
  {
    vendor: "Peptide Education Co.",
    title: "20% off the Peptide Research Fundamentals course",
    category: "Books & Education",
    region: "Worldwide (digital)",
    code: "LEARN20",
    expiry: "2026-09-30",
    productClass: "Green",
    label: "Affiliate Link",
    cta: "Get Discount",
    href: "https://example.net",
  },
  {
    vendor: "Example Analytical Labs",
    title: "Purity & identity testing — €15 off first order",
    category: "Lab Testing",
    region: "EU / UK",
    code: "TEST15",
    expiry: "2026-08-31",
    productClass: "Green",
    label: "Sponsored",
    cta: "Visit Partner",
    href: "https://example.com",
  },
  {
    vendor: "Sample Research Supply",
    title: "Cosmetic peptide range — review after manual approval",
    category: "Cosmetic Peptides",
    region: "EU",
    code: "—",
    expiry: "2026-08-15",
    productClass: "Amber",
    label: "Partner Offer",
    cta: "Read Safety Notice",
    href: "/vendors/sample-research-supply",
  },
]

const filters = [
  "Vendor Type",
  "Region",
  "Product Category",
  "Verification Level",
  "Affiliate",
  "Sponsored",
  "Lab Tested",
  "New Deals",
  "Expiring Soon",
]

export default function DealsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Commercial · Advertising"
        title="Deals & Discounts"
        description="This is an advertising area. Every card is a paid placement or affiliate link and is labeled as such. Prescription medicines and products making health claims are blocked here."
      />

      <div className="container space-y-6 py-10">
        <AffiliateDisclosure />

        <SafetyWarningBox title="What you will not find here">
          <p>
            No prescription-only medicines advertised to consumers, no products with cure or treatment claims,
            no unverified vendors, and no “Buy Now” pressure. CTAs stay informational.
          </p>
        </SafetyWarningBox>

        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <span
              key={f}
              className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/70"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deals.map((d) => {
            const internal = d.href.startsWith("/")
            return (
              <div key={d.title} className="flex flex-col rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between gap-2">
                  <AdLabel kind={d.label} />
                  <VerifiedBadge />
                </div>
                <h2 className="mt-3 font-semibold leading-snug">{d.title}</h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
                  {d.vendor} · {d.category}
                </p>
                <dl className="mt-3 space-y-1 text-sm text-foreground/70">
                  <div className="flex justify-between">
                    <dt>Region</dt>
                    <dd>{d.region}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Code</dt>
                    <dd className="font-mono">{d.code}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Expires</dt>
                    <dd>{d.expiry}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Product class</dt>
                    <dd>{d.productClass}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-[11px] text-foreground/50">
                  Affiliate / paid placement · not a medical endorsement.
                </p>
                <div className="mt-4 flex items-center justify-between gap-2">
                  {internal ? (
                    <Link
                      href={d.href}
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      {d.cta}
                    </Link>
                  ) : (
                    <a
                      href={d.href}
                      target="_blank"
                      rel="nofollow noopener sponsored"
                      className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                    >
                      {d.cta}
                    </a>
                  )}
                  <ReportButton label="Report deal" contentType="deal" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
