import "dotenv/config";

import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma.db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async session({ session }: any) {
      const users = await prisma.user.findUnique({
        where: {
          email: session.user.email!,
        },
      });
      session.user.role = users?.role;
      return session;
    },
  },
  session: { strategy: "jwt" },
});
