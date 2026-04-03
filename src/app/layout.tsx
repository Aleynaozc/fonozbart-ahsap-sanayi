import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { BreadcrumbProvider } from "@/components/bradcrumps/breadcrumb-provider"
import { LoadingBar } from "@/components/loading-bar"
import { PageTransition } from "@/components/page-transition"
import { LoadingProvider } from "@/hooks/use-loading"
import { Header } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
import InitialLoaderWrapper from "./initial-loader-wrapper"
import { defaultMetadata, pageMetadata, getBlogMetadata } from "@/seo-data"
import { GoogleAnalytics } from "@/components/google-analytics"

/**
 * ✅ Tek metadata fonksiyonu:
 * - favicon + manifest (sabit)
 * - title + description (dinamik)
 */
export function generateMetadata({ params }: { params?: { slug?: string[] } }): Metadata {
  const slugArray = params?.slug || []
  const path = "/" + slugArray.join("/")

  let dynamicMeta: Metadata = defaultMetadata

  if (pageMetadata[path]) {
    dynamicMeta = { ...defaultMetadata, ...pageMetadata[path] }
  } else if (slugArray.length === 2 && slugArray[0] === "blog") {
    dynamicMeta = { ...defaultMetadata, ...getBlogMetadata(slugArray[1]) }
  } else if (slugArray.length === 1 && pageMetadata[`/${slugArray[0]}`]) {
    dynamicMeta = { ...defaultMetadata, ...pageMetadata[`/${slugArray[0]}`] }
  }

  return {
    ...dynamicMeta,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
        { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
    appleWebApp: {
      title: "FNZ", // ✅ <meta name="apple-mobile-web-app-title" content="FNZ" />
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        {process.env.NEXT_PUBLIC_GSC_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GSC_VERIFICATION} />
        )}
      </head>
      <body>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}

        <LoadingProvider>
          <InitialLoaderWrapper>
            <BreadcrumbProvider
              initialConfig={{
                "": "Ana Sayfa",
                hakkimizda: "Hakkımızda",
                hizmetlerimiz: "Hizmetlerimiz",
                projeler: "Projelerimiz",
                iletisim: "İletişim",
                blog: "Blog",
                referanslar: "Referanslarımız",
              }}
            >
              <LoadingBar />
              <Header />
              <PageTransition>{children}</PageTransition>
              <Footer />
            </BreadcrumbProvider>
          </InitialLoaderWrapper>
        </LoadingProvider>

        {/* ✅ Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Fnz Ahsap Sanayi",
                url: "https://fnzwood.com",
                logo: "https://fnzwood.com/assets/images/logo.png",
                sameAs: [
                  "https://www.facebook.com/fnzwood",
                  "https://www.instagram.com/fnzwood",
                  "https://www.linkedin.com/company/fonozbart-ah%C5%9Fap-sanayi?originalSubdomain=tr",
                ],
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+90-532-333-50-67",
                    contactType: "customer service",
                    areaServed: "TR",
                    availableLanguage: ["Turkish"],
                  },
                ],
              },
              null,
              2,
            ),
          }}
        />

        {/* ✅ WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                url: "https://fnzwood.com",
                name: "Fnz Ahsap Sanayi",
              },
              null,
              2,
            ),
          }}
        />

        {/* ✅ LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://fnzwood.com/#localbusiness",
                name: "Fnz Ahsap Sanayi",
                description: "Marmaris ve Muğla çevresinde otel mobilya üretimi, ahşap işleri, havuz kenarı deck, mutfak mobilyaları ve özel ahşap dekorasyon hizmetleri veren lider ahşap sanayi firması.",
                image: "https://fnzwood.com/assets/images/fnz-beyaz.png",
                url: "https://fnzwood.com",
                telephone: "+90-532-333-50-67",
                priceRange: "$$",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Hisarönü, Marmaris Datça Yolu No:49",
                  addressLocality: "Marmaris",
                  addressRegion: "Muğla",
                  postalCode: "48700",
                  addressCountry: "TR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 36.852365,
                  longitude: 28.274382,
                },
                areaServed: [
                  {
                    "@type": "City",
                    name: "Marmaris"
                  },
                  {
                    "@type": "City",
                    name: "Muğla"
                  },
                  {
                    "@type": "City",
                    name: "Datça"
                  },
                  {
                    "@type": "City",
                    name: "Bodrum"
                  },
                  {
                    "@type": "City",
                    name: "Fethiye"
                  }
                ],
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "08:30",
                    closes: "18:30",
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/fnzwood",
                  "https://www.instagram.com/fnzwood",
                  "https://www.linkedin.com/company/fonozbart-ah%C5%9Fap-sanayi/",
                ],
              },
              null,
              2,
            ),
          }}
        />

        {/* ✅ Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Özel Mobilya Tasarımı ve Üretimi",
                provider: {
                  "@type": "LocalBusiness",
                  name: "Fnz Ahsap Sanayi",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Marmaris",
                    addressRegion: "Muğla"
                  }
                },
                areaServed: {
                  "@type": "State",
                  name: "Muğla"
                },
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Otel ve Bireysel Mobilya Üretimi",
                  itemListElement: [
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Otel Mobilya Üretimi" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ahşap Dekorasyon" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Havuz Kenarı Deck Uygulamaları" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mutfak Mobilyaları (Adalı Mutfak, Masa)" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banyo Dolapları" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Giyinme Dolapları ve Gardırop" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ahşap Yatak Başlığı ve Yatak Bazası" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Komodin ve Makyaj Masası" } },
                    { "@type": "Offer", itemOffered: { "@type": "Service", name: "TV Ünitesi" } }
                  ]
                }
              },
              null,
              2,
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: "FNZ Ahşap Sanayi Blog",
                description: "Ahşap işçiliği, mutfak tasarımları ve pergola modelleri hakkında uzman içerikler",
                author: {
                  "@type": "Organization",
                  name: "FNZ Ahşap Sanayi",
                },
                publisher: {
                  "@type": "Organization",
                  name: "FNZ Ahşap Sanayi",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://fnzwood.com/assets/images/logo.png",
                  },
                },
              },
              null,
              2,
            ),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Ana Sayfa",
                    item: "https://fnzwood.com",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Hizmetlerimiz",
                    item: "https://fnzwood.com/hizmetlerimiz",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Blog",
                    item: "https://fnzwood.com/blog",
                  },
                ],
              },
              null,
              2,
            ),
          }}
        />
      </body>
    </html>
  )
}
