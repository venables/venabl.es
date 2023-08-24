import { GithubIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"

import { Features } from "./features"

export default function Home() {
  return (
    <>
      <section className="mx-auto mt-12 flex h-full w-full max-w-4xl grow flex-col sm:flex-row sm:items-center">
        <div className="flex flex-1 flex-col items-center text-center">
          <Badge variant="secondary" className="font-bold sm:text-lg">
            {siteConfig.name}
          </Badge>
          <h1 className="mb-5 text-center text-4xl font-extrabold leading-none tracking-tight md:text-6xl">
            A sane way to start your next{" "}
            <Button
              variant="ghost"
              className="p-0 text-4xl font-extrabold leading-none tracking-tight text-muted-foreground md:text-6xl"
              asChild
            >
              <Link href="https://nextjs.org/" target="_blank" rel="noreferrer">
                next
              </Link>
            </Button>{" "}
            project.
          </h1>

          <h2 className="pb-6 pt-2">
            Clean, understandable code. The latest best practices. Best-in-class
            open source libraries.
          </h2>

          <Button
            variant="secondary"
            size="lg"
            className="text-lg font-semibold tracking-tighter"
          >
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              Get started
            </Link>
          </Button>
        </div>

        <div className="relative h-96 sm:flex sm:flex-1 sm:items-start">
          <Image
            src="/images/home/hero-light.svg"
            alt="A sane way to start your next next project"
            fill
            priority
            className="dark:hidden"
          />
          <Image
            src="/images/home/hero-dark.svg"
            alt="A sane way to start your next next project"
            fill
            priority
            className="hidden dark:block"
          />
        </div>
      </section>

      <section className="mt-12 flex h-full grow flex-col items-center justify-center space-y-12 px-4 sm:px-0">
        <h2 className="text-3xl font-bold">What&apos;s included</h2>
        <Features />

        <div className="flex flex-col items-center justify-center space-y-2">
          <Button variant="secondary" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              <span>
                View Source on <span className="font-bold">GitHub</span>
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
