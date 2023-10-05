import { drizzle } from "drizzle-orm/postgres-js"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { join } from "path"
import postgres from "postgres"

import { env } from "@/env"

const client = postgres(env.DATABASE_URL, { ssl: "require", max: 1 })
const db = drizzle(client)

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
