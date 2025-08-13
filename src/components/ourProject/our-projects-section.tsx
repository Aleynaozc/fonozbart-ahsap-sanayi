"use client"

import Image from "next/image"
import { Cairo } from "next/font/google"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const projects = [
  {
    id: 1,
    title: "Lüks Otel Yatak Odası",
    client: "Ahu Hastanesi",
    location: "İstanbul",
    year: "2024",
    category: "Otel Mobilyaları",
    description: "Modern ve fonksiyonel hasta odaları için özel tasarım mobilyalar",
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Executive Mutfak",
    client: "Mavi Rezidans",
    location: "Ankara",
    year: "2023",
    category: "Mutfak Tasarımı",
    description: "Lüks rezidans için özel tasarım mutfak mobilyaları",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Wellness Banyo",
    client: "Elit Spa Merkezi",
    location: "Antalya",
    year: "2024",
    category: "Banyo Mobilyaları",
    description: "Spa merkezi için özel tasarım banyo ve wellness alanı",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Ahşap Deck",
    client: "Deniz Resort Hotel",
    location: "Bodrum",
    year: "2023",
    category: "Dış Mekan",
    description: "Sahil oteli için özel tasarım ahşap deck ve şezlonglar",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Modern Ofis",
    client: "Tech Solutions",
    location: "İzmir",
    year: "2024",
    category: "Ofis Mobilyaları",
    description: "Teknoloji şirketi için modern ve ergonomik ofis tasarımı",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Restoran İç Mekan",
    client: "Gourmet Restoran",
    location: "İstanbul",
    year: "2023",
    category: "Restoran Tasarımı",
    description: "Fine dining restoran için lüks iç mekan tasarımı",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
]

export function OurProjects() {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="w-full text-center mb-8 sm:mb-12">
          <div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-2">
              PROJELERİMİZ
            </div>
            {/* Coffee line with white dot - centered */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d3d3d] leading-[1.1] font-sans mb-6">
            Tamamlanan Çalışmalarımız
          </h2>
          <p className={`${cairo.className} text-sm sm:text-base leading-relaxed text-gray-600 max-w-3xl mx-auto`}>
            Farklı sektörlerden müşterilerimiz için özel olarak tasarladığımız projelerimizi keşfedin
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="w-full group">
              <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>

                {/* Hover Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <div className="mb-2">
                      <span className="inline-block bg-[#D4A574] px-2 sm:px-3 py-1 text-xs font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2">{project.title}</h3>
                    <p className={`${cairo.className} text-sm text-gray-200 mb-3`}>{project.client}</p>
                    <div className="flex items-center text-xs text-gray-300 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full space-y-2">
                <div className="text-xs font-medium text-[#D4A574] tracking-[0.2em] uppercase">{project.year}</div>
                <h3 className="text-base sm:text-lg font-bold text-[#3d3d3d]">{project.title}</h3>
                <p className={`${cairo.className} text-sm text-gray-600`}>{project.client}</p>
                <p className={`${cairo.className} text-xs text-gray-500`}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="w-full text-center mt-8 sm:mt-12">
          <Button className="bg-[#D4A574] hover:bg-[#C19A68] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm w-full sm:w-auto group">
            Tüm Projeleri Görüntüle
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
