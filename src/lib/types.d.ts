import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"
import type UserType from "./user"

declare module "next-auth" {
  interface Session {
    user: UserType & DefaultSession["User"]
  }

  interface User {
    name?: string
    image?: string
    email?: string
    role?: string
    password?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    name?: string
    image?: string
    email?: string
    role?: string
    password?: string
  }
}