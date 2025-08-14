"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { EnhancedAutoBreadcrumb } from "../bradcrumps/enhanced-auto-breadcrumb"
import { Header } from "../navbar/navbar"

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Otel Odası Mobilyaları",
    subtitle: "Fonozbart Ahşap Sanayi",
    description: "Otel ve büyük ölçekli projelere özel üretim.",
    image:
      "/assets/images/sliders/hero7.jpg",
  },
  {
    id: 2,
    title: "Mobilya Tefrişatı",
    subtitle: "Fonozbart Ahşap Sanayi",
    description: "Her aşamada uzmanlıkla ilerleyen inşaat çözümleri.",
    image:
      "/assets/images/sliders/hero3.jpg",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <>
      <div className="absolute top-0 right-0 z-20">
        <div className=" flex items-center mt-[100px] mr-2">
          <ChevronRight className="w-4 h-4 text-[#5f3409] mx-2" />
          <EnhancedAutoBreadcrumb enableSEO={true} showRichSnippets={true} />
        </div>
      </div>

      <div className="relative w-full overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-screen">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]" />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-16 lg:py-24"
            >
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[#D4A574] font-medium mb-3 text-sm sm:text-lg md:text-xl lg:text-2xl tracking-wide uppercase"
              >
                {slides[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-bold mb-4 sm:mb-6 md:mb-8 max-w-4xl leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gray-200 max-w-2xl leading-relaxed text-sm sm:text-lg md:text-xl px-4"
              >
                {slides[currentSlide].description}
              </motion.p>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Önceki slayt"
          className="hidden sm:flex group absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Sonraki slayt"
          className="hidden sm:flex group absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-10 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 items-center justify-center bg-white/70 hover:bg-white text-black rounded-full shadow-md backdrop-blur-md transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentSlide(index)
              }}
              aria-label={`Slayt ${index + 1}`}
              className={`rounded-full transition-all duration-300 hover:scale-110 active:scale-95 ${index === currentSlide
                  ? "bg-[#D4A574] w-6 h-2.5 sm:w-8 sm:h-3 md:w-10 md:h-4"
                  : "bg-white/50 hover:bg-white/75 w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4"
                }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}
