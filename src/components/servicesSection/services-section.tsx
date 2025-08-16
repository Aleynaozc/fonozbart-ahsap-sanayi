"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const projects = [
  {
    id: 1,
    category: "Otel Mobilyaları",
    title: "Otel Odaları",
    description: "Lüks otel projelerine özel tasarım ve üretim",
    image: "/assets/images/services-section/oda9.jpg"
  },
  {
    id: 2,
    category: "Mutfak Mobilyaları",
    title: "Mutfak",
    description: "Modern ve fonksiyonel mutfak çözümleri",
    image: "/assets/images/services-section/mutfak.jpg"
  },
  {
    id: 3,
    category: "Banyo Mobilyaları",
    title: "Banyo",
    description: "Şık ve dayanıklı banyo mobilyaları",
    image: "/assets/images/services-section/banyo2.jpg"
  },
  {
    id: 4,
    category: "Ofis Mobilyaları",
    title: "Ofis Mobilyaları",
    description: "Profesyonel çalışma alanları için çözümler",
    image: "/assets/images/services-section/ofis4.png"
  },
  {
    id: 5,
    category: "Dış Mekân Yapıları",
    title: "Pergola",
    description: "Dış mekan ahşap yapıları",
    image: "/assets/images/services-section/ahsappergola.jpg"
  },
  {
    id: 6,
    category: "Dış Mekân Yapıları",
    title: "Ahşap Deck",
    description: "Dayanıklı ve estetik deck sistemleri",
    image: "/assets/images/services-section/deck2.jpg"
  },
  {
    id: 7,
    category: "Kapı Sistemleri",
    title: "Kapı",
    image: "/assets/images/services-section/kapı3.jpg"
  },
  {
    id: 8,
    category: "Kapı Sistemleri",
    title: "Yangın Kapısı",
    image: "/assets/images/services-section/yangınkapısı.jpg"
  }

]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(5)

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3)
      } else {
        setSlidesToShow(5)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + slidesToShow >= projects.length ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, projects.length - slidesToShow) : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index * slidesToShow)
  }

  // Otomatik kaydırma
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [slidesToShow])

  return (

    <section id="services" className={`relative w-full overflow-hidden bg-[#1e1e1f] ${poppins.className} font-normal`}>
    
      
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-[#FF6B35]/20 to-[#E55A2B]/20 hover:from-[#FF6B35]/30 hover:to-[#E55A2B]/30 backdrop-blur-xl border border-[#FF6B35]/20 rounded-full p-3 transition-all duration-300 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#FF6B35] transition-colors duration-300" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 bg-gradient-to-r from-[#FF6B35]/20 to-[#E55A2B]/20 hover:from-[#FF6B35]/30 hover:to-[#E55A2B]/30 backdrop-blur-xl border border-[#FF6B35]/20 rounded-full p-3 transition-all duration-300 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 text-white group-hover:text-[#FF6B35] transition-colors duration-300" />
        </button>
          {/* Slider Container */}
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(projects.length * 100) / slidesToShow}%`,
            transform: `translateX(-${(currentIndex * 100) / projects.length}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="border-r border-[#FF6B35]/20 last:border-none group relative h-[600px] overflow-hidden cursor-pointer flex-shrink-0"
              style={{ width: `${100 / projects.length}%` }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Glassmorphism Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-[#8B4513]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="inline-block px-3 py-1 bg-[#FF6B35]/20 backdrop-blur-sm rounded-full text-xs font-medium text-[#FF6B35] mb-3 border border-[#FF6B35]/20">
                    {project.category}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2 leading-tight">{project.title}</h3>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-300">
                      <span>Detayları Gör</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF6B35] via-[#E55A2B] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3 mb-8">
        {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / slidesToShow) === index
              ? "bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50"
              : "bg-gray-600 hover:bg-gray-500"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      </div>


    
    </section>
  )
}
