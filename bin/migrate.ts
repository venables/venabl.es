import { drizzle } from "drizzle-orm/node-postgres"
import { migrate } from "drizzle-orm/node-postgres/migrator"
import { join } from "path"
import { Client } from "pg"

import { env } from "@/env"

const client = new Client({
  connectionString: `${env.DATABASE_URL}?sslmode=require`
})
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
