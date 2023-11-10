import { type Adapter } from "@auth/core/adapters"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { and, eq } from "drizzle-orm"

import { db } from "./client"
import {
  accountsTable,
  sessionsTable,
  usersTable,
  verificationTokensTable
} from "../../drizzle/schema"

const drizzleAdapter = DrizzleAdapter(db, undefined, {
  users: usersTable,
  accounts: accountsTable,
  sessions: sessionsTable,
  verificationTokens: verificationTokensTable
})

/**
 * This is a wrapper around the drizzle adapter to properly await the database
 * query.
 *
 * This can be removed when the following PR is released:
 * https://github.com/nextauthjs/next-auth/pull/8379
 *
 * For more info:
 * https://github.com/nextauthjs/next-auth/issues/8377#issuecomment-1694720111
 */
export const adapter: Adapter = {
  ...drizzleAdapter,
  async getUserByAccount(providerAccountId) {
    const results = await db
      .select()
      .from(accountsTable)
      .leftJoin(usersTable, eq(usersTable.id, accountsTable.userId))
      .where(
        and(
          eq(accountsTable.provider, providerAccountId.provider),
          eq(
            accountsTable.providerAccountId,
            providerAccountId.providerAccountId
          )
        )
      )

    return results[0]?.users ?? null
  }
}
