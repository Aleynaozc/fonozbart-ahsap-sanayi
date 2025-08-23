import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"
import { renderMarkdown } from "@/lib/markdown"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { Facebook, Instagram, Twitter } from "lucide-react"

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const post = getPostBySlug(params.slug)
    return {
      title: post.title,
      description: post.description,
    }
  } catch {
    return {}
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()

  const html = await renderMarkdown(post.content)

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 text-gray-900 min-h-screen">
   

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover brightness-75"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-4 py-1 bg-orange-500 text-white text-xs rounded-full uppercase tracking-wide mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          {post.description && (
            <p className="mt-4 text-lg text-gray-200">{post.description}</p>
          )}
          <div className="mt-6 text-sm text-gray-300">
            <time dateTime={post.date}>
              {format(new Date(post.date), "d MMMM yyyy", { locale: tr })}
            </time>{" "}
            · {post.readingTime}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-a:text-orange-600"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {/* Tags & Share */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t border-gray-200 pt-8">
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Paylaş:</span>
            <a href="#" className="text-gray-500 hover:text-orange-600">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-600">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-600">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-600 text-white py-16 mt-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siz de modern mutfağınızı tasarlamak ister misiniz?
          </h2>
          <p className="mb-6 text-lg text-orange-100">
            FNZ Ahşap Sanayi olarak projeleriniz için özel tasarım çözümleri sunuyoruz.
          </p>
          <Link
            href="/iletisim"
            className="inline-block px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
    </main>
  )
}
