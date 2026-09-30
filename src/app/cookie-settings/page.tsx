import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"
import { CookieSettingsClient } from "./cookie-settings-client"

export const metadata: Metadata = {
  title: "Cookie Settings",
  description:
    "Review and change your cookie and tracking choices on peptides.cx. Necessary, Analytics, Affiliate Tracking, and Marketing categories.",
}

export default function CookieSettingsPage() {
  return (
    <div>
      <PageHeader eyebrow="Privacy" title="Cookie Settings" description="Change your consent choices at any time. Refusing is exactly as easy as accepting." />
      <div className="container max-w-3xl space-y-6 py-10">
        <Prose>
          <p>
            We use necessary cookies to run the site. Analytics, affiliate tracking, and marketing technologies
            stay disabled until you turn them on. Your current choice is shown below and can be updated whenever
            you like.
          </p>
          <ul>
            <li><strong>Necessary</strong> — required for core functionality. Always on.</li>
            <li><strong>Analytics</strong> — privacy-friendly usage measurement.</li>
            <li><strong>Affiliate Tracking</strong> — attributes purchases through affiliate links.</li>
            <li><strong>Marketing</strong> — advertising and campaign measurement.</li>
          </ul>
        </Prose>

        <CookieSettingsClient />
      </div>
    </div>
  )
}
