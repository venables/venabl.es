import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"

import { Footer } from "@/components/marketing/layout"
import { Button } from "@/components/ui/button"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function LegalLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto p-6">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            <span>Back</span>
          </Link>
        </Button>
      </div>

      <main className="container mx-auto flex grow flex-col items-center justify-start p-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}
