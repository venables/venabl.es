import { compareAsc, format, parseISO } from "date-fns"
import { notFound } from "next/navigation"

import { allPosts } from "contentlayer/generated"

import { Avatar } from "../avatar"

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export function generateMetadata({ params }: Props) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  if (!post) {
    notFound()
  }

  return {
    title: post.title,
    description: post.description
  }
}

function PostPage({ params }: Props) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  if (!post) {
    notFound()
  }

  const sortedPosts = allPosts
    .filter((p) => !p.page)
    .sort((a, b) => compareAsc(new Date(a.date), new Date(b.date)))
  const index = sortedPosts.findIndex(
    (p) => p._raw.flattenedPath === params.slug
  )

  return (
    <article className="container mx-auto px-2 pb-8 pt-4 sm:px-8">
      <div className="mb-8 font-essays">
        <div className="text-center text-lg font-bold uppercase">
          {post.pretitle ? (
            <>{post.pretitle}</>
          ) : (
            <>{String(index).padStart(3, "0")}.</>
          )}
        </div>

        <h1 className="my-1 break-words px-4 text-center text-5xl font-bold uppercase tracking-tighter">
          {post.title}
        </h1>

        {post.hide_date ? null : (
          <div className="text-center text-sm font-bold uppercase">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
        )}
      </div>

      {post.url === "/about" ? (
        <div className="prose mx-auto dark:prose-invert lg:prose-xl">
          <Avatar className="not-prose float-left mr-4 h-24 w-24" />
          <div
            className="prose prose-lg mx-auto dark:prose-invert lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.body.html }}
          />
        </div>
      ) : (
        <div
          className="prose prose-lg mx-auto dark:prose-invert lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      )}
    </article>
  )
}

export default PostPage
