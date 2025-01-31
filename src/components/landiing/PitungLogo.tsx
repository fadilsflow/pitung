import type { FC } from "react"

interface PitungLogoProps {
  className?: string
}

const PitungLogo: FC<PitungLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" className="fill-primary" />
      <path
        d="M30 70V30h15c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15H35"
        className="stroke-primary-foreground"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 70V50"
        className="stroke-primary-foreground"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PitungLogo

