"use client"

import type { ReactNode } from "react"

interface MobileTouchFeedbackProps {
  children: ReactNode
  className?: string
  pressedClassName?: string
}

export function MobileTouchFeedback({
  children,
  className = "",
  pressedClassName = "scale-95 opacity-80",
}: MobileTouchFeedbackProps) {
  return (
    <div className={`touch-manipulation active:${pressedClassName} transition-all duration-150 ${className}`}>
      {children}
    </div>
  )
}
