"use client"

import { Rubik } from "next/font/google"
import { Facebook, Instagram, Twitter, Mail, MapPin, ArrowUp } from "lucide-react"
import Image from "next/image"
import { LuPhoneCall } from "react-icons/lu"
import { CiLocationOn, CiMail } from "react-icons/ci"

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-rubik',
})

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-[#333333] text-white ">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto pt-[112px] pb-[91px] px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Image
                src="/assets/images/footer-logo.png"
                alt="FNZ Mobilya Logo"
                width={2300}
                height={70}
                className="object-contain mx-4"
              />
            </div>
            <p className={`${rubik.className} text-md text-[#c1b8b3] mb-6 leading-relaxed`}>
              Müşterilerimizin hayallerini gerçeğe dönüştürmek ve sektörde yeni standartlar oluşturmak için tutkuyla çalışıyoruz.
            </p>

            {/* Social Media */}
            <div className="flex space-x-3">
              <div className="hidden xl:flex items-center space-x-3 mx-4">
              <div className="relative bg-[#2f2a27] rounded-full p-2 cursor-pointer group overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-full"></div>
                <Facebook className="w-5 h-5 text-white group-hover:text-[#2f2a27] transition-colors duration-700 relative z-10" />
              </div>
              <div className="relative bg-[#2f2a27] rounded-full p-2 cursor-pointer group overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-full"></div>
                <Instagram className="w-5 h-5 text-white group-hover:text-[#2f2a27] transition-colors duration-700 relative z-10" />
              </div>
            </div>
            </div>
          </div>

          {/* Explore */}
          <div className="relative block ml-[70px]">
            <h3 className="relative inline-block text-[20px] text-white font-bold leading-[30px] mb-[5px]">
              Hızlı Linkler
            </h3>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            </div>
            <ul className="space-y-3 relative block pl-0 list-none">
              {["Hakkımızda", "Hizmetlerimiz", "Projelerimiz", "Referanslar", "İletişim", "Blog"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`${rubik.className} font-normal leading-[30px] relative inline-block text-[16px] text-[#c1b8b3] transition-all duration-500 ease-in-out hover:text-white transition-colors duration-300 flex items-center`}
                  >
                    <span className="mr-2">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="relative block">
            <h3 className="relative inline-block text-[20px] text-white font-bold leading-[30px] mb-[5px]">
              Hizmetlerimiz
            </h3>
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
                      className={`${rubik.className} font-normal leading-[30px] relative inline-block text-[16px] text-[#c1b8b3] transition-all duration-500 ease-in-out hover:text-white transition-colors duration-300 flex items-center`}
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
          <div className="relative block">
            <h3 className="relative inline-block text-[20px] text-white font-bold leading-[30px] mb-[5px]">
              İletişim
            </h3>
            <div className="flex items-center mb-6">
              <div className="w-8 h-0.5 bg-[#D4A574]"></div>
              <div className="w-1 h-1 bg-white rounded-full ml-1"></div>
            </div>
            <ul className="relative block mt-[9px] list-none">
              <li className="flex border-b border-white/10 mb-[20px] pb-[9px]">
                <div className=" h-[40px] w-[40px] bg-[#2f2a27] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out">
                  <span className="icon-phone-call text-[22px] text-[#a47c68] relative inline-block font-icomoon">
                    <LuPhoneCall />
                  </span>
                </div>
                <div className="text ml-[15px] relative top-[-1px]">
                  <h5 className="text-[14px] text-[#c1b8b3] font-normal leading-[14px]">Telefon </h5>
                  <p className="text-[16px] font-medium text-white pt-[4px]">
                    <a href="tel:980009630">+90 532 333 50 67</a>
                  </p>
                </div>
              </li>

              <li className="flex border-b border-white/10 mb-[20px] pb-[9px]">
                <div className="icon h-[40px] w-[40px] bg-[#2f2a27] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out">
                  <span className="icon-message text-[22px] text-[#a47c68] relative inline-block font-icomoon">
                  <CiMail /> 
                  </span>
                </div>
                <div className="text ml-[15px] relative top-[-1px]">
                  <h5 className="text-[14px] text-[#c1b8b3] font-normal leading-[14px]">E-Mail</h5>
                  <p className="text-[16px] font-medium text-white pt-[4px]">
                    <a href="mailto:ambed@company.com">fonozbart@hotmail.com</a>
                  </p>
                </div>
              </li>

              <li className="flex  border-white/10 mb-[20px] pb-[9px]">
                <div className="icon h-[40px] w-[40px] bg-[#2f2a27] rounded-full flex items-center justify-center transition-all duration-500 ease-in-out">
                  <span className="icon-location text-[22px] text-[#a47c68] relative inline-block font-icomoon">
                    <CiLocationOn />
                  </span>
                </div>
                <div className="text ml-[15px] relative top-[-1px]">
                  <h5 className="text-[14px] text-[#c1b8b3] font-normal leading-[14px]">Adres</h5>
                  <p className="text-[16px] font-medium text-white pt-[4px]">Marmaris, Muğla</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#231f1e] py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
          <p className={`${rubik.className} text-sm text-gray-400`}>
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
