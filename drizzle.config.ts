import { env } from "bun";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  driver: "turso",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL!,
    authToken: env.DATABASE_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});
