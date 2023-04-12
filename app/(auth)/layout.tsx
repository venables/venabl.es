import { ReactNode } from "react"

import { Footer } from "@/components/marketing/layout"

type Props = {
  children?: ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
