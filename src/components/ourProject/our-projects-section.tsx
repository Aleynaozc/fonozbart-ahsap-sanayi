"use client"

import Image from "next/image"
import { Cairo } from "next/font/google"
import { ArrowRight } from "lucide-react"
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
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Executive Mutfak",
    client: "Mavi Rezidans",
    location: "Ankara",
    year: "2023",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Wellness Banyo",
    client: "Elit Spa Merkezi",
    location: "Antalya",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Ahşap Deck",
    client: "Deniz Resort Hotel",
    location: "Bodrum",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Modern Ofis",
    client: "Tech Solutions",
    location: "İzmir",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Restoran İç Mekan",
    client: "Gourmet Restoran",
    location: "İstanbul",
    year: "2023",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
]

export default function ProjectOption5() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-4">
            PROJELERİMİZ
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 leading-[1.1] font-sans mb-6">
            Minimal Proje Galerisi
          </h2>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-2">
                <div className="text-xs font-medium text-orange-500 tracking-[0.2em] uppercase">{project.year}</div>
                <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                <p className={`${cairo.className} text-sm text-gray-600`}>{project.client}</p>
                <p className={`${cairo.className} text-xs text-gray-500`}>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm group">
            Tüm Projeleri Görüntüle
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}
