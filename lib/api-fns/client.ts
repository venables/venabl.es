import type { ApiResponse, ApiResponseError } from "./types"

/**
 *
 */
function isErrorResponse(
  response: Response,
  json: unknown
): json is ApiResponseError {
  return (
    !response.ok &&
    typeof json === "object" &&
    json !== null &&
    "error" in json &&
    typeof json.error === "string"
  )
}

/**
 *
 */
export const apiFetch = async <T = void>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options?.headers,
      "Content-Type": "application/json"
    }
  })

  const json = (await response.json()) as ApiResponse<T>

  if (isErrorResponse(response, json)) {
    throw new Error(json.error)
  }

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return json
}
