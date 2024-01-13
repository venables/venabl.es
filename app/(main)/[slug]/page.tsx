import { format, parseISO } from "date-fns"
import { notFound } from "next/navigation"

import { allPosts } from "contentlayer/generated"

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

  return (
    <article className="container mx-auto px-2 pb-8 pt-4 sm:px-8">
      <div className="mb-8 font-roboto-condensed">
        {post.showDate || !post.page ? (
          <div className="text-center text-sm font-bold uppercase">
            <time dateTime={post.date}>
              {format(parseISO(post.date), "LLLL d, yyyy")}
            </time>
          </div>
        ) : null}
        <h1 className="my-1 break-words px-4 text-center text-5xl font-bold uppercase tracking-tighter">
          {post.title}
        </h1>
      </div>
      <div
        className="prose prose-lg mx-auto dark:prose-invert lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  )
}

export default PostPage
