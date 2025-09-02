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
  tags?: string[]
  seoKeywords?: string[]
  author?: string
  popular?: boolean
  category?: string
  readingTime: string
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
  category?: string

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
      coverImage: fm.coverImage || (fm as any).image,
      tags: fm.tags ?? [],
      readingTime: readingTime(content).text,
      seoKeywords: fm.seoKeywords,
      author: fm.author,
      popular: fm.popular ?? false,
      category: fm.category
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
    coverImage: fm.coverImage || (fm as any).image,
    tags: fm.tags ?? [],
    readingTime: readingTime(content).text,
    content,
    seoKeywords: fm.seoKeywords,
    author: fm.author,
    popular: fm.popular ?? false,
    category: fm.category
  }
}

export function getAllSlugs() {
  return fs.readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}
