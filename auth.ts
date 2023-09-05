import { type DefaultSession } from "@auth/core/types"
import NextAuth from "next-auth"

import authConfig from "./auth.config"

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id. */
      id: string
    } & DefaultSession["user"]
  }
}

/**
 * A Node-runtime version of the NextAuth implementation. This is used for
 * making calls to the database, which is not always possible in edge
 * environments, depending on your database adapter.
 *
 * All NextAuth config should be defined in `./auth.config.ts`, except for
 * the database adapter, and email provider.
 */
export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig)

/**
 * Temporary function to get the current user. We use this instead of calling
 * auth() directly because the next-auth types state `auth()` always returns a
 * session, but in reality it can return null.
 */
export async function getCurrentUser() {
  const session = await auth()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!session?.user) {
    return null
  }

  return session.user
}
