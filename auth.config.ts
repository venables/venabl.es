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
    jwt({ token }) {
      /**
       * next-auth properly sets the JWT `sub` claim to the user's ID, but we would
       * like to access `session.user.id` instead of session.user.sub, because
       * session.user is the JWT.
       */
      token.id = token.sub

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
