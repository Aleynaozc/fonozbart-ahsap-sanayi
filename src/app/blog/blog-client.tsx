"use client"

import { useState, useMemo } from "react"
import { PageHero } from "@/components/pageHero/page-hero"
import { Sparkles } from "lucide-react"
import { BlogCard } from "./components/BlogCard"
import { BlogSearch } from "./components/BlogSearch"
import { CategoryFilter } from "./components/CategoryFilter"
import { Pagination } from "./components/Pagination"
import type { Post } from "@/lib/markdown"
import { FeaturedPost } from "./components/FeaturedPost"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

// ===== Tag Cloud (read-only) =====
export function TagCloud({ posts }: { posts: Post[] }) {
  const tags = useMemo(() => {
    const allTags = posts.flatMap((p) => p.tags || [])
    const tagCount: Record<string, number> = {}
    allTags.forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1
    })
    return Object.entries(tagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
  }, [posts])

  return (
    <div className="mb-8 sticky top-20">
      <h3 className="text-lg font-semibold mb-2">Popüler Etiketler</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map(([tag, count]) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 rounded-md bg-[#2a2a2b] text-white cursor-not-allowed"
          >
            {tag} 
          </span>
        ))}
      </div>
    </div>
  )
}

// ===== Blog Page =====
export default function BlogPageClient({ posts }: { posts: Post[] }) {
  const categories: string[] = Array.from(
    new Set(posts.map((p) => p.category).filter((c): c is string => Boolean(c)))
  )
  const [featured, ...rest] = posts
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("all")
  const [page, setPage] = useState(1)
  const perPage = 6

  const filteredPosts = posts.filter((post) => {
    const matchesQuery =
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === "all" || post.category === category
    return matchesQuery && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / perPage)
  const paginatedPosts = filteredPosts.slice((page - 1) * perPage, page * perPage)

  return (
    <main className="bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f]">
      <PageHero
        backgroundImage="/assets/images/sliders/page-hero-fnz-wood-1.jpg"
        badgeText="Blog"
        title="Ahşap Tasarım ve"
        highlight="Projelerimizle İlham Veriyoruz"
        description="FNZ Ahşap Sanayi’nin güncel blog sayfasında, otel mobilyaları, villa dekorasyonu ve özel projelerle ilgili ilham verici içeriklere ulaşabilirsiniz."
        cta={{ label: "Daha Fazla Bilgi Alın", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
       
      {/* Search & Category (ortada hizalı) */}

      <div className="mt-10 w-full flex flex-col items-center gap-4 mb-10">
        <div className="w-full max-w-xl">
          <BlogSearch
            onSearch={(q) => {
              setQuery(q)
              setPage(1)
            }}
          />
        </div>
        <div className="">
          <CategoryFilter
            categories={categories}
            selected={category}
            onSelect={(c) => {
              setCategory(c)
              setPage(1)
            }}
          />
        </div>
      </div>
      {/* WRAPPER: daha geniş container + hizalama */}
      <div className="mx-auto px-6 lg:px-40 ">
        {featured && <FeaturedPost {...featured} />}
        {/* Content + Sidebar: 4 eşit kolon, gap görsel oranında */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Sol Ana Alan: 3 kolon */}
          <div className="md:col-span-3 space-y-8">
            {/* Kartlar: 3 kolon -> her kart genişliği 1 kolon = sidebar genişliği */}
            <div className="grid grid-cols-1  gap-8 lg:gap-10 ">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>



            <div className="flex justify-center mb-10">
              <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
            </div>
          </div>

          {/* Sağ Sidebar: 1 kolon, sticky */}
          <aside className="md:col-span-1 sticky top-30 self-start mb-10">
            <div className="bg-[#1e1e1f] p-5 rounded-2xl">
              <TagCloud posts={posts} />
            </div>
            <div className="mt-6 mb-10 flex justify-center gap-6">
              <a href="hhttps://www.facebook.com/fnzwood" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#3b5998] text-white hover:bg-[#2d4373] transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/fnzwood" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-gradient-to-tr from-[#feda75] via-[#fa7e1e] to-[#d62976] text-white hover:opacity-90 transition">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/fonozbart-ah%C5%9Fap-sanayi?originalSubdomain=tr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#0077b5] text-white hover:bg-[#005582] transition">
                <FaLinkedinIn />
              </a>
            </div>
          </aside>
        </div>
      </div>


    </main>
  )
}
