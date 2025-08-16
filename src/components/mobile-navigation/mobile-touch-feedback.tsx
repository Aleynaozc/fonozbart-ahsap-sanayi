"use client"

import type { ReactNode } from "react"

interface MobileTouchFeedbackProps {
  children: ReactNode
  className?: string
}

export function MobileTouchFeedback({ children, className = "" }: MobileTouchFeedbackProps) {
  return (
    <div
      className={`touch-manipulation active:scale-95 transition-transform duration-150 ${className}`}
      style={{
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  )
}
