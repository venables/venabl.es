import { nanoid } from "nanoid/async"

import { logger } from "@/lib/logger"

import { buildErrorResponse } from "./errors/error-response"

import type { ApiResponse, NextRouteHandler } from "./types"
import type { NextResponse } from "next/server"

/**
 * Wrap an API handler with additional logging, error handling, etc.
 *
 * @example
 *
 *   type ResponseData = { name: string }
 *
 *   export const GET = handler<ResponseData>(request => {
 *      if (!request.query.name) {
 *        throw new ValidationError("name is required")
 *      }
 *
 *      return NextResponse.json({ status: "ok", data: { name: request.query.name } })
 *   })
 *
 * @param handler the api handler
 * @returns a wrapped api handler
 */
export const handler = <T = void, U = void>(
  routeHandler: NextRouteHandler<ApiResponse<T>, U>
): NextRouteHandler<ApiResponse<T>, U> => {
  const startTime = new Date()

  return async (request, context) => {
    const requestId = await nanoid()
    const method = request.method
    const url = request.nextUrl.pathname

    /**
     * Log the HTTP request
     */
    logger.info(`➡️  [${requestId}] ${method} ${url} ...`)

    let response: NextResponse<ApiResponse<T>>

    try {
      response = await routeHandler(request, context)
    } catch (err) {
      response = buildErrorResponse(err)
    }

    /**
     * Log the HTTP response status
     */
    logger.info(
      `⬅️  [${requestId}] ${method} ${url} (${response.status}) took ${
        new Date().getTime() - startTime.getTime()
      }ms`
    )

    response.headers.set("x-request-id", requestId)
    return response
  }
}
