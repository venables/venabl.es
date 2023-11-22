import { type MetadataRoute } from "next"

import { fullURL } from "@/lib/utils"
import { allPosts } from "contentlayer/generated"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: fullURL(`/${post._raw.flattenedPath}`).toString(),
    lastModified: new Date(post.edited ? post.edited : post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }))

  return [
    {
      url: fullURL().toString(),
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    ...posts
  ]
}
