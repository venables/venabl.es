import { sendVerificationRequest } from "./send-verification-request"

import type { Provider } from "@auth/core/providers"

/**
 * This defines an HTTP email provider, which is used for sending verification
 * requests to the user's email.
 *
 * https://authjs.dev/guides/providers/email-http#introduction
 */
export const HttpEmailProvider: Provider = {
  id: "http-email",
  // @ts-expect-error Provider["type"] doesn't allow email, but it should
  type: "email",
  sendVerificationRequest
}
