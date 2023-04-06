import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useState } from "react"

import { Button, type ButtonProps } from "@/components/elements"

export type ThemeToggleProps = ButtonProps & {
  iconClassName?: string
}

export function ThemeToggle({
  iconClassName = "w-6 h-6",
  ...props
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme, systemTheme } = useTheme()

  const toggleDarkMode = useCallback(() => {
    if (resolvedTheme === systemTheme) {
      /**
       * If we're currently on the same theme as the system preference, we
       * should toggle to the opposite theme.
       */
      setTheme(resolvedTheme === "dark" ? "light" : "dark")
    } else {
      /**
       * If we are toggling to the same theme as the current system preference,
       * we should toggle to `system`. This prevents us from forever being
       * stuck away from our system preference.
       */
      setTheme("system")
    }
  }, [resolvedTheme, setTheme, systemTheme])

  useEffect(() => setMounted(true), [])

  return (
    <>
      <Button {...props} onClick={toggleDarkMode}>
        {!mounted ? (
          <div className={iconClassName} />
        ) : resolvedTheme === "dark" ? (
          <Sun className={iconClassName} />
        ) : (
          <Moon className={iconClassName} />
        )}
      </Button>
    </>
  )
}
