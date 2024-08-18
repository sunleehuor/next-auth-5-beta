import { auth, signIn, signOut } from "@/auth"
import Link from "next/link"
 
export default async function Home() {
  const session  = await auth()
  // console.log(session?.user)
  return (
    <>
        {
          session ? (
            <form
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <h1>Email: {session.user.email}</h1>
            <h1>AccessToken: {session.user.accessToken}</h1>
            <h1>Expire: {new Date(session.expires).getHours()} {new Date(session.expires).getMinutes()} {new Date(session.expires).getSeconds()}</h1>
            <button type="submit">Sign Out</button>
            <Link href={"/login"} >Go</Link>
          </form>
      
          ): (
            <>
            <form
                action={async () => {
                  "use server"
                  await signIn("github")
                }}
                >
                <button type="submit">Signin with GitHub</button>
              </form>
              {/*  */}
              <form
            action={async () => {
              "use server"
              await signIn()
            }}
          >
            <button type="submit">Signin with Cre</button>
          </form>
            </>
          )
        }
    </>
    
  )
} 