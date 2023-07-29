"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useCallback, useEffect, useState } from "react"

import { cls } from "@/lib/utils"

import type { HTMLProps } from "react"

export type ThemeToggleProps = HTMLProps<HTMLAnchorElement> & {
  iconClassName?: string
}

export function ThemeToggle({
  iconClassName = "w-6 h-6",
  className,
  ...props
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
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

  /**
   * Mark the app as mounted in the client
   */
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <a
      {...props}
      className={cls(className, "cursor-pointer")}
      onClick={toggleTheme}
      title={
        resolvedTheme === "dark"
          ? "Switch to Light Mode"
          : "Switch to Dark Mode"
      }
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
    </a>
  )
}
