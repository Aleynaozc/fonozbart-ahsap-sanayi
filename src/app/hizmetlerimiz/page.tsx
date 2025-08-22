"use client"

import Image from "next/image"
import { Poppins } from "next/font/google"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})
const services = [
  {
    title: "Otel Mobilyaları",
    desc: "Marmaris, Bodrum ve çevresindeki oteller için özel üretim mobilya çözümleri.",
    image: "/assets/images/services-section/oda9.jpg",
    icon: "/assets/images/services/hotel-room-icon.png",
  },
  {
    title: "Mutfak Mobilyaları",
    desc: "Fonksiyonel ve modern mutfak dolapları, tezgâh sistemleri.",
    image: "/assets/images/services-section/mutfak.jpg",
    icon: "/assets/images/services/mutfak-icon.png",
  },
  {
    title: "Banyo Mobilyaları",
    desc: "Dayanıklı ve şık banyo dolapları, ayna ve depolama çözümleri.",
    image: "/assets/images/services-section/banyo2.jpg",
    icon: "/assets/images/services/banyo-icon.png",
  },
  {
    title: "Ofis Mobilyaları",
    desc: "Ergonomik masa, depolama ve toplantı odası çözümleri.",
    image: "/assets/images/services-section/ofis4.png",
    icon: "/assets/images/services/office-icon.png",
  },
  {
    title: "Pergola",
    desc: "Ahşap sistemleri, dış mekân gölgelendirme çözümleri.",
    image: "/assets/images/services-section/ahsappergola.jpg",
    icon: "/assets/images/services/pergola-icon.png",
  },
  {
    title: "Ahşap Deck",
    desc: "Havuz kenarı ve teraslar için uzun ömürlü deck kaplama uygulamaları.",
    image: "/assets/images/services-section/deck2.jpg",
    icon: "/assets/images/services/deck-icon.png",
  },
  {
    title: "Kapı",
    desc: "İç ve dış mekânlara özel ölçü kapı üretimi.",
    image: "/assets/images/services-section/kapı3.jpg",
    icon: "/assets/images/services/kapı-icon.png",
  },
  {
    title: "Yangın Kapısı",
    desc: "Sertifikalı ve güvenli yangın kapısı çözümleri.",
    image: "/assets/images/services-section/yangınkapısı.jpg",
    icon: "/assets/images/services/yangın-kapı-icon.png",
  },
];
const blogs = [
  {
    id: 1,
    date: "Apr 15, 2025",
    title: "Renovation of Architecture and Design",
    image: "/assets/images/services-section/ahsappergola.jpg",
  },
  {
    id: 2,
    date: "June 30, 2025",
    title: "Reclaimed World for the Modern",
    image: "/assets/images/services-section/deck2.jpg",
  },
  {
    id: 3,
    date: "Mar 10, 2025",
    title: "Capturing the Essence of Home to Modern",
    image: "/assets/images/services-section/kapı3.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-br from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f]`}>
      {/* Hero Section */}
      <div className="absolute inset-0 opacity-5 ">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <section className="relative pt-40 md:pt-52 lg:pt-60 pb-16 md:pb-20 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl md:max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B35]/10 border border-[#FF6B35]/20 rounded-full text-[#FF6B35] text-sm font-medium mb-6">
              FNZ Ahşap Sanayi – Marmaris & Ege Bölgesi
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Hizmetlerimiz
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              FNZ Ahşap Sanayi, Marmaris merkezli mobilya & dekorasyon firmasıdır.
             Marmaris, Bodrum, Fethiye ve tüm Türkiye’de otel, villa ve yaşam alanları için modern ahşap çözümler üretiyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        id="services"
        className="relative bg-[#1e1e1f] py-16 lg:py-24 overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
              className="group bg-zinc-900 text-white rounded-md overflow-hidden"
            >
              <div className="aspect-[570/334] flex">
                {/* Left: Image + Icon */}
                <div className="relative w-1/2 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-[#ee7f1a] text-white w-20 h-20 p-8 flex items-center justify-center rounded-full text-sm">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">{service.desc}</p>
                  </div>
                  <a
                    href="#"
                    className="text-yellow-500 font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="relative py-20 bg-[#1e1e1f] overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Cpath d='M30 28v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-28V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 28v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#E55A2B]/10 rounded-full border border-[#FF6B35]/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#FF6B35] animate-pulse" />
              <span className="text-[#FF6B35] font-medium text-sm tracking-wider uppercase">Blog & Haberler</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16">
            <span className="text-[#FF6B35]">Son</span> Yazılar
          </h2>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-[#FF6B35]/20 transition-shadow duration-500"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <span className="text-sm text-[#FF6B35]">{blog.date}</span>
                  <h3 className="text-lg md:text-xl font-semibold text-white mt-2 group-hover:text-[#FF6B35] transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-sm text-gray-300 group-hover:text-[#FF6B35] transition-colors duration-300"
                  >
                    Devamını Oku →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative py-24 bg-gradient-to-r from-[#1e1e1f] to-[#1e1e1f] overflow-hidden">
        <div className="absolute inset-0 opacity-5 ">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        {/* Background glow */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,black,transparent_70%)]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Hayalinizdeki Projeyi
            <br />
            <span className=" text-[#FF6B35] px-2 rounded">Birlikte Gerçekleştirelim</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-white/90"
          >
            Marmaris’te otel mobilyaları, mutfak ve özel tasarım ahşap çözümler sunuyoruz.
            Projenizi bizimle hayata geçirin.
          </motion.p>

          <Link
            href="/iletisim"

            className="inline-block bg-white text-[#FF6B35] font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100"
          >
            Bizimle İletişime Geçin
          </Link>
        </div>
      </section>
    </div >
  )
}
