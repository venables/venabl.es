import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

import type { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export default function MarketingLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  )
}
