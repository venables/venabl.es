import type { NextRequest, NextResponse } from "next/server"

/**
 * Base API success response, without any data
 */
export type ApiResponseSuccessEmpty = {
  status: "ok"
}

/**
 * API success response with a data property
 */
export type ApiResponseSuccessWithData<T> = ApiResponseSuccessEmpty & {
  data: T
}

/**
 * The API Success response, which will enforce having a `data` attribute if
 * defined, otherwise, it will enforce excluding the data property.
 */
export type ApiResponseSuccess<T> = T extends void
  ? ApiResponseSuccessEmpty
  : ApiResponseSuccessWithData<T>

/**
 * The API Error response
 */
export type ApiResponseError = {
  status: "error"
  error: string
}

export type NextRouteHandler<T = unknown> = (
  request: NextRequest
) => NextResponse<T> | Promise<NextResponse<T>>

export type ApiResponse<T = void> = ApiResponseSuccess<T> | ApiResponseError
