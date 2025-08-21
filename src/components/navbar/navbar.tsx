"use client"
import { Facebook, Instagram, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Poppins } from "next/font/google"
import { PiPhoneCall } from "react-icons/pi"
import { useLoading } from "@/hooks/use-loading"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
})

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [clickedMenu, setClickedMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const { startPageTransition, isLoading } = useLoading()
  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/" },
    { name: "About", label: "HAKKIMIZDA", path: "/hakkimizda" },
    { name: "Services", label: "HİZMETLERİMİZ", path: "/hizmetlerimiz" },
    { name: "Project", label: "PROJELERİMİZ", path: "/projeler" },
    { name: "Blog", label: "BLOG", path: "/blog" },
    { name: "Contact", label: "İLETİŞİM", path: "/iletişim" },
    { name: "Referance", label: "REFERANSLARIMIZ", path: "/referanslar" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/fnzwood/", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fnzwood/", color: "hover:text-pink-500" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  useEffect(() => {
    const currentItem = menuItems.find((item) => item.path === pathname)
    if (currentItem) {
      setActiveMenu(currentItem.name)
    }
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

 const handleMenuClick = (menuName: string, path: string) => {
  setClickedMenu(menuName)
  setIsMobileMenuOpen(false)
  router.push(path) // sadece yönlendirme
  setTimeout(() => setClickedMenu(null), 600)
}

  return (
    <header
      className={`${poppins.className} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-[#1e1e1f]/95 backdrop-blur-xl shadow-2xl border-b border-[#FF6B35]/20"
        : "bg-[#1e1e1f]/90 backdrop-blur-sm"
        }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23FF6B35' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden lg:block border-b border-[#FF6B35]/10 bg-[#1a1a1b]/50">
        <div className="container mx-auto px-4 lg:px-8 py-2">
          <div className="flex justify-between items-center text-sm">
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group">
                <Phone className="w-3 h-3 group-hover:animate-pulse" />
                <span>+90 532 333 50 67</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group">
                <Mail className="w-3 h-3 group-hover:animate-pulse" />
                <span>fonozbart@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-3 h-3" />
                <span>Marmaris, Muğla</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-400 text-xs">Bizi Takip Edin:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-1.5 bg-[#2a2a2b] rounded-lg transition-all duration-300 hover:bg-[#FF6B35] ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-3 h-3 text-gray-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative group cursor-pointer">
              <Image
                src="/assets/images/fnz-beyaz.png"
                alt="FNZ AHŞAP SANAYİ Logo"
                width={240}
                height={60}
                className="object-contain h-8 sm:h-10 lg:h-12 xl:h-14 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#8B4513]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleMenuClick(item.name, item.path)}
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                  className={`relative text-sm xl:text-base font-medium tracking-wide transition-all duration-300 py-2 px-1 ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                    } ${clickedMenu === item.name ? "animate-pulse" : ""}`}
                >
                  {item.label}

                  {/* Active indicator */}
                  {activeMenu === item.name && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center">
                      <div className="w-8 h-0.5 bg-[#FF6B35]"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
                    </div>
                  )}

                  {/* Hover effect */}
                  {hoveredMenu === item.name && activeMenu !== item.name && (
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center opacity-50 transition-opacity duration-300">
                      <div className="w-6 h-0.5 bg-[#FF6B35]"></div>
                    </div>
                  )}

                  {/* Hover arrow */}
                  <ArrowRight
                    className={`absolute -right-5 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#FF6B35] transition-all duration-300 ${hoveredMenu === item.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                  />
                </button>
              </div>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <div className="hidden xl:block">
              <button className="group relative bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] text-white px-6 py-3 rounded-lg font-semibold text-sm shadow-lg hover:shadow-2xl overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=%2B905323335067&text&type=phone_number&app_absent=0"
                    className="text-sm"
                  >
                    Hemen Arayın
                  </a>
                </span>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            <button
              className="flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 p-2 group/hamburger relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-[#FF6B35]/10 active:scale-95 flex-shrink-0 lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileMenuOpen ? (
                <div className="relative">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover/hamburger:text-[#FF6B35] group-hover/hamburger:scale-110 group-hover/hamburger:rotate-90" />
                  <div className="absolute inset-0 bg-[#FF6B35]/20 rounded-full scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
                </div>
              ) : (
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#FF6B35] group-hover/hamburger:w-5 sm:group-hover/hamburger:w-6 origin-left group-hover/hamburger:rotate-12 group-hover/hamburger:translate-y-0.5 mb-1"></div>
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#FF6B35] group-hover/hamburger:w-3 sm:group-hover/hamburger:w-4 group-hover/hamburger:translate-x-1 group-hover/hamburger:opacity-75 mb-1"></div>
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#FF6B35] group-hover/hamburger:w-5 sm:group-hover/hamburger:w-6 origin-left group-hover/hamburger:-rotate-12 group-hover/hamburger:-translate-y-0.5"></div>
                  <div className="absolute inset-0 border-2 border-[#FF6B35]/50 rounded-full scale-0 group-hover/hamburger:scale-125 transition-all duration-700 opacity-0 group-hover/hamburger:opacity-100"></div>
                  <div className="absolute inset-0 bg-[#FF6B35]/10 rounded-full blur-md scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
                </div>
              )}

              <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/hamburger:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                {isMobileMenuOpen ? "Kapat" : "Menü"}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-[9998] ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Content */}
        <div
          className={`absolute z-[9999] top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1e1e1f] shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-[#1e1e1f]">
            <div className="flex items-center">
              <Image
                src="/assets/images/fnz-beyaz.png"
                alt="FNZ Wood Logo"
                width={220}
                height={32}
                className="object-contain h-8"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#FF6B35]/10 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <nav className="flex flex-col p-6 space-y-4 bg-[#1e1e1f]">
            {menuItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name, item.path)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeMenu === item.name
                  ? "bg-[#FF6B35] text-white"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <span className="font-medium tracking-wide text-base sm:text-lg">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="p-6 border-t border-[#FF6B35]/20 flex flex-col space-y-4 bg-[#1e1e1f]">
            <div className="flex items-center space-x-3">
              <PiPhoneCall className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B35]" />
              <div>
                <div className="text-xs sm:text-sm text-gray-400">Bize Ulaşın</div>
                <div className="text-sm sm:text-base text-white font-medium">+90 532 333 50 67</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/fnzwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6B35] transition-colors"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/fnzwood/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF6B35] transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B4513]/5 to-transparent rounded-full blur-2xl"></div>
    </header>
  )
}
