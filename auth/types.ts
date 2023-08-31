import { type DefaultSession } from "@auth/core/types"

/**
 * The latest version of `@auth/core` has an incompatible `EmailUserConfig`
 * interface
 */
declare module "@auth/core/providers/email" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions, @typescript-eslint/consistent-indexed-object-style
  interface EmailUserConfig {
    [key: string]: unknown
  }
}

declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession["user"]
  }
}
