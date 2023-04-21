import { siteConfig } from "@/config"
import { fullURL } from "@/lib/url-fns"

import type { Metadata } from "next"

export const DEFAULT_METADATA: Metadata = {
  metadataBase: fullURL(),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    url: fullURL(),
    siteName: siteConfig.name,
    locale: "en-US",
    type: "website"
  },
  twitter: {
    creator: siteConfig.company?.twitter ?? siteConfig.handles.twitter,
    site: siteConfig.handles.twitter,
    card: "summary_large_image"
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c026d3" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}