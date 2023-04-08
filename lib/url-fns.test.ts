import { appHost, fullURL } from "./url-fns"

test("appHost() returns the app host", () => {
  process.env.HOST = "https://example.com"
  expect(appHost()).toBe("https://example.com")
  delete process.env.HOST
})

test("appHost() can exclude the protocol", () => {
  process.env.HOST = "https://example.com"
  expect(appHost(false)).toBe("example.com")
  delete process.env.HOST
})

test("fullURL() returns a full URL by appending the path to the host", () => {
  process.env.HOST = "https://example.com"
  expect(fullURL("/path").toString()).toBe("https://example.com/path")
  delete process.env.HOST
})
