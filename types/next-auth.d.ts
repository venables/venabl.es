import NextAuth from "next-auth"

import type { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: DefaultSession["user"] & {
      /** The user's id. */
      id?: string | null
    }
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** The user id  */
    userId?: string | null
    /** The user's email */
    email?: string | null
  }
}
