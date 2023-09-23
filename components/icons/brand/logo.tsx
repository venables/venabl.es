import { PowerIcon } from "lucide-react"
import { type LucideProps } from "lucide-react"

type LogoProps = LucideProps

export function Logo(props: LogoProps) {
  return <PowerIcon strokeWidth={3} {...props} />
}
