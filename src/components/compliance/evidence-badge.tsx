import { EVIDENCE_SCORE_META, type EvidenceScore } from "@/lib/peptides"
import { cn } from "@/lib/utils"

const toneClasses: Record<"high" | "mid" | "low", string> = {
  high: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  mid: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  low: "bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200",
}

export function EvidenceBadge({ score, className }: { score: EvidenceScore; className?: string }) {
  const meta = EVIDENCE_SCORE_META[score]
  return (
    <span
      title={meta.description}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        toneClasses[meta.tone],
        className,
      )}
    >
      Evidence {meta.label}
    </span>
  )
}

export function RiskFlagBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-800 dark:bg-red-500/20 dark:text-red-200",
        className,
      )}
    >
      Risk flag
    </span>
  )
}

export function CommercialRestrictedBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200",
        className,
      )}
    >
      Commercial restricted
    </span>
  )
}
