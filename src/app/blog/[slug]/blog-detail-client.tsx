import Link from "next/link"
import { BsArrowLeft } from "react-icons/bs"
import { getPostBySlug } from "@/lib/markdown"
import MDXContent from "../components/MDXContent"
import { format } from "date-fns"
import { tr } from "date-fns/locale"
import { notFound } from "next/navigation"
import { PageHero } from "@/components/pageHero/page-hero"
import { Sparkles } from "lucide-react"
import { LiaEdit } from "react-icons/lia"
import { CgCalendarDates } from "react-icons/cg"
import PopularPosts from "@/components/sidebar/popularPost"
import { EnhancedAutoBreadcrumb } from "@/components/bradcrumps/enhanced-auto-breadcrumb"

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
        badgeText={post.badgeText || "Blog Detay"}
        title={post.title ?? "Blog"}
        highlight=""
        description=""
        cta={{ label: "İletişime Geç", href: "/iletisim" }}
        icon={<Sparkles className="w-4 h-4" />}
      />

      <EnhancedAutoBreadcrumb
        className="bg-black/20 backdrop-blur-sm border-b border-white/10 z-25"
        currentPageOverride={post.title}   
      />


      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 z-20">
        <div className="grid lg:grid-cols-[3fr_1fr] gap-12">
          {/* Sol içerik */}
          <div>
            <Link
              href="/blog"
              className="flex items-center text-[#FF6B35] hover:text-white mb-8"
            >
              <BsArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Tüm Bloglara Dön</span>
            </Link>

            <div className="flex items-center space-x-4 text-gray-400 text-sm mb-8">
              <div className="flex items-center gap-1">
                <CgCalendarDates className="text-[#FF6B35]" size={20} />
                {format(new Date(post.date), "MMMM dd, yyyy", { locale: tr })}
              </div>
              <div className="flex items-center gap-1">
                <LiaEdit className="text-[#FF6B35]" size={20} />FNZ Wood Works
                Center
              </div>
            </div>

            <MDXContent
              source={post.content}
              frontmatter={{
                title: post.title,
                category: post.category ?? "Blog",
              }}
            />
          </div>

          {/* Sağ sidebar */}
          <PopularPosts />
        </div>
      </div>
    </section>
  )
}
