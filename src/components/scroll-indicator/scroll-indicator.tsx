"use client"

import { ChevronDown } from "lucide-react"

interface ScrollIndicatorProps {
  targetSection: string
}

export function ScrollIndicator({ targetSection }: ScrollIndicatorProps) {
  const scrollToTarget = () => {
    const element = document.getElementById(targetSection)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={scrollToTarget}
      className="group flex flex-col items-center space-y-2 text-white/70 hover:text-[#FF6B35] transition-colors duration-300"
      aria-label={`Scroll to ${targetSection}`}
    >
      <span className="text-sm font-medium tracking-wider uppercase">Keşfet</span>
      <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative overflow-hidden">
        <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
      </div>
      <ChevronDown className="w-4 h-4 animate-bounce" />
    </button>
  )
}
