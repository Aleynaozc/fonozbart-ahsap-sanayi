import { BlogCard } from "./BlogCard"

type Post = {
  title: string
  date?: string
  excerpt: string
  coverImage: string
  slug: string
  category?: string
}

type BlogListProps = {
  posts: (Post | null)[]
}

export function BlogList({ posts }: BlogListProps) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-600">Henüz blog yazısı eklenmedi.</p>
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(
        (post) =>
          post && (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              coverImage={post.coverImage}
            />
          )
      )}
    </div>
  )
}
