"use client"

import Link from "next/link"
import { signOut } from "next-auth/react"

import { clsw } from "@/lib/utils"

export function SignOutButton() {
  return (
    <Link
      href="/"
      onClick={(event) => {
        event.preventDefault()
        signOut({
          callbackUrl: `${window.location.origin}/api/auth/signin`
        })
      }}
      className={clsw(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 disabled:opacity-50 dark:focus:ring-neutral-400 disabled:pointer-events-none dark:focus:ring-offset-neutral-900 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800",
        "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-900",
        "h-9 px-2 rounded-md"
      )}
    >
      Sign Out
    </Link>
  )
}
