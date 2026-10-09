import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

// NextAuth v4 App Router handler. Runtime is Node.js by default, which the
// Argon2id verification in `authorize` requires (no Edge runtime here).
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
