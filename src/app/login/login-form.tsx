"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { signIn, signUp, signInWithProvider, type AuthState } from "../(auth)/actions"

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

      <div className="space-y-2">
        <form action={signInWithProvider}>
          <input type="hidden" name="provider" value="google" />
          <button
            type="submit"
            disabled={!configured}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.98.66-2.23 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
            </svg>
            Continue with Google
          </button>
        </form>
        <form action={signInWithProvider}>
          <input type="hidden" name="provider" value="apple" />
          <button
            type="submit"
            disabled={!configured}
            className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-60"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M16.37 12.6c-.02-2.03 1.66-3 1.73-3.05-.94-1.38-2.4-1.57-2.93-1.59-1.25-.13-2.44.73-3.07.73-.63 0-1.6-.71-2.64-.69-1.36.02-2.62.79-3.32 2-1.41 2.45-.36 6.08 1.02 8.07.67.97 1.48 2.06 2.53 2.02 1.02-.04 1.4-.66 2.64-.66 1.23 0 1.58.66 2.65.64 1.09-.02 1.79-.99 2.46-1.97.77-1.13 1.09-2.22 1.11-2.28-.02-.01-2.13-.82-2.15-3.24zM14.4 6.06c.56-.68.94-1.62.83-2.56-.81.03-1.79.54-2.37 1.22-.52.6-.97 1.55-.85 2.47.9.07 1.83-.46 2.39-1.13z" />
            </svg>
            Continue with Apple
          </button>
        </form>
        <div className="flex items-center gap-3 py-1">
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs text-foreground/50">or</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

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
