"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import Image from "next/image"
import { RxDoubleArrowRight } from "react-icons/rx"
import { TbArrowBadgeRightFilled } from "react-icons/tb"
import type { ComponentPropsWithoutRef } from "react"

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
const ImageRow = ({ images }: { images?: { src: string; alt?: string }[] }) => {
  if (!images || images.length === 0) return null
  
  return (
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
}

/* 3+ gorsellik grid */
const ImageGrid = ({ images }: { images?: { src: string; alt?: string }[] }) => {
  if (!images || images.length < 3) {
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

/* Tek gorsel */
const ImageSingle = ({ src, alt }: { src?: string; alt?: string }) => {
  if (!src) return null
  
  return (
    <div className="my-6 relative">
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
}

/* Combo gorsel */
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

/* Table components */
const Table = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-x-auto my-8 rounded-lg border border-white/10">
    <table className="w-full border-collapse">
      {children}
    </table>
  </div>
)

const THead = ({ children }: { children: React.ReactNode }) => (
  <thead className="bg-[#FF6B35]/20">
    {children}
  </thead>
)

const TBody = ({ children }: { children: React.ReactNode }) => (
  <tbody className="divide-y divide-white/10">
    {children}
  </tbody>
)

const Tr = ({ children }: { children: React.ReactNode }) => (
  <tr className="hover:bg-white/5 transition-colors">
    {children}
  </tr>
)

const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="px-4 py-3 text-left text-sm font-semibold text-[#FF6B35] uppercase tracking-wider">
    {children}
  </th>
)

const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="px-4 py-3 text-gray-300 text-sm">
    {children}
  </td>
)

const components = (frontmatter: { category: string; title: string }) => ({
  /* Ana Baslik (H1) */
  h1: (props: ComponentPropsWithoutRef<"h1">) => {
    const category = frontmatter.category ?? ""
    const titleText = props.children as string

    if (typeof titleText === "string" && category && titleText.includes(category)) {
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
    }

    return (
      <h1
        {...props}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-snug"
      />
    )
  },

  hr: () => null,

  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      {...props}
      className="text-2xl sm:text-3xl font-semibold mt-8 lg:mt-10 mb-4 leading-snug text-white"
    >
      <div className="flex items-center gap-2">
        <RxDoubleArrowRight className="text-orange-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
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

  h4: (props: ComponentPropsWithoutRef<"h4">) => (
    <h4
      {...props}
      className="text-lg sm:text-xl font-medium text-white mb-2 mt-6"
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

  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      {...props}
      className="list-decimal list-inside mb-4 sm:mb-6 space-y-2 text-gray-200 text-base sm:text-lg ml-4"
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
      className="border-l-4 border-orange-500 pl-3 sm:pl-4 italic text-gray-300 my-4 sm:my-6 text-base sm:text-lg leading-relaxed bg-[#2a2a2b]/50 py-4 rounded-r-lg"
    />
  ),

  small: (props: ComponentPropsWithoutRef<"small">) => (
    <small {...props} className="text-sm text-gray-400" />
  ),

  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong {...props} className="font-semibold text-[#FF6B35]" />
  ),

  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em {...props} className="italic text-gray-200" />
  ),

  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      {...props}
      className="text-[#FF6B35] hover:text-white underline underline-offset-4 transition-colors duration-200"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    />
  ),

  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code {...props} className="bg-[#2a2a2b] text-[#FF6B35] px-2 py-1 rounded text-sm font-mono" />
  ),

  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre {...props} className="bg-[#1e1e1f] border border-white/10 rounded-lg p-4 overflow-x-auto mb-6" />
  ),

  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <figure className="my-8">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={src || ""}
          alt={alt || ""}
          width={800}
          height={450}
          className="w-full h-auto object-cover"
        />
      </div>
      {alt && (
        <figcaption className="text-center text-gray-400 text-sm mt-3 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  table: Table,
  thead: THead,
  tbody: TBody,
  tr: Tr,
  th: Th,
  td: Td,

  ImageRow,
  ImageGrid,
  ImageSingle,
  ImageDetailCombo,
})

export default function MDXContent({ source, frontmatter }: Props) {
  return (
    <article className="mdx-content">
      <MDXRemote {...source} components={components(frontmatter)} />
    </article>
  )
}
