"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, User, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Modern Villa Mobilyaları",
      category: "residential",
      location: "Marmaris, Muğla",
      date: "2024",
      client: "Özel Müşteri",
      description:
        "Deniz manzaralı modern villada minimalist tasarım anlayışı ile hazırlanan özel mobilya koleksiyonu.",
      image: "/modern-kitchen.png",
      budget: "₺850.000",
      duration: "3 ay",
      size: "large",
    },
    {
      id: 2,
      title: "Lüks Otel Mobilyaları",
      category: "commercial",
      location: "Bodrum, Muğla",
      date: "2024",
      client: "Boutique Hotel",
      description: "5 yıldızlı butik otelin tüm alanları için tasarlanan özel mobilya koleksiyonu.",
      image: "/luxury-bedroom-furniture.png",
      budget: "₺2.100.000",
      duration: "6 ay",
      size: "medium",
    },
    {
      id: 3,
      title: "Kurumsal Ofis Tasarımı",
      category: "corporate",
      location: "İstanbul",
      date: "2023",
      client: "Tech Company",
      description: "Teknoloji şirketinin yeni ofisi için tasarlanan ergonomik ve modern çalışma alanları.",
      image: "/corporate-office-furniture.png",
      budget: "₺1.200.000",
      duration: "4 ay",
      size: "small",
    },
    {
      id: 4,
      title: "Antika Mobilya Restorasyonu",
      category: "restoration",
      location: "Ankara",
      date: "2023",
      client: "Müze Müdürlüğü",
      description: "19. yüzyıla ait antika mobilyaların orijinal güzelliklerine kavuşturulması projesi.",
      image: "/antique-cabinet-restoration.png",
      budget: "₺650.000",
      duration: "8 ay",
      size: "medium",
    },
    {
      id: 5,
      title: "Özel Kütüphane Tasarımı",
      category: "residential",
      location: "Çeşme, İzmir",
      date: "2023",
      client: "Koleksiyoner",
      description: "Kitap koleksiyoneri için tasarlanan özel kütüphane mobilyaları.",
      image: "/custom-library.png",
      budget: "₺750.000",
      duration: "5 ay",
      size: "large",
    },
    {
      id: 6,
      title: "Minimalist Mutfak Çözümü",
      category: "residential",
      location: "Antalya",
      date: "2023",
      client: "Genç Çift",
      description: "Küçük alanlarda maksimum fonksiyonellik sağlayan akıllı mutfak tasarımı.",
      image: "/minimalist-kitchen-solution.png",
      budget: "₺450.000",
      duration: "2 ay",
      size: "small",
    },
  ]

  const categories = [
    { id: "all", label: "Tümü" },
    { id: "residential", label: "Konut" },
    { id: "commercial", label: "Ticari" },
    { id: "corporate", label: "Kurumsal" },
    { id: "restoration", label: "Restorasyon" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const getMasonryHeight = (size: string, index: number) => {
    const baseHeights = {
      small: 300,
      medium: 400,
      large: 500,
    }
    return baseHeights[size as keyof typeof baseHeights] + (index % 3) * 50
  }

  return (
    <div className="min-h-screen bg-[#1e1e1f] text-white">

      {/* Floating hero section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-[#FF6B35]/5"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        {/* Floating geometric elements */}
        <div
          className="absolute top-20 left-20 w-32 h-32 border border-[#FF6B35]/30 rounded-full"
          style={{ transform: `rotate(${scrollY * 0.1}deg)` }}
        />
        <div
          className="absolute bottom-32 right-32 w-24 h-24 bg-[#FF6B35]/20 rounded-full"
          style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-[#FF6B35]/40 transform rotate-45"
          style={{ transform: `rotate(${45 + scrollY * 0.05}deg)` }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
            <span className="block text-white">PROJE</span>
            <span className="block bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] bg-clip-text text-transparent">
              LERİMİZ
            </span>
          </h1>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            Yaratıcılık ve ustalığın buluştuğu projelerimizi keşfedin
          </p>

          {/* Floating filter pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  filter === category.id
                    ? "bg-[#FF6B35] border-[#FF6B35] text-white"
                    : "border-[#FF6B35]/30 text-gray-300 hover:border-[#FF6B35] hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry project grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" style={{ columnFill: "balance" }}>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="break-inside-avoid mb-8 group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-[#2a2a2b] border border-[#FF6B35]/10 hover:border-[#FF6B35]/30 transition-all duration-500">
                  {/* Project image */}
                  <div className="relative overflow-hidden" style={{ height: getMasonryHeight(project.size, index) }}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Floating project number */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold">
                      {String(project.id).padStart(2, "0")}
                    </div>

                    {/* Hover overlay */}
                    <div
                      className={`absolute inset-0 bg-[#FF6B35]/90 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ArrowUpRight className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Project content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-[#FF6B35]/20 text-[#FF6B35] text-sm font-medium rounded-full">
                        {categories.find((cat) => cat.id === project.category)?.label}
                      </span>
                      <span className="text-gray-400 text-sm">{project.date}</span>
                    </div>

                    <h3 className="text-2xl font-bold leading-tight group-hover:text-[#FF6B35] transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#FF6B35]" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-[#FF6B35]" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-[#FF6B35]" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#FF6B35]/10">
                      <div className="flex justify-between items-center">
                        <span className="text-[#FF6B35] font-bold text-lg">{project.budget}</span>
                        <button className="text-gray-400 hover:text-[#FF6B35] transition-colors duration-300">
                          Detayları Gör →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-32 px-4 bg-gradient-to-r from-[#2a2a2b] to-[#1e1e1f] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 border border-[#FF6B35]/20 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FF6B35]/10 rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-8">
            Bir Sonraki Proje
            <span className="block text-[#FF6B35]">Sizinki Olsun</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Hayalinizdeki projeyi birlikte gerçekleştirelim</p>
          <button className="px-12 py-4 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-[#FF6B35]/25 transition-all duration-300 transform hover:scale-105">
            Proje Başlatalım
          </button>
        </div>
      </section>

    </div>
  )
}
