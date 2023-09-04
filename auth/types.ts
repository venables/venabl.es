import { type DefaultSession } from "@auth/core/types"

declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession["user"]
  }
}
