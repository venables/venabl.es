import "./env/env.mjs"

import { createSecureHeaders } from "next-secure-headers"
import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Toggle experimental features
   */
  experimental: {},
  /**
   * Disable the `x-powered-by: nextjs` header
   */
  poweredByHeader: false,
  /**
   * Custom headers
   */
  async headers() {
    return [
      /**
       * Add security headers to all routes
       */
      { source: "/(.*)", headers: createSecureHeaders() }
    ]
  }
}

export default withContentlayer(nextConfig)
