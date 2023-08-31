"use client"

import { CheckIcon } from "lucide-react"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cls } from "@/lib/utils"

export function Features() {
  const { toast } = useToast()

  const FEATURES = useMemo(
    () => [
      { title: "Next 13.4" },
      { title: "App Directory" },
      { title: "API Route Handlers" },
      { title: "Edge-runtime ready Auth" },
      { title: "Typescript (Strict)" },
      { title: "ESLint + Prettier" },
      { title: "TailwindCSS" },
      { title: "Radix UI" },
      { title: "shadcn/ui" },
      { title: "Drizzle ORM" },
      { title: "PostgreSQL" },
      { title: "Resend Email" },
      { title: "Metadata API" },
      { title: "Inter Font" },
      { title: "Jest" },
      { title: "Dark Mode" },
      {
        title: "Toasts",
        onClick: () =>
          toast({
            title: "Wait. Toasts, too?",
            description: "Yep! You can use them anywhere in your app."
          })
      },
      { title: "and much more..." }
    ],
    [toast]
  )

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      {FEATURES.map((f, i) => (
        <Button
          key={i}
          variant="link"
          className={cls(
            "justify-start space-x-2 text-left underline-offset-8",
            f.onClick
              ? "cursor-pointer hover:underline"
              : "cursor-default hover:no-underline"
          )}
          onClick={() => {
            if (f.onClick) f.onClick()
          }}
        >
          <CheckIcon className="h-4 w-4" />
          <span>{f.title}</span>
        </Button>
      ))}
    </div>
  )
}
