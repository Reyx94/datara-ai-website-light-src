"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { signIn, signUp, type AuthState } from "../(auth)/actions"

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-11 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-60"
    >
      {pending ? "Please wait…" : label}
    </button>
  )
}

const initialState: AuthState = {}

export function LoginForm({ configured }: { configured: boolean }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin")
  const action = mode === "signin" ? signIn : signUp
  const [state, formAction] = useFormState(action, initialState)

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="mb-5 flex rounded-lg bg-secondary p-1 text-sm">
        <button
          onClick={() => setMode("signin")}
          className={`flex-1 rounded-md py-2 font-medium transition-colors ${
            mode === "signin" ? "bg-background shadow-sm" : "text-foreground/60"
          }`}
        >
          Sign in
        </button>
        <button
          onClick={() => setMode("signup")}
          className={`flex-1 rounded-md py-2 font-medium transition-colors ${
            mode === "signup" ? "bg-background shadow-sm" : "text-foreground/60"
          }`}
        >
          Create account
        </button>
      </div>

      {!configured && (
        <p className="mb-4 rounded-md border border-amber-300/60 bg-amber-50 p-3 text-xs text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          Authentication is not configured yet. Set the Supabase environment variables to enable sign in.
        </p>
      )}

      <form action={formAction} className="space-y-4">
        {mode === "signup" && (
          <label className="block space-y-1">
            <span className="text-sm font-medium">Username</span>
            <input name="username" required className={fieldClass} autoComplete="username" />
          </label>
        )}
        <label className="block space-y-1">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium">Password</span>
          <input
            name="password"
            type="password"
            required
            minLength={8}
            className={fieldClass}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
          />
        </label>

        {state.error && (
          <p className="rounded-md bg-red-50 p-3 text-sm text-red-800 dark:bg-red-500/10 dark:text-red-200">
            {state.error}
          </p>
        )}
        {state.message && (
          <p className="rounded-md bg-emerald-50 p-3 text-sm text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-200">
            {state.message}
          </p>
        )}

        <SubmitButton label={mode === "signin" ? "Sign in" : "Create account"} />
      </form>

      {mode === "signup" && (
        <p className="mt-4 text-xs text-foreground/60">
          By creating an account you confirm you are of legal age and agree to the Terms and Community
          Guidelines. This platform is not medical advice.
        </p>
      )}
    </div>
  )
}
