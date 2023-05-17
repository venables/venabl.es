import { GithubIcon, ShipIcon } from "lucide-react"

import { Link } from "@/components/elements"
import { siteConfig } from "@/config"

export function Header() {
  return (
    <header className="container sticky top-0 bg-white dark:bg-neutral-900">
      <div className="flex h-16 items-center justify-between border-b border-b-neutral-200 py-4 dark:border-b-neutral-700">
        <div className="flex gap-6 md:gap-10">
          <Link
            href="/"
            className="group flex items-center space-x-2 transition-colors hover:animate-pulse hover:text-neutral-800 dark:hover:text-neutral-200"
          >
            <ShipIcon className="transition-transform group-hover:scale-110" />
            <span className="hidden font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div>
          <Link
            href={siteConfig.links.github}
            size="sm"
            className="px-4"
            variant="link"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </header>
  )
}
