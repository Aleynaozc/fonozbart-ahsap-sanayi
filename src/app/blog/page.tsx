import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from "@/lib/blog"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import type { Metadata } from "next"
import { PageHero } from "@/components/pageHero/page-hero"
import { Sparkles } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
export const metadata: Metadata = {
  title: "Blog | FNZ Ahşap Mobilya",
  description: "Mobilya tasarımı, dekorasyon ve proje ipuçları.",
  alternates: { canonical: "https://fnzwood.com/blog" },
}
const BLOGDATA = {
  heroImage: '/assets/images/sliders/hero1.jpg',
  intro: {
    title: 'BLOG',
    heading: 'Lüks otellerden özel villalara',
    highlight: 'projelerimizden seçmeler. ',
    text: 'FNZ Ahşap Sanayi olarak, yılların deneyimini modern tasarım anlayışı ile buluşturuyoruz. FNZ markası, otel mobilyaları, villa dekorasyonları ve özel projelerde kaliteye olan bağlılığımızın bir yansımasıdır.',
  },


};
export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <section className="relative min-h-screen bg-[#1e1e1f] py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      <PageHero
        backgroundImage={BLOGDATA.heroImage}
        badgeText={BLOGDATA.intro.title}
        title={BLOGDATA.intro.heading}
        highlight={BLOGDATA.intro.highlight}
        description={BLOGDATA.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      <div className="relative container mx-auto px-6 mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-[#2a2a2b]/50 border border-white/10 rounded-2xl overflow-hidden  hover:shadow-[0_0_30px_rgba(255,107,53,0.2)] transition-all duration-500 backdrop-blur-lg"
            >
              {post.image && (
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover  transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center text-xs text-gray-400 gap-4 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-[#FF6B35]" /> {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-[#FF6B35]" /> {post.readingTime}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FF6B35] transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.description}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#FF6B35] font-medium group-hover:underline"
                >
                  Devamını Oku <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
