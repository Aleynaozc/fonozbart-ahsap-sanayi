"use client"

import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from "react"

interface PreloadedResource {
  url: string
  type: "image" | "font" | "script" | "style"
  loaded: boolean
  error?: boolean
  priority: "high" | "medium" | "low"
}

interface PreloaderContextType {
  preloadedResources: Map<string, PreloadedResource>
  preloadImage: (url: string, priority?: "high" | "medium" | "low") => Promise<void>
  preloadImages: (urls: string[], priority?: "high" | "medium" | "low") => Promise<void>
  preloadFont: (url: string, fontFamily: string) => Promise<void>
  isResourceLoaded: (url: string) => boolean
  getLoadingProgress: () => number
  clearCache: () => void
  preloadNextPageResources: (path: string) => Promise<void>
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined)

// Critical resources that should be preloaded immediately
const CRITICAL_RESOURCES = [
  "/assets/images/fnz-wood-logo-1.png",
  "/assets/images/sliders/page-hero-fnz-wood-3.jpg",
  "/assets/images/sliders/page-hero-fnz-wood-4.jpg",
]

// Page-specific resources mapping
const PAGE_RESOURCES: Record<string, string[]> = {
  "/": [
    "/assets/images/about-sections/about-section-fnz-wood.jpg",
    "/assets/images/sliders/page-hero-fnz-wood-3.jpg",
    "/assets/images/sliders/page-hero-fnz-wood-4.jpg",
    "/assets/images/services-section/otel-odasi-fnz-wood-1.jpg",
    "/assets/images/services-section/mutfak-fnz-wood-1.jpg",
    "/assets/images/services-section/banyo-fnz-wood-1.jpg",
    "/assets/images/services-section/ofis-fnz-wood-1.jpg",
    "/assets/images/services-section/ahsap-pergola-fnz-wood.jpg",
    "/assets/images/services-section/deck-fnz-wood-1.jpg",
    "/assets/images/services-section/kapi-fnz-wood-2.jpg",
    "/assets/images/services-section/yangın-kapısı-fnz-wood.jpg",
  ],
  "/about": [],
  "/projects": [],
}

