"use client"

import { ArrowRight, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

export function HeroSlider() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/assets/images/sliders/page-hero-fnz-wood-2.jpg" alt="Ahşap işçiliği" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 xs:from-black/70 xs:via-black/50 xs:to-black/30 sm:from-black/60 sm:via-black/40 sm:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <div
            className={`mb-3 xs:mb-4 sm:mb-6 transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="inline-block px-2 py-1 xs:px-3 xs:py-1.5 sm:px-4 sm:py-2 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-[#FF6B35]/20">
              50+ Yıllık Tecrübe
            </span>
          </div>

          <h1
            className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 xs:mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Ahşapın
            <span className="block text-[#FF6B35] mt-1 sm:mt-0">Sanatla Buluşması</span>
          </h1>

          <p
            className={`text-sm xs:text-base sm:text-lg md:text-xl text-gray-200 mb-4 xs:mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto sm:mx-0 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Otel, Villa ve Prestijli Yaşam Alanları İçin Profesyonel Ahşap İşçiliği ve Özel Mobilya Üretimi
          </p>

          <div
            className={`grid grid-cols-2 gap-3 xs:gap-4 max-w-xl transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* Projeler Butonu */}
            <Link href="/projeler" className="w-full ">
              <Button
                size="lg"
                className="cursor-pointer w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#FF6B35]  text-white px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg shadow-lg "
              >
                <span className="truncate">Projelerimiz</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>

            {/* Referanslar Butonu */}
            <Link href="/referanslar" className="w-full ">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer w-full flex items-center justify-center gap-2 sm:gap-3 text-white border-2 border-white/20 hover:bg-transparent px-4 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg  backdrop-blur-sm bg-transparent"
              >
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="truncate">Referanslarımız</span>
              </Button>
            </Link>
          </div>


          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-2 xs:gap-4 sm:gap-6 md:gap-8 mt-8 xs:mt-12 sm:mt-16 pt-4 xs:pt-6 sm:pt-8 border-t border-white/20 max-w-md sm:max-w-none mx-auto sm:mx-0 transition-all duration-1000 delay-1100 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="text-center sm:text-left">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">
                750+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Proje</span>
                <span className="hidden sm:block">Tamamlanan Proje</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">
                50+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Yıl</span>
                <span className="hidden sm:block">Yıllık Tecrübe</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">
                100%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Memnuniyet</span>
                <span className="hidden sm:block">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden xs:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
