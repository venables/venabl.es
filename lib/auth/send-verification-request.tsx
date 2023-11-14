import { eq } from "drizzle-orm"
import { type SendVerificationRequestParams } from "next-auth/providers"

import SignInEmail from "@/emails/signin-email"
import { env } from "@/env"
import { db, usersTable } from "@/lib/db"
import { emailClient } from "@/lib/email"

export async function sendVerificationRequest({
  identifier: email,
  url
}: SendVerificationRequestParams) {
  const users = await db
    .select({
      emailVerified: usersTable.emailVerified
    })
    .from(usersTable)
    .where(eq(usersTable.email, email))
    .limit(1)

  const user = users[0]

  await emailClient().emails.send({
    from: env.EMAIL_FROM,
    to: email,
    headers: {
      "X-Entity-Ref-ID": Date.now().toString()
    },
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
