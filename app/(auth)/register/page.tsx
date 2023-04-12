import { ShipIcon } from "lucide-react"

import { UserAuthForm } from "@/components/auth/UserAuthForm"
import { Link } from "@/components/elements"

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started."
}

export default function RegisterPage() {
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
            <ShipIcon className="mx-auto h-12 w-12" />
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Enter your email below to create your account
          </p>
        </div>

        <UserAuthForm />

        <p className="px-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          By clicking continue, you agree to our{" "}
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
