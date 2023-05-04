"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

import { Button, Input, Label, Spinner } from "@/components/elements"
import { toast } from "@/hooks/use-toast"
import { cls } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations"

import { ExternalAuthButton } from "./ExternalAuthButton"

import type { HTMLAttributes } from "react"
import type { z } from "zod"

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema)
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isExternalAuthLoading, setIsExternalAuthLoading] =
    useState<boolean>(false)
  const searchParams = useSearchParams()

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn("email", {
      email: data.email.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/dashboard"
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive"
      })
    }

    return toast({
      title: "Check your email",
      description: "We sent you a login link. Be sure to check your spam too."
    })
  }

  return (
    <div className={cls("grid gap-6", className)} {...props}>
      <form onSubmit={() => void handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isExternalAuthLoading}
              {...register("email")}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button variant="default" type="submit" disabled={isLoading}>
            {isLoading && <Spinner className="mr-2 h-4 w-4" />}
            Sign In with Email
          </Button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-neutral-300 dark:border-neutral-700" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
            Or continue with
          </span>
        </div>
      </div>

      <ExternalAuthButton
        provider="google"
        isLoading={isLoading}
        setIsLoading={setIsExternalAuthLoading}
      />
    </div>
  )
}
