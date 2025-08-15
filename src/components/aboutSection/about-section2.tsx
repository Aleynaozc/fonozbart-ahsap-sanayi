"use client"

import { CheckCircle, Award, Users, Wrench } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    {
      icon: Award,
      title: "50+ Yıllık Tecrübe",
      description: "Yarım asrı aşkın deneyimimizle sektörde güvenilir bir marka",
    },
    {
      icon: Users,
      title: "Uzman Ekip",
      description: "Alanında uzman usta ve tasarımcılardan oluşan profesyonel ekip",
    },
    {
      icon: Wrench,
      title: "Tam Hizmet",
      description: "Tasarımdan montaja kadar tüm süreçleri yönetiyoruz",
    },
  ]

  return (
    <section id="about" className="bg-[#1e1e1f] relative">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Content */}
        <div className="py-12 px-4 sm:px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="mb-6">
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Hakkımızda</span>
              <div className="w-12 h-1 bg-[#FF6B35] mt-2 mx-auto"></div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Marmaris'te Ahşap Sanayinin
              <span className="text-[#FF6B35]"> Öncüsü</span>
            </h2>

            <p className="text-[#d1d1d1] text-base sm:text-lg mb-8 leading-relaxed">
              FNZ Ahşap Sanayi, Marmaris'in özgün mimarisini ve doğal dokusunu, modern ahşap işçiliği ile buluşturan bir
              mobilya ve dekorasyon firmasıdır.
            </p>

            {/* Mobile Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">500+</div>
                <div className="text-xs sm:text-sm text-[#FF6B35]">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-[#FF6B35]">Yıl</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-xs sm:text-sm text-[#FF6B35]">Memnuniyet</div>
              </div>
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

        {/* Mobile Features */}
        <div className="px-4 sm:px-6 pb-12">
          <div className="max-w-lg mx-auto space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-[#2a2a2b]/50 p-4 rounded-xl border border-[#FF6B35]/10"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-[#FF6B35]" />
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

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2">
        {/* Content - Sol taraf */}
        <div className="py-20 px-4 sm:px-6 lg:px-10 flex flex-col justify-center">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="mb-6">
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Hakkımızda</span>
              <div className="w-12 h-1 bg-[#FF6B35] mt-2"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Marmaris'te Ahşap Sanayinin
              <span className="text-[#FF6B35]"> Öncüsü</span>
            </h2>

            <p className="text-[#d1d1d1] text-lg mb-8 leading-relaxed">
              FNZ Ahşap Sanayi, Marmaris'in özgün mimarisini ve doğal dokusunu, modern ahşap işçiliği ile buluşturan bir
              mobilya ve dekorasyon firmasıdır. Kurulduğu günden bu yana, prestijli projelerde yer almış ve her
              müşterisine özel tasarımlar sunmuştur.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#f4f4f4] mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-[#FF6B35]">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm text-[#FF6B35]">Yıl</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-[#FF6B35]">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Sağ taraf */}
        <div className="relative h-screen lg:h-auto lg:min-h-[700px]">
          <Image
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Ahşap atölye"
            fill
            className="object-cover"
          />

          {/* Desktop Floating Card */}
          <div className="absolute -top-8 -right-8 w-16 h-16 border-2 border-[#FF6B35]/30 rotate-45"></div>
          <div className="absolute bottom-12 -left-10 group">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#8B4513]/20 rounded-2xl blur-xl scale-110 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Main card */}
            <div className="relative bg-gradient-to-br from-black/90 via-[#333333]/90 to-black/80 backdrop-blur-xl border border-[#FF6B35]/20 p-4 rounded-2xl shadow-2xl">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF6B35]/5 via-transparent to-[#8B4513]/5 rounded-2xl"></div>
              <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-[#FF6B35]/40 rounded-tl-2xl"></div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-[#8B4513]/40 rounded-br-2xl"></div>
              <div className="relative flex items-center space-x-6">
                {/* Icon with gradient background */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full blur-sm opacity-75"></div>
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
      </div>
    </section>
  )
}
