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
        url: "//assets/images/fnz-antrasit.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - Özel Mobilya Tasarımı`,
    description: "Marmaris'te otel, villa, mutfak ve özel ahşap mobilya üretimi. Fnz Ahsap Sanayi.",
    images: ["//assets/images/fnz-antrasit.png"],
  },
}

// ✅ Statik sayfa metadata
export const pageMetadata: Record<string, Partial<Metadata>> = {
  "/": {
    title: "FNZ Ahşap Sanayi | Marmaris Özel Mobilya Tasarımı",
    description:
      "50 yıllık deneyimle Marmaris’te villa, otel, mutfak ve banyo için özel mobilya tasarımı ve üretimi. Pergola, deck ve ahşap kapı çözümleri.",
    keywords: ["ana sayfa", "fnz ahşap", "marmaris mobilya", "özel tasarım mobilya"],
    alternates: { canonical: `${baseUrl}/` },
  },
  "/hakkimizda": {
    title: "Hakkımızda | FNZ Ahşap Sanayi",
    description:
      "50 yılı aşkın tecrübemizle Marmaris’te villa, otel ve özel mobilya üretimi. FNZ Ahşap Sanayi’nin vizyonu, değerleri ve müşteri odaklı hizmeti.",
    keywords: [
      "hakkımızda",
      "fnz mobilya",
      "fnz ahşap sanayi",
      "fnz wood",
      "marmaris marangoz",
      "mobilya firması",
      "marmaris villa mobilyası",
      "mutfak dolabı",
      "banyo dolabı",
      "deck pergola",
    ],
    alternates: { canonical: `${baseUrl}/hakkimizda` },
  },
  "/hizmetlerimiz": {
    title: "Hizmetlerimiz | FNZ Ahşap Sanayi",
    description:
      "Mutfak, banyo, otel, ofis, villa mobilyaları ve deck–pergola çözümleri. Marmaris merkezli özel ahşap mobilya tasarımı ve üretimi.",
    keywords: [
      "hizmetlerimiz",
      "özel mobilya üretimi",
      "otel mobilyası",
      "mutfak mobilyası",
      "villa mobilyası",
      "banyo mobilyası",
      "deck pergola",
      "marmaris mobilya",
      "vestiyer",
      "yatak odası gardrop",
      "giysi dolabı",
    ],
    alternates: { canonical: `${baseUrl}/hizmetlerimiz` },
  },
  "/projeler": {
    title: "Projelerimiz | FNZ Ahşap Sanayi",
    description:
      "Marmaris ve Türkiye genelinde tamamlanan villa, otel, restoran, mutfak ve banyo mobilya projelerimizi inceleyin.",
    keywords: [
      "mobilya projeleri",
      "otel mobilya referansları",
      "villa tasarımı",
      "deck pergola projeleri",
      "özel mobilya projeleri",
    ],
    alternates: { canonical: `${baseUrl}/projeler` },
  },
  "/blog": {
    title: "Blog | FNZ Ahşap Sanayi",
    description:
      "Ahşap mobilya tasarımı, dekorasyon trendleri, ipuçları ve FNZ Ahşap Sanayi’nin özel proje hikayelerini blogumuzda keşfedin.",
    keywords: ["blog", "mobilya trendleri", "ahşap dekorasyon", "tasarım ipuçları", "özel mobilya blog"],
    alternates: { canonical: `${baseUrl}/blog` },
  },
  "/iletisim": {
    title: "İletişim | FNZ Ahşap Sanayi",
    description:
      "FNZ Ahşap Sanayi ile iletişime geçin. Marmaris showroom adresi, telefon ve e-posta bilgilerimizle ücretsiz keşif ve danışmanlık hizmeti alın.",
    keywords: ["iletişim", "fnzwood iletişim", "marmaris mobilya telefonu", "fnz ahşap sanayi iletişim"],
    alternates: { canonical: `${baseUrl}/iletisim` },
  },
  "/referanslar": {
    title: "Referanslar | FNZ Ahşap Sanayi",
    description:
      "Türkiye genelinde tamamlanan villa, otel ve ticari alan projelerinden seçilmiş FNZ Ahşap Sanayi mobilya referanslarımızı keşfedin.",
    keywords: [
      "referanslar",
      "otel mobilya projeleri",
      "villa referansları",
      "marmaris mobilya",
      "mutfak dolapları",
      "banyo dolapları",
      "vestiyer",
      "özel mobilya referansları",
    ],
    alternates: { canonical: `${baseUrl}/referanslar` },
  },
}

// ✅ Blog metadata generator (Markdown frontmatter'dan alıyor)
export function getBlogMetadata(slug: string): Partial<Metadata> {
  try {
    const post = getPostBySlug(slug)

    const getOgImage = () => {
      // First priority: post's cover image
      if (post.coverImage) {
        return post.coverImage
      }

      // Second priority: company logo for brand consistency
      return "/assets/images/fnz-antrasit.png"
    }

    const ogImageUrl = getOgImage()

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
            url: ogImageUrl,
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
        images: [ogImageUrl],
      },
    }
  } catch {
    return {
      title: `Fnz Ahsap Sanayi Blog`,
      description: `Mobilya tasarımı, dekorasyon trendleri ve proje ipuçları.`,
      openGraph: {
        images: ["/assets/images/fnz-antrasit.png"],
      },
      twitter: {
        images: ["/assets/images/fnz-antrasit.png"],
      },
    }
  }
}
