"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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
  const [isLoading, setIsLoading] = useState(true) // ilk açılışta loader çıksın
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [targetPage, setTargetPage] = useState<string | null>(null)

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

    const finish = () => {
      clearInterval(interval)
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        setIsTransitioning(false)
        setTargetPage(null)
        setProgress(0)
      }, 300)
    }

    setTimeout(finish, 1500)
  }

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
