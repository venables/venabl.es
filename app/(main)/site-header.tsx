import { Avatar } from "./avatar"

export function SiteHeader() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Avatar className="w-24" />
      <div className="flex grow flex-col">
        <h2 className="flex-1 text-2xl sm:text-3xl">
          <span className="hidden md:inline">👋 Hi, I&apos;m </span>
          <span className="">Matt Venables</span>
        </h2>
        <p className="flex-1 text-sm sm:text-base">
          I build{" "}
          <span className="font-semibold">intuitively obvious software</span>{" "}
          for the web and your phone.
        </p>
      </div>
    </div>
  )
}
