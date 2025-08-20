"use client"

import { Search, Palette, Cog, Wrench, ArrowRight, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const processSteps = [
  {
    id: 1,
    icon: Search,
    title: "İhtiyaç Analizi ve Keşif",
    duration: "1-2 Gün",
    description:
      "Müşterimizin taleplerini dinliyor, proje alanında ölçüm ve keşif yapıyor, malzeme ve tasarım seçeneklerini birlikte değerlendiriyoruz.",
  },
  {
    id: 2,
    icon: Palette,
    title: "Tasarım ve Onay",
    duration: "3-5 Gün",
    description: "Projeyi 3D tasarıma dönüştürüyor, renk, malzeme ve detay onayını alıyor, gerekirse numune sunuyoruz.",
  },
  {
    id: 3,
    icon: Cog,
    title: "Üretim",
    duration: "1-4 Hafta",
    description:
      "Modern makine parkurumuzda kaliteli malzemelerle üretim gerçekleştiriyor, CNC kesim, bantlama ve montaj işlemlerini hassasiyetle yapıyoruz.",
  },
  {
    id: 4,
    icon: Wrench,
    title: "Montaj ve Teslimat",
    duration: "1-3 Gün",
    description:
      "Uzman ekibimiz projeyi yerinde montajlıyor, kalite kontrol yapıyor ve anahtar teslim eksiksiz şekilde teslim ediyoruz.",
  },
]

export default function ProductionProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`relative bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] py-16 lg:py-20 overflow-hidden ${poppins.className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div
        className={`absolute top-20 right-20 w-12 h-12 border-2 border-[#FF6B35]/30 rotate-45 transition-all duration-2000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`hidden lg:flex absolute bottom-20 left-20 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full transition-all duration-2000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className={`mb-4 lg:mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
              <Cog className="w-4 h-4 text-[#FF6B35] animate-spin" style={{ animationDuration: "3s" }} />
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Üretim Sürecimiz</span>
            </div>
          </div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 text-white leading-tight transition-all duration-1200 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-[#FF6B35]">Profesyonel</span> Yaklaşımımızla
            <br />
            <span className="text-white transition-all duration-1000 delay-600">Projelerinizi Hayata Geçiriyoruz</span>
          </h2>

          <p
            className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Kaliteli hizmet anlayışımız ve deneyimli ekibimizle her aşamada size rehberlik ediyoruz
          </p>
        </div>

        {/* Process Steps - Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35]/20 via-[#FF6B35]/60 to-[#FF6B35]/20"></div>

            <div className="grid grid-cols-4 gap-8 items-stretch">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div
                    key={step.id}
                    className={`relative transition-all duration-700 flex flex-col ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 flex justify-center mb-6">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          hoveredStep === index
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] scale-110 shadow-lg shadow-[#FF6B35]/30"
                            : "bg-[#2a2a2b] border-2 border-[#FF6B35]/30"
                        }`}
                      >
                        <span
                          className={`font-bold text-lg transition-colors duration-300 ${
                            hoveredStep === index ? "text-white" : "text-[#FF6B35]"
                          }`}
                        >
                          {step.id}
                        </span>
                      </div>

                      {/* Arrow to next step */}
                      {index < processSteps.length - 1 && (
                        <ArrowRight
                          className={`absolute -right-12 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#FF6B35] transition-all duration-500 ${
                            hoveredStep === index ? "scale-125 text-[#E55A2B]" : ""
                          }`}
                        />
                      )}
                    </div>

                    {/* Step Content */}
                    <div
                      className={`bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl p-6 border transition-all duration-500 flex-1 flex flex-col ${
                        hoveredStep === index
                          ? "border-[#FF6B35]/50 bg-gradient-to-br from-[#FF6B35]/5 to-[#E55A2B]/5 transform -translate-y-2 shadow-xl shadow-[#FF6B35]/10"
                          : "border-[#FF6B35]/20"
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                            hoveredStep === index ? "bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]" : "bg-[#FF6B35]/10"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 transition-all duration-500 ${
                              hoveredStep === index ? "text-white" : "text-[#FF6B35]"
                            }`}
                          />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="flex justify-center mb-3">
                        <div className="inline-flex items-center space-x-1 px-3 py-1 bg-[#FF6B35]/10 rounded-full border border-[#FF6B35]/20">
                          <Clock className="w-3 h-3 text-[#FF6B35]" />
                          <span className="text-[#FF6B35] text-xs font-medium">{step.duration}</span>
                        </div>
                      </div>

                      <h3
                        className={`text-lg font-semibold text-white mb-3 text-center transition-all duration-300 ${
                          hoveredStep === index ? "text-[#FF6B35]" : ""
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed text-center flex-1 flex items-center justify-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process Steps - Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.id}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                {/* Timeline Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-[#FF6B35] to-[#FF6B35]/30"></div>
                )}

                <div className="flex items-start space-x-4">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B35]/30">
                    <span className="font-bold text-lg text-white">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl p-6 border border-[#FF6B35]/20">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-[#FF6B35]" />
                      </div>
                      <div className="inline-flex items-center space-x-1 px-3 py-1 bg-[#FF6B35]/10 rounded-full border border-[#FF6B35]/20">
                        <Clock className="w-3 h-3 text-[#FF6B35]" />
                        <span className="text-[#FF6B35] text-xs font-medium">{step.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 lg:mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/30 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
            <span className="text-[#FF6B35] font-medium">
              Kaliteli hizmet garantisi ile projelerinizi teslim ediyoruz
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
