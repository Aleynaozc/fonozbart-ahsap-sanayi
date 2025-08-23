"use client"

import { ArrowRight, Phone, Mail,  Award, Users, Shield, Target, Zap, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
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
    <section
      ref={sectionRef}
      className={`relative bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] py-16 lg:py-24 overflow-hidden ${poppins.className}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Decorative Elements */}
      <div
        className={`absolute top-20 left-20 w-16 h-16 border-2 border-[#FF6B35]/20 rotate-45 transition-all duration-2000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <div
        className={`absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-r from-[#FF6B35]/20 to-[#8B4513]/20 rounded-full transition-all duration-2000 delay-500 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
              className={`transition-all duration-1200 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                Hayalinizdeki Projeyi
                <br />
                <span className="text-[#FF6B35]">Birlikte Gerçekleştirelim</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Türkiye'nin dört bir yanında gerçekleştirdiğimiz başarılı projelerle, ahşap mobilya ve dekorasyon alanında güvenilir çözüm ortağınızız. Ücretsiz keşif hizmeti ile projenizi değerlendiriyoruz.
              </p>
            </div>

            {/* Contact Actions */}
            <div
              className={`space-y-4 transition-all duration-1000 delay-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] text-white px-8 py-4 text-lg font-semibold transition-all duration-300  shadow-lg hover:shadow-2xl group"
                >
                  <Phone className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                   <a
                    target="_blank"
                    rel="noopener noreferrer"
                     href={`tel: +90 532 333 50 67`}

                  >
                  Hemen Arayın
                  </a>
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>

              {/* Quick Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#FF6B35]/20">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="p-2 bg-[#FF6B35]/10 rounded-lg">
                    <Phone className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Telefon</div>
                    <div className="font-medium"> <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                   
                  >
                    +90 532 333 50 67
                  </a></div>
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
            <div
              className={`text-center lg:text-left mb-8 transition-all duration-1000 delay-800 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Neden FNZ Ahşap Sanayi?</h3>
              <p className="text-gray-300">Sektördeki başarımızın arkasındaki güçlü değerler</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`group relative p-6 bg-gradient-to-br from-[#2a2a2b]/50 to-[#1e1e1f]/50 rounded-xl border border-[#FF6B35]/10 transition-all duration-700 hover:border-[#FF6B35]/30 hover:bg-gradient-to-br hover:from-[#FF6B35]/5 hover:to-[#8B4513]/5 cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  onMouseEnter={() => setHoveredBenefit(index)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  {/* Hover Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-[#8B4513]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                        hoveredBenefit === index
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#8B4513] scale-110"
                          : "bg-[#FF6B35]/10"
                      }`}
                    >
                      <benefit.icon
                        className={`w-6 h-6 transition-all duration-500 ${
                          hoveredBenefit === index ? "text-white scale-110" : "text-[#FF6B35]"
                        }`}
                      />
                    </div>

                    <h4
                      className={`font-semibold text-white mb-2 transition-all duration-300 ${
                        hoveredBenefit === index ? "translate-x-2" : ""
                      }`}
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className={`text-gray-300 text-sm transition-all duration-300 ${
                        hoveredBenefit === index ? "translate-x-2" : ""
                      }`}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div
                    className={`absolute top-0 right-0 w-8 h-8 transition-all duration-500 ${
                      hoveredBenefit === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute top-2 right-2 w-4 h-0.5 bg-[#FF6B35]"></div>
                    <div className="absolute top-2 right-2 w-0.5 h-4 bg-[#FF6B35]"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Stats */}
            <div
              className={`grid grid-cols-3 gap-4 pt-8 border-t border-[#FF6B35]/20 transition-all duration-1000 delay-1200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6B35] mb-1">750+</div>
                <div className="text-gray-300 text-sm">Tamamlanan Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6B35] mb-1">25+</div>
                <div className="text-gray-300 text-sm">Şehirde Hizmet</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#FF6B35] mb-1">100%</div>
                <div className="text-gray-300 text-sm">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
