import { Link } from "@/components/elements"
import { Github, Twitter } from "@/components/icons"
import { ThemePicker } from "@/components/theme-picker"
import { siteConfig } from "@/config"

const navigation = [
  {
    name: "Github",
    href: siteConfig.links.github ?? "#",
    icon: Github
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter ?? "#",
    icon: Twitter
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
          <p className="text-center text-xs leading-5 text-neutral-500">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href={siteConfig.company.link}
              className="text-neutral-700 underline underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              {siteConfig.company.name}
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
