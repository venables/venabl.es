import { type Config } from "drizzle-kit"

const connectionString = `${process.env.DATABASE_URL}?sslmode=require`

if (!connectionString) {
  throw new Error("DATABASE_URL is not set")
}

export default {
  schema: "./lib/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString
  }
} satisfies Config
