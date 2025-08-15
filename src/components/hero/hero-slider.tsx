"use client"

import { ArrowRight, Award, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSlider() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/sliders/hero2.jpg"
          alt="Ahşap işçiliği"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 sm:from-black/60 sm:via-black/40 sm:to-transparent"></div>
        {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M30 30m-30 0a30 30 0 1 1 60 0a30 30 0 1 1 -60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left ">
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              50+ Yıllık Tecrübe
            </span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Marmaris'in
            <span className="block text-[#FF6B35] mt-1 sm:mt-0">Sanat Dokusu</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto sm:mx-0">
            Otel, Villa ve Prestijli Yaşam Alanları İçin Profesyonel Ahşap İşçiliği ve Özel Mobilya Üretimi
          </p>

          <div className="grid grid-cols-2 gap-4 ">
            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 sm:px-8 py-4 text-base text-sm sm:text-lg flex-1 sm:flex-none"
            >
              <a className="hidden sm:inline" href="/projects">Projelerimizi Görün</a>
              <a className="sm:hidden" href="/projects">Projelerimiz</a>
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-transparent px-6 sm:px-8 py-4 text-base text-sm sm:text-lg bg-transparent flex-1 sm:flex-none"
            >
              <Award className="mr-3 w-4 h-4 sm:w-5 sm:h-5" />
            
               <span className="hidden sm:inline">Referanslarımız</span>
              <span className="sm:hidden">Referanslar</span>
            </Button>
          </div>

          {/* Stats */}
           <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 max-w-md sm:max-w-none mx-auto sm:mx-0">
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">500+</div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Proje</span>
                <span className="hidden sm:block">Tamamlanan Proje</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">50+</div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Yıl</span>
                <span className="hidden sm:block">Yıllık Tecrübe</span>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">100%</div>
              <div className="text-gray-300 text-xs sm:text-sm leading-tight">
                <span className="block sm:hidden">Memnuniyet</span>
                <span className="hidden sm:block">Müşteri Memnuniyeti</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}