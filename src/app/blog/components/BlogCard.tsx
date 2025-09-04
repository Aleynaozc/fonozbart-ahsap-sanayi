"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type BlogCardProps = {
  slug: string
  title: string
  excerpt: string
  date?: string
  coverImage: string
  category?: string
}

// 1. Hero Image Card (Bold, Magazine Style)
export function BlogCard({ slug, title, excerpt, date, coverImage, category }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="relative h-96 rounded-2xl overflow-hidden group shadow-lg">
      <Image src={coverImage} alt={title} fill className="object-cover group-hover:scale-110 transition" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      <div className="absolute bottom-0 p-2 sm:p-8 text-white">
        {category && <span className="text-xs uppercase text-[#FF6B35] tracking-wider">{category}</span>}
        <h2 className="text-2xl font-bold mt-2 group-hover:text-[#FF6B35] transition">{title}</h2>
        <p className="text-sm text-gray-200 mt-2 line-clamp-2">{excerpt}</p>
        <div className="text-xs text-gray-400 mt-3 flex justify-between">
          {date && <span>{new Date(date).toLocaleDateString("tr-TR")}</span>}
          <span className="text-[#FF6B35]">Devamını Oku →</span>
        </div>
      </div>
    </Link>
  )
}
