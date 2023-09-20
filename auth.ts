import NextAuth from "next-auth"

import authConfig from "./auth.config"

declare module "next-auth" {
  interface Session {
    user: {
      /** The user's id. */
      id: string
      /** The user's email */
      email: string
      /** The user's name */
      name: string | null
      /** The user's picture */
      picture: string | null
    }
  }
}

/**
 *
 * All NextAuth config should be defined in `./auth.config.ts` to allow for us
 * to use a non-edge compliant database adapter if necessary.
 */
export const {
  handlers: { GET, POST },
  auth
} = NextAuth(authConfig)

/**
 * Temporary function to get the current user. We use this instead of calling
 * auth() directly because the next-auth types state `auth()` always returns a
 * Session object, but in reality it can return null.
 */
export async function getCurrentUser() {
  const session = await auth()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!session?.user) {
    return null
  }

  return session.user
}
