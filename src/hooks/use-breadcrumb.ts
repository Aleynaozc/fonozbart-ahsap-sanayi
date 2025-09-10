"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"

interface BreadcrumbItem {
  label: string
  href: string
  active: boolean
}

interface UseBreadcrumbReturn {
  items: BreadcrumbItem[]
  currentPage: string | null
  fullPath: string
}

let breadcrumbConfig: Record<string, string> = {}
let pageTitles: Record<string, string> = {}

export function updateBreadcrumbConfig(config: Record<string, string>) {
  breadcrumbConfig = { ...breadcrumbConfig, ...config }
}

export function updatePageTitles(titles: Record<string, string>) {
  pageTitles = { ...pageTitles, ...titles }
}

function toTitleCase(str: string): string {
  const result = str
    .split(" ")
    .map((word) => {
      if (!word) return ""
      const processed = word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1).toLocaleLowerCase("tr-TR")
      return processed
    })
    .join(" ")

  return result
}

export function useBreadcrumb(): UseBreadcrumbReturn {
  const pathname = usePathname()

  return useMemo(() => {
    const segments = pathname.split("/").filter(Boolean)
    const items: BreadcrumbItem[] = []

    // Ana sayfa
    items.push({
      label: "Ana Sayfa",
      href: "/",
      active: false,
    })

    // Her segment için breadcrumb item oluştur
    segments.forEach((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/")
      const isLast = index === segments.length - 1

      if (segment.startsWith("[") && segment.endsWith("]")) {
        return
      }

      const withSpaces = segment.replace(/-/g, " ")
      let label = breadcrumbConfig[segment] || toTitleCase(withSpaces)

      // Özel case: blog
      if (segment === "blog") {
        label = "Blog"
      }

      items.push({
        label,
        href,
        active: isLast,
      })
    })

    // Son item'ı currentPage olarak ayır
    const currentPage = items.length > 1 ? items.pop()?.label || null : null

    return {
      items: items.filter((item) => !item.active),
      currentPage,
      fullPath: pathname,
    }
  }, [pathname])
}
