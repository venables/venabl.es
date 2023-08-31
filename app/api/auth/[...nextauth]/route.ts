import { env } from "@/env"

export { GET, POST } from "@/auth"

/**
 * If we have an edge-compatible database client, we can use next-auth at the
 * edge. Otherwise, we will use it in the traditional nodejs runtime.
 */
export const runtime = env.DATABASE_URL_EDGE ? "edge" : "nodejs"
