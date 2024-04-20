import { compareAsc, compareDesc, format, parseISO } from "date-fns"
import { type Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Separator } from "@/components/layout/separator"
import { allPosts } from "contentlayer/generated"

import { Avatar } from "./avatar"

export function generateMetadata(): Metadata {
  const post = allPosts.find((p) => p._raw.flattenedPath === "home")
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description
  }
}

export default function Home() {
  const posts = allPosts
    .filter((p) => !p.page)
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))

  const post = allPosts.find((p) => p._raw.flattenedPath === "home")
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-2 pb-8 pt-4 sm:px-8">
      <div className="mb-8 font-essays">
        <h1 className="my-4 break-words px-4 text-center text-6xl font-bold uppercase tracking-widest">
          {post.title}
        </h1>

        {post.subtitle ? (
          <h2 className="my-1 px-4 text-center text-2xl font-bold uppercase tracking-widest">
            {post.subtitle}
          </h2>
        ) : null}
      </div>

      <Separator />

      <h2 className="my-12 px-4 text-center font-essays text-2xl font-bold uppercase tracking-widest">
        Table of Contents
      </h2>

      <ol className="mx-auto flex max-w-xl flex-col gap-2 font-serif text-xl">
        {posts.map((p, index) => (
          <li className="flex flex-row items-center space-x-2 py-1" key={p.url}>
            <span className="text-sm font-bold">
              {String(index).padStart(3, "0")}.
            </span>
            <Link
              className="border-b border-dotted border-link text-link hover:border-solid"
              href={p.url}
              // other="visited:border-link-visited visited:text-link-visited"
            >
              {p.pretitle ? `${p.pretitle}: ` : ""}
              {p.title}
            </Link>
          </li>
        ))}
      </ol>
    </article>
  )
}
