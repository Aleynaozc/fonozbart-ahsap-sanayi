"use client"

import { Cairo } from "next/font/google"
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, ArrowUp } from "lucide-react"
import Image from "next/image"

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#2b2624] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/assets/images/footer-logo.png"
                alt="FNZ Mobilya Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <p className={`${cairo.className} text-sm text-gray-300 mb-6 leading-relaxed`}>
              Müşterilerimizin hayallerini gerçeğe dönüştürmek ve sektörde yeni standartlar oluşturmak için tutkuyla çalışıyoruz.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              {[Twitter, Facebook, Instagram].map((Icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-black hover:bg-[#D4A574] transition-colors duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-bold mb-2">Hızlı Linkler</h3>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            </div>
            <ul className="space-y-3">
              {["Hakkımızda", "Hizmetlerimiz", "Projelerimiz", "Referanslar", "İletişim"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`${cairo.className} text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center`}
                  >
                    <span className="mr-2">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-2">Hizmetlerimiz</h3>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            </div>
            <ul className="space-y-3">
              {["Otel Odası Mobilyaları", "Modern Mutfak Tasarımı", "Ahşap Deck Uygulaması", " Pergola & Bahçe Mobilyası", "Kapı & Yangın Kapısı", "Banyo Dolap Tasarımları"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className={`${cairo.className} text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center`}
                    >
                      <span className="mr-2">›</span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-2">İletişim</h3>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            </div>
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="bg-black p-2 rounded-full">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className={`${cairo.className} text-xs text-gray-400`}>Hemen arayın</p>
                  <a
                    href="tel:+905323335067"
                    className="text-sm font-medium"
                  >
                    +90 532 333 50 67
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-black p-2 rounded-full">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className={`${cairo.className} text-xs text-gray-400`}>Mail</p>
                  <p className="text-sm font-medium">fonozbart@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-black p-2 rounded-full">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className={`${cairo.className} text-xs text-gray-400`}>Adres</p>
                  <p className="text-sm font-medium">Marmaris, Muğla, Türkiye</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#231f1e] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className={`${cairo.className} text-sm text-gray-400`}>
            © Copyright 2025 by FNZ Mobilya Template
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 bg-[#D4A574] hover:bg-[#C19A68] rounded-full p-2 transition-all duration-300 hover:scale-110"
            aria-label="Yukarı çık"
          >
            <ArrowUp className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  )
}
