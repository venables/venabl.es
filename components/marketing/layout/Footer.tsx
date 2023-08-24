import { GithubIcon, TwitterIcon } from "lucide-react"
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
  }
]

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex items-center justify-center md:order-2 md:items-end">
          {navigation.map((item) => (
            <Button key={item.name} variant="ghost" asChild>
              <Link href={item.href} target="_blank" rel="noopener noreferrer">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </Button>
          ))}

          <ThemePicker iconClassName="h-6 w-6" />
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex flex-col items-center justify-center space-x-2 space-y-4 text-center text-sm leading-5 sm:flex-row sm:space-y-0">
            <div className="flex items-center justify-center space-x-1">
              <span>&copy; {new Date().getFullYear()}.</span>
              <span>
                Built by{" "}
                <Button
                  variant="link"
                  className="px-0 font-normal text-card-foreground underline underline-offset-4 transition-colors hover:text-card-foreground/60"
                  asChild
                >
                  <Link href={siteConfig.company.link}>
                    {siteConfig.company.name}
                  </Link>
                </Button>
                .
              </span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>
                Illustrations by{" "}
                <Button
                  variant="link"
                  className="px-0 font-normal text-card-foreground underline underline-offset-4 transition-colors hover:text-card-foreground/60"
                  asChild
                >
                  <Link href="https://popsy.co/">Popsy</Link>
                </Button>
                .
              </span>
            </div>

            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="link"
                className="px-0 font-normal text-card-foreground underline underline-offset-4 transition-colors hover:text-card-foreground/60"
                asChild
              >
                <Link href="/privacy">Privacy</Link>
              </Button>
              .
              <Button
                variant="link"
                className="px-0 font-normal text-card-foreground underline underline-offset-4 transition-colors hover:text-card-foreground/60"
                asChild
              >
                <Link href="/terms">Terms</Link>
              </Button>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
