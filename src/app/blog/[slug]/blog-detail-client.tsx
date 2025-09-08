
import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { getPostBySlug } from "@/lib/markdown"
import MDXContent from "../components/MDXContent"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/pageHero/page-hero"
import {  Sparkles } from "lucide-react"
import { LiaEdit } from "react-icons/lia"
import { CgCalendarDates } from "react-icons/cg"
import PopularPosts from "@/components/sidebar/popularPost"

interface Props {
  params: { slug: string }
}

export default async function BlogDetailClient({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) return notFound()

  return (
    <section className="bg-[#414141] min-h-screen text-white relative">
      <PageHero
        backgroundImage={post.coverImage}
        badgeText={"Blog Detay"}
        title={post.category ?? "Blog"} // undefined ise "Blog" kullan
        highlight={""}
        description={""}
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />
      <div className="absolute inset-0">
        {/* Main background pattern */}
        <div
          className={`absolute inset-0 opacity-5 transition-all duration-3000`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Floating Decorative Elements */}
        <div
          className={`absolute top-20 right-2 w-12 h-12 border-2 border-[#FF6B35]/30 rotate-45 transition-all duration-2000`}
        />

        <div className="grid lg:grid-cols-[3fr_1fr] gap-12">
          {/* Sol içerik */}
          <div>
            <Link href="/blog" className="flex items-center text-[#FF6B35] hover:text-white mb-8">
              <BsArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Tüm Bloglara Dön</span>
            </Link>
            {/* Meta */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-1">
                <CgCalendarDates className="text-[#FF6B35]" size={20} />
                {format(new Date(post.date), "MMMM dd, yyyy", { locale: tr })}
              </div>
              <div className="flex items-center gap-1">
                <LiaEdit className="text-[#FF6B35]" size={20} />FNZ Wood Works Center
              </div>
            </div>

            {/* Title (MDX içerikte H1 olarak gösterilecek) */}
            <MDXContent
              source={post.content}
              frontmatter={{
                title: post.title,
                category: post.category ?? "Blog" // burada da default
              }}
            />


          </div>

          {/* Sağ sidebar */}
          <PopularPosts/>

        </div>
      </div>
    </section>
  )
}
