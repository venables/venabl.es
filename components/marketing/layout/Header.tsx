import { GithubIcon, HazeIcon } from "lucide-react"

import { Link } from "@/components/elements"
import { siteConfig } from "@/config"

import { SignOutButton } from "./SignOutButton"

type Props = {
  user?: { id?: string | null }
}

export function Header({ user }: Props) {
  return (
    <header className="container sticky top-0 z-10 mx-auto bg-white px-4 dark:bg-zinc-900">
      <div className="flex h-16 items-center justify-between border-b border-b-zinc-200 py-4 dark:border-b-zinc-700">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-colors hover:animate-pulse hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            <HazeIcon className="transition-transform group-hover:scale-110" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <Link href={siteConfig.links.github} className="px-2">
            <GithubIcon className="mx-auto" />
          </Link>
          {user ? (
            <SignOutButton />
          ) : (
            <Link href="/api/auth/signin" size="sm" className="px-4">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
