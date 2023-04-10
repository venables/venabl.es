import { NextResponse } from "next/server"

import { handler } from "@/lib/api-fns"

type Data = {
  pong: string
}

const gitSha = process.env.VERCEL_GIT_COMMIT_SHA || "local"

/**
 * Healthcheck API endpoint which returns with success if the server is healthy,
 * and responds with the latest git sha.
 */
export const GET = handler<Data>(() => {
  return NextResponse.json(
    {
      status: "ok",
      data: { pong: gitSha.substring(0, 7) }
    },
    { status: 200 }
  )
})
