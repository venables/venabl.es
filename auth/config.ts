import type { NextAuthConfig } from "next-auth"

/**
 * This config is to be used in the middleware so we can use any database
 * adapter, including one's that do not support edge networks.
 *
 * See more:
 * https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/guides/upgrade-to-v5#edge-compatibility
 */
export default {
  providers: [],
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
