import { SessionProvider } from 'next-auth/react'
import React from 'react'

export default function SessionWrapper( { children }: {children:any} ) {
  return (
        <SessionProvider>
            {children}
        </SessionProvider>
  )
}
