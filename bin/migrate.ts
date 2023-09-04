import { migrate } from "drizzle-orm/postgres-js/migrator"
import { join } from "path"

import { env } from "@/env"
import { genericPostgresClient } from "@/lib/db/client/generic"

const { db } = genericPostgresClient(env.DATABASE_URL, { max: 1 })

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
