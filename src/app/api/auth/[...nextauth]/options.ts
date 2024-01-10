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
        const userInDatabase = await User.findOne({ email: profile.email }, { maxTimeMS: 15000 });
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: userInDatabase ? userInDatabase.role : "User",
        };
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
              password:user.password,
            };
          }
        } catch (err: any) {
          console.log("email auth error");
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
        console.log("old user", existingUser?._doc);
    
        if (!existingUser) {
          const newUser = new User({
            name: profile.user.name,
            image: profile.user.image || profile?.profile?.image,
            email: profile.user.email,
            role: profile.user.role,
            password: "Google User",
          });
          console.log(newUser);
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
        };
      } catch (error) {
        console.error("Google sign-in error:", error);
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
