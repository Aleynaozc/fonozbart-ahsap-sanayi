export function BlogSchema({ post }: any) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "FNZ AHŞAP SANAYİ",
    },
    publisher: {
      "@type": "Organization",
      name: "FNZ AHŞAP SANAYİ",
    },
    image: post.coverImage,
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
