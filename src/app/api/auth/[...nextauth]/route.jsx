import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "../../../../../service/auth/login.service";

export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      async authorize(data) {
        const userData = {
          email: data?.email,
          password: data?.password,
        };

        const userInfo = await loginService(userData);
        if (userInfo?.status === 400) {
          throw new Error(userInfo?.detail);
        }
        const { payload } = userInfo;
        return payload;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};
const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
