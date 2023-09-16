"use client"

import { CheckIcon } from "lucide-react"
import Link from "next/link"
import { useMemo } from "react"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { cls } from "@/lib/utils"

export function Features() {
  const { toast } = useToast()

  const FEATURES = useMemo(
    () => [
      { title: "Next 13.4", href: "https://nextjs.org/" },
      { title: "100% on the Edge 🚀" },
      { title: "Bun Package Manager", href: "https://bun.sh" },
      { title: "App Directory" },
      { title: "API Route Handlers" },
      { title: "Authentication (Email + OAuth)" },
      { title: "Typescript (Strict)" },
      { title: "ESLint + Prettier" },
      { title: "TailwindCSS", href: "https://tailwindcss.com" },
      { title: "Radix UI", href: "https://www.radix-ui.com/" },
      { title: "shadcn/ui", href: "https://ui.shadcn.com/" },
      { title: "Drizzle ORM", href: "https://orm.drizzle.team/" },
      { title: "PostgreSQL" },
      { title: "Email via Resend", href: "https://resend.com" },
      { title: "Vercel ready", href: "https://vercel.com" },
      { title: "Metadata API" },
      { title: "Inter Font", href: "https://rsms.me/inter" },
      { title: "Lucide Icons", href: "https://lucide.dev" },
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
      {FEATURES.map(({ title, onClick, href }, i) => (
        <Button
          key={i}
          variant="link"
          className={cls(
            "justify-start space-x-2 text-left underline-offset-8",
            onClick ?? href
              ? "cursor-pointer underline decoration-border decoration-dotted hover:decoration-foreground hover:decoration-solid"
              : "cursor-default hover:no-underline"
          )}
          onClick={onClick}
          asChild={Boolean(href)}
        >
          {href ? (
            <Link href={href} target="_blank" rel="noreferrer">
              <CheckIcon className="h-4 w-4" />
              <span>{title}</span>
            </Link>
          ) : (
            <>
              <CheckIcon className="h-4 w-4" />
              <span>{title}</span>
            </>
          )}
        </Button>
      ))}
    </div>
  )
}
