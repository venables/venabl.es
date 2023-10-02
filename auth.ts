import NextAuth from "next-auth"

import authConfig from "./auth.config"

/**
 * Add the `picture` attribute to the User interface. next-auth defines this as `image`, but
 * sets it as `picture`
 */
declare module "next-auth" {
  interface User {
    /** The user's picture */
    picture?: string | null
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
