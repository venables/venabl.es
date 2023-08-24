import { eq } from "drizzle-orm"

import SignInEmail from "@/emails/signin-email"
import { db, users } from "@/lib/db"
import { emailClient } from "@/lib/email"

import type { SendVerificationRequestParams } from "next-auth/providers"

export async function sendVerificationRequest({
  identifier,
  url,
  provider
}: SendVerificationRequestParams) {
  const existingUsers = await db
    .select({
      emailVerified: users.emailVerified
    })
    .from(users)
    .where(eq(users.email, identifier))
    .limit(1)

  const user = existingUsers[0]

  await emailClient().sendEmail({
    from: provider.from,
    to: identifier,
    subject: user?.emailVerified
      ? "Sign in to StartKit"
      : "Welcome to StartKit!",
    react: (
      <SignInEmail
        emailAddress={identifier}
        existingUser={Boolean(user?.emailVerified)}
        url={url}
      />
    )
  })
}
