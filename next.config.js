const { createSecureHeaders } = require("next-secure-headers")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }]
  },
  poweredByHeader: false
}

const withMDX = require("@next/mdx")()
module.exports = withMDX(nextConfig)
