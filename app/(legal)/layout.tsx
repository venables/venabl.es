import { ChevronLeftIcon } from "lucide-react"

import { Link } from "@/components/elements"
import { Footer } from "@/components/marketing/layout"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function LegalLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <Link href="/" variant="ghost" className="">
          <>
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
      </div>

      <main className="container mx-auto flex grow flex-col items-center justify-start p-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}
