import { Link } from "@/components/elements"
import { Check, Github, Ship } from "@/components/icons"
import { siteConfig } from "@/config"

const FEATURES = [
  { title: "Next 13.3" },
  { title: "/app Directory" },
  { title: "Route Handlers" },
  { title: "Typescript" },
  { title: "ESLint + Prettier" },
  { title: "TailwindCSS" },
  { title: "Authentication" },
  { title: "Prisma ORM" },
  { title: "PlanetScale Ready" },
  { title: "Metadata API" },
  { title: "Inter Font" },
  { title: "Jest" },
  { title: "Dark Mode" },
  { title: "and so much more..." }
]

export default function Home() {
  return (
    <>
      <div className="mt-12 flex h-full grow flex-col items-center justify-center space-y-12 px-4 sm:px-0">
        <div className="flex flex-col items-center justify-center space-y-2">
          <Ship className="h-16 w-16" />
          <h1 className="text-7xl font-bold tracking-tighter">StartKit</h1>
          <span className="text-center text-2xl tracking-tight text-neutral-600 dark:text-neutral-300">
            A sane way to start your next{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-pink-100 px-1 transition-colors hover:bg-pink-200 dark:bg-pink-800 hover:dark:bg-pink-700"
            >
              next
            </a>{" "}
            project.
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {FEATURES.map((f, i) => (
            <div key={i} className="flex flex-row items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>{f.title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            variant="subtle"
          >
            <Github className="mr-2 h-4 w-4" />
            <span>
              View Source on <strong>GitHub</strong>
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
