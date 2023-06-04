import { Footer } from "@/components/marketing/layout"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col px-4">{children}</main>
      <Footer />
    </div>
  )
}
