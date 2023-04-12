import { ChevronLeftIcon } from "lucide-react"
import { ReactNode } from "react"

import { Link } from "@/components/elements"
import { Footer } from "@/components/marketing/layout"

type Props = {
  children?: ReactNode
}

export default function LegalLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container py-4">
        <Link href="/" variant="ghost" className="">
          <>
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
      </div>

      <main className="container flex grow flex-col items-center justify-start">
        {children}
      </main>

      <Footer />
    </div>
  )
}
