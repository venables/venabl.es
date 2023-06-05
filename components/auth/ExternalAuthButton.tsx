import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"
import { useState } from "react"

import { Button, Spinner } from "@/components/elements"

import { GoogleIcon } from "../icons/social"

const providers = {
  google: {
    title: "Google",
    icon: GoogleIcon
  },
  github: {
    title: "Github",
    icon: GithubIcon
  }
}

type Props = {
  provider: keyof typeof providers
  isLoading?: boolean
  setIsLoading?: (isLoading: boolean) => void
}

export function ExternalAuthButton({
  provider,
  isLoading,
  setIsLoading
}: Props) {
  const [isExternalAuthLoading, setIsExternalAuthLoading] = useState(false)
  const info = providers[provider]

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          setIsExternalAuthLoading(true)
          setIsLoading?.(true)
          void signIn(provider)
        }}
        disabled={isLoading || isExternalAuthLoading}
      >
        {isExternalAuthLoading ? (
          <Spinner className="mr-2 h-4 w-4" />
        ) : (
          <info.icon className="mr-2 h-6 w-6" />
        )}{" "}
        {info.title}
      </Button>
    </>
  )
}
