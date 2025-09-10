"use client"

import type React from "react"
import { ChevronRight, Home } from "lucide-react"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { SEOBreadcrumb } from "./seo-breadcrumb"
import Link from "next/link"

interface EnhancedAutoBreadcrumbProps {
  className?: string
  showHome?: boolean
  maxItems?: number
  separator?: React.ReactNode
  enableSEO?: boolean
  showRichSnippets?: boolean
  variant?: "default" | "blog" | "minimal"
  currentPageOverride?: string   // 🔥 yeni eklenen
}

export function EnhancedAutoBreadcrumb({
  className = "",
  showHome = true,
  maxItems = 5,
  separator = <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400/70 mx-1 sm:mx-2 flex-shrink-0" />,
  enableSEO = true,
  showRichSnippets = true,
  variant = "blog",
  currentPageOverride,  // 🔥 destructure
}: EnhancedAutoBreadcrumbProps) {
  const { items, currentPage: ctxPage, fullPath } = useBreadcrumb()
  const currentPage = currentPageOverride || ctxPage

  // Ana sayfa ise ve currentPage yoksa breadcrumb gösterme
  if (fullPath === "/" && !currentPage) {
    return null
  }

  const mobileMaxItems = 3
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640
  const effectiveMaxItems = isMobile ? mobileMaxItems : maxItems

  // Çok fazla item varsa ortadakileri gizle
  const displayItems =
    items.length > effectiveMaxItems
      ? [...items.slice(0, 1), { label: "...", href: "#", active: false }, ...items.slice(-1)]
      : items

  // Microdata helpers
  const getMicrodataProps = (index: number, isLast = false) => {
    if (!showRichSnippets) return {}
    return {
      itemProp: "itemListElement",
      itemScope: true,
      itemType: "https://schema.org/ListItem",
      ...(isLast && { "data-current": "page" }),
    }
  }

  const getLinkMicrodataProps = (url: string, position: number) => {
    if (!showRichSnippets) return {}
    return {
      itemProp: "item",
      itemScope: true,
      itemType: "https://schema.org/WebPage",
      "data-position": position,
    }
  }

  const getNameMicrodataProps = () => {
    if (!showRichSnippets) return {}
    return { itemProp: "name" }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case "blog":
        return {
          container: "bg-gray-900/50 backdrop-blur-sm",
          link: "text-gray-300/80 hover:text-white transition-all duration-300 px-2 sm:px-3 py-1 sm:py-2 rounded-lg hover:bg-gray-800/50 font-medium text-xs sm:text-sm ",
          current: "font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm text-[#FF6B35]",
          separator: "text-gray-500/60",
        }
      case "minimal":
        return {
          container: "bg-transparent",
          link: "text-gray-600 hover:text-gray-900 transition-colors duration-200 px-1 sm:px-2 py-1 text-xs sm:text-sm",
          current: "text-gray-900 font-medium px-1 sm:px-2 py-1 text-xs sm:text-sm",
          separator: "text-gray-400",
        }
      default:
        return {
          container: "backdrop-blur-sm",
          link: "text-gray-300/70 hover:text-white transition-colors duration-200 px-1 sm:px-2 py-1 rounded-md hover:bg-white/5 text-xs sm:text-sm",
          current: "text-white font-medium px-1 sm:px-2 py-1 bg-orange-600/80 rounded-md text-xs sm:text-sm",
          separator: "text-gray-400/60",
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <>
      {enableSEO && <SEOBreadcrumb />}

      <nav
        className={`${styles.container} py-2 sm:py-4 px-3 sm:px-6 lg:px-8 ${className}`}
        aria-label="Breadcrumb"
        {...(showRichSnippets && {
          itemScope: true,
          itemType: "https://schema.org/BreadcrumbList",
        })}
      >
        <div className="container mx-auto">
          <ol className="flex items-center flex-wrap gap-0.5 sm:gap-1 text-xs sm:text-sm overflow-x-auto scrollbar-hide">
            {displayItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center flex-shrink-0"
                {...getMicrodataProps(index + 1)}
              >
                {index > 0 && (
                  <span className={`mx-1 sm:mx-2 ${styles.separator} flex justify-center items-center`}>
                    {separator}
                  </span>
                )}

                {item.href === "#" ? (
                  <span
                    className="flex justify-center items-center min-w-max text-gray-400/80 px-2 py-1 whitespace-nowrap"
                    {...getNameMicrodataProps()}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`${styles.link} flex justify-center items-center min-w-max whitespace-nowrap`}
                    {...getLinkMicrodataProps(item.href, index + 1)}
                  >
                    {item.label === "Ana Sayfa" && showHome ? (
                      <span className="flex justify-center items-center gap-1.5 leading-none" {...getNameMicrodataProps()}>
                        <Home className="w-4 h-4 flex-shrink-0" />
                        <span className="hidden sm:inline">{item.label}</span>
                        <span className="sm:hidden sr-only">{item.label}</span>
                      </span>
                    ) : (
                      <span className="flex justify-center items-center" {...getNameMicrodataProps()}>
                        <span className="sm:hidden">
                          {item.label.length > 12 ? `${item.label.slice(0, 12)}...` : item.label}
                        </span>
                        <span className="hidden sm:inline">{item.label}</span>
                      </span>
                    )}
                    {showRichSnippets && <meta itemProp="position" content={String(index + 1)} />}
                  </Link>
                )}
              </li>
            ))}

            {currentPage && (
              <li
                className="flex items-center flex-shrink-0"
                {...getMicrodataProps(items.length + 1, true)}
              >
                <span className={`mx-1 sm:mx-2 ${styles.separator} flex justify-center items-center`}>
                  {separator}
                </span>
                <span
                  className={`${styles.current} flex justify-center items-center min-w-max whitespace-nowrap`}
                  aria-current="page"
                  {...getNameMicrodataProps()}
                >
                  <span className="sm:hidden">
                    {currentPage.length > 15 ? `${currentPage.slice(0, 15)}...` : currentPage}
                  </span>
                  <span className="hidden sm:inline">{currentPage}</span>
                </span>
                {showRichSnippets && (
                  <meta itemProp="position" content={String(items.length + 1)} />
                )}
              </li>
            )}
          </ol>
        </div>
      </nav>
    </>
  )
}
