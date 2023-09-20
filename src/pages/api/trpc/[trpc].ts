import { createNextApiHandler } from "@trpc/server/adapters/next";

import { env } from "raffle2/env.mjs";
import { appRouter } from "raffle2/server/api/root";
import { createTRPCContext } from "raffle2/server/api/trpc";

// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
