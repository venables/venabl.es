import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"

import type { NextAuthConfig } from "next-auth"

/**
 * This is the base-level config for NextAuth, but does not include a database
 * adapter. This allows us to use next-auth in an edge runtime, regardless of whether
 * the database adapter supports edge or not.
 *
 * Database adapters should be defined in `auth.node.ts`.
 *
 * See more:
 * https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/guides/upgrade-to-v5#edge-compatibility
 */
export default {
  /**
   * Providers
   *
   * NOTE: The email provider is
   */
  providers: [Google, GitHub],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (user) {
        token.userId = user.id
        token.email = user.email
      }

      return token
    }
  },
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthConfig
