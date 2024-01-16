import { type MetadataRoute } from "next"

import { fullURL } from "@/lib/utils"
import { allPosts } from "contentlayer/generated"

const staticPages = ["/", "/writing"]

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: fullURL(`/${post._raw.flattenedPath}`).toString(),
    lastModified: new Date(post.edited ? post.edited : post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))

  const staticPaths = staticPages.map((path) => ({
    url: fullURL(path).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))

  return [...staticPaths, ...posts]
}
