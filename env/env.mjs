import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

/**
 * Transform an empty string to undefined
 */
const emptyStringToUndefined = z.literal("").transform(() => undefined)

/**
 * An optional string type that is at least one character long, or transformed
 * to undefined
 */
const optionalString = z
  .string()
  .trim()
  .min(1)
  .optional()
  .or(emptyStringToUndefined)

export const env = createEnv({
  /*
   * Environment variables available on the client (and server).
   *
   * 💡 You'll get type errors if these are not prefixed with NEXT_PUBLIC_.
   */
  client: {
    NEXT_PUBLIC_HOST: z.string().url().optional(),
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
    DATABASE_URL_POOLED: z.string().url().optional(),

    /**
     * Authentication
     */
    AUTH_SECRET: z.string().trim().min(1),
    AUTH_URL: z.string().url().optional(),
    GOOGLE_CLIENT_ID: optionalString,
    GOOGLE_CLIENT_SECRET: optionalString,
    GITHUB_CLIENT_ID: optionalString,
    GITHUB_CLIENT_SECRET: optionalString,

    /**
     * Vercel-specific environment variables
     */
    VERCEL_GIT_COMMIT_SHA: z.string().optional(),
    VERCEL_URL: z.string().optional(),

    /**
     * Email
     */
    EMAIL_FROM: z.string(),
    RESEND_API_KEY: optionalString
  },
  /**
   * Shared between server and client
   */
  shared: {
    /**
     * Node environment
     */
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development")
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
