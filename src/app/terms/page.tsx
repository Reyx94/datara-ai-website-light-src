import type { Metadata } from "next"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The rules for using peptides.cx, including content, commercial, and liability terms.",
}

export default function TermsPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Template — replace with your reviewed legal text before launch." />
      <div className="container max-w-3xl py-10">
        <Prose>
          <p className="rounded-md border border-amber-300/60 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            Structural placeholder. Have these terms reviewed by a qualified lawyer for your jurisdiction before
            launch.
          </p>

          <h2>Acceptance</h2>
          <p>By using peptides.cx you agree to these terms and to our <Link href="/guidelines">Community Guidelines</Link>.</p>

          <h2>Not medical advice</h2>
          <p>
            All content is educational and community information. It is not medical advice, diagnosis,
            treatment, prescribing guidance, dosing instruction, or emergency support. You are responsible for
            your own decisions and for compliance with the law in your location.
          </p>

          <h2>Age restriction</h2>
          <p>The platform is not intended for minors. You must be of legal age in your jurisdiction to register.</p>

          <h2>User content</h2>
          <p>
            You are responsible for what you post. Prohibited content, hidden advertising, and unverified sales
            are subject to moderation, including removal, suspension, or ban.
          </p>

          <h2>Commercial terms</h2>
          <p>
            Vendors and advertisers are bound by the <Link href="/affiliate-disclosure">Advertising Policy</Link>{" "}
            and Vendor Policy. Verification is not an endorsement or guarantee.
          </p>

          <h2>Notice & action</h2>
          <p>
            Report illegal or infringing content using the report tools. We operate a notice-and-action process
            and an appeals process for moderation decisions.
          </p>

          <h2>Liability</h2>
          <p>
            To the extent permitted by law, peptides.cx is not liable for third-party content, vendor products,
            or decisions made based on platform content.
          </p>
        </Prose>
      </div>
    </div>
  )
}
