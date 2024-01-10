import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { type Metadata, type Viewport } from "next"
import { Source_Code_Pro as SourceCodePro } from "next/font/google"
import { type ReactNode } from "react"

import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config"
import { cls, fullURL } from "@/lib/utils"

const sourceCodePro = SourceCodePro({
  variable: "--font-source-code-pro",
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

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      className={cls(
        GeistSans.variable,
        sourceCodePro.variable,
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
