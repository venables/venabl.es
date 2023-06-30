import type { NextRequest, NextResponse } from "next/server"

export type NextJsError = Error & {
  digest: `NEXT_${string}`
}

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
 * https://nextjs.org/docs/app/api-reference/file-conventions/route
 */
export type NextRouteHandler<T = void, U = void> = (
  // https://nextjs.org/docs/app/api-reference/file-conventions/route#request-optional
  request: NextRequest,
  // https://nextjs.org/docs/app/api-reference/file-conventions/route#context-optional
  context: U
) => NextResponse<T> | Promise<NextResponse<T>>
