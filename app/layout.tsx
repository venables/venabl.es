import "./globals.css"
import { Inter } from "next/font/google"

import { TailwindIndicator } from "@/components/debug/TailwindIndicator"
import Analytics from "@/components/layout/Analytics"
import { extendMetadata } from "@/lib/seo/metadata"
import { cls } from "@/lib/utils"

import type { ReactNode } from "react"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })

type Props = {
  children: ReactNode
}

export const metadata = extendMetadata()

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={cls(
        inter.variable,
        "font-sans antialiased bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
      )}
    >
      <head />
      <body className="min-h-screen">
        {children}
        <Analytics />
        <TailwindIndicator />
      </body>
    </html>
  )
}
