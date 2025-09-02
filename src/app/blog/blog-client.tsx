import { getAllPosts } from "@/lib/markdown"
import { PageHero } from "@/components/pageHero/page-hero"
import { Sparkles } from "lucide-react"
import { BlogCard } from "./components/BlogCard"

const BLOG = {
  heroImage: '/assets/images/sliders/page-hero-fnz-wood-1.jpg',
  intro: {
    title: 'Blog',
    heading: 'Ahşap Tasarım ve',
    highlight: 'Projelerimizle İlham Veriyoruz',
    text: 'FNZ Ahşap Sanayi’nin güncel blog sayfasında, otel mobilyaları, villa dekorasyonu ve özel projelerle ilgili ilham verici içeriklere ulaşabilirsiniz. Tasarım fikirleri ve uygulama örnekleriyle yaşam alanlarınıza değer katın.',
  },
};

export default async function BlogPageClient() {
  const posts = await getAllPosts()

  return (
    <main className="mx-auto px-4 py-12 ">
      <PageHero
        backgroundImage={BLOG.heroImage}
        badgeText={BLOG.intro.title}
        title={BLOG.intro.heading}
        highlight={BLOG.intro.highlight}
        description={BLOG.intro.text}
        cta={{ label: "Daha Fazla Bilgi Alın", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch  py-12 lg:py-20 ">
        {posts.map((post) => (
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
