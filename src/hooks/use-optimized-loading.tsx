"use client"

import { useCallback, useEffect, useState } from "react"
import { useCache } from "./use-cache"
import { useLoading } from "./use-loading"
import { usePreloader } from "./use-preloader"

interface OptimizedLoadingOptions {
  enablePreloading?: boolean
  enableCaching?: boolean
  enableLazyLoading?: boolean
  preloadOnHover?: boolean
  cacheImages?: boolean
}

const useOptimizedLoading = (options: OptimizedLoadingOptions = {}) => {
  const {
    enablePreloading = true,
    enableCaching = true,
    enableLazyLoading = true,
    preloadOnHover = true,
    cacheImages = true,
  } = options

  const { preloadImage, preloadImages, isResourceLoaded, preloadNextPageResources } = usePreloader()
  const { get, set, prefetch } = useCache()
  const { setLoading, setProgress } = useLoading()
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  // Optimized image loading with caching
  const loadImage = useCallback(
    async (url: string, priority: "high" | "medium" | "low" = "medium"): Promise<HTMLImageElement> => {
      const cacheKey = `image:${url}`

      // Check cache first
      if (enableCaching) {
        const cached = get<HTMLImageElement>(cacheKey)
        if (cached) {
          return cached
        }
      }

      // Check if already preloaded
      if (enablePreloading && isResourceLoaded(url)) {
        const img = new Image()
        img.src = url
        img.crossOrigin = "anonymous"

        if (enableCaching) {
          set(cacheKey, img, 10 * 60 * 1000) // Cache for 10 minutes
        }

        return img
      }

      // Load image with preloading
      if (enablePreloading) {
        await preloadImage(url, priority)
      }

      const img = new Image()
      img.src = url
      img.crossOrigin = "anonymous"

      if (enableCaching) {
        set(cacheKey, img, 10 * 60 * 1000)
      }

      setLoadedImages((prev) => new Set(prev).add(url))
      return img
    },
    [enablePreloading, enableCaching, isResourceLoaded, preloadImage, get, set],
  )

  // Batch load images with progress tracking
  const loadImages = useCallback(
    async (
      urls: string[],
      priority: "high" | "medium" | "low" = "medium",
      onProgress?: (progress: number) => void,
    ): Promise<HTMLImageElement[]> => {
      setLoading(true)
      setProgress(0)

      const results: HTMLImageElement[] = []
      let completed = 0

      for (const url of urls) {
        try {
          const img = await loadImage(url, priority)
          results.push(img)
        } catch (error) {
          console.warn(`Failed to load image: ${url}`, error)
          // Create placeholder image
          const placeholder = new Image()
          placeholder.src = "/placeholder.svg?height=400&width=600&text=Image+Not+Found"
          results.push(placeholder)
        }

        completed++
        const progress = Math.round((completed / urls.length) * 100)
        setProgress(progress)
        onProgress?.(progress)
      }

      setLoading(false)
      return results
    },
    [loadImage, setLoading, setProgress],
  )

  // Preload on hover with debouncing
  const handleHoverPreload = useCallback(
    (url: string) => {
      if (!preloadOnHover || !enablePreloading) {
        return {
          startPreload: () => {},
          cancelPreload: () => {},
        }
      }

      let hoverTimer: NodeJS.Timeout

      const startPreload = () => {
        hoverTimer = setTimeout(() => {
          preloadImage(url, "medium").catch(console.warn)
        }, 100) // 100ms delay to avoid unnecessary preloads
      }

      const cancelPreload = () => {
        clearTimeout(hoverTimer)
      }

      return { startPreload, cancelPreload }
    },
    [preloadOnHover, enablePreloading, preloadImage],
  )

  // Smart preloading based on viewport and user behavior
  const setupIntersectionObserver = useCallback(
    (elements: HTMLElement[], callback: (entries: IntersectionObserverEntry[]) => void) => {
      if (!enableLazyLoading || typeof window === "undefined") return

      const observer = new IntersectionObserver(
        (entries) => {
          callback(entries)
        },
        {
          root: null,
          rootMargin: "50px", // Start loading 50px before element enters viewport
          threshold: 0.1,
        },
      )

      elements.forEach((el) => observer.observe(el))

      return () => {
        elements.forEach((el) => observer.unobserve(el))
        observer.disconnect()
      }
    },
    [enableLazyLoading],
  )

  // Prefetch data with caching
  const prefetchData = useCallback(
    async <T,>(key: string, fetcher: () => Promise<T>, ttl?: number): Promise<T> => {
      if (!enableCaching) {
        return await fetcher()
      }

      return await prefetch(key, fetcher, ttl)
    },
    [enableCaching, prefetch],
  )

  // Preload critical resources for page
  const preloadPageResources = useCallback(
    async (path: string) => {
      if (!enablePreloading) return

      try {
        await preloadNextPageResources(path)
      } catch (error) {
        console.warn(`Failed to preload resources for ${path}:`, error)
      }
    },
    [enablePreloading, preloadNextPageResources],
  )

  // Connection-aware loading
  const [connectionType, setConnectionType] = useState<"slow" | "fast">("fast")

  useEffect(() => {
    if (typeof navigator !== "undefined" && "connection" in navigator) {
      const connection = (navigator as any).connection

      const updateConnectionType = () => {
        const effectiveType = connection?.effectiveType
        setConnectionType(effectiveType === "slow-2g" || effectiveType === "2g" ? "slow" : "fast")
      }

      updateConnectionType()
      connection?.addEventListener("change", updateConnectionType)

      return () => {
        connection?.removeEventListener("change", updateConnectionType)
      }
    }
  }, [])

  // Adaptive loading based on connection
  const adaptiveLoadImages = useCallback(
    async (urls: string[], onProgress?: (progress: number) => void) => {
      const priority = connectionType === "slow" ? "low" : "medium"
      const batchSize = connectionType === "slow" ? 2 : 4

      const results: HTMLImageElement[] = []

      for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize)
        const batchResults = await Promise.allSettled(batch.map((url) => loadImage(url, priority)))

        batchResults.forEach((result, index) => {
          if (result.status === "fulfilled") {
            results.push(result.value)
          } else {
            console.warn(`Failed to load image: ${batch[index]}`, result.reason)
            const placeholder = new Image()
            placeholder.src = "/placeholder.svg?height=400&width=600&text=Loading+Failed"
            results.push(placeholder)
          }
        })

        const progress = Math.round(((i + batch.length) / urls.length) * 100)
        onProgress?.(progress)

        // Add delay for slow connections to prevent overwhelming
        if (connectionType === "slow" && i + batchSize < urls.length) {
          await new Promise((resolve) => setTimeout(resolve, 200))
        }
      }

      return results
    },
    [connectionType, loadImage],
  )

  return {
    loadImage,
    loadImages,
    handleHoverPreload,
    setupIntersectionObserver,
    prefetchData,
    preloadPageResources,
    adaptiveLoadImages,
    connectionType,
    isImageLoaded: (url: string) => loadedImages.has(url),
    loadedImagesCount: loadedImages.size,
  }
}

export default useOptimizedLoading
