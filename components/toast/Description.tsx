import { Description } from "@radix-ui/react-toast"
import { forwardRef } from "react"

import { cls } from "@/lib/utils"

import type { ComponentPropsWithoutRef, ElementRef } from "react"

export const ToastDescription = forwardRef<
  ElementRef<typeof Description>,
  ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cls("text-sm opacity-90", className)}
    {...props}
  />
))

ToastDescription.displayName = Description.displayName
