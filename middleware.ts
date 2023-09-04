export { auth as middleware } from "@/auth"

export const config = {
  /**
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon file)
   *
   * See more: https://nextjs.org/docs/pages/building-your-application/routing/middleware#matcher
   *
   * matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
   */
}
