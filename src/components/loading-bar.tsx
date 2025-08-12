"use client"

import { useLoading } from "@/hooks/use-loading"



export function LoadingBar() {
  const { isLoading, loadingProgress } = useLoading()

  if (!isLoading) return null

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200/20">
        <div
          className="h-full bg-gradient-to-r from-[#D4A574] via-[#E6B887] to-[#D4A574] transition-all duration-300 ease-out relative overflow-hidden"
          style={{ width: `${loadingProgress}%` }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Pulse indicator */}
      <div className="fixed top-2 right-4 z-[60]">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-[#D4A574] rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  )
}
