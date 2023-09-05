import NextAuth from "next-auth"

import authConfig from "@/auth.config"
import { HttpEmailProvider } from "@/lib/auth/http-email-provider"

export const {
  handlers: { GET, POST }
} = NextAuth({
  ...authConfig,
  /**
   * Add the HTTP email provider to the list of providers. We do this because
   * the 'react-email' package imports react-dom/server, which is causing issues
   * with Next.js's server-side rendering.
   */
  providers: [...authConfig.providers, HttpEmailProvider]
})

// If you don't want an email provider, you can make this 'edge'
export const runtime = "nodejs"
