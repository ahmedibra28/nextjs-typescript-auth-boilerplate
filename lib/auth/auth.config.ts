import type { NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";

export default {
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",
  providers: [GitHub],
  pages: {
    // signIn: "/signin",
    // signOut: "/signout",
  },
} satisfies NextAuthConfig;
