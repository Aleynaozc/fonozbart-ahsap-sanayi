import fs from "fs"
import path from "path"
import matter from "gray-matter"
import readingTime from "reading-time"

const blogDir = path.join(process.cwd(), "src/content/blog")

export type PostFrontmatter = {
  title: string
  description: string
  date: string
  image?: string
  tags?: string[]
}

export type Post = {
  slug: string
  title: string
  description: string
  date: string
  image?: string
  tags: string[]
  readingTime: string
  content?: string
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
      image: fm.image,
      tags: fm.tags ?? [],
      readingTime: readingTime(content).text, // e.g., "3 min read"
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post {
  const { fileContents } = readFile(slug)
  const { data, content } = matter(fileContents)
  const fm = data as PostFrontmatter

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: fm.date,
    image: fm.image,
    tags: fm.tags ?? [],
    readingTime: readingTime(content).text,
    content,
  }
}

export function getAllSlugs() {
  return fs.readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}
