"use client"

import { usePathname } from "next/navigation"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface LoadingContextType {
  isLoading: boolean
  loadingProgress: number
  setLoading: (loading: boolean) => void
  setProgress: (progress: number) => void
  startPageTransition: (targetPath: string) => void
  isTransitioning: boolean
  targetPage: string | null
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetPage, setTargetPage] = useState<string | null>(null)
  const pathname = usePathname()

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
    if (!loading) {
      setLoadingProgress(100)
      setTimeout(() => setLoadingProgress(0), 500)
    }
  }

  const setProgress = (progress: number) => {
    setLoadingProgress(Math.min(100, Math.max(0, progress)))
  }

  const startPageTransition = (targetPath: string) => {
    setTargetPage(targetPath)
    setIsTransitioning(true)
    setIsLoading(true)

    // Simulate loading progress
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 30
      if (progress >= 90) {
        clearInterval(interval)
        setProgress(90)
      } else {
        setProgress(progress)
      }
    }, 100)

    // Complete loading after transition
    setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setIsTransitioning(false)
        setTargetPage(null)
        setProgress(0)
      }, 300)
    }, 1500)
  }

  // Reset loading state when pathname changes
  useEffect(() => {
    if (isTransitioning) {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setIsTransitioning(false)
        setTargetPage(null)
        setProgress(0)
      }, 300)
    }
  }, [pathname])

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        loadingProgress,
        setLoading,
        setProgress,
        startPageTransition,
        isTransitioning,
        targetPage,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

export default LoadingProvider
