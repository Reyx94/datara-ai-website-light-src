"use client"

import { useState } from "react"
import { peptides } from "@/lib/peptides"

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="block space-y-1">
      <span className="text-sm font-medium">{label}</span>
      {hint && <span className="block text-xs text-foreground/60">{hint}</span>}
      {children}
    </label>
  )
}

export function ExperienceReportForm() {
  const [submitted, setSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-300/60 bg-emerald-50 p-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
        <h2 className="text-lg font-semibold">Report received</h2>
        <p className="mt-2 text-sm">
          Your structured report was submitted to the moderation queue and will be published after review.
          Reports are personal anecdotes, not medical advice.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 rounded-md border border-emerald-600/30 px-3 py-1.5 text-sm font-medium"
        >
          Write another
        </button>
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
        <Field label="Peptide">
          <select required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a peptide…
            </option>
            {peptides.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
            <option value="other">Other</option>
          </select>
        </Field>

        <Field label="Goal / context">
          <input className={fieldClass} placeholder="e.g. tendon recovery, sleep, skin" />
        </Field>

        <Field label="Medical supervision">
          <select defaultValue="prefer-not" className={fieldClass}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="prefer-not">Prefer not to say</option>
          </select>
        </Field>

        <Field label="Duration">
          <input className={fieldClass} placeholder="e.g. 6 weeks" />
        </Field>

        <Field label="Dose context" hint="Personal history only — not a recommendation to others.">
          <input className={fieldClass} placeholder="What you personally used, for transparency" />
        </Field>

        <Field
          label="Administration context"
          hint="General context only. Step-by-step injection or reconstitution instructions are not allowed."
        >
          <input className={fieldClass} placeholder="e.g. subcutaneous, morning" />
        </Field>
      </div>

      <Field label="Observed effects">
        <textarea rows={3} className={fieldClass} placeholder="What you noticed" />
      </Field>

      <Field label="Side effects">
        <textarea rows={2} className={fieldClass} placeholder="Any adverse reactions" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Lab markers (optional)">
          <input className={fieldClass} placeholder="Relevant blood work, if any" />
        </Field>
        <Field label="Other substances (optional)">
          <input className={fieldClass} placeholder="Anything else taken alongside" />
        </Field>
      </div>

      <Field label="Training / diet / sleep context (optional)">
        <textarea rows={2} className={fieldClass} placeholder="Lifestyle factors that could matter" />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="What changed">
          <textarea rows={2} className={fieldClass} />
        </Field>
        <Field label="What did not change">
          <textarea rows={2} className={fieldClass} />
        </Field>
      </div>

      <Field label="Would you repeat it?">
        <select defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select…
          </option>
          <option>Yes</option>
          <option>No</option>
          <option>Unsure</option>
        </select>
      </Field>

      <label className="flex items-start gap-3 rounded-lg border border-border bg-secondary/40 p-4">
        <input
          type="checkbox"
          className="mt-0.5 h-4 w-4 flex-none accent-[hsl(var(--primary))]"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          required
        />
        <span className="text-sm text-foreground/80">
          This is a personal anecdote, not medical advice. It is not a protocol, recommendation, or treatment
          instruction. I am not requesting or providing individualized dosing guidance.
        </span>
      </label>

      <button
        type="submit"
        disabled={!agreed}
        className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
      >
        Submit for review
      </button>
    </form>
  )
}
