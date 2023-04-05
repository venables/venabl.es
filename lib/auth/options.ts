import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"

import { prisma } from "@/lib/database"

import type { NextAuthOptions } from "next-auth"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    /**
     * https://next-auth.js.org/providers/google
     */
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt"
  },
  callbacks: {
    /**
     * Use the signIn() callback to control if a user is allowed to sign in.
     *
     * https://next-auth.js.org/configuration/callbacks#sign-in-callback
     */
    async signIn(/* { user, account, profile, email, credentials } */) {
      return true
    },
    /**
     * The redirect callback is called anytime the user is redirected to a
     * callback URL (e.g. on signin or signout).
     *
     * https://next-auth.js.org/configuration/callbacks#redirect-callback
     */
    async redirect({ baseUrl /*, url */ }) {
      return baseUrl
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
    async session({ session, token /*, user */ }) {
      return session
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

      return token
    }
  }
}
