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
  },

  webpack: (config) => {
    /**
     * Disable noisy webpack logs for contentful.
     *
     * Notably: using `mjs` for next.config causes some benign warnings to be
     * logged to the console.
     * https://github.com/contentlayerdev/contentlayer/issues/313#issuecomment-1305424923
     */
    config.infrastructureLogging = {
      level: "error"
    }
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config
  }
}

export default withContentlayer(nextConfig)
