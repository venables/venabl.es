import Link from "next/link"
import { signOut } from "next-auth/react"

import { Ship } from "@/components/icons"
import { getCurrentUser } from "@/lib/auth/session"
import { clsw } from "@/lib/utils"

import { SignOutButton } from "./SignOutButton"

export async function Header() {
  const user = await getCurrentUser()

  return (
    <header className="container sticky top-0 bg-white dark:bg-neutral-900">
      <div className="flex h-16 items-center justify-between border-b border-b-neutral-200 py-4 dark:border-b-neutral-700">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-colors hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            <Ship className="transition-transform group-hover:scale-110" />
            <span className="hidden font-bold sm:inline-block">StartKit</span>
          </Link>
        </div>

        <div>
          {user ? (
            <SignOutButton />
          ) : (
            <Link
              href="/api/auth/signin"
              className={clsw(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 disabled:opacity-50 dark:focus:ring-neutral-400 disabled:pointer-events-none dark:focus:ring-offset-neutral-900 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800",
                "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-50 dark:text-neutral-900",
                "h-9 px-2 rounded-md"
              )}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
