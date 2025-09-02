import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type BlogCardProps = {
  slug: string
  title: string
  description: string
  date?: string
  coverImage: string
  category?: string
}

export function BlogCard({ slug, title, description, date, coverImage, category }: BlogCardProps) {
  return (
    <div
    
      className="group bg-[#2a2a2b] rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row h-full"
    >
      {/* Sol tarafta görsel */}
      <div className="relative w-full md:w-1/2 h-56 md:h-auto">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Sağ tarafta içerik */}
      <div className="p-6 flex flex-col flex-1">
        {category && (
          <span className="bg-[#FF6B35] text-white text-xs font-medium px-3 py-1 rounded-full self-start mb-3">
            {category}
          </span>
        )}

        <div className="text-sm text-gray-500 mb-2 flex flex-wrap items-center gap-2">
          <span className="text-gray-400"> FNZ WOOD WORKS</span>
          {date && (
            <>
              <span>•</span>
              <span>{new Date(date).toLocaleDateString("tr-TR")}</span>
            </>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white mb-3">
          {title}
        </h2>

        <p className="text-gray-300 text-base mb-4 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-4 text-sm text-gray-500">
      
          <Link href={`/blog/${slug}`} className="ml-auto">
            <Button
              className="bg-[#FF6B35] cursor-pointer text-white hover:bg-[#e65a25] px-4 py-2 text-sm rounded-full"
            >
              Devamını Oku →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
