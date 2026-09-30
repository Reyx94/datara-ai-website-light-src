"use client"

import { useState } from "react"
import { Flag } from "lucide-react"
import { cn } from "@/lib/utils"

export function ReportButton({
  label = "Report",
  contentType = "content",
  className,
}: {
  label?: string
  contentType?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className={cn("inline-block text-sm", className)}>
      <button
        type="button"
        onClick={() => {
          setOpen((v) => !v)
          setSubmitted(false)
        }}
        className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-2.5 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <Flag className="h-3.5 w-3.5" aria-hidden />
        {label}
      </button>

      {open && (
        <div className="mt-2 w-72 rounded-lg border border-border bg-card p-3 shadow-lg">
          {submitted ? (
            <p className="text-xs text-foreground/80">
              Thanks. This {contentType} has been added to the moderation queue for review. Nothing is deleted
              automatically — a moderator will review it.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-2"
            >
              <label className="block text-xs font-medium text-foreground">Reason</label>
              <select
                required
                defaultValue=""
                className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
              >
                <option value="" disabled>
                  Select a reason…
                </option>
                <option>Illegal content or unverified sale</option>
                <option>Hidden affiliate link / discount code</option>
                <option>Medical claim / cure claim</option>
                <option>Dosing advice or injection tutorial</option>
                <option>Spam or fake review</option>
                <option>Targeting a minor</option>
                <option>Other</option>
              </select>
              <textarea
                rows={2}
                placeholder="Optional details for the moderator"
                className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-2 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90"
              >
                Submit report
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}
