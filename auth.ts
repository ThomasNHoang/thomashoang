import NextAuth from "next-auth";
import { prisma } from "@/prisma";
import authConfig from "@/auth.config";
import { getUserById } from "@/lib/user";
import { Adapter } from 'next-auth/adapters';
import { clearStaleTokens } from "@/lib/auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { Font as FontEnum } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Nodemailer from "next-auth/providers/nodemailer";
const serverConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_EMAIL_PASS
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google({
      allowDangerousEmailAccountLinking: true // Only wwith magic link so safe
    }),
    Github({
      allowDangerousEmailAccountLinking: true
    }),
    Nodemailer({
      server: serverConfig,
      from: `Email Service <${process.env.SMTP_EMAIL}>`
    })
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async signIn({ user }) {
      const userData = await prisma.userData.findUnique({
        where: {
          userId: user.id
        }
      })

      const hasUserData = !!userData;
      console.log(hasUserData)

      if (!hasUserData) {
        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            userData: {
              create: {
                font: FontEnum.INTER
              }
            }
          }
        })
      }

      return true;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      clearStaleTokens();

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.data = {
        font: existingUser.userData?.font
      }


      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        if (token.sub) {
          session.user.id = token.sub;
        }
        if (token.role) {
          session.user.role = token.role;
        }

        if (token.data) {
          session.user.data = token.data;
        }

        session.user.name = token.name;
        session.user.email = token.email;
      }

      return session;
    }
  }
})