import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { MedicalDisclaimer, SafetyWarningBox } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Safety & Side Effects",
  description:
    "Safety-first guidance: what peptides.cx does and does not allow, adverse-reaction reporting, risk signals, and when to seek professional medical help.",
}

export default function SafetyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Safety first"
        title="Safety & Side Effects"
        description="peptides.cx is built safety-first. This page explains our boundaries, how to report adverse reactions, and when to seek professional help."
      />

      <div className="container max-w-3xl space-y-6 py-10">
        <SafetyWarningBox title="If this is a medical emergency" tone="danger">
          <p>
            If you or someone else has severe symptoms — trouble breathing, chest pain, severe allergic
            reaction, fainting, or any life-threatening sign — contact your local emergency number or seek
            urgent medical care now. This website cannot help in an emergency.
          </p>
        </SafetyWarningBox>

        <MedicalDisclaimer />

        <section>
          <h2 className="text-xl font-semibold">What we allow</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground/80">
            <li>Discussion of peptide research, studies, and mechanisms</li>
            <li>First-person experience reports, including personal dose context</li>
            <li>Side-effect and adverse-reaction reports</li>
            <li>Quality, purity, COA, and lab-testing discussion</li>
            <li>Regulatory and safety developments</li>
            <li>Vendor transparency and verified vendor discussion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">What we do not allow</h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-foreground/80">
            <li>Unverified sales between members, or source/supplier requests</li>
            <li>Hidden affiliate links, discount codes, or off-platform sourcing groups</li>
            <li>Cure claims, guarantees, or misleading health claims</li>
            <li>Individual medical advice or dose calculation for another person</li>
            <li>Step-by-step injection or reconstitution tutorials</li>
            <li>Anything targeting or advising minors</li>
            <li>Advertising prescription medicines to consumers where not legally permitted</li>
          </ul>
        </section>

        <SafetyWarningBox title="When to seek professional help">
          <p>
            Seek medical advice for persistent or worsening symptoms, signs of infection at an administration
            site (spreading redness, warmth, pus, fever), unexpected cardiovascular symptoms, or anything that
            worries you. A qualified clinician — not a forum — is the right place for individual decisions.
          </p>
        </SafetyWarningBox>

        <section className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">Report a side effect</h2>
          <p className="mt-2 text-sm text-foreground/70">
            Structured adverse-reaction reports help the community spot risk signals. In many countries you can
            also report suspected adverse effects to your national pharmacovigilance authority.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/forum/safety-side-effects"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Side Effects forum
            </Link>
            <Link
              href="/guidelines"
              className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Community Guidelines
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
