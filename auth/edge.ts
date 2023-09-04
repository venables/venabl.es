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

/**
 * Temporary function to get the current session. We use this instead of calling
 * auth() directly because the next-auth types state `auth()` always returns a
 * session, but in reality it can return null.
 */
export async function getCurrentSession() {
  const session = await auth()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!session) {
    return null
  }

  return session
}
