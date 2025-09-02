import { getPopularPosts } from "@/lib/blog"
import Image from "next/image"
import Link from "next/link"

export default function PopularPosts() {
  const posts = getPopularPosts(3) // örn. ilk 3 popüler yazı

  return (
    <aside className="hidden lg:block">
      <div className="bg-[#2a2a2b]/50 p-6 rounded-xl border border-[#FF6B35]/10">
        <h3 className="text-lg font-semibold mb-4 border-b border-white/10 pb-2">
          Popüler Yazılar
        </h3>
        <div className="space-y-5">
          {posts.map(post => (
            <div key={post.slug} className="flex gap-3">
              <Image
                src={post.coverImage || "/assets/images/fnz-wood-logo-1.png"}
                alt={post.title}
                width={80}
                height={60}
                className="rounded-md object-cover"
              />
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium hover:text-[#FF6B35] line-clamp-2"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-gray-500">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
