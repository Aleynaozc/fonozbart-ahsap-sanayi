import BlogPageClient from "./blog-client";

import { getSeoMetadata } from "@/hooks/useSeoMetadata";
import type { Metadata } from "next"


export const metadata: Metadata = getSeoMetadata("/blog")
import { getAllPosts } from "@/lib/markdown"


export default async function BlogPage() {
  const posts = await getAllPosts() // ✅ server'da çalışır
  return <BlogPageClient posts={posts} />
}

