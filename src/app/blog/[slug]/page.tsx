import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"


type BlogParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const { slug } = await params
  return getBlogMetadata(slug)
}

export default async function BlogDetailPage({ params }: BlogParams) {
  const resolvedParams = await params
  return <BlogDetailClient params={resolvedParams} />
}
