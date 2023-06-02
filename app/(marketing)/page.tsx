import { GithubIcon } from "lucide-react"
import Image from "next/image"

import { Link } from "@/components/elements"
import { siteConfig } from "@/config"

import { Features } from "./Features"

export default function Home() {
  return (
    <>
      <section className="container mt-12 flex h-full w-full grow flex-col sm:flex-row sm:items-center">
        <div className="flex flex-1 flex-col items-center text-center">
          <h2 className="rounded-2xl bg-neutral-100 px-4 py-1.5 text-sm font-bold text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
            StartKit
          </h2>
          <h1 className="mb-5 text-center text-4xl font-extrabold leading-none tracking-tight text-neutral-900 dark:text-neutral-100 md:text-6xl">
            A sane way to start your next{" "}
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              next
            </Link>{" "}
            project.
          </h1>

          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            variant="subtle"
            size="large"
            className="text-lg font-semibold tracking-tighter"
          >
            Get started
          </Link>
        </div>

        <div className="relative h-96 sm:flex sm:flex-1 sm:items-start">
          <Image
            src="/images/home/hero-light.svg"
            alt="A sane way to start your next next project"
            fill
            className="dark:hidden"
          />
          <Image
            src="/images/home/hero-dark.svg"
            alt="A sane way to start your next next project"
            fill
            className="hidden dark:block"
          />
        </div>
      </section>

      <section className="mt-12 flex h-full grow flex-col items-center justify-center space-y-12 px-4 sm:px-0">
        <h2 className="text-3xl font-bold">What&apos;s included</h2>
        <Features />

        <div className="flex flex-col items-center justify-center space-y-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            variant="subtle"
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            <span>
              View Source on <strong>GitHub</strong>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
