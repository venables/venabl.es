import { compareDesc } from "date-fns"
import Link from "next/link"

import { allPosts } from "contentlayer/generated"

import { PostCard } from "./post-card"
import { SiteHeader } from "./site-header"

export default function Home() {
  const posts = allPosts
    .filter((p) => !p.page)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-8 py-8">
      <SiteHeader />

      <section className="flex flex-col gap-4">
        <h2 className="font-mono text-xl font-semibold underline-offset-4">
          TL;DR Me:
        </h2>
        <p>
          I am a product-focused engineer, entrepreneur, and angel investor with
          a successful history of building products that scale.
        </p>
        <p>
          I recently co-founded{" "}
          <Link href="https://catena.xyz">Catena Labs</Link> to build tools to
          help bring AI to every app.
        </p>

        <p>
          Keep reading:{" "}
          <Link className="underline underline-offset-4" href="/about">
            the longer version
          </Link>
          .
        </p>
      </section>

      <section className="">
        {posts.map((post) => (
          <PostCard key={post.url} {...post} />
        ))}
      </section>
    </div>
  )
}
