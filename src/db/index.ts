import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

declare global {
  var _db: ReturnType<typeof drizzle> | undefined;
}

const poolConnection = postgres(process.env.DATABASE_URL);
const db = globalThis._db || drizzle(poolConnection, { schema });

if (process.env.NODE_ENV !== "production") {
  globalThis._db = db;
}

export { db, schema };
