import type { Metadata } from "next"
import Link from "next/link"
import { Lock } from "lucide-react"
import { forumCategories } from "@/lib/site"
import { PageHeader } from "@/components/site/page-header"

export const metadata: Metadata = {
  title: "Community Forum",
  description:
    "Structured forum categories for peptide research, experience reports, dosing context, administration safety, side effects, and verified vendor discussion.",
}

export default function ForumPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Community"
        title="Community Forum"
        description="A structured forum, not an open marketplace. Categories are organized so honest discussion stays separate from commercial areas — and so unverified sales, hidden ads, and medical misinformation stay out."
      />

      <div className="container py-10">
        <div className="mb-6 flex flex-wrap gap-3 text-sm">
          <Link href="/guidelines" className="font-medium text-primary hover:underline">
            Community Guidelines →
          </Link>
          <Link href="/safety" className="font-medium text-primary hover:underline">
            Safety Notice →
          </Link>
        </div>

        <div className="grid gap-4">
          {forumCategories.map((cat) => (
            <div key={cat.slug} className="rounded-xl border border-border bg-card p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold">
                    <Link href={`/forum/${cat.slug}`} className="hover:text-primary">
                      {cat.title}
                    </Link>
                  </h2>
                  <p className="mt-1 max-w-3xl text-sm text-foreground/70">{cat.description}</p>
                </div>
                <span className="font-mono text-xs text-foreground/40">/forum/{cat.slug}</span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cat.subcategories.map((sub) => (
                  <span key={sub} className="rounded-full bg-secondary px-3 py-1 text-xs text-foreground/70">
                    {sub}
                  </span>
                ))}
              </div>

              {cat.restricted && (
                <p className="mt-4 flex items-start gap-2 rounded-md bg-amber-50 p-3 text-xs text-amber-900 dark:bg-amber-500/10 dark:text-amber-200">
                  <Lock className="mt-0.5 h-3.5 w-3.5 flex-none" />
                  {cat.restricted}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
