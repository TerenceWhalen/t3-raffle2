import NextAuth from "next-auth";

import { authOptions } from "raffle2/server/auth";

export default NextAuth(authOptions);
