"use client"

import Image from "next/image"
import { Cairo } from "next/font/google"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function CtaSection() {
  return (
    <section className=" w-full py-0">
      {/* Arka plan */}

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        {/* Left Content */}
        <div className="relative w-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 ">
          <div
            className="absolute top-0 left-0 right-0 h-[578px] bg-no-repeat bg-cover bg-center opacity-[1] -z-[10]"
            style={{
              backgroundColor: "#f2eeeb",
              backgroundImage: "url('/assets/images/cta-bg.jpg')",
              backgroundBlendMode: "luminosity",
            }}
          ></div>

          <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 max-w-3xl">
            <div>
              <div className="text-xs sm:text-sm font-medium text-[#D4A574] tracking-[0.2em] uppercase mb-2">
                BİZİMLE İLETİŞİME GEÇİN
              </div>
              {/* Coffee line with white dot */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-0.5 bg-[#D4A574]"></div>
                <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] font-sans">
              Projenizi Hayata Geçirelim
            </h2>
            <p className={`${cairo.className} text-sm sm:text-base leading-relaxed text-gray-300`}>
              50 yılı aşkın tecrübemizle, hayalinizdeki mobilya projelerini gerçeğe dönüştürüyoruz. Ücretsiz keşif ve
              danışmanlık hizmeti için hemen iletişime geçin.
            </p>

            {/* Contact Info */}
            <div className="w-full space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-600 p-1.5 rounded mt-0.5">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`${cairo.className} text-xs text-gray-400 mb-1`}>Her zaman arayın</p>
                  <p className="text-sm text-white font-medium">+90 (212) 555 0123</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gray-600 p-1.5 rounded mt-0.5">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`${cairo.className} text-xs text-gray-400 mb-1`}>E-posta gönder</p>
                  <p className="text-sm text-white font-medium">info@fnzmobilya.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gray-600 p-1.5 rounded mt-0.5">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <div className="flex-1">
                  <p className={`${cairo.className} text-xs text-gray-400 mb-1`}>Merkez Ofis</p>
                  <p className="text-sm text-white font-medium">İstanbul, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#D4A574] hover:bg-[#C19A68] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm w-full sm:w-auto group">
                Ücretsiz Keşif
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#3f3834] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm w-full sm:w-auto bg-transparent"
              >
                Katalog İndir
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="FNZ Mobilya atölyesi"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
