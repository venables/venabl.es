import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { type NextAuthConfig } from "next-auth"

import { db, pgTable } from "@/lib/db"

/**
 * This is the base-level config for NextAuth, but does not include a database
 * adapter. This allows us to use next-auth in an edge runtime, regardless of
 * whether the database adapter supports edge or not.
 *
 * Database adapters should be defined in `./node.ts`.
 *
 * See more:
 * https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/guides/upgrade-to-v5#edge-compatibility
 */
export default {
  /**
   * https://authjs.dev/reference/adapter/drizzle
   */
  adapter: DrizzleAdapter(db, pgTable),

  /**
   * NOTE: The email provider requires a database adapter. Because our database
   * adapter many not be edge-ready, we define that in the `./node.ts` file.
   */
  providers: [Google, GitHub],

  /**
   * Using JWTs for session tokens, so we can access the user's ID and email
   * from edge networks without requiring database access (which may not be
   * available in edge environments).
   */
  session: { strategy: "jwt" },

  /**
   *
   */
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

  /**
   *
   */
  pages: {
    signIn: "/signin"
  }
} satisfies NextAuthConfig
