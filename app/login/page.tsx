import { auth, signIn } from '@/auth'
import Link from 'next/link'
import React from 'react'

export default async function Login() {
    const session = await auth()
    return (
    <div>
        <h1>{ session?.user?.email }</h1>
        <Link href={"/"} >Back</Link>
        <button onClick={ async (  ) => {
          "use server"
          const response = await fetch("http://localhost:3000/api/test")
          console.log( response )
        }} >Call api</button>
    </div>
  )
}
