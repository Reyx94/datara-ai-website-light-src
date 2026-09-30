import { cn } from "@/lib/utils"

export type AdLabelKind = "Ad" | "Sponsored" | "Affiliate Link" | "Paid Placement" | "Partner Offer"

const styles: Record<AdLabelKind, string> = {
  Ad: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
  Sponsored: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  "Affiliate Link": "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  "Paid Placement": "bg-purple-100 text-purple-800 dark:bg-purple-500/20 dark:text-purple-200",
  "Partner Offer": "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200",
}

export function AdLabel({ kind, className }: { kind: AdLabelKind; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide",
        styles[kind],
        className,
      )}
    >
      {kind}
    </span>
  )
}

export function VerifiedBadge({ label = "Verified", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
        className,
      )}
    >
      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </span>
  )
}
