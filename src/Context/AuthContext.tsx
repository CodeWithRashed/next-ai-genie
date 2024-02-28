"use client"
import { SessionProvider } from "next-auth/react"
import React from "react"

const AuthContext = ({children}:any) => {
  return (
    <div>
      <SessionProvider>
      <React.StrictMode>
      {children}
      </React.StrictMode>
      </SessionProvider>
    </div>
  )
}

export default AuthContext
