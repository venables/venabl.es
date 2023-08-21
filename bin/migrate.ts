import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { join } from "path"
import postgres from "postgres"

import { env } from "../env"

const url = env.DATABASE_DIRECT_URL ?? env.DATABASE_URL
const ssl = env.NODE_ENV === "production" ? "require" : undefined

const sql = postgres(url, { max: 1, ssl })
const db = drizzle(sql)

console.log("Migrating the database ...")
migrate(db, { migrationsFolder: join(__dirname, "..", "drizzle") })
  .then(() => {
    console.log("Migration complete.")
    process.exit(0)
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
