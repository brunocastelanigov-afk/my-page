import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type FadeUpProps = React.ComponentProps<typeof motion.div> & {
  delay?: number
  offset?: number
  amount?: number
}

export function FadeUp({
  children,
  className,
  delay = 0,
  offset = -24,
  amount = 0.22,
  transition,
  viewport,
  ...props
}: FadeUpProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: offset }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount, ...viewport }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
