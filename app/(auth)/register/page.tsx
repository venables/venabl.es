import { getProviders } from "next-auth/react"

import { UserAuthForm } from "@/components/auth/user-auth-form"
import { Link } from "@/components/elements"
import { Logo } from "@/components/icons/brand/Logo"

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started."
}

export default async function RegisterPage() {
  const providers = await getProviders()

  return (
    <>
      <div className="container flex flex-row justify-end py-4">
        <Link href="/signin" variant="ghost">
          Sign in
        </Link>
      </div>

      <div className="mx-auto flex w-full grow flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Link href="/">
            <Logo className="mx-auto h-12 w-12" />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Enter your details below to create your account
          </p>
        </div>

        <UserAuthForm providers={providers} />

        <p className="px-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  )
}
