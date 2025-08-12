"use client"

import type React from "react"
import { ChevronRight, Home } from "lucide-react"
import { Cairo } from "next/font/google"
import { useBreadcrumb } from "@/hooks/use-breadcrumb"
import { SEOBreadcrumb } from "./seo-breadcrumb"
import Link from "next/link"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

interface EnhancedAutoBreadcrumbProps {
  className?: string
  showHome?: boolean
  maxItems?: number
  separator?: React.ReactNode
  enableSEO?: boolean
  showRichSnippets?: boolean
}

export function EnhancedAutoBreadcrumb({
  className = "",
  showHome = true,
  maxItems = 5,
  separator = <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />,
  enableSEO = true,
  showRichSnippets = true,
}: EnhancedAutoBreadcrumbProps) {
  const { items, currentPage, fullPath } = useBreadcrumb()

  // Ana sayfa ise breadcrumb gösterme
  if (fullPath === "/" && !showHome) {
    return null
  }

  // Çok fazla item varsa ortadakileri gizle
  const displayItems =
    items.length > maxItems
      ? [...items.slice(0, 2), { label: "...", href: "#", active: false }, ...items.slice(-2)]
      : items

  // Generate microdata attributes for rich snippets
  const getMicrodataProps = (index: number, isLast = false) => {
    if (!showRichSnippets) return {}

    return {
      itemProp: "itemListElement",
      itemScope: true,
      itemType: "https://schema.org/ListItem",
      ...(isLast && { "data-current": "page" }),
    }
  }

  const getLinkMicrodataProps = (name: string, url: string, position: number) => {
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

  return (
    <>
      {/* SEO Structured Data */}
      {enableSEO && <SEOBreadcrumb />}

      <section
        className={`bg-gray-50 border-b border-gray-200 py-4 ${className}`}
        {...(showRichSnippets && {
          itemScope: true,
          itemType: "https://schema.org/BreadcrumbList",
          "aria-label": "Breadcrumb",
        })}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center space-x-2" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                {/* Home Icon */}
                {showHome && (
                  <li {...getMicrodataProps(0)}>
                    <Link
                      href="/"
                      className="flex items-center text-gray-500 hover:text-[#D4A574] transition-colors duration-300 group"
                      {...getLinkMicrodataProps("Ana Sayfa", "/", 1)}
                    >
                      <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="sr-only" {...getNameMicrodataProps()}>
                        Ana Sayfa
                      </span>
                      {showRichSnippets && <meta itemProp="position" content="1" />}
                    </Link>
                  </li>
                )}

                {/* Breadcrumb Items */}
                {displayItems.map((item, index) => (
                  <li key={index} className="flex items-center" {...getMicrodataProps(index + 1)}>
                    {(showHome || index > 0) && separator}
                    {item.href === "#" ? (
                      <span className="text-sm font-medium text-gray-400" {...getNameMicrodataProps()}>
                        {item.label}
                      </span>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium transition-colors duration-300 hover:scale-105 text-gray-600 hover:text-[#D4A574] cursor-pointer"
                        {...getLinkMicrodataProps(item.label, item.href, index + 2)}
                      >
                        <span {...getNameMicrodataProps()}>{item.label}</span>
                        {showRichSnippets && <meta itemProp="position" content={String(index + 2)} />}
                      </Link>
                    )}
                  </li>
                ))}

                {/* Current Page */}
                {items.length > 0 && (
                  <li className="flex items-center" {...getMicrodataProps(items.length + 1, true)}>
                    {separator}
                    <span
                      className="text-sm font-medium text-[#D4A574] cursor-default"
                      aria-current="page"
                      {...getNameMicrodataProps()}
                    >
                      {currentPage}
                    </span>
                    {showRichSnippets && <meta itemProp="position" content={String(items.length + 2)} />}
                  </li>
                )}
              </ol>
            </nav>

            {/* Current Page Title with Coffee Line */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-[#D4A574]"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
              </div>
              <h1 className={`${cairo.className} text-lg font-bold text-[#3d3d3d]`}>{currentPage}</h1>
            </div>
          </div>

          {/* Mobile Current Page Title */}
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <div className="w-6 h-0.5 bg-[#D4A574]"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
              </div>
              <h1 className={`${cairo.className} text-base font-bold text-[#3d3d3d]`}>{currentPage}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
