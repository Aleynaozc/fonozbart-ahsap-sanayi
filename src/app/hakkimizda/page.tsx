"use client"

import { Calendar, MapPin, Target, Eye } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

export default function AboutPage() {
  return (
    <div
      className={`${poppins.className} min-h-screen bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f]`}
    >
      {/* Hero Section */}
      <section className="relative pt-40 md:pt-52 lg:pt-60 pb-16 md:pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' ... %3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl md:max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              1970'den Beri Sektörde
            </div>

            {/* H1 SEO düzenlemesi */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl md:max-w-3xl mx-auto">
              FNZ Ahşap Sanayi, Marmaris merkezli modern ve yenilikçi bir mobilya dekorasyon firmasıdır. 
              50+ yıllık tecrübemizle otel mobilyaları, villa projeleri, mutfak ve banyo mobilyaları ile 
              Marmaris,Bodrum, Fethiye ve Türkiye genelinde profesyonel çözümler sunmaktayız.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 md:top-20 right-0 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-tr from-[#8B4513]/10 to-transparent rounded-full blur-2xl"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-8 md:py-10 relative">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' ... %3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Hikayemiz
                </div>

                {/* H2 SEO düzenlemesi */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#FF6B35] font-bold mb-4 sm:mb-6">
                  FNZ <span className="text-white">Ahşap Sanayi’nin Hikayesi</span>
                </h2>

                <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    1970 yılında Trabzon'un Of ilçesinde başlayan mobilya yolculuğumuz, 
                    1980’lerde Ankara Siteler’de büyüyerek devam etti. 2005 yılında Marmaris’te 
                    kurulan FNZ Ahşap Sanayi, otel ve villa projelerine yönelik üretim kapasitesini artırdı.
                  </p>
                  <p>
                    Bugün FNZ Wood, Marmaris merkezli üretim tesislerinde; 
                    <strong> otel mobilyaları, villa dekorasyonları, mutfak ve banyo mobilyaları, 
                    pergola ve deck üretimi</strong> gibi birçok alanda hizmet vermektedir. 
                    Ayrıca fason üretim desteği (ebatlama, bantlama, minifix) ile sektördeki projelere çözüm ortaklığı sunmaktadır.
                  </p>
                  <p>
                    Bölgedeki oteller, villalar, beach club’lar ve özel yaşam alanları için modern & şık tasarımlar 
                    geliştiren FNZ Ahşap Sanayi; kaliteli malzeme, profesyonel işçilik ve proje bazlı üretim deneyimi ile 
                    Türkiye genelinde güvenilir bir marka haline gelmiştir.
                  </p>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f]  rounded-2xl border border-[#FF6B35]/20">
                  <Image
                    src="/assets/images/fnz-wood-about.jpg"
                    alt="FNZ Ahşap Sanayi Üretim Tesisi - Marmaris"
                    width={500}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-xl"
                  />

                  <div className="absolute -top-3 right-2 bg-[#FF6B35] text-white px-2 py-0.5 sm:py-1 rounded-md font-bold text-xs sm:text-sm md:text-base">
                    FNZ
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tr from-[#FF6B35]/20 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-[#FF6B35]/20 mb-8 md:mb-20">
              <div className="grid gap-6 md:grid-cols-2 md:gap-8">
                <div>
                  <div className="flex items-center mb-3 md:mb-4">
                    <Target className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF6B35] mr-2 sm:mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">Misyonumuz</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Müşterilerimizin zevklerine ve projelerine özel, modern, dayanıklı ve estetik 
                    mobilya çözümleri sunmak; otel ve villa projelerinde profesyonel hizmet sağlamak.
                  </p>
                </div>

                <div>
                  <div className="flex items-center mb-3 md:mb-4">
                    <Eye className="w-4 sm:w-5 h-4 sm:h-5 text-[#FF6B35] mr-2 sm:mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">Vizyonumuz</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Marmaris’ten dünyaya açılan FNZ Ahşap Sanayi olarak, çevreye duyarlı, 
                    yenilikçi ve yüksek kaliteli mobilya tasarımlarıyla global ölçekte tanınan bir marka olmak.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps + SEO Footer Text */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-[#FF6B35]/20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.3989397538653!2d28.1428904!3d36.8329206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfb9542100a983%3A0x897c830fcb7a8d3!2sFNZ%20Ah%C5%9Fap%20Sanayi!5e0!3m2!1str!2str!4v1755696862202!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* SEO Footer Text */}
            <p className="mt-6 text-center text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
              FNZ Ahşap Sanayi – Marmaris merkezli ahşap mobilya ve dekorasyon firması. 
             Marmaris, Bodrum, Fethiye ve Türkiye genelinde otel mobilyaları, villa dekorasyonu, pergola 
              ve deck üretiminde uzman kadro. 
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
