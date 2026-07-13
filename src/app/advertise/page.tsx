import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { AffiliateDisclosure, SafetyWarningBox } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Advertise & Vendor Plans",
  description:
    "Verified vendor plans, sponsorship formats, and the product-class rules that decide what may be advertised on peptides.cx.",
}

const plans = [
  {
    name: "Basic Verified Vendor",
    price: "€199–299 / mo",
    features: [
      "Vendor profile + verified badge",
      "Company description, website, region",
      "COA uploads and support contact",
      "Disclosure box",
      "Limited deals",
    ],
  },
  {
    name: "Pro Vendor",
    price: "€499–799 / mo",
    features: [
      "Everything in Basic",
      "Featured placement in directory",
      "Vendor Q&A write access",
      "More product categories",
      "Deal submissions + optional newsletter slot",
    ],
    featured: true,
  },
  {
    name: "Sponsor Vendor",
    price: "€999–2,500 / mo",
    features: [
      "Everything in Pro",
      "Banner ads + sponsored newsletter",
      "Sponsored research explainer (clearly labeled)",
      "Featured vendor card",
      "AMA on quality, testing, supply chain, safety only",
    ],
  },
  {
    name: "Enterprise / Lab Partner",
    price: "Custom",
    features: [
      "Labs, diagnostics, analysis providers",
      "Conferences, software, medical platforms",
      "Legal health providers",
      "Tailored placement",
    ],
  },
]

const productClasses = [
  {
    tone: "green",
    title: "Green — advertising generally possible",
    items: "Books, courses, wearables, legal lab testing, analysis services, legal cosmetics and supplements (no drug claims), conferences, software, tracking apps.",
  },
  {
    tone: "amber",
    title: "Amber — only after manual review",
    items: "Research-only products, cosmetic peptide products, non-prescription products with a health angle, lab diagnostics, clinics, compounding-adjacent and internationally shipping vendors.",
  },
  {
    tone: "red",
    title: "Red — no affiliate advertising or public deals",
    items: "Prescription medicines to consumers, unapproved drugs with human-use claims, cure claims, illegal substances, products for minors, unclear provenance, fake COAs, vendors without verifiable company data, or Telegram/WhatsApp sellers.",
  },
]

const toneStyles: Record<string, string> = {
  green: "border-emerald-300/60 bg-emerald-50 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200",
  amber: "border-amber-300/60 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
  red: "border-red-300/60 bg-red-50 text-red-900 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",
}

export default function AdvertisePage() {
  return (
    <div>
      <PageHeader
        eyebrow="Commercial"
        title="Advertise & Vendor Plans"
        description="Reach a focused, safety-minded audience through transparent, clearly labeled placements. Every commercial relationship is reviewed and disclosed."
      />
      <div className="container space-y-8 py-10">
        <AffiliateDisclosure />

        <section>
          <h2 className="text-xl font-semibold">Vendor plans</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-xl border bg-card p-5 ${
                  p.featured ? "border-primary shadow-md" : "border-border"
                }`}
              >
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{p.price}</p>
                <ul className="mt-4 flex-1 space-y-1.5 text-sm text-foreground/70">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <Link
                  href="/vendor-application"
                  className="mt-4 inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/50">Prices are indicative and set at launch.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Product & advertising classes</h2>
          <p className="mt-1 text-sm text-foreground/70">
            Every advertised product is assigned a class that decides whether and how it may be promoted.
          </p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {productClasses.map((c) => (
              <div key={c.title} className={`rounded-xl border p-5 text-sm ${toneStyles[c.tone]}`}>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 leading-relaxed">{c.items}</p>
              </div>
            ))}
          </div>
        </section>

        <SafetyWarningBox title="Advertising is blocked in sensitive areas">
          <p>
            No ads are shown in side-effect reports, emergency warning threads, minor-related discussions, acute
            medical problems, severe adverse-reaction posts, mental-health crisis posts, vendor complaints, or
            moderation notices.
          </p>
        </SafetyWarningBox>
      </div>
    </div>
  )
}
