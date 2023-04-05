import NextAuth from "next-auth"

import { handler } from "@/lib/api-fns"
import { authOptions } from "@/lib/auth/options"

export default handler(async (req, res) => {
  return NextAuth(req, res, authOptions)
})
