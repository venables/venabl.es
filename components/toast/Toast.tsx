import { Root } from "@radix-ui/react-toast"
import { forwardRef } from "react"

import { cls } from "@/lib/utils"
import { toastVariants } from "@/lib/variants"

import type { VariantProps } from "class-variance-authority"
import type { ComponentPropsWithoutRef, ElementRef } from "react"

export const Toast = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      className={cls(toastVariants({ variant }), className)}
      {...props}
    />
  )
})

Toast.displayName = Root.displayName
