"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, MapPin, Users, Award, Eye, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      area: "250m²",
      duration: "1 Ay",
      team: "8 Kişi",
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
      area: "250m²",
      duration: "1 Ay",
      team: "8 Kişi",
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
    images: ["/assets/images/selected-project/AHU-DİYALİZ-2-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-3-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-4-2025.jpg",
      "/assets/images/selected-project/AHU-DİYALİZ-5-2025.jpg"],
    stats: {
      floors: "3 Kat",
      duration: "3 Ay",
      team: "10 Kişi",
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
      duration: "2 Ay",
      team: "15 Kişi",
    },
    features: [
      "Mobilya Renovasyonu",
      "Bakım ve Onarım İşleri",
      "Hızlı Teslimat",
      "Dayanıklı Malzemeler",
      "Otel Standartlarına Uygun"
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
      "/assets/images/selected-project/fnz-yapi-villa.webp"
    ],
    stats: {
      area: "500m²",
      duration: "10 Ay",
      team: "30 Kişi",
    },
    features: [
      "Modern Mimari",
      "Anahtar Teslim İnşaat",
      "Özel Mobilya Tefrişatı",
      "Doğal Ahşap Uygulamaları",
      "Lüks İç Mekan Tasarımı"
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
      "/assets/images/selected-project/CLASS_UNIQUE_renovasyon4.jpg"
    ],
    stats: {
      rooms: "62 Oda",
      duration: "3 Ay",
      team: "18 Kişi",
    },
    features: [
      "Mobilya Renovasyonu",
      "Beach Kabana Tasarımı",
      "Şezlong Üretimi",
      "Dayanıklı Malzemeler",
      "Konfor & Estetik"
    ],
  }


]

function CaptureIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Top right corner */}
      <div className="absolute top-0 right-0 w-6 h-6">
        <div className="absolute top-0 right-0 w-4 h-0.5 bg-[#FF6B35]"></div>
        <div className="absolute top-0 right-0 w-0.5 h-4 bg-[#FF6B35]"></div>
      </div>
      {/* Bottom left corner */}
      <div className="absolute bottom-0 left-0 w-6 h-6">
        <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-[#FF6B35]"></div>
        <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-[#FF6B35]"></div>
      </div>
    </div>
  )
}

function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex,
  title,
}: {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex: number
  title: string
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageLoaded, setImageLoaded] = useState(false)
  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    setImageLoading(true)
    setImageLoaded(false)
  }, [currentIndex])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
    setImageLoaded(true)
  }
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white " />
          </button>
        </>
      )}

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          key={currentIndex}
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentIndex + 1}`}
          width={1200}
          height={800}
          className={`max-w-full max-h-full object-contain transition-all duration-500 ${imageLoaded ? "blur-0 opacity-100" : "blur-sm opacity-70"
            }`}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          onLoad={handleImageLoad}
        />

        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 border-2 border-[#FF6B35] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-white text-sm">Yükleniyor...</span>
            </div>
          </div>
        )}
      </div>

      {/* Image counter */}
      <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full">
        <span className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </span>
      </div>
    </div>
  )
}

function ProjectImageSlider({
  images,
  title,
  category,
  onImageClick,
}: {
  images: string[]
  title: string
  category: string
  onImageClick: (index: number) => void
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className="relative h-48 lg:h-56 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onImageClick(currentImageIndex)}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image || `/placeholder.svg?height=300&width=400&query=${category} project`}
          alt={`${title} - Image ${index + 1}`}
          fill
          className={`object-cover transition-all duration-1000 group-hover:scale-110 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-center justify-center ${isHovered ? "opacity-100" : "opacity-0"
          }`}
      >
        <CaptureIcon className="w-12 h-12" />
      </div>


    </div>
  )
}

export function SelectedProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof selectedProjects)[0] | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const handleImageClick = (project: (typeof selectedProjects)[0], imageIndex: number) => {
    setSelectedProject(project)
    setSelectedImageIndex(imageIndex)
    setModalOpen(true)
  }

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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div
        className={`absolute top-20 right-20 w-12 h-12 border-2 border-[#FF6B35]/30 rotate-45 transition-all duration-2000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
      />

      <div
        className={`hidden lg:flex absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full transition-all duration-2000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className={`mb-4 lg:mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
              <Award className="w-4 h-4 text-[#FF6B35] animate-pulse" />
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Seçili Projelerimiz</span>
            </div>
          </div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 lg:mb-6 leading-tight transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <span className="text-[#FF6B35]">Uzmanlık</span> Alanlarımızı
            <br />
            <span className="text-white">Keşfedin</span>
          </h2>

          <p
            className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Otel mobilyalarından villa projelerine, ofis tasarımından özel konutlara kadar geniş yelpazedeki
            uzmanlığımızı görün
          </p>
        </div>

        {/* Projects Grid - All visible immediately */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:grid-rows-1">
          {selectedProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#2a2a2b]/30 rounded-2xl overflow-hidden border border-[#FF6B35]/10 transition-all duration-700 hover:border-[#FF6B35]/30  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${800 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative">
                <ProjectImageSlider
                  images={project.images}
                  title={project.title}
                  category={project.category}
                  onImageClick={(imageIndex) => handleImageClick(project, imageIndex)}
                />

                {/* Badges Container - Flex layout for better responsive behavior */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start gap-2">
                  {/* Category Badge */}
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block max-w-[90%] truncate px-2 xs:px-3 py-1 bg-[#FF6B35]/90 text-white rounded-full text-xs sm:text-xs font-medium backdrop-blur-sm leading-tight"
                      title={project.category} // Hover'da tam metin gösterir
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="flex-shrink-0 ml-2">
                    <div className="bg-black/70 backdrop-blur-sm px-2 xs:px-3 py-1 rounded-lg">
                      <span className="text-white text-xs font-medium whitespace-nowrap">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="min-h-[3.5rem] mb-3">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#FF6B35] transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                <div className="min-h-[2rem] mb-4">
                  <div className="flex items-center space-x-4 text-gray-300 text-sm">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#FF6B35]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#FF6B35]" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-[#1e1e1f]/50 rounded-lg border border-[#FF6B35]/10">
                      <div className="text-sm font-bold text-white">{value}</div>
                      <div className="text-xs text-[#FF6B35]">
                        {key === "rooms"
                          ? "Oda"
                          : key === "area"
                            ? "Alan"
                            : key === "floors"
                              ? "Kat"
                              : key === "duration"
                                ? "Süre"
                                : "Ekip"}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-[#FF6B35]/10 text-[#FF6B35] rounded-full text-xs border border-[#FF6B35]/20"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="px-2 py-1 bg-gray-600/20 text-gray-400 rounded-full text-xs">
                      +{project.features.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

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

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <Eye className="mr-2 w-5 h-5" />
                Tüm Projelerimizi İncele
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 bg-transparent"
              >
                <Users className="mr-2 w-5 h-5" />
                Bizimle İletişime Geç
              </Button>
            </div>
          </div>
        </div>
      </div>

      {selectedProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={selectedProject.images}
          initialIndex={selectedImageIndex}
          title={selectedProject.title}
        />
      )}
    </section>
  )
}
