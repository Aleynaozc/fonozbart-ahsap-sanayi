"use client"

import { Search, Palette, Cog, Wrench, ArrowRight, Clock, Play, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const processSteps = [
  { id: 1, icon: Search, title: "İhtiyaç Analizi ve Keşif", duration: "1-2 Gün", description: "Müşterimizin taleplerini dinliyor, proje alanında ölçüm ve keşif yapıyor, malzeme ve tasarım seçeneklerini birlikte değerlendiriyoruz." },
  { id: 2, icon: Palette, title: "Tasarım ve Onay", duration: "3-5 Gün", description: "Projeyi 3D tasarıma dönüştürüyor, renk, malzeme ve detay onayını alıyor, gerekirse numune sunuyoruz." },
  { id: 3, icon: Cog, title: "Üretim", duration: "1-4 Hafta", description: "Modern makine parkurumuzda kaliteli malzemelerle üretim gerçekleştiriyor, CNC kesim, bantlama ve montaj işlemlerini hassasiyetle yapıyoruz." },
  { id: 4, icon: Wrench, title: "Montaj ve Teslimat", duration: "1-3 Gün", description: "Uzman ekibimiz projeyi yerinde montajlıyor, kalite kontrol yapıyor ve anahtar teslim eksiksiz şekilde teslim ediyoruz." },
]

export default function ProductionProcessSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleStepClick = (index: number) => {
    setActiveStep(activeStep === index ? null : index)
  }

  return (
    <section ref={sectionRef} className={`relative bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] py-16 sm:py-20 lg:py-24 overflow-hidden ${poppins.className}`}>
      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black bg-opacity-90 p-4 lg:p-0">
          <div className="relative w-full h-full max-w-6xl max-h-full lg:max-h-[90vh] mx-auto">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 z-50 text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-800/70 transition cursor-pointer">
              <X className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
            <video
              className="w-full h-full lg:h-[90vh] object-contain rounded-md"
              src="assets/images/fnz-wood-uretim.mp4"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 mb-4 lg:mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <Cog className="w-4 h-4 text-[#FF6B35] animate-spin" style={{ animationDuration: "3s" }} />
            <span className="text-[#FF6B35] font-medium text-xs sm:text-sm md:text-base tracking-wider uppercase">Üretim Sürecimiz</span>
          </div>

          <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 text-white leading-tight transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <span className="text-[#FF6B35]">Profesyonel</span> Yaklaşımımızla
            <br />
            <span className="text-white">Projelerinizi Hayata Geçiriyoruz</span>
          </h2>

          <p className={`text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Kaliteli hizmet anlayışımız ve deneyimli ekibimizle her aşamada size rehberlik ediyoruz
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon
            const isActive = activeStep === index
            return (
              <div
                key={step.id}
                className={`relative flex flex-col transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} cursor-pointer`}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => handleStepClick(index)}
              >
                {/* Step Circle */}
                <div className="relative z-10 flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? "bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] scale-110 shadow-lg shadow-[#FF6B35]/30" : "bg-[#2a2a2b] border-2 border-[#FF6B35]/30"}`}>
                    <span className={`font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 ${isActive ? "text-white" : "text-[#FF6B35]"}`}>{step.id}</span>
                  </div>

                  {index < processSteps.length - 1 && (
                    <>
                      <ArrowRight className={`hidden lg:block absolute -right-10 md:-right-12 top-1/2 transform -translate-y-1/2 w-5 sm:w-6 h-5 sm:h-6 text-[#FF6B35] transition-all duration-500 ${isActive ? "scale-125 text-[#E55A2B]" : ""}`} />
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-12 sm:h-16 bg-gradient-to-b from-[#FF6B35] to-[#FF6B35]/30 lg:hidden"></div>
                    </>
                  )}
                </div>

                {/* Step Content */}
                <div className={`flex-1 flex flex-col items-center p-4 sm:p-5 md:p-6 rounded-xl border transition-all duration-500 ${isActive ? "border-[#FF6B35]/50 bg-gradient-to-br from-[#FF6B35]/5 to-[#E55A2B]/5 shadow-xl shadow-[#FF6B35]/10 -translate-y-2" : "border-[#FF6B35]/20 bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50"}`}>
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4 transition-all duration-500 ${isActive ? "bg-gradient-to-r from-[#FF6B35] to-[#E55A2B]" : "bg-[#FF6B35]/10"}`}>
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-500 ${isActive ? "text-white" : "text-[#FF6B35]"}`} />
                  </div>

                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="inline-flex items-center space-x-1 px-2 sm:px-3 py-1 bg-[#FF6B35]/10 rounded-full border border-[#FF6B35]/20 text-xs sm:text-sm md:text-base">
                      <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#FF6B35]" />
                      <span className="text-[#FF6B35] font-medium">{step.duration}</span>
                    </div>
                  </div>

                  <h3 className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-center transition-colors duration-300 ${isActive ? "text-[#FF6B35]" : "text-white"}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base text-center">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <button onClick={() => setIsOpen(true)} className="group inline-flex items-center space-x-2 sm:space-x-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-5 border-2 border-[#FF6B35] text-[#FF6B35] rounded-full hover:bg-[#FF6B35] hover:text-white transition-all duration-300 text-sm sm:text-base md:text-lg">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6" />
            <span>Süreci Keşfet</span>
          </button>
        </div>
      </div>
    </section>
  )
}
