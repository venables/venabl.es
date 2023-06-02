import { GithubIcon, TwitterIcon } from "lucide-react"

import { Link } from "@/components/elements"
import { ThemePicker } from "@/components/theme-picker"
import { siteConfig } from "@/config"

const navigation = [
  {
    name: "Github",
    href: siteConfig.links.github ?? "#",
    icon: GithubIcon
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter ?? "#",
    icon: TwitterIcon
  }
]

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-all hover:scale-110 hover:text-gray-500 focus:outline-none active:scale-95 dark:hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
          <ThemePicker
            className="text-gray-400 transition-all hover:scale-110 hover:text-gray-500 focus:outline-none active:scale-95 dark:hover:text-gray-300"
            iconClassName="h-6 w-6"
          />
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center justify-center space-x-2 space-y-4 text-center text-sm leading-5 text-neutral-500 dark:text-neutral-400 sm:flex-row sm:space-y-0">
            <div className="flex items-center justify-center space-x-1">
              <span>&copy; {new Date().getFullYear()}.</span>
              <span>
                Built by{" "}
                <Link
                  href={siteConfig.company.link}
                  className="text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  {siteConfig.company.name}
                </Link>
                .
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>
                Illustrations by{" "}
                <Link
                  href="https://popsy.co/"
                  className="text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  Popsy
                </Link>
                .
              </span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Link
                href="/privacy"
                className="text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                Privacy
              </Link>
              .
              <Link
                href="/terms"
                className="text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
              >
                Terms
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
