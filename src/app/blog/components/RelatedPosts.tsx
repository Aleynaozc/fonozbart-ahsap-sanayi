"use client"

import { BlogCard } from "./BlogCard"
import { ArrowRight, Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Post } from "@/lib/blog"

interface RelatedPostsProps {
  currentPost: Post
  allPosts: Post[]
}

export function RelatedPosts({ currentPost, allPosts }: RelatedPostsProps) {
  // Get related posts based on category and tags
  const getRelatedPosts = () => {
    const related = allPosts
      .filter((post) => post.slug !== currentPost.slug)
      .map((post) => {
        let score = 0

        // Same category gets higher score
        if (post.category && post.category === currentPost.category) {
          score += 3
        }

        // Shared tags get points
        const sharedTags = post.tags.filter((tag) =>
          currentPost.tags.includes(tag)
        )
        score += sharedTags.length

        return { post, score }
      })
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ post }) => post)

    // If we don't have enough related posts, fill with recent posts
    if (related.length < 3) {
      const recentPosts = allPosts
        .filter(
          (post) =>
            post.slug !== currentPost.slug &&
            !related.some((r) => r.slug === post.slug) // ✅ includes yerine slug karşılaştırması
        )
        .slice(0, 3 - related.length)

      return [...related, ...recentPosts]
    }

    return related
  }

  const relatedPosts = getRelatedPosts()

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-12 lg:py-16 bg-[#2a2a2a] border-t border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#FF6B35]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm mb-6">
              <Briefcase className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">
                İlgili Makaleler
              </span>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 text-balance">
              <span className="text-[#FF6B35]">Benzer</span> Konularda Uzman
              Görüşleri
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              Bu makaleyle ilgili diğer profesyonel içeriklerimizi keşfedin ve
              ahşap mobilya dünyasındaki bilginizi artırın
            </p>
          </div>

          {/* Related Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {relatedPosts.map((post, index) => (
              <div
                key={post.slug}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  description={post.description}   
                  date={post.date}
                  coverImage={post.coverImage}
                  category={post.category}
                  author={post.author}
                  readTime={post.readingTime}  
                />
              </div>
            ))}
          </div>

          {/* CTA to All Posts */}
          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-[#FF6B35]/30 text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 group bg-transparent"
              >
                <span>Tüm Uzman Makalelerini Gör</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}
