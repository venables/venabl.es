import { GithubIcon } from "lucide-react"
import Link from "next/link"

import { auth } from "@/auth"
import { Logo } from "@/components/icons/brand/logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"

import { UserNav } from "./header/user-nav"

export async function Header() {
  const session = await auth()

  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-2 md:px-8">
        <div className="flex gap-6 md:gap-10">
          <Button
            variant="ghost"
            className="group flex items-center space-x-2 text-primary transition-colors hover:animate-pulse hover:bg-transparent hover:text-primary/80"
            asChild
          >
            <Link href="/">
              <Logo className="transition-transform" />
              <span className="hidden text-lg font-bold sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </Button>
        </div>

        <div className="flex flex-row items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href={siteConfig.links.github}>
              <GithubIcon />
            </Link>
          </Button>

          {session ? (
            <UserNav user={session.user} />
          ) : (
            <Button size="sm" className="px-4" asChild>
              <Link href="/api/auth/signin">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
