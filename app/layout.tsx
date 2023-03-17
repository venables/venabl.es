import "./globals.css"
import { clsx } from "clsx"
import { Inter } from "next/font/google"

import Analytics from "@/components/layout/Analytics"
import { extendMetadata } from "@/lib/seo/metadata"

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
      className={clsx(inter.variable, "h-full font-sans antialiased")}
    >
      <head />
      <body className="h-full bg-neutral-50 p-4 text-neutral-800 transition-colors dark:bg-neutral-900 dark:text-neutral-50">
        <Analytics />
        {children}
      </body>
    </html>
  )
}
