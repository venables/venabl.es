import { type NextAuthConfig } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"

import { HttpEmailProvider } from "@/lib/auth/http-email-provider"

import { adapter } from "./lib/db/adapter"

/**
 * https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/guides/upgrade-to-v5#edge-compatibility
 */
export default {
  /**
   * https://authjs.dev/reference/adapter/drizzle
   */
  adapter,

  /**
   *
   */
  providers: [Google, GitHub, HttpEmailProvider],

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
        token.id = user.id
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
