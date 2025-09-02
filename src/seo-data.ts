import type { Metadata } from "next"
import { getPostBySlug } from "@/lib/blog" // blog.ts'ten çekiyoruz

const baseUrl = "https://fnzwood.com"
const siteName = "Fnz Ahsap Sanayi"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Marmaris Özel Mobilya Tasarımı ve Üretimi`,
    template: `%s | ${siteName}`,
  },
  description:
    "Fnz Ahsap Sanayi, Marmaris merkezli özel mobilya tasarımı ve üretim firmasıdır. Otel, villa, mutfak, banyo, pergola ve deck uygulamalarıyla 50 yılı aşkın deneyim.",
  keywords: [
    "fnzwood",
    "marmaris marangoz",
    "özel mobilya tasarımı",
    "otel mobilyaları",
    "mutfak mobilyası",
    "banyo mobilyası",
    "deck pergola",
    "ahşap kapı üretimi",
    "villa mobilya tasarımı",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  robots: "index, follow",
  alternates: { canonical: baseUrl },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: baseUrl,
    siteName,
    title: `${siteName} - Marmaris Özel Mobilya Tasarımı ve Üretimi`,
    description:
      "50 yılı aşkın tecrübemizle modern ve özel ahşap mobilya tasarımı & üretimi. Otel, villa, mutfak, banyo, pergola, deck ve daha fazlası.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Özel Mobilya Tasarımı`,
    description:
      "Marmaris’te otel, villa, mutfak, banyo ve özel ahşap mobilya üretimi. Fnz Ahsap Sanayi.",
    images: ["/assets/images/og-image.jpg"],
  },
}

// ✅ Statik sayfa metadata
export const pageMetadata: Record<string, Partial<Metadata>> = {
  "/": {
    title: "Ana Sayfa | FNZ Ahşap Sanayi ",
    description:
      "Fnz Ahsap Sanayi | Marmaris merkezli özel mobilya tasarımı ve üretimi. Villa, otel, mutfak, banyo, pergola ve deck projeleri.",
    keywords: ["ana sayfa", "fnz ahşap", "marmaris mobilya", "özel tasarım mobilya"],
    alternates: { canonical: `${baseUrl}/` },
  },
  "/hakkimizda": {
    title: "Hakkımızda | FNZ Ahşap Sanayi",
    description:
      "Fnz Ahsap Sanayi | 50 yılı aşkın tecrübemizle Marmaris’te özel mobilya tasarımı ve üretimi. Vizyonumuz, değerlerimiz ve müşteri odaklı hizmet anlayışımız.",
    keywords: ["hakkımızda", "fnz mobilya", "fnz ahşap sanayi", "fnz wood", "marmaris marangoz", "mobilya firması", "marmaris villa mobilyası", "fnz wood iletişim", "mutfak dolabı", "banyo dolabı", "deck pergola"],
    alternates: { canonical: `${baseUrl}/hakkimizda` },
  },
  "/hizmetlerimiz": {
    title: "Hizmetlerimiz | FNZ Ahşap Sanayi",
    description:
      "Özel mobilya tasarımı ve üretimi: Mutfak, banyo, ofis, otel mobilyaları, deck, pergola ve ahşap kapı çözümleri. Marmaris ve Türkiye geneli hizmet.",
    keywords: ["hizmetlerimiz", "özel mobilya üretimi", "otel mobilyası", "mutfak mobilyası"],
    alternates: { canonical: `${baseUrl}/hizmetlerimiz` },
  },
  "/projeler": {
    title: "Projelerimiz | FNZ Ahşap Sanayi",
    description:
      "Fnz Ahsap Sanayi | Tamamlanan otel, villa, restoran, mutfak ve banyo mobilya projelerimizi inceleyin. Türkiye genelinden seçilmiş referanslar.",
    keywords: ["mobilya projeleri", "otel mobilya referansları", "villa tasarımı", "deck pergola projeleri"],
    alternates: { canonical: `${baseUrl}/projeler` },
  },
  "/blog": {
    title: "Blog | FNZ Ahşap Sanayi",
    description:
      "Fnz Ahsap Sanayi Blog | Ahşap mobilya tasarımı, dekorasyon trendleri, ipuçları ve proje hikayeleri.",
    keywords: ["blog", "mobilya trendleri", "ahşap dekorasyon", "tasarım ipuçları"],
    alternates: { canonical: `${baseUrl}/blog` },
  },
  "/iletisim": {
    title: "İletişim | FNZ Ahşap Sanayi",
    description:
      "Fnz Ahsap Sanayi ile iletişime geçin. Marmaris showroom adresi, telefon numarası ve e-posta bilgileri. Ücretsiz keşif ve danışmanlık hizmeti alın.",
    keywords: ["iletişim", "fnzwood iletişim", "marmaris mobilya telefonu"],
    alternates: { canonical: `${baseUrl}/iletisim` },
  },
  "/referanslar": {
    title: "Referanslar | FNZ Ahşap Sanayi",
    description:
      "Fnz Ahsap Sanayi | Türkiye genelinde tamamlanan villa, otel ve ticari alan mobilya projelerinden seçilmiş referanslarımız.",
    keywords: ["referanslar", "otel mobilya projeleri", "villa referansları", "marmaris mobilya"],
    alternates: { canonical: `${baseUrl}/referanslar` },
  },
}

// ✅ Blog metadata generator (Markdown frontmatter'dan alıyor)
export function getBlogMetadata(slug: string): Partial<Metadata> {
  try {
    const post = getPostBySlug(slug)

    return {
      title: `${post.title} | Fnz Ahsap Sanayi Blog`,
      description: post.description,
      keywords: post.seoKeywords || ["fnz mobilya blog", "ahşap mobilya", "mobilya tasarımı"],
      authors: [{ name: post.author || "Fnz Ahsap Sanayi" }],
      alternates: { canonical: `${baseUrl}/blog/${slug}` },
      openGraph: {
        type: "article",
        title: post.title,
        description: post.description,
        url: `${baseUrl}/blog/${slug}`,
        siteName,
        images: [
          {
            url: post.image || "/assets/images/og-image.jpg",
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        images: [post.image || "/assets/images/og-image.jpg"],
      },
    }
  } catch {
    return {
      title: `Fnz Ahsap Sanayi Blog`,
      description: `Mobilya tasarımı, dekorasyon trendleri ve proje ipuçları.`,
    }
  }
}

