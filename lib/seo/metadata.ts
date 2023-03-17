import merge from "ts-deepmerge"

import { fullURL } from "@/lib/url-fns"

import type { Metadata } from "next"

const DEFAULT_METADATA: Metadata = {
  title: {
    default: "StartKit",
    template: "%s | A sane way to start your next next project. | StartKit"
  },
  description: "StartKit is a sane way to start your next next project.",
  openGraph: {
    url: fullURL(),
    siteName: "StartKit",
    images: [
      {
        url: fullURL("/social.png"),
        width: 1200,
        height: 628,
        alt: "StartKit",
        type: "image/png"
      }
    ],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    creator: "@startkit_dev",
    site: `@startkit_dev`,
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

/**
 * Helper method to deep merge the SEO params from a given page
 * with the default SEO params.
 *
 * This method also will use title and description in the OpenGraph and
 * Twitter metadata, if not set
 */
export function extendMetadata<T extends Metadata>(metadata?: T) {
  metadata = metadata ?? ({} as T)

  const title = metadata.title ?? DEFAULT_METADATA.title
  const description = metadata.description ?? DEFAULT_METADATA.description

  metadata.openGraph = {
    title: title ?? undefined,
    description: description ?? undefined,
    ...metadata.openGraph
  }

  metadata.twitter = {
    title: title ?? undefined,
    description: description ?? undefined,
    ...metadata.twitter
  }

  return merge(DEFAULT_METADATA, metadata)
}
