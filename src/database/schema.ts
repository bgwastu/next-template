import { pgTable, varchar } from "drizzle-orm/pg-core";

export const test = pgTable("tests", {
  text: varchar("text"),
});
