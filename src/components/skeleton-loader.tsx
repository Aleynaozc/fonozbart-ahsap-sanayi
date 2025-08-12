"use client"

interface SkeletonLoaderProps {
  className?: string
  lines?: number
  showAvatar?: boolean
  showImage?: boolean
}

export function SkeletonLoader({
  className = "",
  lines = 3,
  showAvatar = false,
  showImage = false,
}: SkeletonLoaderProps) {
  return (
    <div className={`animate-pulse ${className}`}>
      {/* Avatar skeleton */}
      {showAvatar && (
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-gray-300 rounded w-1/3"></div>
          </div>
        </div>
      )}

      {/* Image skeleton */}
      {showImage && <div className="w-full h-48 bg-gray-300 rounded-lg mb-4"></div>}

      {/* Text lines skeleton */}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-300 rounded ${index === lines - 1 ? "w-2/3" : "w-full"}`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
