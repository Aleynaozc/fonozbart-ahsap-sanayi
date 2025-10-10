/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.fnzwood.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  changefreq: "weekly",
  priority: 0.7,

  exclude: ["/admin/*", "/api/*", "/private/*", "/_next/*", "/404", "/500"],

  additionalPaths: async (config) => [
    await config.transform(config, "/hakkimizda"),
    await config.transform(config, "/hizmetlerimiz"),
    await config.transform(config, "/projeler"),
    await config.transform(config, "/referanslar"),
    await config.transform(config, "/iletisim"),
    await config.transform(config, "/blog"),
  ],

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
    // Ana sayfa - en yüksek öncelik
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
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
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // Blog yazıları için özel ayarlar
    if (path.startsWith("/blog/") && path !== "/blog") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Hizmetler sayfası - yüksek öncelik
    if (path === "/hizmetlerimiz") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // Projeler ve referanslar - orta öncelik
    if (path === "/projeler" || path === "/referanslar") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // Hakkında ve iletişim - düşük öncelik
    if (path === "/hakkimizda" || path === "/iletisim") {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Diğer sayfalar için varsayılan
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
