"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Users, Eye, } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ProjectCardSection } from "../project-card"

const selectedProjects = [
  {
    id: 1,
    title: "D-Maris Bay Hotel - NUSRET Restaurant ",
    category: "Ahşap Deck & Dış Mekan",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "NUSRET Restaurant için özel ahşap deck uygulamaları. Dayanıklı ve estetik dış mekan zemin kaplamaları ile lüks konseptin tamamlanması.",
    images: [
      "/assets/images/selected-project/D-MARİS-NUSRET4.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET.jpg",
      "/assets/images/selected-project/D-MARİS-NUSRET3.jpg",
    ],
    stats: {
      area: "280m²",
    },
    features: ["Ahşap Deck", "Dış Mekan Dayanıklılığı", "Estetik", "Hızlı Uygulama"],
  },
  {
    id: 2,
    title: "D-Maris Bay Hotel - AURORA Restaurant ",
    category: "Ahşap Deck & Dış Mekan",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "D-Maris Bay Hotel",
    description:
      "AURORA Restaurant için özel ahşap deck uygulamaları. Dayanıklı ve estetik dış mekan zemin kaplamaları ile lüks konseptin tamamlanması.",
    images: [
      "/assets/images/selected-project/aurora-capri.webp",
      "/assets/images/selected-project/aurora-capri2.webp",
      "/assets/images/selected-project/aurora-capri3.webp",
    ],
    stats: {
      area: "285m²",
    },
    features: ["Ahşap Deck", "Dış Mekan Dayanıklılığı", "Estetik", "Hızlı Uygulama"],
  },
  {
    id: 3,
    title: "Ahu Hastanesi Diyaliz Binası",
    category: "Sağlık Yapıları Mobilya ve Ahşap Uygulamaları",
    location: "Marmaris, Muğla",
    year: "2025",
    client: "Ahu Hastanesi",
    description:
      "Diyaliz binası için mobilya tefrişatı, özel kapılar ve ahşap uygulamaları. Fonksiyonellik ve hijyen öncelikli tasarımlar.",
    images: [
      "/assets/images/selected-project/AHU-DİYALİZ-2-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-3-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-4-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-5-2025.jpg",
    ],
    stats: {
      floors: "1 Kat",

    },
    features: ["Hijyenik Malzeme", "Özel Kapılar", "Mobilya Tefrişatı", "Ahşap Uygulama"],
  },
  {
    id: 4,
    title: "TUI BLUE Tropical & Palace ",
    category: "Otel Mobilya Renovasyonu ve Bakım İşleri",
    location: "Sarıgerme, Muğla",
    year: "2025",
    client: "TUI BLUE Hotels",
    description:
      "TUI BLUE Tropical & Palace otelinin 200 odasında mobilya renovasyonu ve bakım işleri gerçekleştirildi. Mevcut mobilyaların yenilenmesi, bakım ve onarımları ile birlikte bazı özel üretim parçalar eklenerek otelin konfor ve estetiği güçlendirildi.",
    images: [
      "/assets/images/selected-project/tui-blue-oda.jpg",
      "/assets/images/selected-project/tui-blue-oda2.jpg",
      "/assets/images/selected-project/tui-blue-oda3.jpg",
    ],
    stats: {
      rooms: "200 Oda",
    },
    features: [
      "Mobilya Renovasyonu",
      "Bakım ve Onarım İşleri",
      "Hızlı Teslimat",
      "Dayanıklı Malzemeler",
      "Otel Standartlarına Uygun",
    ],
  },
  {
    id: 5,
    title: "FNZ YAPI – Özel Villa Projesi",
    category: "Anahtar Teslim Villa İnşaatı ve Mobilya Tefrişatı",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "FNZ YAPI",
    description:
      "Modern mimari anlayışla inşa edilen bu özel villa projesinde FNZ YAPI, inşaat sürecinden iç mekan tasarımına ve mobilya üretimine kadar tüm aşamaları üstlendi. Şık detaylar, doğal ahşap uygulamaları ve özel mobilya çözümleriyle lüks bir yaşam alanı oluşturuldu.",
    images: [
      "/assets/images/selected-project/fnz-yapi-villa-5.webp",
      "/assets/images/selected-project/fnz-yapi-villa-2.webp",
      "/assets/images/selected-project/fnz-yapi-villa-3.webp",
      "/assets/images/selected-project/fnz-yapi-villa-4.webp",
      "/assets/images/selected-project/fnz-yapi-villa.webp",
    ],
    stats: {
      area: "500m²",
    },
    features: [
      "Modern Mimari",
      "Anahtar Teslim İnşaat",
      "Özel Mobilya Tefrişatı",
      "Doğal Ahşap Uygulamaları",
      "Lüks İç Mekan Tasarımı",
    ],
  },
  {
    id: 6,
    title: "Class Unique Beach Hotel ",
    category: "Beach & Kabana Tasarımı ve Otel Mobilya Renovasyonu ",
    location: "Marmaris, Muğla",
    year: "2023",
    client: "Class Unique Beach Hotel",
    description:
      "Class Unique Beach Hotel’de 62 odanın mobilya renovasyonu gerçekleştirilirken, aynı zamanda beach alanı için özel tasarım kabana ve şezlong uygulamaları yapıldı. Hem iç mekan hem de dış mekan konseptinde dayanıklı, estetik ve konforlu çözümler sunuldu.",
    images: [
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon2.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon3.jpg",
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon4.jpg",
    ],
    stats: {
      rooms: "62 Oda",
    },
    features: [
      "Mobilya Renovasyonu",
      "Beach Kabana Tasarımı",
      "Şezlong Üretimi",
      "Dayanıklı Malzemeler",
      "Konfor & Estetik",
    ],
  },
]


export function SelectedProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="selected-projects" className="bg-[#1e1e1f] relative overflow-hidden py-12 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <ProjectCardSection
          projectsdata={selectedProjects}
          title="Seçili Projelerimiz"
          subtitle="Uzmanlık"
          subtitle2="Alanlarımızı"
          subtitle3="Keşfedin"
          description="Otel mobilyalarından villa projelerine, ofis tasarımından özel konutlara kadar geniş yelpazedeki uzmanlığımızı görün"
        />

        {/* Call to Action */}
        <div className="text-center">
          <div
            className={`transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              50+ yıllık deneyimimizle gerçekleştirdiğimiz tüm projelerimizi incelemek ve kendi projeniz için ilham
              almak ister misiniz?
            </p>

            <div
              className={`grid grid-cols-2 gap-4 xs:gap-4 max-w-xl transition-all duration-1000 delay-900 items-center mx-auto`}
            >
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-4 xs:px-4 sm:px-8 py-3 xs:py-4 text-sm sm:text-lg flex-1 xs:flex-none transition-all duration-300  shadow-lg hover:shadow-2xl touch-manipulation"
              >
                <Eye className="mr-2 w-5 h-5" />
                <Link
                  href="/projeler" className="hidden xs:inline">

                  Projelerimiz
                </Link>
                <Link
                  href="/projeler" className="xs:hidden">

                  Tüm Projelerimiz
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-transparent px-4 xs:px-4 sm:px-8 py-3 xs:py-4 text-sm sm:text-lg bg-transparent flex-1 xs:flex-none transition-all duration-300 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 touch-manipulation"
              >
                <Users className="mr-2 w-5 h-5" />
                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden xs:inline"
                >
                  İletişim
                </Link>

                <Link
                  href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="xs:hidden"
                >
                  Bizimle İletişime Geç
                </Link>

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
