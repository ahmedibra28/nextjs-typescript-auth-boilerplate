import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export default {
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  providers: [GitHub, Google],
  pages: {
    signIn: "/sign-in",
  },
} satisfies NextAuthConfig;
