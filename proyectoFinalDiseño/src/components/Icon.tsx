import type { SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  name: string
}

export default function Icon({ name, className = "", ...props }: IconProps) {
  return (
    <svg className={className} {...props}>
      <use xlinkHref={`/assets/sprite.svg#${name}`} />
    </svg>
  )
}
