import { redirect } from "next/navigation"

import { auth } from "@/auth/node"
import { ThemePickerProvider } from "@/components/theme-picker/theme-picker-provider"

import type { ReactNode } from "react"

/**
 * Use the edge runtime
 */
export const runtime = "nodejs"

interface Props {
  children?: ReactNode
}

export default async function AuthLayout({ children }: Props) {
  const session = await auth()

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (session) {
    redirect("/")
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
      <ThemePickerProvider />
    </>
  )
}
