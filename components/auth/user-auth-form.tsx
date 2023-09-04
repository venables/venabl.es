"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { MailIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form"

import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cls } from "@/lib/utils"
import { userAuthSchema } from "@/lib/validations"

import { ExternalAuthButton } from "./external-auth-button"

import type { SignInResponse } from "next-auth/react"
import type { HTMLAttributes } from "react"
import type { z } from "zod"

type FormData = z.infer<typeof userAuthSchema>

/**
 * https://github.com/nextauthjs/next-auth/blob/a79774f6e890b492ae30201f24b3f7024d0d7c9d/docs/docs/guides/basics/pages.md?plain=1#L42
 */
function parseErrorMessage(error?: string | null) {
  switch (error) {
    case "OAuthAccountNotLinked":
      return {
        title: "You already have an account",
        description:
          "Please sign in with the other service you used to sign up."
      }
    case "EmailSignin":
      return {
        title: "Unable to send login e-mail",
        description: "Sending your login e-mail failed. Please try again."
      }
    case "CredentialsSignin":
      return {
        title: "Invalid username or password",
        description:
          "The username and password you entered did not match our records. Please double-check and try again."
      }
    case "SessionRequired":
      return {
        title: "Login required",
        description: "You must be logged in to view this page"
      }
    case "OAuthCallback":
    case "OAuthCreateAccount":
    case "OAuthSignin":
    case "EmailCreateAccount":
    case "Callback":
    case "Default":
    default:
      return {
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again."
      }
  }
}

type Props = HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: Props) {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof userAuthSchema>>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: ""
    }
  })

  const [isExternalAuthLoading, setIsExternalAuthLoading] =
    useState<boolean>(false)

  const isLoading = useMemo(
    () => isExternalAuthLoading || form.formState.isSubmitting,
    [form.formState.isSubmitting, isExternalAuthLoading]
  )

  /**
   * If this page loads with an error query parameter, display the error message.
   */
  useEffect(() => {
    if (searchParams.get("error")) {
      toast({
        ...parseErrorMessage(searchParams.get("error")),
        variant: "destructive"
      })
    }
  }, [searchParams, toast])

  /**
   * Handle the form submission.
   */
  const onSubmit = useCallback(
    async (data: FormData) => {
      let signInResult: SignInResponse | undefined

      if (isLoading) {
        return
      }

      try {
        signInResult = await signIn("http-email", {
          email: data.email.toLowerCase(),
          redirect: false,
          callbackUrl: searchParams.get("from") ?? "/"
        })
      } catch (err) {
        console.error(err)
      }

      if (!signInResult?.ok || signInResult.error) {
        return toast({
          ...parseErrorMessage(signInResult?.error),
          variant: "destructive"
        })
      }

      return toast({
        title: "Check your email",
        description: "We sent you a login link. Be sure to check your spam too."
      })
    },
    [isLoading, searchParams, toast]
  )

  return (
    <div className={cls("grid gap-6", className)} {...props}>
      {/* Email form */}
      <Form {...form}>
        <form
          onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          className="flex flex-col space-y-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            variant="default"
            type="submit"
            disabled={isLoading}
            className="w-full"
          >
            {form.formState.isSubmitting ? (
              <Spinner className="mr-2 h-4 w-4" />
            ) : (
              <MailIcon className="mr-2 h-4 w-4" />
            )}
            Sign In with Email
          </Button>
        </form>
      </Form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2">Or continue with</span>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <ExternalAuthButton
          provider="google"
          isLoading={isLoading}
          setIsLoading={setIsExternalAuthLoading}
        />
        <ExternalAuthButton
          provider="github"
          isLoading={isLoading}
          setIsLoading={setIsExternalAuthLoading}
        />
      </div>
    </div>
  )
}
