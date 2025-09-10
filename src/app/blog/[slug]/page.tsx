import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"

// ✅ Dinamik metadata
export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  return getBlogMetadata(params.slug)
}

// ✅ Dinamik sayfa
export default function BlogDetailPage(
  { params }: { params: { slug: string } }
) {
  return <BlogDetailClient params={params} />
}
