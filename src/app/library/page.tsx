import type { Metadata } from "next"
import Link from "next/link"
import { peptides, EVIDENCE_SCORE_META } from "@/lib/peptides"
import { PageHeader } from "@/components/site/page-header"
import { EvidenceBadge, RiskFlagBadge, CommercialRestrictedBadge } from "@/components/compliance/evidence-badge"
import { MedicalDisclaimer } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Peptide Library",
  description:
    "Evidence-scored reference pages for individual peptides, with mechanisms, human and animal evidence, safety, and regulatory status. Educational only — not medical advice.",
}

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Peptide Library",
  description:
    "Evidence-scored reference pages for individual peptides on peptides.cx.",
  itemListElement: peptides.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: p.name,
    url: `https://peptides.cx/library/${p.slug}`,
  })),
}

export default function LibraryPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <PageHeader
        eyebrow="Knowledge"
        title="Peptide Library"
        description="Neutral, evidence-scored reference pages. Each entry summarizes what is known, what is not, and the regulatory and safety context. Educational only — not medical advice, dosing, or sourcing."
      />

      <div className="container py-10 space-y-8">
        <MedicalDisclaimer />

        {/* Evidence scale legend */}
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Evidence scale</h2>
          <dl className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(EVIDENCE_SCORE_META) as (keyof typeof EVIDENCE_SCORE_META)[]).map((k) => (
              <div key={k} className="text-sm">
                <dt className="font-semibold">{EVIDENCE_SCORE_META[k].label}</dt>
                <dd className="text-foreground/70">{EVIDENCE_SCORE_META[k].description}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-foreground/60">
            A <strong>Risk flag</strong> marks regulatory or safety concerns. <strong>Commercial restricted</strong>{" "}
            entries may not carry direct affiliate promotion.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {peptides.map((p) => (
            <Link
              key={p.slug}
              href={`/library/${p.slug}`}
              className="card-hover flex flex-col rounded-xl border border-border bg-card p-5"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>
              </div>
              <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">{p.category}</p>
              <p className="mt-3 flex-1 text-sm text-foreground/70">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <EvidenceBadge score={p.evidenceScore} />
                {p.riskFlag && <RiskFlagBadge />}
                {p.commercialRestriction === "restricted" && <CommercialRestrictedBadge />}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
