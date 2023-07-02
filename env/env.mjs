import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_HOST: z.string().url(),
    NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
    NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional()
  },
  /*
   * Server-side Environment variables, not available on the client. Will throw
   * if you access these variables on the client.
   */
  server: {
    /**
     * Database
     */
    DATABASE_URL: z.string().url(),
    /**
     * Authentication
     */
    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    /**
     * Vercel-specific environment variables
     */
    VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    VERCEL_URL: z.string().optional(),

    /**
     * Email
     */
    EMAIL_FROM: z.string(),
    RESEND_API_KEY: z.string()
  },
  /**
   * Shared between server and client
   */
  shared: {
    /**
     * Node environment
     */
    NODE_ENV: z.enum(["development", "production", "test"])
  },
  /*
   * Due to how Next.js (>= 13.4.4) bundles environment variables on the Client,
   * we need to manually destructure them to make sure all are included in
   * bundle.
   *
   * 💡 You'll get type errors if not all variables from `client` are included
   * here.
   */
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  }
})
