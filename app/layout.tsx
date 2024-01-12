import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { type Metadata, type Viewport } from "next"
// eslint-disable-next-line camelcase -- fonts aren't camel
import { Aleo, Roboto_Condensed, Source_Code_Pro } from "next/font/google"
import { type PropsWithChildren } from "react"

import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config"
import { cls, fullURL } from "@/lib/utils"

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"]
})

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"]
})

const aleo = Aleo({
  variable: "--font-aleo",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  metadataBase: fullURL(),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={cls(
        GeistSans.variable,
        sourceCodePro.variable,
        aleo.variable,
        robotoCondensed.variable,
        "font-sans antialiased"
      )}
      lang="en"
    >
      <head />
      <body className="min-h-screen bg-background text-card-foreground">
        {children}
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}
