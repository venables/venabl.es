import { redirect } from "next/navigation"
import { type ReactNode } from "react"

import { getCurrentSession } from "@/auth/node"
import { ThemePickerProvider } from "@/components/theme-picker/theme-picker-provider"

export const runtime = "nodejs"

async function getData() {
  const session = await getCurrentSession()

  if (session) {
    redirect("/")
  }
}

interface Props {
  children?: ReactNode
}

export default async function AuthLayout({ children }: Props) {
  await getData()

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
      <ThemePickerProvider />
    </>
  )
}
