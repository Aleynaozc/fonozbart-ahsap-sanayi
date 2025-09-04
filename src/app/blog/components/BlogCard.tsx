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
      className="group flex flex-col md:flex-row bg-[#2a2a2b] rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
    >
      {/* Sol: Görsel */}
      <div className="relative w-full md:w-1/2 h-48 md:h-[400px] overflow-hidden">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Sağ: İçerik */}
      <div className="flex flex-col p-4 sm:p-6 flex-1">
        {category && (
          <span
            className="
              text-[#FF6B35] font-medium uppercase
              text-xs sm:text-sm md:text-base lg:text-lg
              mb-2
            "
          >
            {category}
          </span>
        )}

        <h2
          className="
            font-semibold text-white group-hover:text-[#FF6B35] transition
            text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl
            mb-3
          "
        >
          {title}
        </h2>

        <p
          className="
            text-gray-300 line-clamp-3
            text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.25rem]
            mb-4
          "
        >
          {excerpt}
        </p>

        <div
          className="
            mt-auto flex justify-between items-center
            text-xs sm:text-sm md:text-base lg:text-lg text-gray-400
          "
        >
          {date && <span>{new Date(date).toLocaleDateString("tr-TR")}</span>}
          <span className="text-[#FF6B35] font-medium group-hover:underline">
            Devamını Oku →
          </span>
        </div>
      </div>
    </Link>
  )
}
