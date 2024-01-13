import Link from "next/link"
import { type PropsWithChildren } from "react"

import { Logo } from "@/components/icons/brand/logo"
import { Footer } from "@/components/layout/footer"

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col gap-8">
      <header className="container flex flex-row items-center justify-center px-2 pt-2 sm:px-8">
        <div className="relative flex flex-1 flex-row items-center justify-center">
          <div className="absolute inset-0 -z-10 flex items-center">
            <span className="w-full border-t" />
          </div>

          <nav className="mx-auto flex max-w-xl flex-1 items-center justify-between font-roboto-condensed uppercase">
            <div className="flex flex-1 items-center justify-center">
              <Link className="group bg-background px-2" href="/about">
                <span className="transition-all group-hover:font-bold group-hover:drop-shadow-xl group-active:font-medium">
                  About
                </span>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <Link className="group bg-background px-2" href="/writing">
                <span className="transition-all group-hover:font-bold group-hover:drop-shadow-xl group-active:font-medium">
                  Writing
                </span>
              </Link>
            </div>

            <Link
              className="group flex flex-1 items-center justify-center bg-background px-2"
              href="/"
            >
              <Logo className="h-12 w-12 transition-all group-hover:scale-110  group-hover:opacity-80 group-hover:drop-shadow-xl group-active:scale-90" />
            </Link>

            <div className="flex flex-1 items-center justify-center">
              <Link className="group bg-background px-2" href="/work">
                <span className="transition-all group-hover:font-bold group-hover:drop-shadow-xl group-active:font-medium">
                  Work
                </span>
              </Link>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <Link className="group bg-background px-2" href="/connect">
                <span className="transition-all group-hover:font-bold group-hover:drop-shadow-xl group-active:font-medium">
                  Connect
                </span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container grow px-2">{children}</main>
      <Footer />
    </div>
  )
}
