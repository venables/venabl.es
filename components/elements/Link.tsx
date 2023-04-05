import NextLink from "next/link"
import { type ComponentProps, forwardRef } from "react"

import { cls } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants/button"

import type { VariantProps } from "class-variance-authority"

export type LinkProps = ComponentProps<typeof NextLink> &
  VariantProps<typeof buttonVariants>

/**
 * Wrapper around a Next.js <Link> element which accepts our styles and variants
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <NextLink
        className={cls(
          variant || size
            ? buttonVariants({ variant, size, className })
            : className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Link.displayName = "Link"
