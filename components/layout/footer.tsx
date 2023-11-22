import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import Link from "next/link"

import { ThemePicker } from "@/components/theme-picker"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"

const navigation = [
  {
    name: "Github",
    href: siteConfig.links.github,
    icon: GithubIcon
  },
  {
    name: "Twitter",
    href: siteConfig.links.twitter,
    icon: TwitterIcon
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: LinkedinIcon
  }
]

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-4 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-center md:order-2 md:items-end">
          {navigation.map((item) => (
            <Button asChild key={item.name} variant="ghost">
              <Link href={item.href} rel="noopener noreferrer" target="_blank">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          ))}

          <ThemePicker iconClassName="h-4 w-4" />
        </div>

        <div className="mt-0 md:order-1">
          <div className="flex flex-col items-center justify-center space-x-2 space-y-4 text-center text-sm leading-5 sm:flex-row sm:space-y-0">
            <div className="flex items-center justify-center space-x-1">
              <span>&copy; {new Date().getFullYear()}.</span>
              <span>
                <Button
                  asChild
                  className="px-0 font-normal text-card-foreground underline underline-offset-4 transition-colors hover:text-card-foreground/60"
                  variant="link"
                >
                  <Link href={siteConfig.company.link}>
                    {siteConfig.company.name}
                  </Link>
                </Button>
                .
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
