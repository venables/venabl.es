import { ToastAction } from "./Action"
import { Toast } from "./Toast"

import type { ComponentPropsWithoutRef, ReactElement } from "react"

export type ToastProps = ComponentPropsWithoutRef<typeof Toast>
export type ToastActionElement = ReactElement<typeof ToastAction>
