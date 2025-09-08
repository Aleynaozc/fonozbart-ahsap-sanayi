"use client"

import Link from "next/link"
import Image from "next/image"

type BlogCardProps = {
  slug: string
  title: string
  excerpt: string
  date?: string
  coverImage: string
  category?: string
}

export function BlogCard({ slug, title, excerpt, date, coverImage, category }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col lg:flex-row bg-[#2a2a2b] rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
    >
      {/* Left: Image */}
      <div className="relative w-full lg:w-1/2 aspect-video lg:aspect-auto lg:h-[380px] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Right: Content */}
      <div className="flex flex-col p-5 sm:p-6 flex-1">
        {category && (
          <span className="text-[#FF6B35] font-medium uppercase text-[clamp(0.75rem,0.6rem+0.5vw,1rem)] mb-2">
            {category}
          </span>
        )}

        <h2 className="font-semibold text-white group-hover:text-[#FF6B35] transition text-[clamp(1.125rem,0.9rem+1vw,2rem)] mb-3 leading-snug">
          {title}
        </h2>

        <p className="text-gray-300 line-clamp-3 text-[clamp(0.875rem,0.7rem+0.6vw,1.125rem)] mb-4 leading-relaxed">
          {excerpt}
        </p>

        <div className="mt-auto flex justify-between items-center text-[clamp(0.75rem,0.6rem+0.4vw,1rem)] text-gray-400">
          {date && <span>{new Date(date).toLocaleDateString("tr-TR")}</span>}
          <span className="text-[#FF6B35] font-medium group-hover:underline">
            Devamını Oku →
          </span>
        </div>
      </div>
    </Link>
  )
}
