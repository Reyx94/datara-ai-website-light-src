import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { MedicalDisclaimer, SafetyWarningBox } from "@/components/compliance/disclaimers"
import { VerifiedBadge } from "@/components/compliance/ad-label"

export const metadata: Metadata = {
  title: "Experts",
  description:
    "A directory and community space for credential-verified physicians, pharmacists, researchers, and regulatory experts. Expert answers are general information, not individual treatment.",
}

const expertTypes = [
  "Physician",
  "Pharmacist",
  "Researcher",
  "Lab Scientist",
  "Regulatory Expert",
  "Legal Expert",
  "Clinic Representative",
]

const features = [
  "Credential-verified expert profiles",
  "Expert comments on threads",
  "AMA sessions",
  "Premium Q&A",
  "Paid expert webinars",
  "Article review",
]

export default function ExpertsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Community"
        title="Experts"
        description="Credential-verified professionals contribute general educational information. Expert input never replaces individual medical care."
      />
      <div className="container max-w-4xl space-y-6 py-10">
        <MedicalDisclaimer />
        <SafetyWarningBox title="How expert input works">
          <p>
            Expert answers are marked as general information and must not be used as individual medical
            treatment, diagnosis, or dosing guidance. Experts disclose any conflicts of interest and may not
            use the platform for product promotion beyond those disclosures.
          </p>
        </SafetyWarningBox>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/60">Expert types</h2>
          <div className="flex flex-wrap gap-2">
            {expertTypes.map((t) => (
              <span key={t} className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground/70">
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-3">
              <VerifiedBadge label="Verified" />
              <span className="text-sm font-medium">{f}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
