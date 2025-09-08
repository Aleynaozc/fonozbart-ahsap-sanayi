import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data" // senin seo-data.ts yolu

interface Props {
  params: { slug: string }
}

// ✅ Dinamik metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return getBlogMetadata(params.slug)
}
export default async function BlogDetailPage({ params }: Props) {
  return <BlogDetailClient params={params} />
}
