import { AlertTriangle, Info, ShieldAlert, Stethoscope } from "lucide-react"
import { cn } from "@/lib/utils"

export function MedicalDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-border bg-secondary/50 p-4 text-sm text-foreground/80",
        className,
      )}
    >
      <Stethoscope className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
      <p>
        <strong className="text-foreground">Not medical advice.</strong> Content on peptides.cx is an
        educational and community resource. It is not medical advice, diagnosis, treatment, prescribing
        guidance, dosing instruction, or emergency support. Always consult a qualified medical professional
        before making health-related decisions.
      </p>
    </div>
  )
}

export function AffiliateDisclosure({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-amber-300/60 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
        className,
      )}
    >
      <Info className="mt-0.5 h-5 w-5 flex-none" aria-hidden />
      <p>
        <strong>Disclosure:</strong> This page may contain affiliate links and paid placements. If you click
        or purchase through them, peptides.cx may earn a commission. Sponsored listings and affiliate
        relationships are clearly marked and do not influence our editorial standards, moderation rules, or
        safety policies. Affiliate placement is not a medical endorsement.
      </p>
    </div>
  )
}

export function VendorDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-border bg-secondary/50 p-4 text-sm text-foreground/80",
        className,
      )}
    >
      <ShieldAlert className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
      <p>
        <strong className="text-foreground">About verification.</strong> Verified Vendor status means the
        vendor submitted business information for review and participates in a paid commercial program. It
        does not mean peptides.cx endorses, guarantees, medically recommends, or verifies the safety,
        legality, or effectiveness of any product.
      </p>
    </div>
  )
}

export function ExperienceReportDisclaimer({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border border-border bg-secondary/50 p-4 text-sm text-foreground/80",
        className,
      )}
    >
      <Info className="mt-0.5 h-5 w-5 flex-none text-primary" aria-hidden />
      <p>
        <strong className="text-foreground">Personal anecdote.</strong> Experience reports may include dose or
        administration context for transparency, but they are not protocols, recommendations, or medical
        advice.
      </p>
    </div>
  )
}

type WarningTone = "warning" | "danger"

export function SafetyWarningBox({
  title,
  children,
  tone = "warning",
  className,
}: {
  title: string
  children: React.ReactNode
  tone?: WarningTone
  className?: string
}) {
  const tones: Record<WarningTone, string> = {
    warning:
      "border-amber-300/60 bg-amber-50 text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200",
    danger:
      "border-red-300/60 bg-red-50 text-red-900 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200",
  }
  return (
    <div className={cn("rounded-lg border p-4 text-sm", tones[tone], className)}>
      <div className="flex items-center gap-2 font-semibold">
        <AlertTriangle className="h-4 w-4 flex-none" aria-hidden />
        {title}
      </div>
      <div className="mt-2 space-y-2 leading-relaxed">{children}</div>
    </div>
  )
}

export function DosingContextNotice({ className }: { className?: string }) {
  return (
    <SafetyWarningBox title="Dose context only" tone="warning" className={className}>
      <p>
        This area is for dose context found in studies, prescriptions, and personal reports. It is not for
        personalized dosing advice, dose calculation, protocol creation, or medical instructions. Do not ask
        other members what you should take.
      </p>
    </SafetyWarningBox>
  )
}

export function AdministrationSafetyNotice({ className }: { className?: string }) {
  return (
    <SafetyWarningBox title="Administration safety" tone="warning" className={className}>
      <p>
        This category is for safety experiences and adverse-reaction discussion. Step-by-step injection
        tutorials, reconstitution guides, and procedural instructions are not allowed.
      </p>
    </SafetyWarningBox>
  )
}
