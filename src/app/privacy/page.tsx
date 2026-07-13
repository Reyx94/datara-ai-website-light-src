import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How peptides.cx handles personal data, cookies, and tracking consent.",
}

export default function PrivacyPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Template — replace with your reviewed legal text before launch." />
      <div className="container max-w-3xl py-10">
        <Prose>
          <p className="rounded-md border border-amber-300/60 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            This is a structural placeholder. Before going live, have this policy reviewed by a qualified data
            protection professional for your jurisdiction (e.g. GDPR in the EU).
          </p>

          <h2>Who we are</h2>
          <p>peptides.cx (the “platform”). Controller and contact details are listed in the <Link href="/imprint">Imprint</Link>.</p>

          <h2>What data we process</h2>
          <ul>
            <li>Account data (username, email, role) when you register</li>
            <li>Content you post (forum posts, reports, reviews)</li>
            <li>Technical data (necessary for security and delivery)</li>
            <li>Optional analytics, affiliate, and marketing data — only with your consent</li>
          </ul>

          <h2>Cookies & tracking consent</h2>
          <p>
            Non-essential cookies and tracking (analytics, affiliate tracking, marketing) are disabled until you
            opt in. You can change your choice at any time on the{" "}
            <Link href="/cookie-settings">Cookie Settings</Link> page. Refusing is as easy as accepting.
          </p>

          <h2>Legal bases</h2>
          <p>
            We rely on consent for non-essential cookies and marketing, contract for account features, and
            legitimate interest for security and abuse prevention, as applicable.
          </p>

          <h2>Your rights</h2>
          <ul>
            <li>Access, rectification, and erasure</li>
            <li>Restriction and objection</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>

          <h2>Retention</h2>
          <p>We keep data only as long as necessary for the purposes described or as required by law.</p>
        </Prose>
      </div>
    </div>
  )
}
