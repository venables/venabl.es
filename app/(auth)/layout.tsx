import { redirect } from "next/navigation"

import { Footer } from "@/components/marketing/layout"
import { getCurrentUser } from "@/lib/auth/session"

import type { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

export default async function AuthLayout({ children }: Props) {
  const user = await getCurrentUser()

  if (user) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col px-4">{children}</main>
      <Footer />
    </div>
  )
}
