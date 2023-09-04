import { auth } from "@/auth"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

import type { ReactNode } from "react"

/**
 * Use the edge runtime
 */
export const runtime = "edge"

interface Props {
  children?: ReactNode
}

export default async function MarketingLayout({ children }: Props) {
  const session = await auth()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const user = session?.user

  return (
    <div className="flex min-h-screen flex-col">
      <Header user={user} />
      <main className="flex-1 px-4">{children}</main>
      <Footer />
    </div>
  )
}
