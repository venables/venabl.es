import "./globals.css"
import { Inter, EB_Garamond } from "@next/font/google"
import clsx from "clsx"
import { NextSeo } from "next-seo"
import { ReactNode } from "react"

import Analytics from "components/Analytics"

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] })
const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"]
})

type Props = {
  children: ReactNode
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <NextSeo
          useAppDir={true}
          title="Matt Venables"
          description="Hi, I'm Matt Venables. I build delightful Web3 + crypto products."
          canonical="https://venabl.es"
          twitter={{
            handle: "@mattyven",
            site: "@mattyven",
            cardType: "summary_large_image"
          }}
        />
      </head>
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
