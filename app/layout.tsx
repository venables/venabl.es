import "./globals.css"
import { type Metadata, type Viewport } from "next"
import { Inter } from "next/font/google"
import { type ReactNode } from "react"

import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from "@/config"
import { cls, fullURL } from "@/lib/utils"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

export const runtime = "edge"

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

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cls(inter.variable, "font-sans antialiased")}
      suppressHydrationWarning
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
