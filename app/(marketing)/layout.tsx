import { Footer, Header } from "@/components/marketing/layout"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
