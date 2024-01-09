---
title: Introducing `typed-route-handler`
date: 2024-01-09
icon: 💪
---

I've been using Next.js professionally for years and years, and one thing that keeps coming up is making sure our endpoints are type-safe.

With Next's app directory, and specifically the introduction of route handlers, which are built on native web standards, I felt there was a gap. A need for type-safety in some of my most critical code: My API endpoints.

Enter `typed-route-handler`

```sh
npm i typed-route-handler
```

Here's an example of how it works

```ts
import { handler } from 'typed-route-handler'

type ResponseData = {
  result: string
  over: number
}

export const GET = handler<ResponseData>(async (req) => {
  return NextResponse.json({
    result: "this response is type-checked",
    over: 9000
  })
})
```

It's like **the missing API endpoint layer for Next.js**

By simply wrapping your existing API routes with `handler`, you get a bunch for free:

- **Response type-checking:** Make sure your API endpoints are honoring their side of the contract.
- **Request Parameter type-checking:** Your route can be defined with a `zod` schema, allowing you to validate and coerce URL parameters. You can validate a token is a uuid/cuid, or even coerce an ID to a number.
- **Deep `zod` compatibility:** When you call a zod schema's `parse` method within a handler, any exceptions are caught and returned as a `400 Validation Error`
- **Helpful error methods:** Following Next's `notFound()` standard, we exposed `unauthorized()` (HTTP 401) and `validationError()` (HTTP 400) methods, which are of type `never` so they can be used anywhere in the handler.
- And, as a bonus, you get request logging and timing.

[Check out the README for more examples](https://github.com/venables/typed-route-handler), and let me know what you think!
