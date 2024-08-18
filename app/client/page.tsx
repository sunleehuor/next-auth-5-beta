"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

export default function page() {
    const session = useSession()

  return (
    <div>Client: {session.data?.user.email}</div>
  )
}
