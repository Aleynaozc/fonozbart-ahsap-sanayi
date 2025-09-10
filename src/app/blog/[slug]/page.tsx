import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"

type PageProps = {
  params: {
    slug: string
  }
}

// ✅ Dinamik metadata
export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  return getBlogMetadata(params.slug)
}

export default async function BlogDetailPage({ params }: PageProps) {
  return <BlogDetailClient params={params} />
}
