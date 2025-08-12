import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { BreadcrumbProvider } from "@/components/bradcrumps/breadcrumb-provider"

import { LoadingBar } from "@/components/loading-bar"
import { PageTransition } from "@/components/page-transition"
import { CacheProvider } from "@/hooks/use-cache"
import { PreloaderProvider } from "@/hooks/use-preloader"

import { PerformanceMonitor } from "@/components/preloading/performance-monitor"
 import { LoadingProvider } from "@/hooks/use-loading"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FNZ Mobilya - Ahşap Mobilya Tasarımı ve Üretimi",
  description:
    "50 yılı aşkın tecrübemizle modern ahşap mobilya tasarımı ve üretimi alanında kaliteli hizmet sunuyoruz.",
  keywords: ["fnz mobilya", "ahşap mobilya", "mobilya tasarımı", "otel mobilyaları", "mutfak tasarımı"],
  authors: [{ name: "FNZ Mobilya" }],
  creator: "FNZ Mobilya",
  publisher: "FNZ Mobilya",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://fnzmobilya.com",
    siteName: "FNZ Mobilya",
    title: "FNZ Mobilya - Ahşap Mobilya Tasarımı ve Üretimi",
    description:
      "50 yılı aşkın tecrübemizle modern ahşap mobilya tasarımı ve üretimi alanında kaliteli hizmet sunuyoruz.",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FNZ Mobilya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FNZ Mobilya - Ahşap Mobilya Tasarımı ve Üretimi",
    description:
      "50 yılı aşkın tecrübemizle modern ahşap mobilya tasarımı ve üretimi alanında kaliteli hizmet sunuyoruz.",
    images: ["/assets/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fnzmobilya.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <meta name="theme-color" content="#D4A574" />
        <meta name="msapplication-TileColor" content="#D4A574" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Preload critical resources */}
        <link rel="preload" href="/assets/images/footer-logo.png" as="image" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {/* 🚀 Performance & Caching Providers */}
        <CacheProvider>
          <PreloaderProvider>
            <LoadingProvider>
              <BreadcrumbProvider>
                <LoadingBar />
                <PageTransition>{children}</PageTransition>
                <PerformanceMonitor />
              </BreadcrumbProvider>
            </LoadingProvider>
          </PreloaderProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
