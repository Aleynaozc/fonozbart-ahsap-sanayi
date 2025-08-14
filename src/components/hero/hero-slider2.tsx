"use client"

import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSlider2() {
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
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
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-[#FF6B35]/20 text-[#FF6B35] rounded-full text-sm font-medium backdrop-blur-sm">
              50+ Yıllık Tecrübe
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Marmaris'in
            <span className="block text-[#FF6B35]">Ahşap Ustası</span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Otellerden villalara, beach kabana projelerinden özel yaşam alanlarına kadar her projede doğal ahşabın
            sıcaklığını modern tasarımla buluşturuyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-8 py-4 text-lg">
              Projelerimizi Görün
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#8B4513] px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Üretim Süreci
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] mb-2">500+</div>
              <div className="text-gray-300 text-sm">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] mb-2">50+</div>
              <div className="text-gray-300 text-sm">Yıllık Tecrübe</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#FF6B35] mb-2">100%</div>
              <div className="text-gray-300 text-sm">Müşteri Memnuniyeti</div>
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
