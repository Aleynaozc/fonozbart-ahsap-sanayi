"use client"

import { CheckCircle, Award, Users, Wrench, Sparkles, Zap, Target } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: Award,
      title: "50+ Yıllık Tecrübe",
      description: "Yarım asrı aşkın deneyimimizle sektörde güvenilir bir marka",
      color: "from-amber-500 to-orange-500",
      particles: 8,
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Alanında uzman usta ve tasarımcılardan oluşan profesyonel ekip",
      color: "from-brown-500 to-yellow-500",
      particles: 6,
    },
    {
      icon: Wrench,
      title: "Tam Hizmet",
      description: "Tasarımdan montaja kadar tüm süreçleri yönetiyoruz",
      color: "from-green-500 to-emerald-500",
      particles: 7,
    },
  ]

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

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section ref={sectionRef} id="about" className="bg-[#1e1e1f] relative h-screen overflow-hidden">
      {/* Animated Background with Floating Particles */}
      <div className="absolute inset-0">
        {/* Main background pattern */}
        <div
          className={`absolute inset-0 opacity-5 transition-all duration-3000 ${isVisible ? "scale-100 rotate-0" : "scale-110 rotate-3"
            }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#FF6B35]/70 rotate-45 z-50"></div> */}
        {/* Floating particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-[#FF6B35] rounded-full opacity-20 transition-all duration-2000 ${isVisible ? "animate-float" : "opacity-0"
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Morphing decorative elements */}
      <div
        className={`absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#FF6B35]/70 transition-all duration-2000 ${isVisible ? "rotate-45 scale-100 opacity-100" : "rotate-0 scale-50 opacity-0"
          }`}
        style={{
          borderRadius: isVisible ? "12px" : "50%",
          transform: `rotate(45deg) scale(${isVisible ? 1 : 0.5}) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
        }}
      />

      <div
        className={`absolute top-20 right-20 w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] transition-all duration-2000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        style={{
          borderRadius: isVisible ? "50%" : "0%",
          transform: `scale(${isVisible ? 1 : 0}) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
        }}
      />

      <div ref={containerRef} className="relative h-full">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 h-full">
          {/* Content - Sol taraf */}
          <div className="py-20 px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
            <div className="max-w-3xl mx-auto lg:mx-0">
              {/* Animated badge */}
              <div
                className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-[#FF6B35] animate-pulse" />
                  <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Hakkımızda</span>
                </div>
              </div>

              {/* Morphing title */}
              <h2
                className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
              >
                <span className="relative inline-block">
                  <span className="text-[#FF6B35] relative z-10">50 YILIN</span>

                </span>
                <br />
                <span
                  className={`text-white transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                >
                  ÜZERİNDE TECRÜBE
                </span>
              </h2>

              {/* Animated description */}
              <p
                className={`text-[#d1d1d1] text-lg mb-8 leading-relaxed transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                FNZ Ahşap Sanayi, Marmaris'in özgün mimarisini ve doğal dokusunu, modern ahşap işçiliği ile buluşturan
                bir mobilya ve dekorasyon firmasıdır. Kurulduğu günden bu yana, prestijli projelerde yer almış ve her
                müşterisine özel tasarımlar sunmuştur.
              </p>

              {/* Interactive features */}
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`group relative flex items-start space-x-4 p-4 rounded-xl transition-all duration-700 cursor-pointer ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
                      } ${hoveredFeature === index
                        ? "bg-gradient-to-r from-[#FF6B35]/10 to-transparent border border-[#FF6B35]/20"
                        : "hover:bg-[#2a2a2b]/30"
                      }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Animated particles on hover */}
                    {hoveredFeature === index && (
                      <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: feature.particles }).map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${feature.color} rounded-full animate-ping`}
                            style={{
                              left: `${Math.random() * 100}%`,
                              top: `${Math.random() * 100}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    )}

                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${hoveredFeature === index
                          ? `bg-gradient-to-r ${feature.color} shadow-lg scale-110`
                          : "bg-[#FF6B35]/10"
                        }`}
                    >
                      <feature.icon
                        className={`w-6 h-6 transition-all duration-500 ${hoveredFeature === index ? "text-white scale-110" : "text-[#FF6B35]"
                          }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`font-semibold mb-2 transition-all duration-300 ${hoveredFeature === index ? "text-white translate-x-2" : "text-[#f4f4f4]"
                          }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-gray-300 transition-all duration-300 ${hoveredFeature === index ? "translate-x-2" : ""
                          }`}
                      >
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${hoveredFeature === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                        }`}
                    >
                      <Zap className="w-4 h-4 text-[#FF6B35]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Animated stats */}
              <div
                className={`flex items-center space-x-8 transition-all duration-1000 delay-1600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                {[
                  { value: "500+", label: "Proje", icon: Target },
                  { value: "50+", label: "Yıl", icon: Award },
                  { value: "100%", label: "Memnuniyet", icon: CheckCircle },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`group text-center p-4 rounded-xl transition-all duration-500 hover:bg-[#2a2a2b]/30 cursor-pointer ${isVisible ? "scale-100" : "scale-90"
                      }`}
                    style={{ transitionDelay: `${1800 + index * 100}ms` }}
                  >
                    <div className="relative mb-2">
                      <div className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                        {stat.value}
                      </div>
                      <stat.icon className="absolute -top-1 -right-1 w-3 h-3 text-[#FF6B35] opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                    <div className="text-sm text-[#FF6B35] group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Image - Sağ taraf */}
          <div className="relative h-screen  lg:min-h-[700px]">
            <Image
              src="/assets/images/about-sections/about2.png"
              alt="Ahşap atölye"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 sm:from-black/60 sm:via-black/40 sm:to-transparent"></div>
            {/* Desktop Floating Card */}
            <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#FF6B35]/30 rotate-45"></div>

            <div className="absolute bottom-12 -left-10 group">
              {/* Glow effect */}
              <div className=""></div>
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-black/90 via-[#fffff]/90 to-black/80 backdrop-blur-xl border border-[#FF6B35]/20 p-4 rounded-2xl shadow-2xl">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF6B35]/5 to-[#8B4513]/5 rounded-2xl"></div>

                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-[#FF6B35]/40 rounded-tl-2xl"></div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-[#8B4513]/40 rounded-br-2xl"></div>
                <div className="relative flex items-center space-x-6">
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className="relative w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-xl text-white mb-1 tracking-wide">Kalite Garantisi</div>
                    <div className="text-gray-300 text-sm leading-relaxed">Her projede mükemmellik</div>
                    <div className="w-5 h-0.5 bg-gradient-to-r from-[#FF6B35] to-transparent mt-2"></div>
                  </div>
                </div>
                {/* Subtle animation indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="relative h-64 sm:h-80 mx-4 sm:mx-6 mb-8">
            <Image
              src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Ahşap atölye"
              fill
              className="object-cover rounded-2xl"
            />

            {/* Mobile Floating Card */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-gradient-to-br from-black/90 via-[#333333]/90 to-black/80 backdrop-blur-xl border border-[#FF6B35]/20 p-4 rounded-xl shadow-2xl">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full blur-sm opacity-75"></div>
                    <div className="relative w-8 h-8 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-4 h-4 text-white drop-shadow-sm" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-white mb-1">Kalite Garantisi</div>
                    <div className="text-gray-300 text-sm">Her projede mükemmellik</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout with enhanced animations */}
        <div className="lg:hidden py-12 px-4 sm:px-6">
          <div className="max-w-lg mx-auto text-center">
            {/* Mobile badge */}
            <div
              className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#FF6B35] animate-pulse" />
                <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Hakkımızda</span>
              </div>
            </div>

            {/* Mobile title */}
            <h2
              className={`text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight transition-all duration-1200 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              Marmaris'te Ahşap Sanayinin
              <span className="text-[#FF6B35] block mt-2">Öncüsü</span>
            </h2>

            {/* Mobile description */}
            <p
              className={`text-[#d1d1d1] text-base sm:text-lg mb-8 leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              FNZ Ahşap Sanayi, Marmaris'in özgün mimarisini ve doğal dokusunu, modern ahşap işçiliği ile buluşturan bir
              mobilya ve dekorasyon firmasıdır.
            </p>

            {/* Mobile stats */}
            <div
              className={`grid grid-cols-3 gap-4 mb-8 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              {[
                { value: "500+", label: "Proje" },
                { value: "50+", label: "Yıl" },
                { value: "100%", label: "Memnuniyet" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-3 rounded-xl bg-[#2a2a2b]/30 border border-[#FF6B35]/10 transition-all duration-500 hover:bg-[#FF6B35]/10 ${isVisible ? "scale-100" : "scale-90"
                    }`}
                  style={{ transitionDelay: `${1000 + index * 100}ms` }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-[#FF6B35]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Mobile features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 bg-[#2a2a2b]/50 p-4 rounded-xl border border-[#FF6B35]/10 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                  style={{ transitionDelay: `${1200 + index * 200}ms` }}
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#f4f4f4] mb-1 text-sm sm:text-base">{feature.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
