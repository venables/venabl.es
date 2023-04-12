import { Viewport } from "@radix-ui/react-toast"
import { forwardRef } from "react"

import { cls } from "@/lib/utils"

import type { ComponentPropsWithoutRef, ElementRef } from "react"

export const ToastViewport = forwardRef<
  ElementRef<typeof Viewport>,
  ComponentPropsWithoutRef<typeof Viewport>
>(({ className, ...props }, ref) => (
  <Viewport
    ref={ref}
    className={cls(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:bottom-0 sm:right-0 sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))

ToastViewport.displayName = Viewport.displayName
