import { cva } from "class-variance-authority"

export const toastVariants = cva(
  "group pointer-events-auto relative mt-4 flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all last:mt-0 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full dark:border-neutral-700 sm:last:mt-4 data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default:
          "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800",
        destructive:
          "group border-red-600 bg-red-600 text-white dark:border-red-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)
