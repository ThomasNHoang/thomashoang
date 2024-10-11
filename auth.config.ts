import { NextAuthConfig } from "next-auth";

export default {
  pages: {
    signIn: "/auth/login",
    verifyRequest: "/auth/success",
    error: "/auth/error",
    newUser: "/onboarding",
  },
  providers: [],
} satisfies NextAuthConfig;
