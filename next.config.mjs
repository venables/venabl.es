import "./env/env.mjs"

import { createSecureHeaders } from "next-secure-headers"
import nextMDX from "@next/mdx"
import { withContentlayer } from "next-contentlayer"

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Toggle experimental features
   */
  experimental: {
    mdxRs: true
  },
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

const withMDX = nextMDX()

export default withContentlayer(withMDX(nextConfig))
