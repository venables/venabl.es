import { type ButtonHTMLAttributes, forwardRef } from "react"

import { cls } from "@/lib/utils"
import { buttonVariants } from "@/lib/variants/button"

import type { VariantProps } from "class-variance-authority"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

/**
 * Wrapper around an html <button> element which accepts our styles and variants
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cls(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
