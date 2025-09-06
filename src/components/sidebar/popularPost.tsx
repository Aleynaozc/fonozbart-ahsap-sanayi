import { getPopularPosts } from "@/lib/blog"
import { format } from "date-fns"
import { Calendar, Eye, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { tr } from "date-fns/locale"

export default function PopularPosts() {
  const posts = getPopularPosts(3)

  return (
    <div className="flex flex-col lg:flex-row lg:gap-8">
      {/* Main Content Placeholder */}
      <div className="flex-1">
        {/* Blog içeriği buraya gelecek */}
      </div>

      {/* Sidebar */}
      <aside className="mt-8 lg:mt-0 lg:w-96 flex-shrink-0">
        <div className="lg:sticky lg:top-40 space-y-6">
          {/* Popular Posts */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 text-[#FF6B35]" />
              Popüler Yazılar
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {posts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col sm:flex-row sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-700/30 transition-all duration-300"
                >
                  <div className="relative w-full sm:w-20 lg:w-24 h-40 sm:h-16 lg:h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={post.coverImage || "/placeholder.svg?height=64&width=64&query=wood furniture"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 left-1 w-5 h-5 bg-[#FF6B35] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 mt-2 sm:mt-0">
                    <h4 className="text-white text-sm sm:text-base lg:text-base font-medium line-clamp-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                      {post.title}
                    </h4>
                    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                        <span>{format(new Date(post.date), "MMMM dd, yyyy", { locale: tr })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4" />
                        <span>{Math.floor(Math.random() * 500) + 100}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700 backdrop-blur-sm">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-3 sm:mb-4">Kategoriler</h3>
            <div className="flex flex-wrap sm:flex-col gap-2 sm:gap-2">
              {["Ahşap İşçiliği", "Modern Tasarım", "Klasik Mobilya", "Dekorasyon", "İpuçları"].map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="block px-3 py-2 text-xs sm:text-sm lg:text-base text-gray-300 hover:text-[#FF6B35] hover:bg-gray-700/30 rounded-lg transition-all duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
