import { Footer, Header } from "@/components/marketing/layout"
import { getCurrentUser } from "@/lib/auth/session"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default async function MarketingLayout({ children }: Props) {
  const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  )
}
