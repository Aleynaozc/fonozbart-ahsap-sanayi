import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const blogDir = path.join(process.cwd(), "content/blog") // ✅ tek directory

export type PostFrontmatter = {
  title: string
  description: string
  date: string
  coverImage?: string
  image?: string // ✅ any yerine tipte tanımladık
  tags?: string[]
  seoKeywords?: string[]
  author?: string
  popular?: boolean
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  coverImage?: string
  tags: string[]
  readingTime: string
  content?: string
  seoKeywords?: string[]
  author?: string
  popular?: boolean
}

function readFile(slugOrFile: string) {
  const isFile = slugOrFile.endsWith(".md")
  const fullPath = path.join(blogDir, isFile ? slugOrFile : `${slugOrFile}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  return { fullPath, fileContents }
}

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".md"))
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "")
    const { fileContents } = readFile(file)
    const { data, content } = matter(fileContents)
    const fm = data as PostFrontmatter
    return {
      slug,
      title: fm.title,
      description: fm.description,
      date: fm.date,
      coverImage: fm.coverImage || fm.image, // ✅ artık any yok
      tags: fm.tags ?? [],
      readingTime: readingTime(content).text,
      seoKeywords: fm.seoKeywords,
      author: fm.author,
      popular: fm.popular ?? false,
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPopularPosts(limit = 5) {
  const allPosts = getAllPosts()
  return allPosts
    .filter(post => post.popular) // frontmatter’da popular: true işaretli olanlar
    .slice(0, limit)
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = path.join(blogDir, `${realSlug}.md`) // ✅ artık blogDir kullanıyor
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)
  const fm = data as PostFrontmatter

  return {
    slug: realSlug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    coverImage: fm.coverImage || fm.image, // ✅ any kalktı
    tags: fm.tags ?? [],
    readingTime: readingTime(content).text,
    content,
    seoKeywords: fm.seoKeywords,
    author: fm.author,
    popular: fm.popular ?? false,
  }
}

export function getAllSlugs() {
  return fs.readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}
