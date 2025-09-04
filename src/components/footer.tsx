"use client"

import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin, Clock, ArrowRight, Award } from "lucide-react"
import Image from "next/image"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

const services = [
  "Otel Mobilyaları",
  "Mutfak Tasarımı",
  "Banyo Mobilyaları",
  "Ofis Mobilyaları",
  "Dış Mekan Yapıları",
  "Özel Tasarım Projeler",
]

const quickLinks = [
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Hizmetlerimiz", href: "/hizmetlerimiz" },
  { name: "Projelerimiz", href: "/projeler" },
  { name: "Blog", href: "/blog" },
  { name: "İletişim", href: "/iletişim" },
  { name: "Referanslar", href: "/referanslar" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/fnzwood/", color: "hover:text-blue-500" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fnzwood/", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/fonozbart-ah%C5%9Fap-sanayi/", color: "hover:text-blue-600" },
]

export function Footer() {
  return (
    <footer className={`bg-[#1e1e1f] relative overflow-hidden ${poppins.className}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <Image
                src="/assets/images/fnz-wood-logo-1.png"
                alt="FNZ Ahşap Sanayi Logo"
                width={200}
                height={60}
                className="object-contain h-12 w-auto"
              />
              <p className="text-gray-300 text-sm leading-relaxed">
                1970'den bu yana Türk ahşap işçiliğinin öncüsü olarak, geleneksel ustalık bilgisini modern teknoloji ile
                harmanlayıp, prestijli projelerde imza atıyoruz.
              </p>
            </div>

            {/* Awards Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#8B4513]/10 rounded-lg border border-[#FF6B35]/20">
              <Award className="w-4 h-4 text-[#FF6B35]" />
              <span className="text-[#ee7f1a] text-xs font-medium">50+ Yıl Güvenilir Hizmet</span>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold text-sm">Bizi Takip Edin</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center  p-2 bg-[#2a2a2b] rounded-lg transition-all duration-300 hover:bg-[#FF6B35] ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6 hidden lg:block">
            <h3 className="text-white font-bold text-lg relative">
              Hizmetlerimiz
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FF6B35]"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 hidden lg:block">
            <h3 className="text-white font-bold text-lg relative">
              Hızlı Linkler
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FF6B35]"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg relative ">
              İletişim Bilgileri
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#FF6B35]"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-[#FF6B35]/10 rounded-lg group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm leading-relaxed">
                    Marmaris, Muğla
                    <br />
                    Türkiye
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#FF6B35]/10 rounded-lg group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                    className="text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-sm"
                  >
                    +90 532 333 50 67
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#FF6B35]/10 rounded-lg group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <div>
                  <a
                    href="mailto:fonozbart@hotmail.com"
                    className="text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 text-sm"
                  >
                    fonozbart@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-[#FF6B35]/10 rounded-lg group-hover:bg-[#FF6B35]/20 transition-colors duration-300">
                  <Clock className="w-4 h-4 text-[#FF6B35]" />
                </div>
                <div>
                  <div className="text-gray-300 text-sm ">
                    <div>Pazartesi - Cumartesi: 08:00 - 18:30</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#FF6B35]/20 bg-[#1a1a1b]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 FNZ Ahşap Sanayi. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B4513]/5 to-transparent rounded-full blur-2xl"></div>
    </footer>
  )
}