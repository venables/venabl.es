import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    date: z.date(),
    description: z.string(),
    edited: z.date().optional(),
    icon: z.string().optional(),
    page: z.boolean().optional(),
    showDate: z.boolean().optional(),
    title: z.string()
  })
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    description: z.string(),
    title: z.string()
  })
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, pages }
