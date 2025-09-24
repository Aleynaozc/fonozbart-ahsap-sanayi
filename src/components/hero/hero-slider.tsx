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
    <section
      id="hero"
      className="relative h-auto min-h-[100vh] flex items-center justify-center overflow-hidden pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-0"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/sliders/page-hero-fnz-wood-2.jpg"
          alt="Ahşap işçiliği"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50 sm:from-black/70 sm:via-black/50 sm:to-black/30 md:from-black/60 md:via-black/40 md:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <div
            className={`mb-4 sm:mb-6 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="inline-block px-3 py-2 sm:px-4 sm:py-2 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full text-sm sm:text-sm font-medium backdrop-blur-sm border border-[#FF6B35]/20">
              50+ Yıllık Tecrübe
            </span>
          </div>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Ahşabın
            <span className="block text-[#FF6B35] mt-1 sm:mt-0">Sanatla Buluşması</span>
          </h1>

          <p
            className={`text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Otel, Villa ve Prestijli Yaşam Alanları İçin Profesyonel Ahşap İşçiliği ve Özel Mobilya Üretimi
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 sm:gap-4 max-w-xl transition-all duration-1000 delay-900 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Projeler Butonu */}
            <Link href="/projeler" className="flex-1">
              <Button
                size="lg"
                className="cursor-pointer w-full flex items-center justify-center gap-3 bg-[#FF6B35] text-white px-6 py-4 text-base sm:text-lg shadow-lg"
              >
                <span>Projelerimiz</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>

            {/* Referanslar Butonu */}
            <Link href="/referanslar" className="flex-1">
              <Button
                size="lg"
                variant="outline"
                className="cursor-pointer w-full flex items-center justify-center gap-3 text-white border-2 border-white/20 hover:bg-transparent px-6 py-4 text-base sm:text-lg backdrop-blur-sm bg-transparent"
              >
                <Award className="w-5 h-5" />
                <span>Referanslarımız</span>
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 max-w-md sm:max-w-none mx-auto sm:mx-0 transition-all duration-1000 delay-1100 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-2">750+</div>
              <div className="text-gray-300 text-sm leading-tight">
                <span className="block sm:hidden">Proje</span>
                <span className="hidden sm:block">Tamamlanan Proje</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-2">50+</div>
              <div className="text-gray-300 text-sm leading-tight">
                <span className="block sm:hidden">Yıl</span>
                <span className="hidden sm:block">Yıllık Tecrübe</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-2">100%</div>
              <div className="text-gray-300 text-sm leading-tight">
                <span className="block sm:hidden">Memnuniyet</span>
                <span className="hidden sm:block">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on very small screens */}
      <div className="hidden sm:block absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}