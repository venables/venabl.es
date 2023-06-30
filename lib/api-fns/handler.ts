import { NextResponse } from "next/server"
import { ZodError } from "zod"

import { logger } from "@/lib/logger"

import { HttpError } from "./errors"

import type {
  ApiResponse,
  ApiResponseError,
  NextJsError,
  NextRouteHandler
} from "./types"
import type { ZodIssue } from "zod"

/**
 * Determines if a given object is a Next.js error, such as
 * one thrown from next/navigation in notFound
 */
function isNextError(e: unknown): e is NextJsError {
  return (
    e instanceof Error &&
    "digest" in e &&
    typeof e.digest === "string" &&
    e.digest.startsWith("NEXT_")
  )
}

function buildZodErrorResponse(
  error: ZodError
): ApiResponseError & { issues: ZodIssue[] } {
  return {
    error: "Validation Error",
    issues: error.issues
  }
}

function buildErrorResponse(error: Error): ApiResponseError {
  return {
    error: error.message
  }
}

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
    const method = request.method
    const url = request.nextUrl.pathname

    /**
     * Log the HTTP request
     */
    logger.info(`➡️  ${method} ${url} ...`)

    let response: NextResponse<ApiResponse<T>>

    try {
      response = await routeHandler(request, context)
    } catch (e) {
      /**
       * Let Next.js handle its own errors
       */
      if (isNextError(e)) {
        throw e
      }

      /**
       * `ZodError` types occur when the request body is invalid, so we
       * treat these the same as a `ValidationError`
       */
      if (e instanceof ZodError) {
        response = NextResponse.json(buildZodErrorResponse(e), {
          status: 400
        })
      } else if (e instanceof HttpError) {
        response = NextResponse.json(buildErrorResponse(e), {
          status: e.status
        })
      } else {
        logger.error(`Unhandled API Error: ${method} ${url}`, e)
        response = NextResponse.json(
          { error: "Internal server error" },
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
