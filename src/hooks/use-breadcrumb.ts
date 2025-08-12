"use client"

import { usePathname } from "next/navigation"
import { useMemo } from "react"

export interface BreadcrumbItem {
  label: string
  href: string
  active?: boolean
}

// Breadcrumb konfigürasyonu - URL segment'lerini Türkçe etiketlere çevirir
const breadcrumbConfig: Record<string, string> = {
  // Ana sayfalar
  "": "Ana Sayfa",
  about: "Hakkımızda",
  services: "Hizmetlerimiz",
  projects: "Projelerimiz",
  blog: "Blog",
  contact: "İletişim",
  gallery: "Galeri",
  team: "Ekibimiz",

  // Hizmet alt sayfaları
  "hotel-furniture": "Otel Mobilyaları",
  "kitchen-design": "Mutfak Tasarımı",
  "bathroom-furniture": "Banyo Mobilyaları",
  "office-furniture": "Ofis Mobilyaları",
  "outdoor-design": "Dış Mekan Tasarımı",
  "interior-design": "İç Mekan Tasarımı",

  // Proje kategorileri
  completed: "Tamamlanan Projeler",
  ongoing: "Devam Eden Projeler",
  residential: "Konut Projeleri",
  commercial: "Ticari Projeler",
  hospitality: "Otel Projeleri",

  // Blog kategorileri
  news: "Haberler",
  tips: "İpuçları",
  trends: "Trendler",
  "case-studies": "Vaka Çalışmaları",

  // Genel
  details: "Detaylar",
  portfolio: "Portföy",
  categories: "Kategoriler",
  search: "Arama",
  results: "Sonuçlar",
}

// Özel sayfa başlıkları - tam path için
const pageTitle: Record<string, string> = {
  "/": "Ana Sayfa",
  "/about": "Hakkımızda",
  "/services": "Hizmetlerimiz",
  "/services/hotel-furniture": "Otel Mobilyaları",
  "/services/kitchen-design": "Mutfak Tasarımı",
  "/services/bathroom-furniture": "Banyo Mobilyaları",
  "/services/office-furniture": "Ofis Mobilyaları",
  "/services/outdoor-design": "Dış Mekan Tasarımı",
  "/services/interior-design": "İç Mekan Tasarımı",
  "/projects": "Projelerimiz",
  "/projects/completed": "Tamamlanan Projeler",
  "/projects/ongoing": "Devam Eden Projeler",
  "/blog": "Blog",
  "/blog/news": "Haberler",
  "/blog/tips": "İpuçları",
  "/contact": "İletişim",
  "/gallery": "Galeri",
  "/team": "Ekibimiz",
}

// SEO meta descriptions for each page
const pageDescriptions: Record<string, string> = {
  "/": "50 yılı aşkın tecrübemizle modern ahşap mobilya tasarımı ve üretimi alanında kaliteli hizmet sunuyoruz.",
  "/about":
    "FNZ Mobilya olarak yarım asrı aşkın tecrübemizle ahşap mobilya sektöründe güvenilir bir marka olmayı başardık.",
  "/services":
    "Otel mobilyaları, mutfak tasarımı, banyo mobilyaları ve daha fazlası için profesyonel hizmetlerimizi keşfedin.",
  "/services/hotel-furniture":
    "Otel ve büyük ölçekli projelere özel tasarım ve üretim hizmetleri. Kaliteli otel mobilyaları.",
  "/services/kitchen-design":
    "Modern ve fonksiyonel mutfak tasarımları. Özel ölçü mutfak mobilyaları ve dekorasyon çözümleri.",
  "/services/bathroom-furniture":
    "Banyo mobilyaları ve wellness alanları için özel tasarım çözümleri. Su geçirmez ve dayanıklı.",
  "/projects": "Tamamladığımız mobilya projelerini inceleyin. Otel, ofis, konut ve ticari alan projelerimiz.",
  "/contact": "FNZ Mobilya ile iletişime geçin. Ücretsiz keşif ve danışmanlık hizmeti için bize ulaşın.",
}

export function useBreadcrumb() {
  const pathname = usePathname()

  const breadcrumbData = useMemo(() => {
    // Ana sayfa için özel durum
    if (pathname === "/") {
      return {
        items: [],
        currentPage: "Ana Sayfa",
        fullPath: pathname,
        description: pageDescriptions[pathname] || "",
        keywords: ["fnz mobilya", "ana sayfa", "ahşap mobilya", "mobilya tasarımı"],
      }
    }

    // Path'i segment'lere böl
    const segments = pathname.split("/").filter(Boolean)
    const items: BreadcrumbItem[] = []

    // Her segment için breadcrumb item oluştur
    let currentPath = ""

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const isLast = index === segments.length - 1

      // Segment'i temizle (URL encoding, özel karakterler vs.)
      const cleanSegment = decodeURIComponent(segment)

      // Dinamik route parametrelerini kontrol et ([id], [slug] gibi)
      const isDynamicRoute = cleanSegment.match(/^\[.*\]$/)

      // Label'ı belirle
      let label = breadcrumbConfig[cleanSegment] || cleanSegment

      // Dinamik route ise özel işlem
      if (isDynamicRoute) {
        // [id] -> ID, [slug] -> Detay gibi
        const paramName = cleanSegment.replace(/[[\]]/g, "")
        label =
          paramName === "id"
            ? "Detay"
            : paramName === "slug"
              ? "Detay"
              : paramName === "category"
                ? "Kategori"
                : breadcrumbConfig[paramName] || "Detay"
      }

      // Sayı ise (ID) "Detay" olarak göster
      if (/^\d+$/.test(cleanSegment)) {
        label = "Detay"
      }

      // Label'ı büyük harfle başlat
      label = label.charAt(0).toUpperCase() + label.slice(1)

      // Son segment değilse breadcrumb item'a ekle
      if (!isLast) {
        items.push({
          label,
          href: currentPath,
          active: false,
        })
      }
    })

    // Mevcut sayfa başlığını belirle
    const currentPage =
      pageTitle[pathname] ||
      breadcrumbConfig[segments[segments.length - 1]] ||
      segments[segments.length - 1]?.charAt(0).toUpperCase() + segments[segments.length - 1]?.slice(1) ||
      "Sayfa"

    // SEO bilgilerini oluştur
    const description =
      pageDescriptions[pathname] || `${currentPage} - FNZ Mobilya hizmetleri ve ürünleri hakkında detaylı bilgi.`
    const keywords = [
      "fnz mobilya",
      currentPage.toLowerCase(),
      ...items.map((item) => item.label.toLowerCase()),
      "ahşap mobilya",
      "mobilya tasarımı",
    ]

    return {
      items,
      currentPage,
      fullPath: pathname,
      description,
      keywords,
    }
  }, [pathname])

  return breadcrumbData
}

// Breadcrumb konfigürasyonunu güncelleme fonksiyonu
export function updateBreadcrumbConfig(newConfig: Record<string, string>) {
  Object.assign(breadcrumbConfig, newConfig)
}

// Sayfa başlığını güncelleme fonksiyonu
export function updatePageTitles(newTitles: Record<string, string>) {
  Object.assign(pageTitle, newTitles)
}

// Sayfa açıklamalarını güncelleme fonksiyonu
export function updatePageDescriptions(newDescriptions: Record<string, string>) {
  Object.assign(pageDescriptions, newDescriptions)
}
