import { type NextRequest, type NextResponse } from "next/server"
import { type ZodIssue, z } from "zod"

const ZodIssueSchema = z.object({
  message: z.string(),
  path: z.array(z.string())
})

/**
 * The API Error Response
 */
export const apiResponseErrorSchema = z.object({
  ok: z.literal(false),
  error: z.string(),
  issues: z.array(ZodIssueSchema).optional()
})

export type ApiResponseError = Omit<
  z.infer<typeof apiResponseErrorSchema>,
  "issues"
> & {
  issues?: ZodIssue[]
}

/**
 * The API Success Response
 */
export const apiResponseSuccessSchema = z.object({
  ok: z.literal(true),
  data: z.unknown()
})

export type ApiResponseSuccess<T> = Omit<
  z.infer<typeof apiResponseSuccessSchema>,
  "data"
> & {
  data: T
}

/**
 *
 */
export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError

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
