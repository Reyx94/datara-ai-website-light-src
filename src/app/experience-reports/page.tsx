import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { ExperienceReportDisclaimer, MedicalDisclaimer } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Experience Reports",
  description:
    "Structured, first-person peptide experience reports. Dose and administration context appears as personal history only — never as a recommendation.",
}

const categories = [
  "Injury & Recovery",
  "Skin & Hair",
  "Gut & Inflammation",
  "Sleep & Mood",
  "Cognitive",
  "Longevity",
  "Metabolic",
  "Side Effect Reports",
  "No Effect / Negative Reports",
  "Doctor-Supervised Reports",
]

export default function ExperienceReportsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Community"
        title="Experience Reports"
        description="Real, structured, first-person reports. Reports are created through a guided form rather than a blank text box, so every report captures context consistently."
      />

      <div className="container space-y-6 py-10">
        <ExperienceReportDisclaimer />
        <MedicalDisclaimer />

        <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-6">
          <div>
            <h2 className="text-lg font-semibold">Share your experience</h2>
            <p className="mt-1 text-sm text-foreground/70">
              Uses a structured form. You confirm it is a personal anecdote, not medical advice.
            </p>
          </div>
          <Link
            href="/new-experience-report"
            className="inline-flex flex-none items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            New report
          </Link>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/60">
            Browse by category
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <div key={c} className="rounded-lg border border-border bg-card px-4 py-3">
                <span className="font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
