import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { MedicalDisclaimer } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Research Digest",
  description:
    "Editorial roundups of peptide studies, regulatory updates from the FDA, EMA and national authorities, clinical trials, evidence maps, and safety alerts.",
}

const digest = [
  {
    tag: "Evidence map",
    title: "Where the human evidence actually is: a class-by-class snapshot",
    summary:
      "A neutral map of which peptide classes have approved clinical use, which have limited human data, and which rest on animal or mechanistic work only.",
  },
  {
    tag: "Regulation · EU",
    title: "EMA and national notes: what 'research chemical' status means",
    summary:
      "Why unapproved status matters for safety, quality assurance, and the limits of what can be legally advertised to consumers.",
  },
  {
    tag: "Safety alert",
    title: "Regulator warnings on melanocortin agonists",
    summary:
      "A summary of public safety communications and what they imply for members reading experience reports.",
  },
  {
    tag: "Regulation · US",
    title: "FDA compounding and peptide policy: a plain-language overview",
    summary: "How approval, compounding, and research-use categories differ, and why the distinction matters.",
  },
]

export default function ResearchPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Editorial"
        title="Research Digest"
        description="Weekly-style roundups of studies, regulation, and safety — written to inform, not to sell. Sponsored explainers, when present, are clearly labeled."
      />
      <div className="container max-w-4xl space-y-6 py-10">
        <MedicalDisclaimer />
        <div className="grid gap-4 md:grid-cols-2">
          {digest.map((d) => (
            <article key={d.title} className="rounded-xl border border-border bg-card p-6">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{d.tag}</span>
              <h2 className="mt-2 text-lg font-semibold">{d.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{d.summary}</p>
            </article>
          ))}
        </div>
        <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-6 text-sm text-foreground/70">
          Digest sections include FDA updates, EMA / EU updates, national legal notes, clinical trial updates,
          peptide evidence maps, and safety alerts. Premium members get the full searchable archive.
        </div>
      </div>
    </div>
  )
}
