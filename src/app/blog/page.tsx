// app/hizmetler/page.tsx
import BlogPageClient from "./blog-client";

import { getSeoMetadata } from "@/hooks/useSeoMetadata";
import type { Metadata } from "next"


export const metadata: Metadata = getSeoMetadata("/blog")
export default function BlogPage() {
  return <BlogPageClient />;
}
