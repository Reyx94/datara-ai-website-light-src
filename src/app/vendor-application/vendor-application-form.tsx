"use client"

import { useState } from "react"

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      {hint && <span className="block text-xs text-foreground/60">{hint}</span>}
      {children}
    </label>
  )
}

const confirmations = [
  "We do not target or advertise to minors.",
  "We do not make medical or cure claims about our products.",
  "We accept the Vendor Policy, Advertising Policy, and Review Policy.",
  "Submitted documents are accurate and current.",
]

export function VendorApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [checked, setChecked] = useState<boolean[]>(confirmations.map(() => false))

  const allChecked = checked.every(Boolean)

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-300/60 bg-emerald-50 p-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
        <h2 className="text-lg font-semibold">Application received</h2>
        <p className="mt-2 text-sm">
          Your application status is now <strong>Applied</strong>. An admin will move it to Under Review and
          contact you about verification documents. Verification checks identity and submitted documents only —
          it is not a product endorsement.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="space-y-5 rounded-xl border border-border bg-card p-6"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name">
          <input required className={fieldClass} />
        </Field>
        <Field label="Legal entity / Rechtsform">
          <input className={fieldClass} placeholder="e.g. GmbH, Ltd, LLC" />
        </Field>
        <Field label="Business address">
          <input className={fieldClass} />
        </Field>
        <Field label="Country">
          <input required className={fieldClass} />
        </Field>
        <Field label="Registration / register extract" hint="Company register number or equivalent proof">
          <input className={fieldClass} />
        </Field>
        <Field label="VAT / Tax ID (if any)">
          <input className={fieldClass} />
        </Field>
        <Field label="Responsible contact person">
          <input required className={fieldClass} />
        </Field>
        <Field label="Contact email">
          <input required type="email" className={fieldClass} />
        </Field>
        <Field label="Website">
          <input required type="url" className={fieldClass} placeholder="https://" />
        </Field>
        <Field label="Countries you ship to">
          <input className={fieldClass} />
        </Field>
      </div>

      <Field label="Product categories">
        <input className={fieldClass} placeholder="e.g. research reagents, lab testing, cosmetics" />
      </Field>

      <Field label="Advertising & claim declaration" hint="Describe the claims you intend to make in listings and ads.">
        <textarea rows={2} className={fieldClass} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="COA examples" hint="Link or note; documents are submitted privately for review.">
          <input className={fieldClass} />
        </Field>
        <Field label="Third-party lab test proof (if any)">
          <input className={fieldClass} />
        </Field>
        <Field label="Return / support policy">
          <input className={fieldClass} />
        </Field>
        <Field label="Shipping policy">
          <input className={fieldClass} />
        </Field>
      </div>

      <Field label="Requested plan">
        <select defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select a plan…
          </option>
          <option>Basic Verified Vendor</option>
          <option>Pro Vendor</option>
          <option>Sponsor Vendor</option>
          <option>Enterprise / Lab Partner</option>
        </select>
      </Field>

      <fieldset className="space-y-2 rounded-lg border border-border bg-secondary/40 p-4">
        <legend className="px-1 text-sm font-medium">Confirmations</legend>
        {confirmations.map((c, i) => (
          <label key={c} className="flex items-start gap-3 text-sm text-foreground/80">
            <input
              type="checkbox"
              className="mt-0.5 h-4 w-4 flex-none accent-[hsl(var(--primary))]"
              checked={checked[i]}
              onChange={(e) =>
                setChecked((prev) => prev.map((v, idx) => (idx === i ? e.target.checked : v)))
              }
            />
            {c}
          </label>
        ))}
      </fieldset>

      <button
        type="submit"
        disabled={!allChecked}
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
      >
        Submit application
      </button>
    </form>
  )
}