export function PreloaderProvider({ children }: { children: ReactNode }) {
  const [preloadedResources, setPreloadedResources] = useState<Map<string, PreloadedResource>>(new Map())

  const resourcesRef = useRef(preloadedResources)
  resourcesRef.current = preloadedResources

  const preloadImage = useCallback(
    async (url: string, priority: "high" | "medium" | "low" = "medium"): Promise<void> => {
      // Check if already loaded or loading using ref
      const existing = resourcesRef.current.get(url)
      if (existing?.loaded) return

      // Mark as loading using functional update
      setPreloadedResources((prev) => {
        const newMap = new Map(prev)
        newMap.set(url, {
          url,
          type: "image",
          loaded: false,
          priority,
        })
        return newMap
      })

      return new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = "anonymous"

        img.onload = () => {
          setPreloadedResources((prev) => {
            const newMap = new Map(prev)
            newMap.set(url, {
              url,
              type: "image",
              loaded: true,
              priority,
            })
            return newMap
          })
          resolve()
        }

        img.onerror = () => {
          setPreloadedResources((prev) => {
            const newMap = new Map(prev)
            newMap.set(url, {
              url,
              type: "image",
              loaded: false,
              error: true,
              priority,
            })
            return newMap
          })
          reject(new Error(`Failed to preload image: ${url}`))
        }

        img.src = url
      })
    },
    [], // Removed preloadedResources from dependencies
  )

  const preloadImages = useCallback(
    async (urls: string[], priority: "high" | "medium" | "low" = "medium"): Promise<void> => {
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      const sortedUrls = urls.sort((a, b) => {
        const aPriority = resourcesRef.current.get(a)?.priority || priority
        const bPriority = resourcesRef.current.get(b)?.priority || priority
        return priorityOrder[aPriority] - priorityOrder[bPriority]
      })

      const highPriorityUrls = sortedUrls.filter(
        (url) => (resourcesRef.current.get(url)?.priority || priority) === "high",
      )
      const otherUrls = sortedUrls.filter((url) => (resourcesRef.current.get(url)?.priority || priority) !== "high")

      // Load high priority images sequentially
      for (const url of highPriorityUrls) {
        try {
          await preloadImage(url, "high")
        } catch (error) {
          console.warn(`Failed to preload high priority image: ${url}`, error)
        }
      }

      // Load other images in parallel batches of 3
      const batchSize = 3
      for (let i = 0; i < otherUrls.length; i += batchSize) {
        const batch = otherUrls.slice(i, i + batchSize)
        await Promise.allSettled(batch.map((url) => preloadImage(url, priority)))
      }
    },
    [preloadImage], // Only depend on preloadImage, not preloadedResources
  )

  const preloadFont = useCallback(
    async (url: string, fontFamily: string): Promise<void> => {
      if (resourcesRef.current.get(url)?.loaded) return

      setPreloadedResources((prev) => {
        const newMap = new Map(prev)
        newMap.set(url, {
          url,
          type: "font",
          loaded: false,
          priority: "high",
        })
        return newMap
      })

      try {
        const font = new FontFace(fontFamily, `url(${url})`)
        await font.load()
        document.fonts.add(font)

        setPreloadedResources((prev) => {
          const newMap = new Map(prev)
          newMap.set(url, {
            url,
            type: "font",
            loaded: true,
            priority: "high",
          })
          return newMap
        })
      } catch (error) {
        setPreloadedResources((prev) => {
          const newMap = new Map(prev)
          newMap.set(url, {
            url,
            type: "font",
            loaded: false,
            error: true,
            priority: "high",
          })
          return newMap
        })
        throw error
      }
    },
    [], // Removed preloadedResources from dependencies
  )

  // Check if resource is loaded
  const isResourceLoaded = useCallback((url: string): boolean => {
    return resourcesRef.current.get(url)?.loaded || false
  }, [])

  // Get overall loading progress
  const getLoadingProgress = useCallback((): number => {
    const resources = Array.from(resourcesRef.current.values())
    if (resources.length === 0) return 100

    const loaded = resources.filter((r) => r.loaded).length
    return Math.round((loaded / resources.length) * 100)
  }, [])

  // Clear cache
  const clearCache = useCallback(() => {
    setPreloadedResources(new Map())
  }, [])

  // Preload resources for next page
  const preloadNextPageResources = useCallback(
    async (path: string): Promise<void> => {
      const resources = PAGE_RESOURCES[path] || []
      if (resources.length > 0) {
        await preloadImages(resources, "medium")
      }
    },
    [preloadImages],
  )

  // Preload critical resources on mount
  useEffect(() => {
    const preloadCriticalResources = async () => {
      try {
        await preloadImages(CRITICAL_RESOURCES, "high")
      } catch (error) {
        console.warn("Failed to preload some critical resources:", error)
      }
    }

    preloadCriticalResources()
  }, [preloadImages])

  // Intelligent preloading based on user behavior
  useEffect(() => {
    let mouseIdleTimer: NodeJS.Timeout
    let isIdle = false

    const handleMouseMove = () => {
      if (isIdle) {
        isIdle = false
      }

      clearTimeout(mouseIdleTimer)
      mouseIdleTimer = setTimeout(() => {
        isIdle = true
        // Preload likely next pages when user is idle
        const currentPath = window.location.pathname
        const likelyNextPages = currentPath === "/" ? ["/about", "/projects"] : ["/"]

        likelyNextPages.forEach((path) => {
          preloadNextPageResources(path).catch(console.warn)
        })
      }, 2000)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && isIdle) {
        // Preload resources when tab becomes visible and user was idle
        const homePageResources = PAGE_RESOURCES["/"] || []
        preloadImages(homePageResources, "low").catch(console.warn)
      }
    }

    if (typeof document !== "undefined") {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("visibilitychange", handleVisibilityChange)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("visibilitychange", handleVisibilityChange)
        clearTimeout(mouseIdleTimer)
      }
    }
  }, [preloadImages, preloadNextPageResources])

  const contextValue: PreloaderContextType = {
    preloadedResources,
    preloadImage,
    preloadImages,
    preloadFont,
    isResourceLoaded,
    getLoadingProgress,
    clearCache,
    preloadNextPageResources,
  }

  return <PreloaderContext.Provider value={contextValue}>{children}</PreloaderContext.Provider>
}

export function usePreloader() {
  const context = useContext(PreloaderContext)
  if (context === undefined) {
    throw new Error("usePreloader must be used within a PreloaderProvider")
  }
  return context
}
