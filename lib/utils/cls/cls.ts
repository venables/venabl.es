import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A small extension to `clsx` to make it TailwindCSS class-aware.
 */
export function cls(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}
