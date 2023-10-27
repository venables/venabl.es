import {
  type ApiResponse,
  type ApiResponseError,
  apiResponseErrorSchema
} from "./types"

/**
 *
 */
function isApiResponseError(
  response: Response,
  json: unknown
): json is ApiResponseError {
  return !response.ok && apiResponseErrorSchema.safeParse(json).success
}

/**
 *
 */
export async function apiFetch<T>(url: string, options?: RequestInit) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json"
    }
  })

  const json = (await response.json()) as ApiResponse<T>

  /**
   * If we know the response is an APIResponseError type, throw an error
   */
  if (isApiResponseError(response, json)) {
    throw new Error(json.error)
  }

  /**
   * If the response is not ok, throw an error
   */
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return json.data
}
