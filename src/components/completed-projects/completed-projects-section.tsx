"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const projects = [
  {
    id: 1,
    title: "Lüks Otel Yatak Odası Kompleksi",
    client: "Marmaris Grand Resort",
    location: "Marmaris, Muğla",
    year: "2025",
    category: "Otel Mobilyaları",
    description: "200 oda için özel tasarım ahşap mobilya seti. Premium kalite meşe ve ceviz ağacından üretim.",
    image: "/assets/images/completed-project/D-maris-nusret-fnz-wood.jpg",
    featured: true,
    completionDate: "Ocak 2025",
    value: "2.5M ₺",
  },
  {
    id: 2,
    title: "Modern Villa Mutfak Tasarımı",
    client: "Özel Villa Projesi",
    location: "Bodrum, Muğla",
    year: "2025",
    category: "Mutfak Mobilyaları",
    description: "Akdeniz tarzı villa için özel tasarım mutfak. Doğal ahşap ve modern teknoloji birleşimi.",
    image: "/assets/images/services-section/mutfak-fnz-wood-1.jpg",
    completionDate: "Şubat 2025",
    value: "450K ₺",
  },
  {
    id: 3,
    title: "Spa & Wellness Banyo Mobilyaları",
    client: "Aqua Spa Center",
    location: "Antalya",
    year: "2025",
    category: "Banyo Mobilyaları",
    description: "Su geçirmez özel ahşap işçiliği ile spa merkezi banyo mobilyaları. Wellness konsepti.",
    image: "/assets/images/services-section/banyo-fnz-wood-1.jpg",
    completionDate: "Mart 2025",
    value: "680K ₺",
  },
  {
    id: 4,
    title: "Executive Ofis Mobilya Seti",
    client: "Tech Solutions Ltd.",
    location: "İstanbul",
    year: "2025",
    category: "Ofis Mobilyaları",
    description: "Teknoloji şirketi için ergonomik ve modern ofis mobilyaları. Sürdürülebilir ahşap kullanımı.",
    image: "/assets/images/services-section/ofis-fnz-wood-3.png",
    completionDate: "Nisan 2025",
    value: "1.2M ₺",
  },
  {
    id: 5,
    title: "Sahil Restaurant Pergola Sistemi",
    client: "Deniz Restaurant",
    location: "Çeşme, İzmir",
    year: "2025",
    category: "Dış Mekân Yapıları",
    description: "Deniz kenarı restaurant için dayanıklı ahşap pergola ve deck sistemi. Tuz dirençli işlem.",
    image: "/assets/images/services-section/ahsap-pergola-fnz-wood.jpg",
    completionDate: "Mayıs 2025",
    value: "320K ₺",
  },
  {
    id: 6,
    title: "Butik Otel Kapı Sistemleri",
    client: "Boutique Hotel Marmaris",
    location: "Marmaris, Muğla",
    year: "2025",
    category: "Kapı Sistemleri",
    description: "Butik otel için özel tasarım ahşap kapılar. Yangın güvenlik sertifikalı üretim.",
    image: "/assets/images/services-section/kapi-fnz-wood-2.jpg",
    completionDate: "Haziran 2025",
    value: "890K ₺",
  },
]

export function CompletedProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`relative w-full bg-[#1e1e1f] py-20 lg:py-32 ${poppins.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 lg:mb-28 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <div className="w-2 h-2 bg-[#D4A574] rounded-full" />
            <span className="text-[#D4A574] font-medium text-sm tracking-wider uppercase">
              2025 Tamamlanan Projeler
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-8">
            Bu Yıl Tamamladığımız
            <br />
            <span className="font-semibold text-[#D4A574]">Başarı Hikayeleri</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Her projemizde mükemmellik arayışımızın sonucu olan, 2025 yılında tamamladığımız prestijli çalışmalarımız.
          </p>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 lg:mb-28 transition-all duration-800 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {[
            { value: "6", label: "Tamamlanan Proje" },
            { value: "6.04M ₺", label: "Toplam Değer" },
            { value: "100%", label: "Müşteri Memnuniyeti" },
            { value: "6", label: "Farklı Şehir" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-light text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${project.featured ? "lg:col-span-2" : ""}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white/8 hover:border-white/20 ${project.featured ? "lg:flex lg:items-center" : ""
                  }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden ${project.featured ? "lg:w-3/5 h-80 lg:h-96" : "h-64 sm:h-80"}`}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-6 left-6 bg-[#D4A574] text-white px-4 py-2 rounded-full text-sm font-medium">
                      Öne Çıkan Proje
                    </div>
                  )}

                  {/* Completion Status */}
                  <div className="absolute bottom-6 left-6 flex items-center space-x-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm font-medium">Tamamlandı</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 ${project.featured ? "lg:w-2/5 lg:flex lg:flex-col lg:justify-center" : ""}`}>
                  {/* Category */}
                  <div className="inline-block px-3 py-1 bg-[#D4A574]/20 text-[#D4A574] rounded-full text-sm font-medium mb-4">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 group-hover:text-[#D4A574] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Client */}
                  <p className="text-gray-300 font-medium mb-4">{project.client}</p>

                  {/* Meta Info */}
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{project.completionDate}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6 font-light">{project.description}</p>

                  {/* Value & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Proje Değeri</div>
                      <div className="text-xl font-semibold text-[#D4A574]">{project.value}</div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#D4A574] text-[#D4A574] hover:bg-[#D4A574] hover:text-white transition-all duration-300 group-hover:scale-105 bg-transparent"
                    >
                      Detayları Gör
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 lg:mt-28 transition-all duration-800 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12 lg:p-16 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">
              Siz de Bu <span className="font-semibold text-[#D4A574]">Başarı Hikayelerinin</span> Parçası Olun
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto font-light">
              2025 yılında gerçekleştirdiğimiz bu prestijli projeler gibi, sizin de hayalinizdeki projeyi birlikte
              hayata geçirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#D4A574] hover:bg-[#C19A68] text-white px-8 py-4 text-lg font-medium transition-all duration-300">
                Projenizi Planlayalım
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-medium transition-all duration-300 bg-transparent"
              >
                Tüm Projelerimizi İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
