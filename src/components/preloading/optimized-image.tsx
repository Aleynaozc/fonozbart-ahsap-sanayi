"use client"

import useOptimizedLoading from "@/hooks/use-optimized-loading"
import { usePreloader } from "@/hooks/use-preloader"
import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: "high" | "medium" | "low"
  className?: string
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
  lazy?: boolean
  preloadOnHover?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = "medium",
  className = "",
  fill = false,
  sizes,
  quality = 80,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  lazy = true,
  preloadOnHover = true,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy)
  const imgRef = useRef<HTMLDivElement>(null)

  const { loadImage, handleHoverPreload, setupIntersectionObserver, connectionType } = useOptimizedLoading()
  const { isResourceLoaded } = usePreloader()

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || !imgRef.current) return

    const cleanup = setupIntersectionObserver([imgRef.current], (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      })
    })

    return cleanup
  }, [lazy, setupIntersectionObserver])

  // Preload on hover
  const hoverHandlers = useCallback(() => {
    if (!preloadOnHover) return {}

    const handlers = handleHoverPreload(src)
    if (!handlers) return {}

    const { startPreload, cancelPreload } = handlers

    return {
      onMouseEnter: startPreload,
      onMouseLeave: cancelPreload,
    }
  }, [preloadOnHover, handleHoverPreload, src])

  // Handle image load
  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  // Handle image error
  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  // Adaptive quality based on connection
  const adaptiveQuality = connectionType === "slow" ? Math.max(quality - 20, 40) : quality

  // Generate blur placeholder
  const generateBlurDataURL = (w: number, h: number) => {
    const canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext("2d")
    if (ctx) {
      ctx.fillStyle = "#f3f4f6"
      ctx.fillRect(0, 0, w, h)
    }
    return canvas.toDataURL()
  }

  // Don't render until in view (for lazy loading)
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={`bg-gray-200 animate-pulse ${className}`}
        style={{ width, height }}
        {...hoverHandlers()}
      />
    )
  }

  // Error state
  if (hasError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ width, height }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">📷</div>
          <div>Image not found</div>
        </div>
      </div>
    )
  }

  const imageProps = {
    src,
    alt,
    quality: adaptiveQuality,
    onLoad: handleLoad,
    onError: handleError,
    className: `transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`,
    placeholder: placeholder as any,
    blurDataURL: blurDataURL || (width && height ? generateBlurDataURL(width, height) : undefined),
    sizes: sizes || (fill ? "100vw" : undefined),
    priority: priority === "high",
    ...hoverHandlers(),
    ...props,
  }

  return (
    <div ref={imgRef} className="relative">
      {fill ? <Image {...imageProps} fill /> : <Image {...imageProps} width={width} height={height} />}

      {/* Loading overlay */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D4A574] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Preloaded indicator */}
      {isResourceLoaded(src) && (
        <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full opacity-50"></div>
      )}
    </div>
  )
}
