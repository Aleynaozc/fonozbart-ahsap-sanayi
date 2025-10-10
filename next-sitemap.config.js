/** @type {import('next-sitemap').IConfig} */

const fs = require("fs")
const path = require("path")

// 📁 Blog dizinini belirtiyoruz
const blogDir = path.join(process.cwd(), "content/blog")

// Blog slug’larını (dosya adlarını) otomatik al
function getBlogSlugs() {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

module.exports = {
  siteUrl: "https://www.fnzwood.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/admin/*", "/api/*", "/private/*", "/_next/*", "/404", "/500"],

  // 📍 Hem sabit sayfaları hem de blog slug’larını ekliyoruz
  additionalPaths: async (config) => {
    const staticPaths = [
      "/hakkimizda",
      "/hizmetlerimiz",
      "/projeler",
      "/referanslar",
      "/iletisim",
      "/blog",
    ]

    // Blog slug'larını /blog/slug şeklinde oluştur
    const blogPaths = getBlogSlugs().map((slug) => `/blog/${slug}`)

    // Tüm yolları birleştir
    const allPaths = [...staticPaths, ...blogPaths]

    // Hepsini sitemap formatına dönüştür
    return Promise.all(
      allPaths.map(async (url) => await config.transform(config, url))
    )
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/"],
      },
    ],
  },

  transform: async (config, path) => {
    const now = new Date().toISOString()

    // Ana sayfa
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: now,
        alternateRefs: [
          {
            href: "https://www.fnzwood.com",
            hreflang: "tr",
          },
        ],
      }
    }

    // Blog ana sayfası
    if (path === "/blog") {
      return { loc: path, changefreq: "daily", priority: 0.9, lastmod: now }
    }

    // Blog yazıları (slug bazlı)
    if (path.startsWith("/blog/") && path !== "/blog") {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: now }
    }

    // Hizmetler
    if (path === "/hizmetlerimiz") {
      return { loc: path, changefreq: "weekly", priority: 0.9, lastmod: now }
    }

    // Projeler & Referanslar
    if (path === "/projeler" || path === "/referanslar") {
      return { loc: path, changefreq: "weekly", priority: 0.8, lastmod: now }
    }

    // Hakkımızda & İletişim
    if (path === "/hakkimizda" || path === "/iletisim") {
      return { loc: path, changefreq: "monthly", priority: 0.6, lastmod: now }
    }

    // Varsayılan
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: now,
    }
  },
}
