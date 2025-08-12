"use client"

import { useCache } from "@/hooks/use-cache"
import { usePreloader } from "@/hooks/use-preloader"
import { useState, useEffect } from "react"


interface PerformanceMetrics {
  loadTime: number
  cacheHitRate: number
  preloadedResources: number
  memoryUsage: number
  connectionType: string
  pageLoadTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const { getLoadingProgress, preloadedResources } = usePreloader()
  const { getStats } = useCache()

  useEffect(() => {
    const updateMetrics = () => {
      const cacheStats = getStats()
      const loadingProgress = getLoadingProgress()

      // Get connection info
      const connection = (navigator as any).connection
      const connectionType = connection?.effectiveType || "unknown"

      // Get page load time
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const pageLoadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : 0

      setMetrics({
        loadTime: loadingProgress,
        cacheHitRate: cacheStats.hitRate,
        preloadedResources: preloadedResources.size,
        memoryUsage: cacheStats.memoryUsage,
        connectionType,
        pageLoadTime: Math.round(pageLoadTime),
      })
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 2000)

    return () => clearInterval(interval)
  }, [getLoadingProgress, getStats, preloadedResources])

  // Show/hide with keyboard shortcut (Ctrl+Shift+P)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible((prev) => !prev)
      }
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  if (!isVisible || !metrics) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-[9999] max-w-xs">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-[#D4A574]">Performance</h3>
        <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-white">
          ×
        </button>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Progress:</span>
          <span className="text-[#D4A574]">{metrics.loadTime}%</span>
        </div>

        <div className="flex justify-between">
          <span>Cache Hit Rate:</span>
          <span className="text-[#D4A574]">{metrics.cacheHitRate}%</span>
        </div>

        <div className="flex justify-between">
          <span>Preloaded:</span>
          <span className="text-[#D4A574]">{metrics.preloadedResources}</span>
        </div>

        <div className="flex justify-between">
          <span>Memory:</span>
          <span className="text-[#D4A574]">{metrics.memoryUsage}KB</span>
        </div>

        <div className="flex justify-between">
          <span>Connection:</span>
          <span className="text-[#D4A574]">{metrics.connectionType}</span>
        </div>

        <div className="flex justify-between">
          <span>Page Load:</span>
          <span className="text-[#D4A574]">{metrics.pageLoadTime}ms</span>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-gray-600 text-xs text-gray-400">Press Ctrl+Shift+P to toggle</div>
    </div>
  )
}
