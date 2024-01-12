import { compareDesc, format, parseISO } from "date-fns"
import Link from "next/link"

import { allPosts } from "contentlayer/generated"

export default function Home() {
  const posts = allPosts
    .filter((p) => !p.page)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <section className="container mx-auto px-2 pb-8 sm:px-8">
      <div className="mb-8 font-roboto-condensed">
        <h1 className="my-1 break-words px-4 text-center text-5xl font-bold uppercase tracking-tighter">
          Things I Think I Think
        </h1>
      </div>

      <ol className="mx-auto flex max-w-xl flex-col gap-2">
        {posts.map((post) => (
          <li key={post.url}>
            <Link
              className="flex flex-row items-center justify-between gap-4 rounded-lg px-3 py-4 transition-all hover:bg-secondary"
              href={post.url}
            >
              <span className="text-lg font-bold">{post.title}</span>
              <time
                className="text-right text-sm text-muted-foreground"
                dateTime={post.date}
              >
                {format(parseISO(post.date), "LLLL d, yyyy")}
              </time>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
