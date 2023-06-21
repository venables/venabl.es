import { render } from "@react-email/render"

import SignInEmail from "@/emails/SignInEmail"

import type { SignInEmailProps } from "@/emails/SignInEmail"
import type { Options } from "@react-email/render"

export function renderSignInEmail(
  props: SignInEmailProps,
  renderOptions: Options = {}
) {
  return render(<SignInEmail {...props} />, renderOptions)
}
