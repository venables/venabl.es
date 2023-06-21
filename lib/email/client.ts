import { Resend } from "resend"

let client: Resend | null = null

export function emailClient() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY)
  }

  return client
}
