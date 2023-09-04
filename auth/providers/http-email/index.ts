import {
  type CommonProviderOptions,
  type EmailConfig
} from "@auth/core/providers"

import { sendVerificationRequest } from "./send-verification-request"

import type { Provider } from "@auth/core/providers"

type HttpEmailConfig = CommonProviderOptions & {
  sendVerificationRequest: EmailConfig["sendVerificationRequest"]
}

/**
 * This defines an HTTP email provider, which is used for sending verification
 * requests to the user's email.
 *
 * https://authjs.dev/guides/providers/email-http#introduction
 */
export const HttpEmailProvider: Provider = {
  id: "http-email",
  // @ts-expect-error Types are wrong
  type: "email",
  name: "Email",
  server: null,
  options: {},
  sendVerificationRequest
}
