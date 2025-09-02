"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Image from "next/image"
import { RxDoubleArrowRight } from "react-icons/rx"
import { TbArrowBadgeRightFilled  } from "react-icons/tb";
interface Props {
  source: MDXRemoteSerializeResult
  frontmatter: {
    category: string
    title: string
  }
}

// Yan yana iki resim için özel bileşen
const ImageRow = ({ images }: { images: { src: string; alt?: string }[] }) => {
  return (
    <div className="flex gap-4 my-6">
      {images.map((img, idx) => (
        <div key={idx} className="flex-1 relative aspect-[16/9]">
          <Image
            src={img.src}
            alt={img.alt || "Blog image"}
            fill
            className="rounded-xl shadow-md object-cover"
          />
        </div>
      ))}
    </div>
  )
}

const components = (frontmatter: { category: string; title: string }) => ({
  h1: (props: any) => {
    // frontmatter'dan category alıyoruz
    const category = frontmatter.category ?? ""
    const titleText = props.children as string

    // category metninin başlıkta geçtiği yeri ayırıyoruz
    const parts = titleText.split(category)

    return (
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 leading-snug">
        {/* Category kısmı alt çizgili */}
        {parts[0]}
        <span className="relative inline-block text-[#FF6B35]">
          {category}

        </span>
        {parts[1]}
      </h1>
    )
  }
  ,

  h2: (props: any) => (
    <h2
      className="
        
        text-2xl md:text-3xl 
        font-semibold 
        mt-10 mb-4 
        leading-snug
      "
      {...props}
    >
      <div className="flex items-center gap-1">
        <RxDoubleArrowRight className="text-orange-500 w-5 h-5 mr-2 md:w-6 md:h-6" />    {props.children}
      </div>
    </h2 >
  ),
  h3: (props: any) => (
    <h3
      className="
        
        text-xl md:text-2xl 
        font-semibold 
        mt-6 mb-3 
        flex items-center
      "
      {...props}
    >

      {props.children}
    </h3>
  ),
  hr: () => null,
  p: (props: any) => (
    <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-6" {...props} />
  ),
 ul: (props: any) => (
    <ul className="list-none pl-0 mb-6 space-y-2 text-gray-100 text-base md:text-lg" {...props} />
  ),
  li: (props: any) => (
    <li className="flex items-start gap-2 leading-relaxed">
      <TbArrowBadgeRightFilled    className="text-[#FF6B35] w-5 h-5 mt-1 flex-shrink-0" />
      <span>{props.children}</span>
    </li>
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-orange-500 pl-4 italic text-gray-200 my-6"
      {...props}
    />
  ),
  ImageRow,
})

export default function MDXContent({ source, frontmatter }: Props) {
  return <MDXRemote {...source} components={components(frontmatter)} />
}
