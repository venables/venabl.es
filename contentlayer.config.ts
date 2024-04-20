import { defineDocumentType, makeSource } from "contentlayer/source-files"

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    pretitle: { type: "string", required: false },
    title: { type: "string", required: true },
    subtitle: { type: "string", required: false },
    description: { type: "string", required: true },
    date: { type: "date", required: true },
    hide_date: { type: "boolean", required: false },
    edited: { type: "date", required: false },
    icon: { type: "string", required: false },
    page: { type: "boolean", required: false }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/${post._raw.flattenedPath}`
    }
  }
}))

export default makeSource({ contentDirPath: "posts", documentTypes: [Post] })
