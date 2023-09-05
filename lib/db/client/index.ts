import { env } from "@/env"

import { edgePostgresClient } from "./edge"

export const { client, db } = edgePostgresClient(
  env.DATABASE_URL_POOLED ?? env.DATABASE_URL
)
