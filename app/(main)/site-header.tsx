import Link from "next/link"

import { Avatar } from "./avatar"

export function SiteHeader() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Link className="h-24 w-24" href="/">
        <Avatar className="h-full w-full" />
      </Link>
      <div className="flex grow flex-col">
        <Link className="flex-1 text-2xl sm:text-3xl" href="/">
          <span className="hidden md:inline">👋 Hi, I&apos;m </span>
          <span className="">Matt Venables</span>
        </Link>
        <p className="flex-1 text-sm sm:text-base">
          I build{" "}
          <span className="font-semibold">intuitively obvious software</span>{" "}
          for the web and your phone.
        </p>
      </div>
    </div>
  )
}
