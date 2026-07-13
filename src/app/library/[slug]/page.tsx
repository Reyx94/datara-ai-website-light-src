import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPeptide, peptides } from "@/lib/peptides"
import { Breadcrumbs } from "@/components/site/page-header"
import { EvidenceBadge, RiskFlagBadge, CommercialRestrictedBadge } from "@/components/compliance/evidence-badge"
import {
  MedicalDisclaimer,
  SafetyWarningBox,
} from "@/components/compliance/disclaimers"
import { ReportButton } from "@/components/compliance/report-button"

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const peptide = getPeptide(slug)
  if (!peptide) return { title: "Peptide not found" }
  return {
    title: `${peptide.name} — Library`,
    description: peptide.summary,
  }
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border py-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-foreground/80">{children}</div>
    </section>
  )
}

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const peptide = getPeptide(slug)
  if (!peptide) notFound()

  return (
    <div className="pb-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Library", href: "/library" },
          { label: peptide.name },
        ]}
      />

      <div className="container pt-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">{peptide.name}</h1>
            <p className="mt-1 text-sm text-foreground/60">
              {peptide.category}
              {peptide.aliases.length > 0 && <> · Also known as: {peptide.aliases.join(", ")}</>}
            </p>
          </div>
          <ReportButton label="Report page" contentType="page" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <EvidenceBadge score={peptide.evidenceScore} />
          {peptide.riskFlag && <RiskFlagBadge />}
          {peptide.commercialRestriction === "restricted" && <CommercialRestrictedBadge />}
        </div>

        <div className="mt-6">
          <MedicalDisclaimer />
        </div>

        {peptide.riskFlag && (
          <SafetyWarningBox title="Regulatory / safety concern" tone="danger" className="mt-4">
            <p>
              This peptide carries a risk flag. It may be unapproved for human use, affect the hormonal system,
              or be subject to regulator warnings. See the safety and regulatory sections below and consult a
              qualified professional.
            </p>
          </SafetyWarningBox>
        )}

        <div className="mt-6 rounded-xl border border-border bg-secondary/30 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/60">Overview</h2>
          <p className="mt-2 text-foreground/80">{peptide.summary}</p>
        </div>

        <Section title="What is it?">
          <p>{peptide.whatIsIt}</p>
        </Section>

        <Section title="Proposed mechanisms">
          <ul className="list-disc space-y-1 pl-5">
            {peptide.mechanisms.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Section>

        <Section title="Human evidence">
          <p>{peptide.humanEvidence}</p>
        </Section>

        <Section title="Animal & preclinical evidence">
          <p>{peptide.animalEvidence}</p>
        </Section>

        <Section title="Safety concerns & known side effects">
          <p>{peptide.safetySummary}</p>
          {peptide.knownSideEffects.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {peptide.knownSideEffects.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          )}
        </Section>

        <Section title="Regulatory status">
          <p>{peptide.regulatoryStatus}</p>
        </Section>

        <Section title="Common discussion areas">
          <div className="flex flex-wrap gap-2">
            {peptide.commonDiscussion.map((d) => (
              <span key={d} className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground/70">
                {d}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Related on peptides.cx">
          <div className="flex flex-wrap gap-3">
            <Link href="/forum/peptide-library" className="text-sm font-medium text-primary hover:underline">
              Forum discussion →
            </Link>
            <Link href="/experience-reports" className="text-sm font-medium text-primary hover:underline">
              Experience reports →
            </Link>
            <Link href="/safety" className="text-sm font-medium text-primary hover:underline">
              Safety & side effects →
            </Link>
            {peptide.commercialRestriction === "open" ? (
              <Link href="/vendors" className="text-sm font-medium text-primary hover:underline">
                Related verified vendors →
              </Link>
            ) : (
              <span className="text-sm text-foreground/50">
                Vendor and affiliate promotion is restricted for this entry.
              </span>
            )}
          </div>
        </Section>

        <Section title="Sources & review">
          <p className="text-sm text-foreground/70">
            Sources are curated from public literature and regulatory notices. This page is a neutral summary,
            not a systematic review.
          </p>
          <p className="mt-2 text-sm text-foreground/60">
            Last reviewed: {peptide.lastReviewed} · {peptide.reviewedBy}
          </p>
        </Section>
      </div>
    </div>
  )
}
