"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback } from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { useMounted } from "@/hooks/use-mounted"
import { cls } from "@/lib/utils"

export type ThemeToggleProps = ButtonProps & {
  iconClassName?: string
}

export function ThemeToggle({
  iconClassName = "w-6 h-6",
  className,
  ...props
}: ThemeToggleProps) {
  const mounted = useMounted()
  const { resolvedTheme, setTheme, systemTheme } = useTheme()

  const toggleTheme = useCallback(() => {
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

  return (
    <Button
      variant="ghost"
      className={cls(className, "cursor-pointer")}
      onClick={toggleTheme}
      title={
        resolvedTheme === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
      {...props}
    >
      {!mounted ? (
        <span className={iconClassName} />
      ) : resolvedTheme === "dark" ? (
        <>
          <span className="sr-only">Switch to Dark Mode</span>
          <SunIcon className={iconClassName} aria-hidden="true" />
        </>
      ) : (
        <>
          <span className="sr-only">Switch to Light Mode</span>
          <MoonIcon className={iconClassName} aria-hidden="true" />
        </>
      )}
    </Button>
  )
}
