import {
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp
} from "drizzle-orm/pg-core"

import { citext } from "./custom-types/citext"

import type { AdapterAccount } from "@auth/core/adapters"

/**
 * Modify the default Auth.js tables to be snake case and plural.
 */
export const pgTable = pgTableCreator((name) => {
  switch (name) {
    case "user":
      return "users"
    case "account":
      return "accounts"
    case "session":
      return "sessions"
    case "verificationToken":
      return "verification_tokens"
    default:
      return name
  }
})

export const usersTable = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: citext("email").notNull().unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image")
})

export const accountsTable = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => usersTable.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state")
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId)
  })
)

export const sessionsTable = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull()
})

export const verificationTokensTable = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull()
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token)
  })
)
