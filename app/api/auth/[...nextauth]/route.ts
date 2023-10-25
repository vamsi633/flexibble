import nextAuth from "next-auth";
import { authOptions } from "@/lib/session";

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
