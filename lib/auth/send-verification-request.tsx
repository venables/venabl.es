import SignInEmail from "@/emails/SignInEmail"
import { prisma } from "@/lib/database"
import { emailClient } from "@/lib/email"

import type { SendVerificationRequestParams } from "next-auth/providers"

export async function sendVerificationRequest({
  identifier,
  url,
  provider
}: SendVerificationRequestParams) {
  const user = await prisma.user.findUnique({
    where: {
      email: identifier
    },
    select: {
      emailVerified: true
    }
  })

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
