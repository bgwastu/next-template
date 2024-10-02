import * as schema from "@/database/schema";
import { drizzle, NodePgClient } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let connection: NodePgClient;

if (process.env.NODE_ENV === "production") {
  connection = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  const globalConnection = global as typeof globalThis & {
    connection: NodePgClient;
  };

  if (!globalConnection.connection) {
    globalConnection.connection = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }

  connection = globalConnection.connection;
}

export const db = drizzle(connection, { schema });
