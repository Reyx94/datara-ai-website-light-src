import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CookieConsent } from '@/components/compliance/cookie-consent'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://peptides.cx'),
  title: {
    default: 'peptides.cx — The Peptide Community Exchange',
    template: '%s — peptides.cx',
  },
  description:
    'peptides.cx is an educational community platform for peptide research, real-world experience reports, safety discussion and verified vendor transparency. Not medical advice.',
  keywords: [
    'peptides',
    'peptide research',
    'peptide community',
    'peptide safety',
    'experience reports',
    'verified peptide vendors',
    'peptide library',
  ],
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased theme-transition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
