"use client"
import Image from "next/image"
import { Poppins } from 'next/font/google'
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    image: "/assets/images/services-section/oda9.jpg",
  },
  {
    id: 2,
    category: "Furniture",
    title: "Mutfak",
    image: "/assets/images/services-section/mutfak.jpg",
  },
  {
    id: 3,
    category: "Interior",
    title: "Banyo",
    image: "/assets/images/services-section/banyo2.jpg",
  },
  {
    id: 4,
    category: "Interior",
    title: "Ahşap Deck",
    image: "/assets/images/services-section/deck2.jpg",
  },
  {
    id: 5,
    category: "Interior",
    title: "Pergola",
    image: "/assets/images/services-section/ahsappergola.jpg",
  },
  {
    id: 6,
    category: "Interior",
    title: "Kapı",
    image: "/assets/images/services-section/kapı3.jpg",
  },
  {
    id: 7,
    category: "Interior",
    title: "Yangın Kapısı",
    image: "/assets/images/services-section/yangınkapısı.jpg",
  },
]

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slidesToShow, setSlidesToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(4)
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
    setCurrentIndex(index)
  }

  return (
    <section
      className={`w-full relative overflow-hidden ${poppins.className} font-normal`}
    >
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
        disabled={currentIndex + slidesToShow >= projects.length}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[600px] overflow-hidden cursor-pointer flex-shrink-0 section-gradient"
              style={{ width: `${100 / slidesToShow}%` }}
            >
              {/* Image */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Bottom text container */}
              <div className="absolute bottom-0 left-0 p-6 text-white z-20 w-full">
                {/* Category and Title - moves up on hover */}
                <div className="absolute bottom-[15px] text-left text-white transition-all duration-300 group-hover:bottom-[30px]">
                  <div className="text-sm font-light text-gray-300 mb-1 tracking-wider uppercase">
                    {project.category}
                  </div>
                  <h3
                    className="leading-tight"
                    style={{
                      fontWeight: 600,
                      fontSize: "1.8rem",
                      letterSpacing: ".6px",
                      paddingBottom: "35px",
                      transition: "all .3s ease",
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                {/* View Project - slides up from bottom on hover */}
                <div className="relative inline-block group/btn mt-1 opacity-0 translate-y-8 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="text-white text-md font-medium tracking-wide cursor-pointer mb-2 z-[9999]">Daha Fazlası</span>
                  {/* Orange underline */}
                  <div className="absolute bottom-0 left-0 h-0.5 bg-orange-500 w-[45px] group-hover/btn:w-[95px] transition-all duration-500"></div>
                </div>
              </div>
              {/* Gradient overlay for text readability */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / slidesToShow) === index ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
