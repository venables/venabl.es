import { Close } from "@radix-ui/react-toast"
import { XIcon } from "lucide-react"
import { forwardRef } from "react"

import { cls } from "@/lib/utils"

import type { ComponentPropsWithoutRef, ElementRef } from "react"

export const ToastClose = forwardRef<
  ElementRef<typeof Close>,
  ComponentPropsWithoutRef<typeof Close>
>(({ className, ...props }, ref) => (
  <Close
    ref={ref}
    className={cls(
      "absolute top-2 right-2 rounded-md p-1 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:hover:text-neutral-50",
      className
    )}
    toast-close=""
    {...props}
  >
    <XIcon className="h-4 w-4" />
  </Close>
))

ToastClose.displayName = Close.displayName
