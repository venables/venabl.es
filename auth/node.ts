import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"

import { db, pgTable } from "@/lib/db"

import authConfig from "./auth.config"
import { HttpEmailProvider } from "./providers/http-email"

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
} = NextAuth({
  /**
   * https://authjs.dev/reference/adapter/drizzle
   */
  adapter: DrizzleAdapter(db, pgTable),

  /**
   * Pull in the shared config
   */
  ...authConfig,

  /**
   * Add Email provider, which requires an adapter to be defined
   */
  providers: [...authConfig.providers, HttpEmailProvider]
})
