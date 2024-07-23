import {
  integer,
  sqliteTable,
  text,
  primaryKey,
  index,
} from "drizzle-orm/sqlite-core";
import type { AdapterAccount } from "next-auth/adapters";
import { randomUUID } from "crypto";

/**
 * NEXT-AUTH TABLES
 *
 * The following tables were created specifically for the next-auth drizzle adapter.
 * I often will never modify these tables other than appending additional columns
 * to the user table.  For example, I added `github` to this table to track the
 * github username of the user.
 *
 * Another approach would be to make a separate userMetadata table and just
 * reference them together using the primary key of the users table.
 *
 * https://authjs.dev/getting-started/adapters/drizzle
 */

export const users = sqliteTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "timestamp_ms" }),
  image: text("image"),
  github: text("github"),
});

export const accounts = sqliteTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    userIdIdx: index("Account_userId_index").on(account.userId),
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = sqliteTable(
  "session",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => randomUUID()),
    sessionToken: text("sessionToken").notNull().unique(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (s) => ({
    userIdIdx: index("Session_userId_index").on(s.userId),
  })
);

export const verificationTokens = sqliteTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: integer("expires", { mode: "timestamp_ms" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

/**
 * APP SPECIFIC TABLES
 *
 * The tables below are what I call application specific.  These are tables I add
 * in order to achieve the user functionality I need for my application.
 */

/**
 * purchases - this table is for traching when a successfully purchased via stripe.
 *
 * See line 52 of src/app/api/webhooks/stripe/route.ts to see how this is inserted
 * after the stripe webhook successfully comes in.
 */
export const purchases = sqliteTable("purchase", {
  paymentIntentId: text("paymentIntentId").notNull(),
  email: text("email").notNull().primaryKey(),
});

/**
 * newsletters - although the emails for the newsletter are tracked in Resend, it's beneficial to also track
 * sign ups in your own database in case you decide to move to another email provider.
 * The last thing you'd want is for your email list to get lost due to a
 * third party provider shutting down or dropping your data.
 */
export const newsletters = sqliteTable("newsletter", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  email: text("email").notNull().unique(),
});

/**
 * TYPES
 *
 * You can create and export types from your schema to use in your application.
 * This is useful when you need to know the shape of the data you are working with
 * in a component or function.
 */
export type Purchases = typeof purchases.$inferSelect;
