/**
 * Generic HTTP error, which falls back to 500
 */
export class HttpError extends Error {
  status = 500

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Internal Error", ...args)
  }
}

/**
 * HTTP 400 Bad Request (aka Validation Error)
 */
export class ValidationError extends HttpError {
  status = 400

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Bad Request", ...args)
  }
}

/**
 * HTTP 401 Unauthorized
 */
export class UnauthorizedError extends HttpError {
  status = 401

  constructor(message?: string, ...args: never[]) {
    super(message ?? "Unauthorized", ...args)
  }
}

export function validationError(message?: string): never {
  throw new ValidationError(message)
}

export function unauthorized(message?: string): never {
  throw new UnauthorizedError(message)
}
