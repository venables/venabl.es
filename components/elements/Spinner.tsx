import { cls } from "@/lib/utils"

import styles from "./Spinner.module.css"

type Props = {
  className?: string
}

export function Spinner({ className, ...props }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      {...props}
      className={cls(styles.svg, className)}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" />
    </svg>
  )
}
