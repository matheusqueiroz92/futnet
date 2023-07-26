import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient();

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
const secret = process.env.TOKEN_SECRET as string;
const adapter = PrismaAdapter(prisma) as Adapter;

export const authOptions = {
  adapter,
  secret,
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
  ],
}

export default NextAuth(authOptions);