import { ReactNode } from "react"

import { Footer, Header } from "@/components/marketing/layout"

type Props = {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
