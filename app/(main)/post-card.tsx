import { format, parseISO } from "date-fns"
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { type Post } from "contentlayer/generated"

export function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <Separator className="my-4" />
      <h2 className="mb-2 text-xl">
        <span className="pr-2">{post.icon}</span>
        <Link
          className="font-bold underline-offset-8 hover:underline"
          href={post.url}
        >
          {post.title}
        </Link>
      </h2>
      <time className="mb-2 block text-xs text-gray-600" dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
      {/* <div
        className="text-sm [&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
    </div>
  )
}
