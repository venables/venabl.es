import { type DefaultSession } from "@auth/core/types"

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession["user"]
  }
}
