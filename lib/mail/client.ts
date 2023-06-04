import { Client } from "postmark"

let client: Client | null = null

export function postmarkClient() {
  if (!client) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    client = new Client(process.env.POSTMARK_API_TOKEN!)
  }

  return client
}
