import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A small extension to `clsx` to make it TailwindCSS class-aware.
 *
 * @alias cn
 */
export function cls(...classNames: ClassValue[]) {
  return twMerge(clsx(classNames))
}

export const cn = cls
