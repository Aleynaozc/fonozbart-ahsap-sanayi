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
    <main className="bg-[#1e1e1f] text-white">
      <PageHero
        backgroundImage={BLOGDATA.heroImage}
        badgeText={BLOGDATA.intro.title}
        title={BLOGDATA.intro.heading}
        highlight={BLOGDATA.intro.highlight}
        description={BLOGDATA.intro.text}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
      <h1 className="mb-6 text-3xl font-bold">Blog</h1>
      <ul className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug} className="group rounded-lg border p-4 hover:shadow-md transition">
            <Link href={`/blog/${post.slug}`}>
              {post.image && (
                <div className="mb-3 overflow-hidden rounded-md">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="h-auto w-full object-cover transition group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                {post.description}
              </p>
              <div className="mt-2 text-xs text-muted-foreground">
                <time dateTime={post.date}>
                  {format(new Date(post.date), "d MMMM yyyy", { locale: tr })}
                </time>
                <span aria-hidden> · </span>
                <span>{post.readingTime}</span>
              </div>
              {post.tags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <li key={t} className="rounded bg-muted px-2 py-1 text-xs">
                      #{t}
                    </li>
                  ))}
                </ul>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
