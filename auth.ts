import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    github,
    Credentials({
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          email: {required: true},
          password: {required: true},
        },
        authorize: async (credentials):Promise<any> => {
          let user = null

          console.log("here")
          if( credentials ) user = { ...credentials, accessToken: "asdsad", refreshToken: 'asdasd' }

          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.")
          }

          if( user?.email != "sunleehuor@gmail.com" && user?.password != "1234" ){
            throw new Error("User not found.")
          }
   
          // return user object with their profile data
          return user
        },
    })
  ],
  session: {
    strategy: "jwt",
    maxAge:  10
  },
  callbacks: {
    authorized: async ({ auth }):Promise<any> => {
      console.log( new Date(auth?.expires).toLocaleDateString() )
      console.log( new Date(auth?.expires).toLocaleTimeString() )
        // Logged in users are authenticated, otherwise redirect to login page
        console.log("Authorized")
        if( auth ){
            return auth
        }
        return null
      },
  },
})