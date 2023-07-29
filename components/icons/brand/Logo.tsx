import type { HTMLProps } from "react"

type LogoProps = HTMLProps<HTMLSpanElement>

export function Logo(props: LogoProps) {
  return <span {...props}>👋</span>
}
