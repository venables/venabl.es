import { NextResponse } from "next/server"

import { logger } from "@/lib/logger"

import { HttpError } from "./errors"

import type { ApiResponse, NextRouteHandler } from "./types"

/**
 * Wrap an API handler with additional logging, error handling, etc.
 *
 * @example
 *
 *   type Data = { name: string }
 *
 *   export const GET = handler<Data>(request => {
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
export const handler = <T = void>(
  routeHandler: NextRouteHandler<ApiResponse<T>>
): NextRouteHandler<ApiResponse<T>> => {
  const startTime = new Date()

  return async (request) => {
    const method = request.method
    const url = request.nextUrl.pathname

    /**
     * Log the HTTP request
     */
    logger.info(`➡️  ${method} ${url} ...`)

    let response: NextResponse<ApiResponse<T>>

    try {
      response = await routeHandler(request)
    } catch (e) {
      if (e instanceof HttpError) {
        response = NextResponse.json(
          { status: "error", error: e.message },
          {
            status: e.status
          }
        )
      } else {
        logger.error(`Unhandled API Error: ${method} ${url}`, e)
        response = NextResponse.json(
          { status: "error", error: "Internal server error" },
          {
            status: 500
          }
        )
      }
    }

    /**
     * Log the HTTP response status
     */
    logger.info(
      `⬅️  ${method} ${url} (${response.status}) took ${
        new Date().getTime() - startTime.getTime()
      }ms`
    )

    return response
  }
}
