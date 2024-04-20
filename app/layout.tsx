import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { type Metadata, type Viewport } from "next"
import { Aleo, Source_Code_Pro } from "next/font/google"
import localFont from "next/font/local"
import { type PropsWithChildren } from "react"

import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/sonner"
import { siteConfig } from "@/config"
import { cls, fullURL } from "@/lib/utils"

const essay1743 = localFont({
  src: [
    {
      path: "./essays-1743.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "./essays-1743-italic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "./essays-1743-bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./essays-1743-bold-italic.woff2",
      weight: "700",
      style: "italic"
    }
  ],
  display: "swap",
  variable: "--font-essays-1743"
})

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
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
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#070707" }
  ]
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      className={cls(
        essay1743.variable,
        GeistSans.variable,
        sourceCodePro.variable,
        aleo.variable,
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
