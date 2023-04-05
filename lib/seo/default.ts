import { siteConfig } from "@/config"
import { fullURL } from "@/lib/url-fns"

import type { Metadata } from "next"

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    url: fullURL(),
    siteName: siteConfig.name,
    images: [
      {
        url: fullURL("/social.png"),
        width: 1200,
        height: 628,
        alt: siteConfig.name,
        type: "image/png"
      }
    ],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    creator: siteConfig.company?.twitter ?? siteConfig.handles.twitter,
    site: siteConfig.handles.twitter,
    card: "summary_large_image"
  },
  icons: {
    icon: [
      "/favicon.ico",
      {
        sizes: "16x16",
        type: "image/png",
        url: "/favicon-16x16.png"
      },
      {
        sizes: "32x32",
        type: "image/png",
        url: "/favicon-32x32.png"
      }
    ],
    apple: {
      sizes: "180x180",
      url: "/apple-touch-icon.png"
    }
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#c026d3" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}
