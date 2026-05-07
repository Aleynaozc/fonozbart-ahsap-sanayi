import type { Metadata } from "next"
import BlogDetailClient from "./blog-detail-client"
import { getBlogMetadata } from "@/seo-data"
import { getAllSlugs, getPostBySlug } from "@/lib/markdown"


type BlogParams = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogParams): Promise<Metadata> {
  const { slug } = await params
  return getBlogMetadata(slug)
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogDetailPage({ params }: BlogParams) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)
  const pageUrl = `https://fnzwood.com/blog/${resolvedParams.slug}`
  const imageUrl = post?.coverImage?.startsWith("http")
    ? post.coverImage
    : `https://fnzwood.com${post?.coverImage || "/assets/images/fnz-antrasit.png"}`

  const articleSchema = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
        headline: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        image: imageUrl,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Organization",
          name: post.author || "FNZ Ahşap Sanayi",
        },
        publisher: {
          "@type": "Organization",
          name: "FNZ Ahşap Sanayi",
          logo: {
            "@type": "ImageObject",
            url: "https://fnzwood.com/assets/images/fnz-antrasit.png",
          },
        },
      }
    : null

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogDetailClient params={resolvedParams} />
    </>
  )
}
