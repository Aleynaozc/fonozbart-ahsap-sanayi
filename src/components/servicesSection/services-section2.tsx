"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const projects = [
  {
    id: 1,
    category: "Interior",
    title: "Otel Odaları",
    image: "/assets/images/services-section/otel-odasi-fnz-wood-1.jpg",
  },
  {
    id: 2,
    category: "Furniture",
    title: "Mutfak",
    image: "/assets/images/services-section/mutfak-fnz-wood-1.jpg",
  },
  {
    id: 3,
    category: "Interior",
    title: "Banyo",
    image: "/assets/images/services-section/banyo-fnz-wood-1.jpg",
  },
  {
    id: 4,
    category: "Interior",
    title: "Ofis Mobilyaları",
    image: "/assets/images/services-section/ofis-fnz-wood-1.jpg",
  },
  {
    id: 5,
    category: "Interior",
    title: "Pergola",
    image: "/assets/images/services-section/ahsap-pergola-fnz-wood.jpg",
  },
  {
    id: 6,
    category: "Interior",
    title: "Ahşap Deck",
    image: "/assets/images/services-section/deck-fnz-wood-1.jpg",
  },
  {
    id: 7,
    category: "Interior",
    title: "Kapı",
    image: "/assets/images/services-section/kapi-fnz-wood-2.jpg",
  },
  {
    id: 8,
    category: "Interior",
    title: "Yangın Kapısı",
    image: "/assets/images/services-section/yangın-kapısı-fnz-wood.jpg",
  },
]

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
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
    }, 5000)

    return () => clearInterval(interval)
  }, [slidesToShow])

  return (
    <section className={`relative w-full overflow-hidden bg-warm-800 ${poppins.className} font-normal`}>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-neutral-white/20 hover:bg-neutral-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 text-neutral-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-neutral-white/20 hover:bg-neutral-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 text-neutral-white" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden">
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
              className="border-r border-brand-primary last:border-none group relative h-[600px] overflow-hidden cursor-pointer flex-shrink-0"
              style={{ width: `${100 / projects.length}%` }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-neutral-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 p-6 text-neutral-white z-20 w-full">
                <div className="absolute bottom-[15px] text-left transition-all duration-300 group-hover:bottom-[30px]">
                  <div className="text-sm font-light text-neutral-gray-300 mb-1 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="leading-tight font-semibold" style={{ fontSize: "1.8rem", paddingBottom: "35px" }}>
                    {project.title}
                  </h3>
                </div>
                <div className="relative inline-block group/btn mt-1 opacity-0 translate-y-8 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-neutral-white text-md font-medium tracking-wide cursor-pointer mb-2 z-[9999]">
                    Daha Fazlası
                  </span>
                  <div className="absolute bottom-0 left-0 h-0.5 bg-brand-primary w-[45px] group-hover/btn:w-[95px] transition-all duration-500"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-black/70 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2 mb-5">
        {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentIndex / slidesToShow) === index
              ? "bg-brand-primary"
              : "bg-neutral-gray-300 hover:bg-neutral-gray-400"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
