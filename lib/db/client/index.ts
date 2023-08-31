import { env } from "@/env"

import { edgePostgresClient } from "./edge"
import { genericPostgresClient } from "./generic"

export const { client, db } = env.DATABASE_URL_EDGE
  ? edgePostgresClient(env.DATABASE_URL_EDGE)
  : genericPostgresClient(env.DATABASE_URL)
