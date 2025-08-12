"use client"

import { usePathname } from "next/navigation"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { useEffect } from "react"

interface BreadcrumbItem {
  "@type": string
  position: number
  name: string
  item?: string // Make item optional since current page doesn't need it
}

interface BreadcrumbStructuredData {
  "@context": string
  "@type": string
  itemListElement: BreadcrumbItem[]
}

export function SEOBreadcrumb() {
  const pathname = usePathname()
  const { items, currentPage } = useBreadcrumb()

  useEffect(() => {
    // Remove existing breadcrumb structured data
    const existingScript = document.querySelector("script[data-breadcrumb-schema]")
    if (existingScript) {
      existingScript.remove()
    }

    // Create breadcrumb structured data
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://fnzmobilya.com"

    const breadcrumbItems: BreadcrumbItem[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: baseUrl,
      },
    ]

    // Add intermediate breadcrumb items
    items.forEach((item, index) => {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })
    })

    // Add current page (without item URL as it's the current page)
    if (pathname !== "/") {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: currentPage,
        // Current page doesn't need item URL according to Google guidelines
      })
    }

    const structuredData: BreadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    }

    // Create and inject script tag
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.setAttribute("data-breadcrumb-schema", "true")
    script.textContent = JSON.stringify(structuredData, null, 2)
    document.head.appendChild(script)

    // Cleanup function
    return () => {
      const scriptToRemove = document.querySelector("script[data-breadcrumb-schema]")
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [pathname, items, currentPage])

  // This component doesn't render anything visible
  return null
}
