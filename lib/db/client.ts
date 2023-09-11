import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

import { env } from "@/env"

/**
 * Opt-in to experimental connection caching
 * https://neon.tech/docs/serverless/serverless-driver#use-experimental-caching
 */
neonConfig.fetchConnectionCache = true

export const client = neon(env.DATABASE_URL_POOLED ?? env.DATABASE_URL)
export const db = drizzle(client)
