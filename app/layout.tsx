import "./globals.css"
import { Inter } from "next/font/google"

import { TailwindIndicator } from "@/components/debug/tailwind-indicator"
import { Analytics } from "@/components/layout/analytics"
import { Toaster } from "@/components/ui/toaster"
import { seo } from "@/lib/seo/extend"
import { cls } from "@/lib/utils"

import type { ReactNode } from "react"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

export const metadata = seo()

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
