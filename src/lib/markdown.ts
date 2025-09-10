import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

export type Post = {
  title: string
  date: string
  excerpt: string
  coverImage: string
  tags: string[]
  slug: string
  content: MDXRemoteSerializeResult   // ✅ any yerine doğru tip
  category?: string
}

const contentPath = path.join(process.cwd(), "content", "blog")

export async function getAllSlugs(): Promise<string[]> {
  return fs.readdirSync(contentPath).map((file) => file.replace(/\.md$/, ""))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentPath, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  // Zorunlu alan kontrolü
  if (!data.title || !data.date) return null

  const mdxSource = await serialize(content)

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt ?? "",
    coverImage: data.coverImage ?? "",
    tags: data.tags ?? [],
    slug,
    content: mdxSource,
    category: data.category ?? "",
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getAllSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))

  // null dönenleri filtrele
  const validPosts: Post[] = posts.filter((p): p is Post => p !== null)

  return validPosts.sort((a, b) => (a.date > b.date ? -1 : 1))
}
