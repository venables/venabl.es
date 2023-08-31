import { neon, neonConfig } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

/**
 * Opt-in to experimental connection caching
 * https://neon.tech/docs/serverless/serverless-driver#use-experimental-caching
 */
neonConfig.fetchConnectionCache = true

export function edgePostgresClient(url: string) {
  const client = neon(url)
  const db = drizzle(client)

  return { client, db }
}
