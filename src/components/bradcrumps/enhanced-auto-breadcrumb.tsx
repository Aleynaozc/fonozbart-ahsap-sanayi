"use client"

import type React from "react"
import { ChevronRight} from "lucide-react"
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

  // Ana sayfa ise ve currentPage varsa göster
  if (fullPath === "/" && !currentPage) {
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

      <nav
        className={`flex items-center justify-between text-sm py-2 ${className}`}
        aria-label="Breadcrumb"
        {...(showRichSnippets && {
          itemScope: true,
          itemType: "https://schema.org/BreadcrumbList",
        })}
      >
        <ol className="flex items-center space-x-1">
          {/* Breadcrumb Items */}
          {displayItems.map((item, index) => (
            <li key={index} className="flex items-center" {...getMicrodataProps(index + 1)}>
              {index > 0 && separator}
              {item.href === "#" ? (
                <span className="text-orange-400" {...getNameMicrodataProps()}>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-orange-500 hover:text-gray-700 transition-colors duration-200"
                  {...getLinkMicrodataProps(item.label, item.href, index + 1)}
                >
                  <span {...getNameMicrodataProps()}>{item.label}</span>
                  {showRichSnippets && <meta itemProp="position" content={String(index + 1)} />}
                </Link>
              )}
            </li>
          ))}
        </ol>

        {currentPage && (
          <div className="flex items-center" {...getMicrodataProps(items.length + 1, true)}>
            <span
              className="text-xs xl:text-sm font-medium tracking-wide text-orange-400"
              aria-current="page"
              {...getNameMicrodataProps()}
            >
              {currentPage}
            </span>
            {showRichSnippets && <meta itemProp="position" content={String(items.length + 1)} />}
          </div>
        )}
      </nav>
    </>
  )
}