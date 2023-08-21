import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"

import { env } from "@/env"

const ssl = env.NODE_ENV === "production" ? "require" : undefined

export const client = postgres(env.DATABASE_URL, { ssl })
export const db = drizzle(client, { logger: true })
