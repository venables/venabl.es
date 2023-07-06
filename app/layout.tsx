import "./globals.css"
import { Inter } from "next/font/google"

import { TailwindIndicator } from "@/components/debug/TailwindIndicator"
import { Analytics } from "@/components/layout/Analytics"
import { Toaster } from "@/components/ui/toaster"
import { seo } from "@/lib/seo/extend"
import { cn } from "@/lib/utils"

import type { ReactNode } from "react"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

type Props = {
  children: ReactNode
}

export const metadata = seo()

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, "font-sans antialiased")}
      suppressHydrationWarning
    >
      <head />
      <body className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white">
        {children}
        <Analytics />
        <Toaster />
        <TailwindIndicator />
      </body>
    </html>
  )
}
