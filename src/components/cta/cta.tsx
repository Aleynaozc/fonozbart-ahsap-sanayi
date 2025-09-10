"use client"

import { ArrowRight, Phone, Mail, Award, Users, Shield, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const benefits = [
  {
    icon: Shield,
    title: "Güvenilir Hizmet",
    description: "Her aşamada şeffaf, dürüst ve kaliteli hizmet anlayışı",
  },
  {
    icon: Target,
    title: "Özel Tasarım",
    description: "Her projeye özel konsept ve tasarım çözümleri",
  },
  {
    icon: Zap,
    title: "Hızlı Teslimat",
    description: "Planlanan sürede eksiksiz proje teslimi",
  },
  {
    icon: Users,
    title: "Profesyonel Ekip",
    description: "Deneyimli ustalarla kusursuz uygulama",
  },
]

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`relative bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] py-16 sm:py-20 lg:py-24 overflow-hidden ${poppins.className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#8B4513]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
                <Award className="w-4 h-4 text-[#FF6B35] animate-pulse" />
                <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">
                  Projenizi Hayata Geçirin
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div
              className={`transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              {/* Büyük ekran başlık */}
              <h2 className="hidden sm:block text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                Hayalinizdeki Projeyi
                <br />
                <span className="text-[#FF6B35]">Birlikte Gerçekleştirelim</span>
              </h2>
              <p className="hidden sm:block text-gray-300 text-lg leading-relaxed max-w-xl">
                Türkiye&apos;nin dört bir yanında gerçekleştirdiğimiz başarılı projelerle, ahşap mobilya ve dekorasyon alanında güvenilir çözüm ortağınızız. Ücretsiz keşif hizmeti ile projenizi değerlendiriyoruz.
              </p>

              {/* Mobil başlık */}
              <h2 className="sm:hidden text-xl font-bold text-white leading-snug mb-3">
                Hayalinizdeki Projeyi <br />
                <span className="text-[#FF6B35]">Gerçekleştirelim</span>
              </h2>
              <p className="sm:hidden text-gray-300 text-sm leading-relaxed">
                Ücretsiz keşif ile projenizi değerlendiriyoruz.
              </p>
            </div>

            {/* Contact Actions */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="flex justify-center sm:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] 
               hover:from-[#E55A2B] hover:to-[#FF6B35] 
               text-white px-4 py-2 sm:px-8 sm:py-4 
               text-sm sm:text-lg font-semibold 
               transition-all duration-300 shadow-lg hover:shadow-2xl 
               flex items-center justify-center space-x-1 sm:space-x-2"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span>Hemen Arayın</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#FF6B35]/20 text-sm sm:text-base">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-[#FF6B35]/10 rounded-lg">
                    <Phone className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Telefon</div>
                    <div className="font-medium">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                      >
                        +90 532 333 50 67
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-[#FF6B35]/10 rounded-lg">
                    <Mail className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">E-posta</div>
                    <div className="font-medium">fonozbart@hotmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Benefits Grid */}
          <div className="space-y-6">
            {/* Başlık */}
            <div
              className={`text-center lg:text-left mb-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Neden FNZ Ahşap Sanayi?</h3>
              <p className="text-gray-300 hidden sm:block">Sektördeki başarımızın arkasındaki güçlü değerler</p>
              <p className="text-gray-300 sm:hidden text-sm">Güçlü değerlerimizle güvenilir hizmet</p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl border border-[#FF6B35]/10 transition-all duration-700 hover:border-[#FF6B35]/30 hover:bg-gradient-to-br hover:from-[#FF6B35]/5 hover:to-[#8B4513]/5 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#8B4513]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />
                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${hoveredBenefit === index ? "bg-gradient-to-r from-[#FF6B35] to-[#8B4513] scale-110" : "bg-[#FF6B35]/10"
                        }`}
                    >
                      <benefit.icon
                        className={`w-6 h-6 transition-all duration-500 ${hoveredBenefit === index ? "text-white scale-110" : "text-[#FF6B35]"
                          }`}
                      />
                    </div>
                    <h4
                      className={`font-semibold text-white mb-2 transition-all duration-300 ${hoveredBenefit === index ? "translate-x-2" : ""
                        } text-sm sm:text-base`}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className={`text-gray-300 text-xs sm:text-sm transition-all duration-300 ${hoveredBenefit === index ? "translate-x-2" : ""
                        }`}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div
              className={`grid grid-cols-3 gap-4 pt-8 border-t border-[#FF6B35]/20 transition-all duration-1000 delay-1200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } text-xs sm:text-sm`}
            >
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-[#FF6B35] mb-1">750+</div>
                <div className="text-gray-300">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-[#FF6B35] mb-1">25+</div>
                <div className="text-gray-300">Şehirde Hizmet</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-bold text-[#FF6B35] mb-1">100%</div>
                <div className="text-gray-300">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
