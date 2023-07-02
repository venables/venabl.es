import { env } from "@/env"

import { appHost, fullURL } from "./url-fns"

test("appHost() returns the app host", () => {
  const oldHost = env.NEXT_PUBLIC_HOST

  env.NEXT_PUBLIC_HOST = "https://example.com"
  expect(appHost()).toBe("https://example.com")

  // cleanup
  env.NEXT_PUBLIC_HOST = oldHost
})

test("appHost() can exclude the protocol", () => {
  const oldHost = env.NEXT_PUBLIC_HOST

  env.NEXT_PUBLIC_HOST = "https://example.com"
  expect(appHost(false)).toBe("example.com")

  // cleanup
  env.NEXT_PUBLIC_HOST = oldHost
})

test("fullURL() returns a full URL by appending the path to the host", () => {
  const oldHost = env.NEXT_PUBLIC_HOST

  env.NEXT_PUBLIC_HOST = "https://example.com"
  expect(fullURL("/path").toString()).toBe("https://example.com/path")

  // cleanup
  env.NEXT_PUBLIC_HOST = oldHost
})
