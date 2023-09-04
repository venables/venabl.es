import NextAuth from "next-auth"

import authConfig from "./auth.config"

/**
 * This is the default NextAuth configuration and is compatible with running
 * in edge runtimes.
 *
 * This config is to be used in the middleware so we can use any database
 * adapter, including one's that do not support edge networks.
 *
 * See more:
 * https://auth-docs-git-feat-nextjs-auth-authjs.vercel.app/guides/upgrade-to-v5#edge-compatibility
 */
export const { auth } = NextAuth(authConfig)
