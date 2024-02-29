// @ts-nocheck
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/userModels";

import bcryptjs from "bcryptjs";
import User from "@/models/userModels";
import { connectToDatabase } from "@/db/dbConfig";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile: async (profile) => {
        connectToDatabase();
        try {
          const userInDatabase = await User.findOne(
            { email: profile.email },
            { maxTimeMS: 15000 }
          );

          // Perform null check on userInDatabase
          const stripeCustomerId = userInDatabase
            ? userInDatabase.stripe_customer_id || ""
            : "";

          return {
            id: profile.sub,
            name: `${profile.given_name} ${profile.family_name}`,
            email: profile.email,
            image: profile.picture,
            role: userInDatabase ? userInDatabase.role : "User",
            stripe_customer_id: stripeCustomerId,
          };
        } catch (error) {
          throw new Error("Error parsing Google profile");
        }
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any): Promise<any | null> {
        try {
          connectToDatabase();
          const { email, password } = credentials;

          // Find user by email in your MongoDB database
          const user = await User.findOne({ email: email });
          if (!user) {
            return Promise.resolve(false);
          }
          if (user) {
            const validPassword = await bcryptjs.compare(
              password,
              user.password
            );
            if (!validPassword) {
              return Promise.resolve(false);
            }
            return {
              name: user.name,
              image: user.image,
              email: user.email,
              role: user.role,
              password: user.password,
              stripe_customer_id: user.stripe_customer_id,
            };
          }
        } catch (err: any) {
          ("");
        }
      },
    }),
  ],
  callbacks: {
    async signIn(profile): Promise<any | null> {
      connectToDatabase();
      try {
        // Check if the user already exists in your database
        let existingUser = await User.findOne({ email: profile.user.email });


        if (!existingUser) {
          const newUser = new User({
            name: profile.user.name,
            image: profile.user.image || profile?.profile?.image,
            email: profile.user.email,
            role: profile.user.role,
            stripe_customer_id: "",
            password: "Google User",
          });

          // Save the new user to the database
          await newUser.save();

          // Update the existingUser with the newly created user
          existingUser = newUser;
        }

        return {
          name: existingUser.name,
          image: existingUser.image,
          email: existingUser.email,
          role: existingUser.role,
          password: existingUser.password,
          stripe_customer_id: existingUser.stripe_customer_id,
        };
      } catch (error) {

        return Promise.resolve(false);
      }
    },

    jwt({ token, user }) {
      return { ...token, ...user };
    },
    session({ session, token }) {
      session.user.role = token?.role || session.user.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
