"use client"

import Image from "next/image"
import { type HTMLAttributes, useState } from "react"

import { cls } from "@/lib/utils"

export type AvatarProps = HTMLAttributes<HTMLDivElement>

export function Avatar({ className, ...props }: AvatarProps) {
  const [isSwinging, setIsSwinging] = useState(false)

  const handleMouseEnter = () => {
    setIsSwinging(true)
  }

  const handleAnimationEnd = () => {
    // setIsSwinging(false)
  }

  return (
    <span
      className={cls(
        "relative block aspect-square shrink-0 origin-top-left",
        isSwinging && "animate-swing",
        className
      )}
      onAnimationEnd={handleAnimationEnd}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      <Image
        alt="Matt Venables"
        className="m-0 aspect-square rounded-xl"
        fill
        src="/images/avatar.png"
      />
    </span>
  )
}
