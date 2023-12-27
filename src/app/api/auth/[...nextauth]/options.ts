import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/userModels";
import { connect } from "@/db/dbConfig";
import bcryptjs from "bcryptjs";
import User from "@/models/userModels";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
          role: profile.role ? profile.role : "User",
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "name",
          type: "text",
        },
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
        role: {
          label: "role",
          type: "text",
        },
        image: {
          label: "image",
          type: "text",
        },
      },
      async authorize(credentials: any): Promise<any | null> {
        try {
          console.log(credentials);
          connect();
          // const { username, password } = credentials;

          // // Find user by email in your MongoDB database
          // const user = await User.findOne({ email: username });

          // // If the user doesn't exist or the password is incorrect, return null
          // if (!user) {
          //   return Promise.resolve(false);
          // }
          // if (user) {
          //   const validPassword = await bcryptjs.compare(
          //     password,
          //     user.password
          //   );
          //   if (!validPassword) {
          //     return Promise.resolve(false);
          //   }
          //   return Promise.resolve(user);
          // }
        } catch (err: any) {
          console.log("email auth error");
        }
      },
    }),
  ],
  callbacks: {
    async signIn(profile): Promise<any | null> {
      console.log(profile);
      connect();
      try {
        // Check if the user already exists in your database
        const existingUser = await User.findOne({ email: profile.user.email });

        if (!existingUser) {
          const newUser = new User({
            name: profile.user.name,
            email: profile.user.email,
            role: profile.user.role,
            password: "Google User",
          });

          // Save the new user to the database
          await newUser.save();
        }

        return Promise.resolve(true);
      } catch (error) {
        console.error("Google sign-in error:", error);
        return Promise.resolve(false);
      }
    },

    jwt({ token, user }) {
      return { ...token, ...user };

    },
    session({ session, token }) {
      session.user.role = token.role;
      console.log(session)
      console.log(session.user.role)
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
