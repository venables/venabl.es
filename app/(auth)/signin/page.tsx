import { ChevronLeftIcon } from "lucide-react"
import { getProviders } from "next-auth/react"

import { UserAuthForm } from "@/components/auth/user-auth-form"
import { Link } from "@/components/elements"
import { Logo } from "@/components/icons/brand/Logo"
import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Sign In",
  description: "Sign in to your account"
})

export default async function SigninPage() {
  const providers = await getProviders()

  return (
    <>
      <div className="container flex flex-row justify-start py-4">
        <Link href="/" variant="ghost">
          <>
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Back
          </>
        </Link>
      </div>

      <div className="mx-auto flex w-full grow flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Link href="/">
            <Logo className="mx-auto h-12 w-12" />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Enter your credentials to sign in to your account
          </p>
        </div>

        <UserAuthForm providers={providers} />

        <p className="px-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/register" className="underline underline-offset-4">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </>
  )
}
