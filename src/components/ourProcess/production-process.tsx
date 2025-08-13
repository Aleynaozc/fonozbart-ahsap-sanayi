"use client"

import Image from "next/image"
import { Cairo } from "next/font/google"
import { Search, PenTool, Settings, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const processSteps = [
  {
    id: 1,
    title: "Keşif",
    description: "Proje alanının detaylı incelenmesi ve müşteri ihtiyaçlarının belirlenmesi",
    icon: Search,
    details: "Sahada ölçüm ve analiz, müşteri görüşmeleri, ihtiyaç analizi ve teknik değerlendirme süreçlerini kapsar.",
  },
  {
    id: 2,
    title: "Tasarım ve Onay",
    description: "Özel tasarım çözümlerinin geliştirilmesi ve müşteri onayının alınması",
    icon: PenTool,
    details: "3D tasarım ve modelleme, malzeme seçimi, teknik çizimler ve müşteri sunumu ile onay süreçlerini içerir.",
  },
  {
    id: 3,
    title: "Üretim",
    description: "Kaliteli malzemeler ile özenli üretim sürecinin gerçekleştirilmesi",
    icon: Settings,
    details: "Malzeme tedariki, atölye üretimi, kalite kontrol ve paketleme hazırlık aşamalarını kapsamaktadır.",
  },
  {
    id: 4,
    title: "Montaj",
    description: "Profesyonel ekip tarafından hızlı ve titiz montaj işlemlerinin tamamlanması",
    icon: CheckCircle,
    details: "Sahaya nakliye, profesyonel montaj, son kontroller ve teslim garanti süreçlerini içermektedir.",
  },
]

export function ProductionProcess() {
  return (
    <section className="w-full py-0">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        {/* Left Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Üretim süreci"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>

        {/* Right Content */}
        <div className="w-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 bg-white">
          <div className="w-full space-y-4 sm:space-y-6 md:space-y-8 max-w-3xl">
            <div>
              <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-[0.2em] uppercase mb-2">
                ÜRETİM SÜRECİMİZ
              </div>
              {/* Coffee line with white dot */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-0.5 bg-[#D4A574]"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#3d3d3d] leading-[1.1] font-sans">
              4 Adımda Mükemmel Sonuç
            </h2>

            {/* Process Steps */}
            <div className="w-full space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.id} className="border-l-4 border-[#D4A574] pl-6 group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#D4A574] p-2 rounded-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">{step.id}</span>
                        <h3 className="text-lg font-bold text-[#3d3d3d]">{step.title}</h3>
                      </div>
                      <p className={`${cairo.className} text-sm text-gray-600 mb-2`}>{step.description}</p>
                      <p className={`${cairo.className} text-xs text-gray-500 leading-relaxed`}>{step.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="w-full grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4A574] mb-1">500+</div>
                <div className={`${cairo.className} text-xs text-gray-600`}>Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#D4A574] mb-1">50+</div>
                <div className={`${cairo.className} text-xs text-gray-600`}>Yıllık Tecrübe</div>
              </div>
            </div>

            <Button className="bg-[#D4A574] hover:bg-[#C19A68] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-sm w-full sm:w-auto group">
              Süreç Hakkında Detay
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
