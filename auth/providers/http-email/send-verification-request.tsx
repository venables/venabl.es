import { eq } from "drizzle-orm"

import SignInEmail from "@/emails/signin-email"
import { env } from "@/env"
import { db, users } from "@/lib/db"
import { emailClient } from "@/lib/email"

import type { SendVerificationRequestParams } from "@auth/core/providers"

export async function sendVerificationRequest({
  identifier: email,
  url
}: SendVerificationRequestParams) {
  const existingUsers = await db
    .select({
      emailVerified: users.emailVerified
    })
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  const user = existingUsers[0]

  await emailClient().sendEmail({
    from: env.EMAIL_FROM,
    to: email,
    subject: user?.emailVerified
      ? "Sign in to StartKit"
      : "Welcome to StartKit!",
    react: (
      <SignInEmail
        emailAddress={email}
        existingUser={Boolean(user?.emailVerified)}
        url={url}
      />
    )
  })
}
