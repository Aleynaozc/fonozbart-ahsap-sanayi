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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Hakkımızda</span>
              <div className="w-12 h-1 bg-[#FF6B35] mt-2"></div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#8B4513] mb-6 leading-tight">
              Marmaris'te Ahşap Sanayinin
              <span className="text-[#FF6B35]"> Öncüsü</span>
            </h2>

            <p className="text-[#5D4037] text-lg mb-8 leading-relaxed">
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
                    <h3 className="font-semibold text-[#8B4513] mb-2">{feature.title}</h3>
                    <p className="text-[#5D4037]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B4513]">500+</div>
                <div className="text-sm text-[#5D4037]">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B4513]">50+</div>
                <div className="text-sm text-[#5D4037]">Yıl</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#8B4513]">100%</div>
                <div className="text-sm text-[#5D4037]">Memnuniyet</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Ahşap atölye"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-2xl border border-[#8B4513]/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#8B4513]">Kalite Garantisi</div>
                  <div className="text-sm text-[#5D4037]">Her projede mükemmellik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
