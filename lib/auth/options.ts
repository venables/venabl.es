/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

import { siteConfig } from "@/config"
import { prisma } from "@/lib/database"
import { fullURL } from "@/lib/utils"

import { postmarkClient } from "../mail"

import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  /**
   * https://authjs.dev/reference/adapter/prisma
   */
  adapter: PrismaAdapter(prisma),
  /**
   * https://next-auth.js.org/providers/
   */
  providers: [
    /**
     *
     */
    EmailProvider({
      from: process.env.SMTP_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await prisma.user.findUnique({
          where: {
            email: identifier
          },
          select: {
            emailVerified: true
          }
        })

        const templateAlias = user?.emailVerified
          ? process.env.POSTMARK_SIGN_IN_TEMPLATE_ALIAS
          : process.env.POSTMARK_ACTIVATION_TEMPLATE_ALIAS

        if (!templateAlias) {
          throw new Error("Missing template id")
        }

        const result = await postmarkClient().sendEmailWithTemplate({
          To: identifier,
          From: provider.from as string,
          TemplateAlias: templateAlias,
          TemplateModel: {
            product_url: fullURL(),
            product_name: siteConfig.name,
            name: identifier,
            action_url: url,
            company_name: siteConfig.company.name,
            company_address: siteConfig.company.link
          },
          Headers: [
            {
              // Set this to prevent Gmail from threading emails.
              // See https://stackoverflow.com/questions/23434110/force-emails-not-to-be-grouped-into-conversations/25435722.
              Name: "X-Entity-Ref-ID",
              Value: `${Date.now()}`
            }
          ]
        })

        if (result.ErrorCode) {
          throw new Error(result.Message)
        }
      }
    }),
    /**
     * https://next-auth.js.org/providers/google
     */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  /**
   * https://next-auth.js.org/configuration/options#pages
   */
  pages: {
    signIn: "/signin"
  },
  /**
   * https://next-auth.js.org/configuration/options#secret
   */
  secret: process.env.NEXTAUTH_SECRET,
  /**
   * https://next-auth.js.org/configuration/options#session
   */
  session: {
    strategy: "jwt"
  },
  /**
   * https://next-auth.js.org/configuration/options#callbacks
   */
  callbacks: {
    /**
     * Use the signIn() callback to control if a user is allowed to sign in.
     *
     * https://next-auth.js.org/configuration/callbacks#sign-in-callback
     */
    async signIn(/* { user, account, profile, email, credentials } */) {
      return Promise.resolve(true)
    },
    /**
     * The redirect callback is called anytime the user is redirected to a
     * callback URL (e.g. on signin or signout).
     *
     * https://next-auth.js.org/configuration/callbacks#redirect-callback
     */
    async redirect({ baseUrl /*, url */ }) {
      return Promise.resolve(baseUrl)
    },
    /**
     * The session callback is called whenever a session is checked. By
     * default, only a subset of the token is returned for increased security.
     * If you want to make something available you added to the token (like
     * access_token and user.id from above) via the jwt() callback, you have
     * to explicitly forward it here to make it available to the client.
     *
     * https://next-auth.js.org/configuration/callbacks#session-callback
     */
    async session({ session /* token , user */ }) {
      return Promise.resolve(session)
    },
    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at
     * sign in) or updated (i.e whenever a session is accessed in the client).
     * The returned value will be encrypted, and it is stored in a cookie.
     *
     * https://next-auth.js.org/configuration/callbacks#jwt-callback
     */
    async jwt({ token, user /*, account, profile, trigger */ }) {
      if (user) {
        token.id = user.id
        token.email = user.email
      }

      return Promise.resolve(token)
    }
  }
}
