"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MobileTouchFeedbackProps {
  children: ReactNode
  className?: string
  pressedClassName?: string
  isPressed?: boolean
  rippleEffect?: boolean
}

export function MobileTouchFeedback({
  children,
  className,
  pressedClassName = "scale-95 opacity-80",
  isPressed = false,
  rippleEffect = true,
}: MobileTouchFeedbackProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden transition-all duration-150 ease-out",
        "active:scale-95 active:opacity-80",
        "touch-manipulation select-none",
        isPressed && pressedClassName,
        className,
      )}
      style={{
        WebkitTapHighlightColor: "transparent",
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {children}

      {rippleEffect && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-150 active:opacity-100 rounded-inherit" />
        </div>
      )}
    </div>
  )
}
