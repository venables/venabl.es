import type { NextRequest, NextResponse } from "next/server"

/**
 * The API Error response
 */
export type ApiResponseError = {
  error: string
}

/**
 *
 */
export type ApiResponse<T> = T | ApiResponseError

/**
 *
 */
export type NextRequestContext<T> = {
  params: T
}

/**
 * The Context parameter for route handlers, which is currently an optional
 * `params` object.
 *
 * See: https://nextjs.org/docs/app/api-reference/file-conventions/route#context-optional
 */
export type NextRouteContext<T = undefined> = {
  params: T
}

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/route
 */
export type NextRouteHandler<T = void, U = NextRouteContext> = (
  // https://nextjs.org/docs/app/api-reference/file-conventions/route#request-optional
  request: NextRequest,
  context: U
) => NextResponse<T> | Promise<NextResponse<T>>
