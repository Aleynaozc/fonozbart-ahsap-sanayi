"use client"

import { Footer } from "@/components/footer"
import { Header } from "@/components/navbar/navbar"
import { Calendar, MapPin, Target, Eye, Award, Users, Factory, Truck } from "lucide-react"
import { Poppins } from "next/font/google"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

export default function AboutPage() {
  const milestones = [
    {
      year: "1970",
      title: "Başlangıç",
      description: "Trabzon'un Of ilçesinde mobilya serüvenimiz başladı.",
      icon: Factory,
    },
    {
      year: "1980",
      title: "Gelişim",
      description: "Elde edilen deneyim ve başarı, tecrübeyle birleşerek ürün portföyümüz gelişti.",
      icon: Award,
    },
    {
      year: "2000",
      title: "Ankara Dönemi",
      description: "Yılların getirdiği yenilikler ile üretim Ankara Siteler'de devam etti.",
      icon: Users,
    },
    {
      year: "2005",
      title: "Marmaris'e Taşınma",
      description: "Turizm sektörüne yönelik yatırımlar sonucu Marmaris'te üretim tesisimizi kurduk.",
      icon: Truck,
    },
  ]

  const values = [
    {
      title: "Kalite",
      description: "50+ yıllık tecrübemizle modern ahşap mobilya tasarım ve üretiminde kaliteyi önceliğimiz yapıyoruz.",
      icon: Award,
    },
    {
      title: "Müşteri Memnuniyeti",
      description: "Satış öncesi ve sonrasında tüketici memnuniyetini devam ettiren hizmet anlayışımız.",
      icon: Users,
    },
    {
      title: "Yenilikçilik",
      description: "Gelişen pazar koşullarına paralel yenilikçi yapımız ile AR-GE çalışmalarımızı sürdürüyoruz.",
      icon: Target,
    },
  ]

  return (
    <div className={`${poppins.className} min-h-screen bg-[#1e1e1f]`}>
  

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              1970'den Beri Sektördeyiz
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Hakkımızda
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              50+ yıllık tecrübemizle modern ahşap mobilya tasarım ve üretiminde faaliyetlerimizi sürdüren FNZ Mobilya
              olarak, müşteri memnuniyetini her zaman önceliğimiz yapıyoruz.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B4513]/10 to-transparent rounded-full blur-2xl"></div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-sm font-medium mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  Hikayemiz
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  50+ Yıllık
                  <span className="text-[#FF6B35]"> Deneyim</span>
                </h2>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    1970 yılında Trabzon'un Of ilçesinde başlayan mobilya serüvenimiz, 1980 yılına geldiğinde elde
                    edilen deneyim ve başarı, tecrübeyle birleşerek yılların getirdiği yenilikler ile ürün portföyümüz
                    sürekli olarak gelişti.
                  </p>

                  <p>
                    2000'li yılların ilk yarısına kadar üretimimiz Ankara Siteler'de devam etti. Şirketimizin turizm
                    sektörüne yönelik ürün geliştirme ve faaliyet alanlarına yatırım yapması sonucu, 2005 yılında
                    Muğla'nın Marmaris ilçesinin Değirmenyanı mevkinde bulunan üretim tesisimizde faaliyetlerimizi
                    sürdürmeye başladık.
                  </p>

                  <p>
                    Gelişen ve değişen pazar koşullarına paralel yenilikçi yapımız ile müşteri beklentilerine en etkin
                    şekilde cevap vermek adına hiçbir fedakarlıktan kaçınmıyor, yeni yatırımları ve AR-GE çalışmaları
                    ile sektördeki yerimizi her geçen gün sağlamlaştırıyoruz.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] p-8 rounded-2xl border border-[#FF6B35]/20">
                  <Image
                    src="/modern-furniture-workshop.png"
                    alt="FNZ Mobilya Üretim Tesisi"
                    width={500}
                    height={400}
                    className="w-full h-64 object-cover rounded-xl"
                  />

                  <div className="absolute -top-4 -right-4 bg-[#FF6B35] text-white px-4 py-2 rounded-lg font-bold text-lg">
                    50+ Yıl
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-[#FF6B35]/20 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-[#2a2a2b]/30 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tarihçemiz</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">1970'den günümüze kadar olan gelişim sürecimiz</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] p-6 rounded-xl border border-[#FF6B35]/20 hover:border-[#FF6B35]/40 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#FF6B35]/10 rounded-lg mb-4 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                      <milestone.icon className="w-6 h-6 text-[#FF6B35]" />
                    </div>

                    <div className="text-2xl font-bold text-[#FF6B35] mb-2">{milestone.year}</div>

                    <h3 className="text-lg font-semibold text-white mb-3">{milestone.title}</h3>

                    <p className="text-gray-300 text-sm leading-relaxed">{milestone.description}</p>
                  </div>

                  {/* Connecting line for desktop */}
                  {index < milestones.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF6B35]/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] p-8 rounded-2xl border border-[#FF6B35]/20 relative overflow-hidden group hover:border-[#FF6B35]/40 transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                      <Target className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Firmamızın gelişimine önem vererek müşterilerimizin zevklerine uygun, modern ve profesyonel hizmet
                    sunmak.
                  </p>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B35]/10 to-transparent rounded-full blur-2xl"></div>
              </div>

              {/* Vision */}
              <div className="bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] p-8 rounded-2xl border border-[#FF6B35]/20 relative overflow-hidden group hover:border-[#FF6B35]/40 transition-all duration-300">
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                      <Eye className="w-6 h-6 text-[#FF6B35]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    Öncelik müşteri memnuniyeti olmak üzere; kurumsal ve bireysel gelişime önem veren, çevre ve doğal
                    kaynakların korunması hassasiyetini gözeten, kadrosuyla pazara yenilikçi ürünler sunan ve kalitesi
                    ile dünyada isim sahibi olmayı hedefleyen bir firma olmak.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B4513]/10 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#2a2a2b]/30 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Değerlerimiz</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                FNZ Mobilya olarak bizi öne çıkaran temel değerlerimiz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-[#2a2a2b] to-[#1e1e1f] p-8 rounded-xl border border-[#FF6B35]/20 hover:border-[#FF6B35]/40 transition-all duration-300 hover:transform hover:scale-105 h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#FF6B35]/10 rounded-xl mb-6 group-hover:bg-[#FF6B35]/20 transition-colors duration-300 mx-auto">
                      <value.icon className="w-8 h-8 text-[#FF6B35]" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4 text-center">{value.title}</h3>

                    <p className="text-gray-300 leading-relaxed text-center flex-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
