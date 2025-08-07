'use client'
import { createContext, useContext, ReactNode } from 'react'
import { PageLoader } from '@/components/loading/page-loader'
import { useLoading } from '@/hooks/use-loading'

interface LoadingContextType {
  isLoading: boolean
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  const { isLoading } = useLoading()

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <PageLoader isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoadingContext() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoadingContext must be used within a LoadingProvider')
  }
  return context
}
