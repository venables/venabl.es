import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import { env } from "@/env"

const requireSsl = env.NODE_ENV === "production" ? "require" : undefined

export function genericPostgresClient(
  url: string,
  { ssl = requireSsl, ...options }: postgres.Options<Record<string, never>> = {}
) {
  const client = postgres(url, { ssl, ...options })
  const db = drizzle(client)

  return { client, db }
}
