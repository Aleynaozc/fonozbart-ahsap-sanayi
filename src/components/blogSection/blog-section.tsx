import { BlogCard } from "@/app/blog/components/BlogCard"
import { getAllPosts } from "@/lib/markdown"

export default async function BlogPageSection() {
  const posts = await getAllPosts()


  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  const randomPosts = shuffleArray(posts).slice(0, 2)

  return (
    <main className="mx-auto px-4 py-12 bg-[#1e1e1f]">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch py-12 lg:py-20 ">
        {randomPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            coverImage={post.coverImage}
            category={post.category}
          />
        ))}
      </div>
    </main>
  )
}
