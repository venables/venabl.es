import { type NextRequest, type NextResponse } from "next/server"
import { type ZodIssue } from "zod"

/**
 * The API Error response
 */
export interface ApiResponseError {
  ok: false
  error: string
  issues?: ZodIssue[]
}

export interface ApiResponseSuccess<T> {
  ok: true
  data: T
}

/**
 *
 */
export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError

/**
 *
 */
export interface NextRequestContext<T> {
  params: T
}

/**
 * The Context parameter for route handlers, which is currently an optional
 * `params` object.
 *
 * See: https://nextjs.org/docs/app/api-reference/file-conventions/route#context-optional
 */
export interface NextRouteContext<T = undefined> {
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
