import { GithubIcon, KeyRoundIcon } from "lucide-react"
import { signIn } from "next-auth/react"
import { useCallback, useMemo, useState } from "react"

import { GoogleIcon } from "@/components/icons/social"
import { Spinner } from "@/components/spinner"
import { Button } from "@/components/ui/button"

import type { LucideIcon } from "lucide-react"
import type { ClientSafeProvider } from "next-auth/react"

const ICONS: Partial<Record<ClientSafeProvider["id"], LucideIcon>> = {
  google: GoogleIcon as LucideIcon,
  github: GithubIcon
}

type Props = {
  provider: ClientSafeProvider
  isLoading?: boolean
  setIsLoading?: (isLoading: boolean) => void
}

export function ExternalAuthButton({
  provider,
  isLoading = false,
  setIsLoading
}: Props) {
  const [isExternalAuthLoading, setIsExternalAuthLoading] = useState(false)
  const ProviderIcon = useMemo<LucideIcon>(
    () => ICONS[provider.id] ?? KeyRoundIcon,
    [provider.id]
  )

  const onSignIn = useCallback(() => {
    setIsExternalAuthLoading(true)
    setIsLoading?.(true)

    return signIn(provider.id)
  }, [provider.id, setIsLoading])

  return (
    <>
      <Button
        type="button"
        variant="outline"
        onClick={() => void onSignIn()}
        disabled={isLoading || isExternalAuthLoading}
      >
        {isExternalAuthLoading ? (
          <Spinner className="mr-2 h-4 w-4" />
        ) : (
          <ProviderIcon className="mr-2 h-6 w-6" />
        )}{" "}
        Sign in with {provider.name}
      </Button>
    </>
  )
}
