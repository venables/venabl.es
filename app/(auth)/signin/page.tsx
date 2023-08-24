import Link from "next/link"
import { getProviders } from "next-auth/react"

import { UserAuthForm } from "@/components/auth/user-auth-form"
import { Logo } from "@/components/icons/brand/logo"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config"
import { seo } from "@/lib/seo"

export const metadata = seo({
  title: "Sign In",
  description: "Sign in to your account"
})

export default async function SigninPage() {
  const providers = await getProviders()

  return (
    <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute top-4 flex w-full flex-row justify-between px-4 md:top-8">
        <Button
          className="z-20 flex items-center text-lg font-medium transition-colors lg:text-primary-foreground"
          asChild
        >
          <Link href="/">
            <Logo className="mr-2 h-6 w-6" />
            {siteConfig.name}
          </Link>
        </Button>

        <Button variant="ghost" asChild>
          <Link href="/register">Sign up</Link>
        </Button>
      </div>

      <div className="relative hidden h-full flex-col bg-muted p-10 text-primary-foreground dark:border-r lg:flex">
        <div className="absolute inset-0 h-full bg-primary" />

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than ever
              before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to sign in to your account
            </p>
          </div>

          <UserAuthForm providers={providers} />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Button
              variant="link"
              className="px-0 text-muted-foreground underline underline-offset-4 hover:text-primary"
              asChild
            >
              <Link href="/signin">Sign in here</Link>
            </Button>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
