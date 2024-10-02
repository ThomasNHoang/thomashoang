import NextAuth from "next-auth";
import { prisma } from "@/prisma";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  }
})