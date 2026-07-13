import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/site/page-header"
import { ExperienceReportDisclaimer, DosingContextNotice } from "@/components/compliance/disclaimers"
import { ExperienceReportForm } from "./experience-report-form"

export const metadata: Metadata = {
  title: "New Experience Report",
  description: "Submit a structured, first-person peptide experience report.",
}

export default function NewExperienceReportPage() {
  return (
    <div className="pb-16">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Experience Reports", href: "/experience-reports" },
          { label: "New report" },
        ]}
      />
      <div className="container max-w-3xl pt-4">
        <h1 className="text-3xl font-bold md:text-4xl">New experience report</h1>
        <p className="mt-3 text-foreground/75">
          A structured form keeps reports consistent and comparable. Dose and administration fields are for
          personal context only.
        </p>
        <div className="mt-6 space-y-4">
          <ExperienceReportDisclaimer />
          <DosingContextNotice />
        </div>
        <div className="mt-6">
          <ExperienceReportForm />
        </div>
      </div>
    </div>
  )
}
