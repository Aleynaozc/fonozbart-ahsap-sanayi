// hooks/useSeoMetadata.ts

import { defaultMetadata, pageMetadata } from "@/seo-data"
import type { Metadata } from "next"

export function getSeoMetadata(path: string): Metadata {
  const pageData = pageMetadata[path] || {}
  return {
    ...defaultMetadata,
    ...pageData,
  }
}
