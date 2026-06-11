import { cn } from "@/lib/utils"

type GradientOverlayProps = {
  variant?: "dark" | "background"
  direction?: "t" | "b" | "l" | "r"
  layout?: "full" | "top" | "footer"
  className?: string
}

const directionMap = {
  t: "bg-gradient-to-t",
  b: "bg-gradient-to-b",
  l: "bg-gradient-to-l",
  r: "bg-gradient-to-r",
}

const variantMap = {
  dark: "from-black/60 via-black/20",
  background: "from-background via-background/40",
}

const layoutMap = {
  full: "absolute inset-0",
  top: "absolute top-0 left-0 right-0 h-80",
  footer: "absolute inset-x-0 top-0 h-[min(420px,70%)]",
}

export function GradientOverlay({
  variant = "background",
  direction = "t",
  layout = "full",
  className,
}: GradientOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none to-transparent z-0",
        layoutMap[layout],
        directionMap[direction],
        variantMap[variant],
        className
      )}
    />
  )
}
