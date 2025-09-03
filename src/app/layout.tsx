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




export function generateMetadata({ params }: { params?: { slug?: string[] } }): Metadata {
  const slugArray = params?.slug || []
  const path = "/" + slugArray.join("/")

  // ✅ Eğer params boşsa ve path="/" çıkıyorsa
  // aslında bu index değil, farklı bir static route olabilir.
  // Bu durumda "pageMetadata" kontrolünü yapalım:
  if (pageMetadata[path]) {
    return { ...defaultMetadata, ...pageMetadata[path] }
  }

  // ✅ Blog yazısı (ör: /blog/modern-mutfak-tasarimi)
  if (slugArray.length === 2 && slugArray[0] === "blog") {
    return { ...defaultMetadata, ...getBlogMetadata(slugArray[1]) }
  }

  // ✅ Statik sayfaları yakala (ör: /hakkimizda)
  if (slugArray.length === 1 && pageMetadata[`/${slugArray[0]}`]) {
    return { ...defaultMetadata, ...pageMetadata[`/${slugArray[0]}`] }
  }

  // ✅ Fallback
  return defaultMetadata
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <LoadingProvider>
          <InitialLoaderWrapper>
            <BreadcrumbProvider>
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
                    telephone: "+90-532-000-0000",
                    contactType: "customer service",
                    areaServed: "TR",
                    availableLanguage: ["Turkish", "English"],
                  },
                ],
              },
              null,
              2
            ),
          }}
        />

        {/* ✅ WebSite Schema (arama kutusu için) */}
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
              2
            ),
          }}
        />

        {/* ✅ LocalBusiness Schema (Google Maps + Yerel SEO için) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://fnzwood.com/#localbusiness",
                name: "Fnz Ahsap Sanayi",
                image: "https://fnzwood.com/assets/images/logo.png",
                url: "https://fnzwood.com",
                telephone: "+90-532-000-0000",
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
                  "latitude": 36.852365,
                  "longitude": 28.274382
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday",
                    ],
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
              2
            ),
          }}
        />
      </body>
    </html>
  )
}

