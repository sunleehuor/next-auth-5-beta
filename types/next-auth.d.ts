import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
        email: string,
        password: string,
        accessToken: string,
        refreshToken: string,
        address: string
    }
  }
}