import { defineConfig } from "drizzle-kit";
import { env } from "./src/env";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "turso",
  dbCredentials: {
    url: env.DATABASE_URL!,
    authToken: env.DATABASE_AUTH_TOKEN!,
  },
  migrations: {
    schema: "public",
  },
  verbose: true,
  strict: true,
});
