import { type Metadata } from "next"
import { notFound } from "next/navigation"

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
  const post = allPosts.find((p) => p._raw.flattenedPath === "home")
  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-2 pb-8 pt-4 sm:px-8">
      <div className="mb-8 font-roboto-condensed">
        <h1 className="my-1 break-words px-4 text-center text-5xl font-bold uppercase tracking-tighter">
          {post.title}
        </h1>
      </div>
      <div className="prose mx-auto dark:prose-invert lg:prose-xl">
        <Avatar className="not-prose float-left mr-4 h-24 w-24" />
        <div
          className="prose prose-lg mx-auto dark:prose-invert lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
    </article>
  )
}
