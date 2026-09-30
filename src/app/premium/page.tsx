import type { Metadata } from "next"
import { Check, X } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { MedicalDisclaimer } from "@/components/compliance/disclaimers"

export const metadata: Metadata = {
  title: "Premium Membership",
  description:
    "Premium membership unlocks the research archive, watchlists, advanced search, and deal alerts. It does not include medical advice, dosing, or sourcing.",
}

const included = [
  "Research Digest archive",
  "Premium reports",
  "Saved peptide watchlist",
  "Early access to expert AMAs",
  "Advanced search",
  "Evidence score database",
  "Vendor comparison filters",
  "Deal alerts",
  "Side-effect tracking templates",
  "Private premium discussion rooms",
]

const notIncluded = [
  "Medical advice",
  "Individual dose calculation",
  "Direct sources outside verified vendor areas",
  "Closed sourcing / grey-market groups",
]

export default function PremiumPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Membership"
        title="Premium Membership"
        description="Support the platform and unlock deeper research tools. Premium is about knowledge and convenience — never medical guidance or sourcing."
      />
      <div className="container max-w-4xl space-y-6 py-10">
        <MedicalDisclaimer />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">What's included</h2>
            <ul className="mt-4 space-y-2">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-lg font-semibold">Explicitly not included</h2>
            <ul className="mt-4 space-y-2">
              {notIncluded.map((i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                  <X className="mt-0.5 h-4 w-4 flex-none text-red-500" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-secondary/30 p-6 text-center">
          <h2 className="text-xl font-semibold">Join the founding member waitlist</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-foreground/70">
            Founding members get a badge and a launch discount. Billing runs through a standard payment
            processor at launch.
          </p>
          <form className="mx-auto mt-5 flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="h-11 flex-1 rounded-md border border-input bg-background px-3 text-sm"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
