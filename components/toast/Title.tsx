import { Title } from "@radix-ui/react-toast"
import { forwardRef } from "react"

import { cls } from "@/lib/utils"

import type { ComponentPropsWithoutRef, ElementRef } from "react"

export const ToastTitle = forwardRef<
  ElementRef<typeof Title>,
  ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
  <Title
    ref={ref}
    className={cls("text-sm font-semibold", className)}
    {...props}
  />
))

ToastTitle.displayName = Title.displayName
