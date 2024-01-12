import Image from "next/image"
import { type HTMLAttributes } from "react"

import { cls } from "@/lib/utils"

export type LogoImageProps = HTMLAttributes<HTMLDivElement>

export function LogoImage({ className, ...props }: LogoImageProps) {
  return (
    <div className={cls("relative h-12 w-12", className)} {...props}>
      <Image
        alt="Matt Venables"
        layout="fill"
        objectFit="contain"
        src="/images/logo.png"
      />
    </div>
  )
}
