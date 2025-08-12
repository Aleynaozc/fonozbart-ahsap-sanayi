"use client"

import { createContext, useContext, type ReactNode } from "react"
import { updateBreadcrumbConfig, updatePageTitles } from "@/hooks/use-breadcrumb"

interface BreadcrumbContextType {
  updateConfig: (config: Record<string, string>) => void
  updateTitles: (titles: Record<string, string>) => void
}

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined)

interface BreadcrumbProviderProps {
  children: ReactNode
  initialConfig?: Record<string, string>
  initialTitles?: Record<string, string>
}

export function BreadcrumbProvider({ children, initialConfig = {}, initialTitles = {} }: BreadcrumbProviderProps) {
  // İlk konfigürasyonu uygula
  if (Object.keys(initialConfig).length > 0) {
    updateBreadcrumbConfig(initialConfig)
  }

  if (Object.keys(initialTitles).length > 0) {
    updatePageTitles(initialTitles)
  }

  const contextValue: BreadcrumbContextType = {
    updateConfig: updateBreadcrumbConfig,
    updateTitles: updatePageTitles,
  }

  return <BreadcrumbContext.Provider value={contextValue}>{children}</BreadcrumbContext.Provider>
}

export function useBreadcrumbContext() {
  const context = useContext(BreadcrumbContext)
  if (context === undefined) {
    throw new Error("useBreadcrumbContext must be used within a BreadcrumbProvider")
  }
  return context
}
