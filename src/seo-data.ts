// src/seo-data.ts
import type { Metadata } from "next"

const baseUrl = "https://fnzwood.com"
const siteName = "FNZ Ahşap Mobilya"

export const defaultMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Marmaris Özel Mobilya Tasarımı ve Üretimi`,
    template: `%s | ${siteName}`,
  },
  description:
    "FNZ Ahşap Mobilya, Marmaris merkezli özel mobilya tasarımı ve üretim firmasıdır. Otel, villa, mutfak, banyo, pergola ve deck uygulamalarıyla 50 yılı aşkın deneyim.",
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
      "Marmaris’te otel, villa, mutfak, banyo ve özel ahşap mobilya üretimi. FNZ Ahşap Mobilya.",
    images: ["/assets/images/og-image.jpg"],
  },
}

// ✅ Sayfa bazlı SEO metadata
export const pageMetadata: Record<string, Partial<Metadata>> = {
  "/": {
    title: "Ana Sayfa",
    description:
      "FNZ Ahşap Mobilya | Marmaris merkezli özel mobilya tasarımı ve üretimi. Villa, otel, mutfak, banyo, pergola ve deck projeleri.",
    keywords: ["ana sayfa", "fnz ahşap", "marmaris mobilya", "özel tasarım mobilya"],
    alternates: { canonical: `${baseUrl}/` },
  },
  "/hakkimizda": {
    title: "Hakkımızda",
    description:
      "FNZ Ahşap Mobilya | 50 yılı aşkın tecrübemizle Marmaris’te özel mobilya tasarımı ve üretimi. Vizyonumuz, değerlerimiz ve müşteri odaklı hizmet anlayışımız.",
    keywords: ["hakkımızda", "fnz mobilya", "marmaris marangoz", "mobilya firması"],
    alternates: { canonical: `${baseUrl}/hakkimizda` },
  },
  "/projeler": {
    title: "Projelerimiz",
    description:
      "FNZ Ahşap Mobilya | Tamamlanan otel, villa, restoran, mutfak ve banyo mobilya projelerimizi inceleyin. Türkiye genelinden seçilmiş referanslar.",
    keywords: ["mobilya projeleri", "otel mobilya referansları", "villa tasarımı", "deck pergola projeleri"],
    alternates: { canonical: `${baseUrl}/projeler` },
  },
  "/hizmetlerimiz": {
    title: "Hizmetlerimiz",
    description:
      "Özel mobilya tasarımı ve üretimi: Mutfak, banyo, ofis, otel mobilyaları, deck, pergola ve ahşap kapı çözümleri. Marmaris ve Türkiye geneli hizmet.",
    keywords: ["hizmetlerimiz", "özel mobilya üretimi", "otel mobilyası", "mutfak mobilyası"],
    alternates: { canonical: `${baseUrl}/hizmetlerimiz` },
  },
  "/blog": {
    title: "Blog",
    description:
      "FNZ Ahşap Mobilya Blog | Ahşap mobilya tasarımı, dekorasyon trendleri, ipuçları ve proje hikayeleri.",
    keywords: ["blog", "mobilya trendleri", "ahşap dekorasyon", "tasarım ipuçları"],
    alternates: { canonical: `${baseUrl}/blog` },
  },
  "/iletisim": {
    title: "İletişim",
    description:
      "FNZ Ahşap Mobilya ile iletişime geçin. Marmaris showroom adresi, telefon numarası ve e-posta bilgileri. Ücretsiz keşif ve danışmanlık hizmeti alın.",
    keywords: ["iletişim", "fnzwood iletişim", "marmaris mobilya telefonu"],
    alternates: { canonical: `${baseUrl}/iletisim` },
  },
  "/referanslar": {
    title: "Referanslar",
    description:
      "FNZ Ahşap Mobilya | Türkiye genelinde tamamlanan villa, otel ve ticari alan mobilya projelerinden seçilmiş referanslarımız.",
    keywords: ["referanslar", "otel mobilya projeleri", "villa referansları", "marmaris mobilya"],
    alternates: { canonical: `${baseUrl}/referanslar` },
  },
}
