/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://fnzwood.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  // 🔄 Default ayarlar
  changefreq: "daily",
  priority: 0.7,

  exclude: ["/admin/*"],

  robotsTxtOptions: {
    additionalSitemaps: [
      "https://fnzwood.com/sitemap.xml",
    ],
  },

  // 🔧 Route bazlı özelleştirme
  transform: async (config, path) => {
    // Blog yazıları için farklı ayar
    if (path.startsWith("/blog/")) {
      return {
        loc: path, // URL
        changefreq: "weekly", // blog daha seyrek güncellenir
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // Ana sayfa daha önemli
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Diğer sayfalar için varsayılan
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
