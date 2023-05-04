import type { ToastAction } from "./Action"
import type { Toast } from "./Toast"
import type { ComponentPropsWithoutRef, ReactElement } from "react"

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = ReactElement<typeof ToastAction>
