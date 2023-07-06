import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A small extension to `clsx` to make it TailwindCSS class-aware.
 */
export function cn(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}

/**
 * Alias for `cn`.
 */
export const cls = cn
