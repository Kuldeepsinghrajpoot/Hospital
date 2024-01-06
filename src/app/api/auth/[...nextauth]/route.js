import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/schema";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null;
          }
          return {
            ...user,
            name: user.name,
            email: user.email,
            id: user.id,
            role: user.role||'Admin',
          };
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name
        token.role = user.role
        token.email = user.email
        token.id = user.id
      }
    
      return token;
    },
  
    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.id = token.id
      };
      return session;
    },
    async signOut(user, account, profile) {
      // Your sign-out logic
      return "/login";
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: '/login'

  },
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
