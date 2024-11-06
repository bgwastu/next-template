import * as schema from "@/database/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

if (!process.env.DATABASE_URL) {
  throw new Error("Missing DATABASE_URL");
}

function singleton<Value>(name: string, value: () => Value): Value {
  const globalAny: any = global;
  globalAny.__singletons = globalAny.__singletons || {};

  if (!globalAny.__singletons[name]) {
    globalAny.__singletons[name] = value();
  }

  return globalAny.__singletons[name];
}

function createDatabaseConnection() {
  return drizzle(postgres(process.env.DATABASE_URL!), { schema });
}

const db = singleton("db", createDatabaseConnection);

export { db, schema };
