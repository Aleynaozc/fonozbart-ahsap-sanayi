"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

/**
 * URL segment -> Görünecek label eşleştirmeleri
 */
const breadcrumbConfig: Record<string, string> = {
  // Ana sayfalar
  "": "Ana Sayfa",
  hakkimizda: "Hakkımızda",
  hizmetlerimiz: "Hizmetlerimiz",
  projeler: "Projelerimiz",
  blog: "Blog",
  iletisim: "İletişim",

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
};

/**
 * Path -> Başlık eşleştirmeleri
 */
const pageTitle: Record<string, string> = {
  "/": "Ana Sayfa",
  "/hakkimizda": "Hakkımızda",
  "/hizmetlerimiz": "Hizmetlerimiz",
  "/projeler": "Projelerimiz",
  "/blog": "Blog",
  "/blog/news": "Haberler",
  "/blog/tips": "İpuçları",
  "/iletisim": "İletişim",
 
};

/**
 * Path -> Meta description eşleştirmeleri
 */
const pageDescriptions: Record<string, string> = {
  "/": "50 yılı aşkın tecrübemizle modern ahşap mobilya tasarımı ve üretimi alanında kaliteli hizmet sunuyoruz.",
  "/hakkimizda":
    "FNZ Wood olarak yarım asrı aşkın tecrübemizle ahşap mobilya sektöründe güvenilir bir marka olmayı başardık.",
  "/hizmetlerimiz":
    "Otel mobilyaları, mutfak tasarımı, banyo mobilyaları ve daha fazlası için profesyonel hizmetlerimizi keşfedin.",
  "/projeler":
    "Tamamladığımız mobilya projelerini inceleyin. Otel, ofis, konut ve ticari alan projelerimiz.",
  "/iletisim":
    "FNZ Wood ile iletişime geçin. Ücretsiz keşif ve danışmanlık hizmeti için bize ulaşın.",
};

/**
 * Breadcrumb hook
 */
export function useBreadcrumb() {
  const pathname = usePathname();

  return useMemo(() => {
    // Ana sayfa özel durumu
    if (pathname === "/") {
      return {
        items: [],
        currentPage: "Ana Sayfa",
        fullPath: pathname,
        description: pageDescriptions["/"] || "",
        keywords: ["FNZ Wood", "ana sayfa", "ahşap mobilya", "mobilya tasarımı"],
      };
    }

    const segments = pathname.split("/").filter(Boolean);
    const items: BreadcrumbItem[] = [];
    let currentPath = "";

    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;

      // URL segment temizle
      const cleanSegment = decodeURIComponent(segment);

      // Label bul
      let label = breadcrumbConfig[cleanSegment] || cleanSegment;

      // Dinamik route kontrolü ([id], [slug] vb.)
      if (/^\[.*\]$/.test(cleanSegment) || /^\d+$/.test(cleanSegment)) {
        label = "Detay";
      }

      // İlk harfi büyük yap
      label = label.charAt(0).toUpperCase() + label.slice(1);

      // Breadcrumb item ekle
      items.push({
        label,
        href: currentPath,
        active: isLast,
      });
    });

    const currentPage =
      pageTitle[pathname] || items[items.length - 1]?.label || "Sayfa";

    const description =
      pageDescriptions[pathname] ||
      `${currentPage} - FNZ Wood hizmetleri ve ürünleri hakkında detaylı bilgi.`;

    const keywords = [
      "FNZ Wood",
      currentPage.toLowerCase(),
      ...items.map((item) => item.label.toLowerCase()),
      "ahşap mobilya",
      "mobilya tasarımı",
    ];

    return {
      items,
      currentPage,
      fullPath: pathname,
      description,
      keywords,
    };
  }, [pathname]);
}

/**
 * Config güncelleme yardımcıları
 */
export function updateBreadcrumbConfig(newConfig: Record<string, string>) {
  Object.assign(breadcrumbConfig, newConfig);
}
export function updatePageTitles(newTitles: Record<string, string>) {
  Object.assign(pageTitle, newTitles);
}
export function updatePageDescriptions(newDescriptions: Record<string, string>) {
  Object.assign(pageDescriptions, newDescriptions);
}
