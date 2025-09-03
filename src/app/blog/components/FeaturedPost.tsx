import Link from "next/link"
import Image from "next/image"

type FeaturedPostProps = {
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category?: string
  date?: string
}

export function FeaturedPost({
  slug,
  title,
  excerpt,
  coverImage,
  category,
  date,
}: FeaturedPostProps) {
  return (
    <section className="relative w-full h-[28rem] rounded-2xl overflow-hidden shadow-lg mb-12 group">
      {/* Background Image */}
      <Image
        src={coverImage}
        alt={title}
        fill
        priority
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 p-8 max-w-2xl">
        {category && (
          <span className="inline-block text-xs uppercase tracking-wider bg-[#FF6B35] text-white px-3 py-1 rounded-md mb-3">
            {category}
          </span>
        )}
        <h2 className="text-3xl font-bold text-white group-hover:text-[#FF6B35] transition">
          {title}
        </h2>
        <p className="text-gray-200 mt-3 text-sm line-clamp-3">{excerpt}</p>

        <div className="flex justify-between items-center mt-5 text-sm text-gray-400">
          {date && <span>{new Date(date).toLocaleDateString("tr-TR")}</span>}
          <Link
            href={`/blog/${slug}`}
            className="bg-[#FF6B35] text-white px-5 py-2 rounded-md hover:bg-[#e85a28] transition"
          >
            Devamını Oku →
          </Link>
        </div>
      </div>
    </section>
  )
}
