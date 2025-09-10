import Image from "next/image"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote/rsc"

type BlogDetailProps = {
  post: {
    title: string
    date?: string
    excerpt: string
    coverImage: string
    tags: string[]
    slug: string
    content: MDXRemoteSerializeResult 
    category?: string
  }
}

export function BlogDetail({ post }: BlogDetailProps) {
  return (
    <article className="prose lg:prose-xl mx-auto">
      <h1 className="mb-2">{post.title}</h1>
      <Image
        src={post.coverImage}
        alt={post.title}
        width={1200}
        height={600}
        className="rounded-xl mb-6"
      />
      <MDXRemote source={post.content} />
    </article>
  )
}
