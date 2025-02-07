import { createSafeActionClient } from "next-safe-action";

export const actionClient = createSafeActionClient();
// middleware to get the user from the session
// .use(async ({ next }) => {
//   const user = await getCurrentUser();

//   if (!user) {
//     throw new Error("User not found!");
//   }

//   return next({ ctx: { user } });
// });
