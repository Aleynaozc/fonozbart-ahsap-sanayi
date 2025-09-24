"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

interface GtagConfig {
  page_path?: string
  page_title?: string
  page_location?: string
  [key: string]: unknown
}

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: GtagConfig
    ) => void
  }
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!measurementId) return

    // Load Google Analytics script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [measurementId])

  useEffect(() => {
    if (!measurementId || !window.gtag) return

    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "")

    // Track page view
    window.gtag("config", measurementId, {
      page_path: url,
      page_title: document.title,
    })
  }, [pathname, searchParams, measurementId])

  return null
}
