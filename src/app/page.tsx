import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  MessageSquare,
  ShieldCheck,
  Store,
  Newspaper,
  Star,
} from "lucide-react"
import { peptides } from "@/lib/peptides"
import { EvidenceBadge, RiskFlagBadge } from "@/components/compliance/evidence-badge"
import { AdLabel, VerifiedBadge } from "@/components/compliance/ad-label"

export default function Home() {
  const libraryHighlights = peptides.slice(0, 6)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-grid-pattern">
        <div className="container relative z-10 py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-foreground/70">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              Educational community · Not medical advice
            </span>
            <h1 className="text-4xl font-bold md:text-6xl">
              The <span className="gradient-text">Peptide Community</span> Exchange
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/75 md:text-xl">
              Research, real-world reports, safety discussion, and verified vendor transparency — all in one
              structured community.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/premium"
                className="btn-hover-effect inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground shadow hover:bg-primary/90"
              >
                Join the Community
              </Link>
              <Link
                href="/library"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Browse Peptide Library
              </Link>
              <Link
                href="/vendors"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Explore Verified Vendors
              </Link>
              <Link
                href="/safety"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-6 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Read Safety Guidelines
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust notice */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container py-4">
          <p className="text-center text-sm text-foreground/70">
            peptides.cx is an educational and community platform. Content is not medical advice. Vendor
            listings and affiliate links may be paid placements and do not equal medical endorsement.
          </p>
        </div>
      </section>

      {/* What you'll find */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="text-center text-3xl font-bold md:text-4xl">A structured place for peptide research</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-foreground/70">
            Open enough for honest experience, controlled enough to keep out unverified sales, hidden ads, and
            medical misinformation.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: MessageSquare,
                title: "Community Forum",
                desc: "Structured categories from basics to research, safety, and vendor discussion.",
                href: "/forum",
              },
              {
                icon: BookOpen,
                title: "Peptide Library",
                desc: "Evidence-scored reference pages with sources, safety, and regulatory status.",
                href: "/library",
              },
              {
                icon: FlaskConical,
                title: "Experience Reports",
                desc: "First-person, structured reports — personal history, never a recommendation.",
                href: "/experience-reports",
              },
              {
                icon: ShieldCheck,
                title: "Safety & Side Effects",
                desc: "Adverse-reaction reports, risk signals, and when to seek professional help.",
                href: "/safety",
              },
              {
                icon: Store,
                title: "Verified Vendors",
                desc: "A reviewed, paid vendor program with clear disclosures — not a marketplace.",
                href: "/vendors",
              },
              {
                icon: Newspaper,
                title: "Research Digest",
                desc: "Editorial roundups of studies, regulation, and evidence maps.",
                href: "/research",
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="card-hover group rounded-xl border border-border bg-card p-6"
              >
                <f.icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{f.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Library highlights */}
      <section className="border-y border-border bg-secondary/30 py-16 md:py-20">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Peptide Library highlights</h2>
              <p className="mt-2 text-foreground/70">Every entry carries an evidence score and safety context.</p>
            </div>
            <Link href="/library" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
              View all peptides →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {libraryHighlights.map((p) => (
              <Link
                key={p.slug}
                href={`/library/${p.slug}`}
                className="card-hover rounded-xl border border-border bg-card p-5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.riskFlag && <RiskFlagBadge />}
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">{p.category}</p>
                <p className="mt-3 line-clamp-3 text-sm text-foreground/70">{p.summary}</p>
                <div className="mt-4">
                  <EvidenceBadge score={p.evidenceScore} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Verified vendors + deals teaser */}
      <section className="py-16 md:py-20">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center gap-2">
              <Store className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Verified Vendor transparency</h2>
            </div>
            <p className="mt-3 text-foreground/70">
              Vendors join only through a reviewed, paid verification program. Verification checks identity and
              submitted documents — it is not a quality, safety, or legality guarantee.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <VerifiedBadge />
              <VerifiedBadge label="Pro" />
              <VerifiedBadge label="Sponsor" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/vendors" className="text-sm font-medium text-primary hover:underline">
                Browse vendors →
              </Link>
              <Link href="/vendor-application" className="text-sm font-medium text-primary hover:underline">
                Apply as a vendor →
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Deals</h2>
              </div>
              <AdLabel kind="Sponsored" />
            </div>
            <p className="mt-3 text-foreground/70">
              Commercial offers from verified partners, always labeled as advertising. Prescription medicines
              and products with health claims are never promoted here.
            </p>
            <Link
              href="/deals"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
            >
              See current deals <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-border bg-secondary/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-8 text-center">
            <h2 className="text-2xl font-bold">Get the Research Digest</h2>
            <p className="mt-2 text-foreground/70">
              A weekly roundup of peptide studies, regulation updates, and safety alerts. No hype, no sourcing.
            </p>
            <form className="mx-auto mt-6 flex max-w-md flex-col gap-2 sm:flex-row">
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
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-foreground/60">
              Newsletters may contain clearly marked sponsored slots.{" "}
              <Link href="/affiliate-disclosure" className="underline">
                Affiliate disclosure
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
