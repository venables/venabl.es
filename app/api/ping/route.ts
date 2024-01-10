import { NextResponse } from "next/server"
import { handler } from "typed-route-handler"

import { env } from "@/env"

type ResponseData = {
  pong: string
}

const gitSha = env.VERCEL_GIT_COMMIT_SHA ?? "local"

/**
 * Healthcheck API endpoint which returns with success if the server is healthy,
 * and responds with the latest git sha.
 */
export const GET = handler<ResponseData>(() => {
  return NextResponse.json({ pong: gitSha.substring(0, 7) })
})
