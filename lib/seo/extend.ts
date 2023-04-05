import merge from "ts-deepmerge"

import { DEFAULT_METADATA } from "./default"

import type { Metadata } from "next"

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
