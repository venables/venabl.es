import { format, parseISO } from "date-fns"
import { notFound } from "next/navigation"

import { allPosts } from "contentlayer/generated"

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  if (!post) {
    notFound()
  }
}

function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug)
  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8">
        <time className="mb-1 text-xs text-gray-600" dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">
          {post.icon} {post.title}
        </h1>
      </div>
      <article
        className="prose dark:prose-invert lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      {/* <div
        className="text-lg [&>*:last-child]:mb-0 [&>*]:mb-3"
      /> */}
    </article>
  )
}

export default PostPage
