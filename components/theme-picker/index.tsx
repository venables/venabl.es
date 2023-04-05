"use client"

import { ThemeProvider } from "next-themes"

import { ThemeToggle, type ThemeToggleProps } from "./ThemeToggle"

type Props = ThemeToggleProps

/**
 * A Toggle menu for switching between light mode, dark mode, and system
 * preference.
 *
 * NOTE: next-themes can only be used client-side, and must be marked with 'use
 * client'. Since wrapping the entire app in a `use client` defeats much of the
 * benefits of Server Components and the NextJS app directory, this component
 * adds the <ThemeProvider> from next-themes directly to the component instead
 * of wrapping the entire app in a ThemeProvider. This means access to theme
 * values will be limited to this component. If you would like to access theme
 * values from other components, you should add ThemeProvider to the relevant
 * `layout.tsx` file in the app directory.
 */
export function ThemePicker(props: Props) {
  return (
    <ThemeProvider>
      <ThemeToggle {...props} />
    </ThemeProvider>
  )
}
