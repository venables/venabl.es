"use client"

import { useToast } from "@/hooks/use-toast"

import { ToastClose } from "./Close"
import { ToastDescription } from "./Description"
import { ToastProvider } from "./Provider"
import { ToastTitle } from "./Title"
import { Toast } from "./Toast"
import { ToastViewport } from "./Viewport"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
