import { format, parseISO } from "date-fns"
import Link from "next/link"

import { type Post } from "contentlayer/generated"

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
          href={post.url}
        >
          {post.title}
        </Link>
      </h2>
      <time className="mb-2 block text-xs text-gray-600" dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  )
}
