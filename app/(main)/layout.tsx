import { type ReactNode } from "react"

import { Footer } from "@/components/layout/footer"
import { Separator } from "@/components/ui/separator"

import { SiteHeader } from "./site-header"

type Props = {
  children?: ReactNode
}

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex max-w-xl flex-col py-8">
        <SiteHeader />
        <Separator className="my-4" />
        <main className="flex-1 px-4">{children}</main>
      </div>
      <Footer />
    </div>
  )
}
