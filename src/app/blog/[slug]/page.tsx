import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"

interface BlogPageProps {
  params: { slug: string }
}

// ✅ Dinamik metadata
export async function generateMetadata(
  { params }: BlogPageProps
): Promise<Metadata> {
  return getBlogMetadata(params.slug)
}

// ✅ Dinamik sayfa
export default function BlogDetailPage({ params }: BlogPageProps) {
  return <BlogDetailClient params={params} />
}
