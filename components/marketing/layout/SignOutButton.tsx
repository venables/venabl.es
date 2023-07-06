"use client"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export function SignOutButton() {
  return (
    <Button
      onClick={(event) => {
        event.preventDefault()
        void signOut({
          callbackUrl: `${window.location.origin}/api/auth/signin`
        })
      }}
      size="sm"
      className="px-4"
    >
      Sign Out
    </Button>
  )
}
