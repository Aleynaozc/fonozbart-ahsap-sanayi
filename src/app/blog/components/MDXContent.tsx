"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Image from "next/image"
import { RxDoubleArrowRight } from "react-icons/rx"
import { TbArrowBadgeRightFilled } from "react-icons/tb"
import type { ComponentPropsWithoutRef, ReactNode } from "react"

interface Props {
  source: MDXRemoteSerializeResult
  frontmatter: {
    category: string
    title: string
  }
  wideSrc?: string
  detailSrc?: string
  alt?: string
}

/* Yan yana iki resim */
const ImageRow = ({ images }: { images: { src: string; alt?: string }[] }) => (
  <div className="flex flex-col sm:flex-row gap-4 my-6">
    {images.map((img, idx) => (
      <div key={idx} className="flex-1 relative aspect-[16/9]">
        <Image
          src={img.src}
          alt={img.alt || "Blog image"}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="rounded-xl shadow-md object-cover"
        />
      </div>
    ))}
  </div>
)

/* 3+ görsellik grid */
const ImageGrid = ({ images }: { images: { src: string; alt?: string }[] }) => {
  if (images.length < 3) {
    console.warn("ImageGrid için en az 3 resim gerekiyor.")
    return null
  }

  return (
    <div className="flex flex-col gap-4 my-6">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[0].src}
          alt={images[0].alt || "Blog image"}
          fill
          className="rounded-xl shadow-md object-cover"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {images.slice(1, 3).map((img, idx) => (
          <div key={idx} className="relative aspect-square">
            <Image
              src={img.src}
              alt={img.alt || "Blog image"}
              fill
              className="rounded-xl shadow-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* Tek görsel */
const ImageSingle = ({ src, alt }: { src: string; alt?: string }) => (
  <div className="my-6 relative ">
    <Image
      src={src}
      alt={alt || "Blog image"}
      width={1000}
      height={0}
      sizes="100vw"
      className="rounded-xl shadow-md h-auto w-full object-cover"
    />
  </div>
)

/* Combo görsel */
export const ImageDetailCombo = ({ wideSrc, detailSrc, alt }: Props) => (
  <div className="relative my-8">
    {wideSrc && (
      <div className="rounded-xl shadow-md overflow-hidden relative">
        <Image
          src={wideSrc}
          alt={alt || "Wide angle"}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </div>
    )}
    {detailSrc && (
      <div className="absolute bottom-4 right-4 w-1/3 rounded-xl shadow-lg overflow-hidden border-2 border-white">
        <Image
          src={detailSrc}
          alt={alt || "Detail"}
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    )}
  </div>
)

const components = (frontmatter: { category: string; title: string }) => ({
  /* Ana Başlık (H1) */
  h1: (props: ComponentPropsWithoutRef<"h1">) => {
    const category = frontmatter.category ?? ""
    const titleText = props.children as string
    const parts = titleText.split(category)

    return (
      <h1
        {...props}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-snug"
      >
        {parts[0]}
        <span className="relative inline-block text-[#FF6B35]">{category}</span>
        {parts[1]}
      </h1>
    )
  },

  hr: () => null,

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="text-2xl sm:text-3xl font-semibold mt-8 lg:mt-10 mb-4 leading-snug text-white"
    >
      <div className="flex items-center gap-2">
        <RxDoubleArrowRight className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6" />
        {props.children}
      </div>
    </h2>
  ),

  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      {...props}
      className="text-xl sm:text-2xl font-semibold mt-6 mb-3 flex items-center text-white"
    />
  ),

  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p
      {...props}
      className="text-gray-200 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
    />
  ),

  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      {...props}
      className="list-none pl-0 mb-4 sm:mb-6 space-y-2 text-gray-200 text-base sm:text-lg"
    />
  ),

  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li {...props} className="flex items-start gap-2 leading-relaxed">
      <TbArrowBadgeRightFilled className="text-[#FF6B35] w-4 h-4 sm:w-5 sm:h-5 mt-1 flex-shrink-0" />
      <span>{props.children}</span>
    </li>
  ),

  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l-4 border-orange-500 pl-3 sm:pl-4 italic text-gray-300 my-4 sm:my-6 text-base sm:text-lg leading-relaxed"
    />
  ),

  small: (props: ComponentPropsWithoutRef<"small">) => (
    <small {...props} className="text-sm text-gray-400" />
  ),

  ImageRow,
  ImageGrid,
  ImageSingle,
  ImageDetailCombo,
})

export default function MDXContent({ source, frontmatter }: Props) {
  return <MDXRemote {...source} components={components(frontmatter)} />
}
