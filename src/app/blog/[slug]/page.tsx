import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"

type BlogParams = {
  params: {
    slug: string
  }
}

// ✅ Dinamik metadata
export async function generateMetadata(
  { params }: BlogParams
): Promise<Metadata> {
  return getBlogMetadata(params.slug)
}

// ✅ Dinamik sayfa
export default function BlogDetailPage({ params }: BlogParams) {
  return <BlogDetailClient params={params} />
}
