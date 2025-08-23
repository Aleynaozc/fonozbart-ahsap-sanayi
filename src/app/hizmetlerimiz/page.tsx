// app/hizmetler/page.tsx
import ServicesPageClient from "./services-client";

export const metadata = {
  title: "FNZ Ahşap Sanayi | FNZ Wood | Hizmetlerimiz",
  description:
    "FNZ Ahşap Sanayi (FNZ Wood), otel mobilyaları, mutfak ve banyo dolapları, ofis mobilyaları, pergola ve deck çözümleri ile Marmaris merkezli profesyonel ahşap üretim hizmeti sunar.",
  keywords: [
    "FNZ",
    "FNZ Wood",
    "FNZ Ahşap",
    "FNZ Ahşap Sanayi",
    "otel mobilyaları",
    "mutfak mobilyaları",
    "banyo dolapları",
    "ofis mobilyaları",
    "pergola",
    "deck",
    "ahşap mobilya Marmaris",
  ],
  openGraph: {
    title: "FNZ Ahşap Sanayi | FNZ Wood | Hizmetlerimiz",
    description:
      "FNZ Ahşap Sanayi (FNZ Wood), Marmaris ve çevresinde otel mobilyaları, villa ve konut dekorasyonu, pergola ve deck çözümleri sunar.",
    url: "https://fnzwood.com/hizmetler",
    siteName: "FNZ Wood",
    images: [
      {
        url: "/assets/images/sliders/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "FNZ Ahşap Sanayi Hizmetleri - FNZ Wood",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
