import "./globals.css"
import { clsx } from "clsx"
import { type Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import { type ReactNode } from "react"

import { Analytics } from "@/components/analytics"
import { fullURL } from "@/lib/utils/url-fns"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"]
})

interface Props {
  children: ReactNode
}

export const metadata: Metadata = {
  metadataBase: fullURL(),
  applicationName: "Matt Venables",
  title: "I build delightful products | Matt Venables",
  description: "Hi, I'm Matt Venables. I build delightful products.",
  alternates: {
    canonical: "https://venabl.es"
  },
  twitter: {
    creator: "@mattyven",
    site: "@mattyven",
    card: "summary_large_image"
  },
  openGraph: {
    url: fullURL(),
    siteName: "Matt Venables",
    locale: "en-US",
    type: "website"
  }
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={clsx(
        inter.variable,
        ebGaramond.variable,
        "bg-white font-sans text-neutral-800 antialiased transition-colors dark:bg-neutral-900  dark:text-white"
      )}
    >
      <head />
      <body className="mx-auto flex min-h-screen max-w-4xl flex-col font-sans">
        <Analytics />
        <main
          role="main"
          className="flex grow flex-col items-center justify-start p-2"
        >
          {children}
        </main>
      </body>
    </html>
  )
}
