import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { forumCategories } from "@/lib/site"
import { Breadcrumbs } from "@/components/site/page-header"
import {
  DosingContextNotice,
  AdministrationSafetyNotice,
  ExperienceReportDisclaimer,
  SafetyWarningBox,
} from "@/components/compliance/disclaimers"

export function generateStaticParams() {
  return forumCategories.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cat = forumCategories.find((c) => c.slug === slug)
  if (!cat) return { title: "Category not found" }
  return { title: `${cat.title} — Forum`, description: cat.description }
}

export default async function ForumCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = forumCategories.find((c) => c.slug === slug)
  if (!cat) notFound()

  return (
    <div className="pb-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Forum", href: "/forum" },
          { label: cat.title },
        ]}
      />

      <div className="container pt-4">
        <h1 className="text-3xl font-bold md:text-4xl">{cat.title}</h1>
        <p className="mt-3 max-w-3xl text-foreground/75">{cat.description}</p>

        {/* Category-specific compliance boxes */}
        <div className="mt-6 space-y-4">
          {cat.slug === "dosing-context" && <DosingContextNotice />}
          {cat.slug === "administration-safety" && <AdministrationSafetyNotice />}
          {cat.slug === "experience-reports" && <ExperienceReportDisclaimer />}
          {(cat.slug === "vendors" || cat.slug === "vendor-reviews") && cat.restricted && (
            <SafetyWarningBox title="Commercial area rules" tone="warning">
              <p>{cat.restricted}</p>
            </SafetyWarningBox>
          )}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {cat.subcategories.map((sub) => (
            <div
              key={sub}
              className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3"
            >
              <span className="font-medium">{sub}</span>
              <span className="text-xs text-foreground/40">Topic</span>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-border bg-secondary/30 p-6 text-sm text-foreground/70">
          <p>
            This is the category structure preview for the MVP. Threads, posting permissions by role, and the
            moderation queue are wired to the community backend at launch. New members start with limited
            posting rights and light pre-moderation.
          </p>
          {cat.slug === "experience-reports" && (
            <Link
              href="/new-experience-report"
              className="mt-4 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Start a structured experience report
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
