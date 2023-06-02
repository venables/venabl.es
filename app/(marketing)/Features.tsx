"use client"

import { CheckIcon } from "lucide-react"

import { Button } from "@/components/elements"
import { toast } from "@/hooks/use-toast"
import { cls } from "@/lib/utils"

const FEATURES = [
  { title: "Next 13.4" },
  { title: "App Directory" },
  { title: "API Route Handlers" },
  { title: "Typescript (Strict)" },
  { title: "ESLint + Prettier" },
  { title: "TailwindCSS" },
  { title: "Prisma ORM" },
  { title: "PlanetScale Ready" },
  { title: "Metadata API" },
  { title: "Inter Font" },
  { title: "Jest" },
  { title: "Dark Mode" },
  {
    title: "Toasts",
    onClick: () =>
      toast({
        title: "Wait. Toasts?",
        description: "Yep! You can use them anywhere in your app."
      })
  },
  { title: "and much more..." }
]

export function Features() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4">
      {FEATURES.map((f, i) => (
        <Button
          key={i}
          className={cls(
            "flex flex-row items-center space-x-2 text-left",
            f.onClick ? "cursor-pointer" : "cursor-default"
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
