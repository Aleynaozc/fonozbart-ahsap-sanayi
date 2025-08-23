import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getPostBySlug, getAllSlugs } from "@/lib/blog"
import { getBlogMetadata } from "@/seo-data"
import { renderMarkdown } from "@/lib/markdown"
import { format } from "date-fns"
import { tr } from "date-fns/locale"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    return getBlogMetadata(params.slug)
  } catch {
    return {}
  }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export default async function BlogPostPage({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug)
    if (!post?.content) return notFound()

    const html = await renderMarkdown(post.content)

    return (
      <main className="container mx-auto max-w-3xl px-4 py-10">
        <article>
          <header className="mb-8">
            <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
              ← Tüm yazılar
            </Link>
            <h1 className="mt-3 text-3xl font-bold">{post.title}</h1>
            <p className="mt-2 text-muted-foreground">{post.description}</p>
            <div className="mt-3 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {format(new Date(post.date), "d MMMM yyyy", { locale: tr })}
              </time>
              <span aria-hidden> · </span>
              <span>{post.readingTime}</span>
            </div>
            {post.image && (
              <div className="mt-6 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1200}
                  height={630}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            )}
            {post.tags.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <li key={t} className="rounded bg-muted px-2 py-1 text-xs">
                    #{t}
                  </li>
                ))}
              </ul>
            )}
          </header>

          <div
            className="prose prose-zinc dark:prose-invert prose-pre:whitespace-pre-wrap max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </main>
    )
  } catch {
    notFound()
  }
}
