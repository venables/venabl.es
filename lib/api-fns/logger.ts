import { env } from "@/env"

import type { NextRequest, NextResponse } from "next/server"

export function logRequest(request: NextRequest): void
export function logRequest(
  request: NextRequest,
  response: NextResponse,
  responseTime: number
): void
export function logRequest(
  request: NextRequest,
  response?: NextResponse,
  responseTime?: number
) {
  if (env.NODE_ENV === "test") {
    return
  }

  const method = request.method
  const url = request.nextUrl.pathname

  if (response?.ok) {
    console.log(
      ` ✓ [${method}] ${url} (${response.status}) took ${responseTime}ms`
    )
  } else if (response) {
    console.log(
      ` × [${method}] ${url} (${response.status}) took ${responseTime}ms`
    )
  } else {
    /**
     * Log the HTTP request
     */
    console.log(` → [${method}] ${url}`)
  }
}
