import Email from "@auth/core/providers/email"
import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"

import { env } from "@/env"
import { db, pgTable } from "@/lib/db"

import authConfig from "./config"
import { sendVerificationRequest } from "./send-verification-request"

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  ...authConfig,
  /**
   * https://authjs.dev/reference/adapter/drizzle
   */
  adapter: DrizzleAdapter(db, pgTable),
  /**
   * Add the email provider to our providers list.
   */
  providers: [
    Google,
    GitHub,
    Email({
      from: env.EMAIL_FROM,
      sendVerificationRequest
    })
  ]
})
