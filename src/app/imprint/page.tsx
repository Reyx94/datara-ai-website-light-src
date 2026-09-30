import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { Prose } from "@/components/site/prose"

export const metadata: Metadata = {
  title: "Imprint",
  description: "Provider identification (Impressum) for peptides.cx.",
}

export default function ImprintPage() {
  return (
    <div>
      <PageHeader eyebrow="Legal" title="Imprint (Impressum)" description="Template — complete with your real provider details before launch." />
      <div className="container max-w-3xl py-10">
        <Prose>
          <p className="rounded-md border border-amber-300/60 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            Structural placeholder. In Germany an Impressum with accurate provider details is legally required.
            Fill in the fields below with your real information.
          </p>

          <h2>Provider</h2>
          <p>
            [Company / operator name]
            <br />
            [Legal form]
            <br />
            [Street address]
            <br />
            [Postal code, city, country]
          </p>

          <h2>Contact</h2>
          <p>
            Email: [contact email]
            <br />
            Phone: [phone, if applicable]
          </p>

          <h2>Represented by</h2>
          <p>[Authorised representative / managing director]</p>

          <h2>Register</h2>
          <p>
            [Register court and number, if applicable]
            <br />
            VAT ID: [if applicable]
          </p>

          <h2>Responsible for content</h2>
          <p>[Name and address of the person responsible for editorial content]</p>
        </Prose>
      </div>
    </div>
  )
}
