"use client"

import { Facebook, Instagram, Phone, Search, Twitter, X } from "lucide-react"
import { FaPinterest } from "react-icons/fa"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useLoading } from "@/hooks/use-loading"

export function Header() {
  const [activeMenu, setActiveMenu] = useState("Home")
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [clickedMenu, setClickedMenu] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const { startPageTransition, isLoading } = useLoading()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/" },
    { name: "About", label: "HAKKIMIZDA", path: "/about" },
    { name: "Project", label: "PROJELERİMİZ", path: "/projects" },
    { name: "Services", label: "HİZMETLERİMİZ", path: "/services" },
    { name: "Blog", label: "BLOG", path: "/blog" },
    { name: "Contact", label: "İLETİŞİM", path: "/contact" },
  ]

  // Aktif menü değiştiğinde gösterge pozisyonunu güncelle
  useEffect(() => {
    const activeElement = menuRefs.current[activeMenu]
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect()
      const parentRect = activeElement.parentElement?.getBoundingClientRect()
      if (parentRect) {
        setIndicatorStyle({
          left: rect.left - parentRect.left + rect.width / 2,
          width: rect.width,
        })
      }
    }
  }, [activeMenu])

  const handleMenuClick = (menuName: string, path: string) => {
    setClickedMenu(menuName)
    setActiveMenu(menuName)

    // LoadingProvider'dan gelen startPageTransition fonksiyonunu kullan
    startPageTransition(path)

    // Reset clicked state after animation
    setTimeout(() => {
      setClickedMenu(null)
    }, 600)
  }

  return (
    <header className="bg-[#3d3d3d] fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg w-full group">
      {/* Desktop Optimized Container */}
      <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-4 lg:py-5 xl:py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Social Media Section - Enhanced Desktop Spacing */}
          <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-10">
            {/* Logo with enhanced desktop sizing */}
            <div className="flex items-center animate-fade-in group/logo cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="FNZ Mobilya Logo"
                  width={120}
                  height={60}
                  className="object-contain transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:brightness-110 lg:w-[140px] lg:h-[70px] xl:w-[160px] xl:h-[80px]"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/0 via-[#D4A574]/20 to-[#D4A574]/0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </div>

            {/* Social Media Icons with enhanced desktop spacing */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-5 2xl:space-x-6">
              {[
                { Icon: Twitter, color: "hover:bg-blue-500", name: "Twitter" },
                { Icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
                { Icon: FaPinterest, color: "hover:bg-red-500", name: "Pinterest" },
                { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram" },
              ].map(({ Icon, color, name }, index) => (
                <div
                  key={name}
                  className={`bg-gray-600 ${color} rounded-full p-2.5 xl:p-3 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 hover:shadow-lg group/social relative overflow-hidden`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-4 h-4 xl:w-5 xl:h-5 text-white transition-all duration-300 group-hover/social:scale-110 relative z-10" />
                  {/* Ripple effect */}
                  <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/social:scale-100 transition-transform duration-300"></div>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Menu - Enhanced Desktop Layout */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-12 xl:mx-16 2xl:mx-20">
            <div className="relative flex items-center space-x-10 xl:space-x-12 2xl:space-x-16">
              {menuItems.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuClick(item.name, item.path)
                    }}
                    className={`relative inline-block text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 py-2 sm:py-3 ${
                      activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                    } ${clickedMenu === item.name ? "animate-pulse" : ""}`}
                  >
                    {item.label}

                    {/* Loading spinner for clicked menu */}
                    {clickedMenu === item.name && isLoading && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-3 h-3 border border-[#D4A574] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* ÜÇLÜ DİKEY ÇİZGİ (masaüstü) - Enhanced for desktop */}
                    {activeMenu === item.name && (
                      <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 flex items-end gap-0.5 z-50 transition-all duration-300">
                        <span className="w-px h-2 bg-white rounded-sm animate-fade-in" />
                        <span className="w-px h-3 bg-[#D4A574] rounded-sm animate-fade-in delay-75" />
                        <span className="w-px h-2 bg-white rounded-sm animate-fade-in delay-150" />
                      </span>
                    )}

                    {/* Hover preview indicator */}
                    {hoveredMenu === item.name && activeMenu !== item.name && (
                      <span className="absolute left-1/2 top-full -translate-x-1/2 mt-2 flex items-end gap-0.5 z-50 transition-all duration-300 opacity-50">
                        <span className="w-px h-1.5 bg-gray-400 rounded-sm" />
                        <span className="w-px h-2 bg-[#D4A574] rounded-sm" />
                        <span className="w-px h-1.5 bg-gray-400 rounded-sm" />
                      </span>
                    )}
                  </a>
                </div>
              ))}
            </div>
          </nav>

          {/* Contact Info and Search - Enhanced Desktop Layout */}
          <div className="flex items-center space-x-6 xl:space-x-8">
            {/* Contact Info with enhanced desktop styling */}
            <div className="hidden xl:flex items-center space-x-5 2xl:space-x-6 group/contact cursor-pointer">
              <div className="text-right transition-all duration-300 group-hover/contact:transform group-hover/contact:scale-105">
                <div className="text-xs 2xl:text-sm text-gray-400 transition-all duration-300 group-hover/contact:text-[#D4A574]">
                  Call anytime
                </div>
                <div className="text-sm 2xl:text-base text-white font-medium transition-all duration-300 group-hover/contact:text-[#D4A574] relative">
                  +90 (212) 555 0123
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A574] group-hover/contact:w-full transition-all duration-300"></div>
                </div>
              </div>
              <div className="bg-gray-600 p-3 2xl:p-3.5 rounded-full transition-all duration-300 group-hover/contact:bg-[#D4A574] group-hover/contact:scale-110 group-hover/contact:rotate-12 relative overflow-hidden">
                <Phone className="w-5 h-5 2xl:w-6 2xl:h-6 text-white transition-all duration-300 group-hover/contact:scale-110 relative z-10" />
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-[#D4A574] rounded-full scale-0 group-hover/contact:scale-150 opacity-0 group-hover/contact:opacity-30 transition-all duration-500"></div>
              </div>
            </div>

            {/* Search Icon with enhanced desktop styling */}
            <div className="bg-gray-600 hover:bg-[#D4A574] rounded-full p-2.5 xl:p-3 2xl:p-3.5 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 group/search relative overflow-hidden hover:shadow-lg hover:shadow-[#D4A574]/50">
              <Search className="w-4 h-4 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-white transition-all duration-300 group-hover/search:scale-110 relative z-10" />
              {/* Rotating border effect */}
              <div className="absolute inset-0 border-2 border-[#D4A574] rounded-full scale-0 group-hover/search:scale-100 transition-transform duration-300 opacity-0 group-hover/search:opacity-100"></div>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-[#D4A574]/30 rounded-full scale-0 group-hover/search:scale-150 transition-transform duration-500"></div>
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-3 py-1.5 rounded opacity-0 group-hover/search:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Ara
              </div>
            </div>

            {/* Mobile Toggle Button - Enhanced Hover Effects */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 p-2 group/hamburger relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 active:scale-95"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileMenuOpen ? (
                /* Close Icon with Enhanced Animation */
                <div className="relative">
                  <X className="w-6 h-6 text-white transition-all duration-300 group-hover/hamburger:text-[#D4A574] group-hover/hamburger:scale-110 group-hover/hamburger:rotate-90" />
                  {/* Pulse effect for close button */}
                  <div className="absolute inset-0 bg-[#D4A574]/20 rounded-full scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
                </div>
              ) : (
                /* Hamburger Lines with Advanced Animations */
                <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                  {/* Top Line */}
                  <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-6 origin-left group-hover/hamburger:rotate-12 group-hover/hamburger:translate-y-0.5 mb-1"></div>

                  {/* Middle Line */}
                  <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-4 group-hover/hamburger:translate-x-1 group-hover/hamburger:opacity-75 mb-1"></div>

                  {/* Bottom Line */}
                  <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-6 origin-left group-hover/hamburger:-rotate-12 group-hover/hamburger:-translate-y-0.5"></div>

                  {/* Animated Background Circle */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/20 via-[#D4A574]/30 to-[#D4A574]/20 rounded-full scale-0 group-hover/hamburger:scale-100 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>

                  {/* Ripple Effect */}
                  <div className="absolute inset-0 border-2 border-[#D4A574]/50 rounded-full scale-0 group-hover/hamburger:scale-125 transition-all duration-700 opacity-0 group-hover/hamburger:opacity-100"></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#D4A574]/10 rounded-full blur-md scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
                </div>
              )}

              {/* Tooltip */}
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/hamburger:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {isMobileMenuOpen ? "Kapat" : "Menü"}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with Slide Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4 border-t border-gray-600 pt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          {/* Menu Links with Stagger Animation */}
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleMenuClick(item.name, item.path)
                }}
                className={`block text-sm font-medium py-2 px-2 rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 hover:translate-x-2 ${
                  activeMenu === item.name ? "text-white bg-[#D4A574]/20" : "text-gray-300 hover:text-white"
                } ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"}`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
                {/* Active indicator */}
                {activeMenu === item.name && (
                  <span className="inline-block ml-2 w-2 h-2 bg-[#D4A574] rounded-full animate-pulse"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Social Media with Enhanced Hover */}
          <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-600">
            {[
              { Icon: Twitter, color: "hover:bg-blue-500", name: "Twitter" },
              { Icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
              { Icon: FaPinterest, color: "hover:bg-red-500", name: "Pinterest" },
              { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram" },
            ].map(({ Icon, color, name }, index) => (
              <div
                key={index}
                className={`bg-gray-600 ${color} rounded-full p-2 cursor-pointer hover:scale-125 hover:rotate-12 group/social relative overflow-hidden transition-all duration-300 ${
                  isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${(index + menuItems.length) * 50}ms` : "0ms",
                }}
              >
                <Icon className="w-4 h-4 text-white transition-all duration-300 group-hover/social:scale-110 relative z-10" />
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/social:scale-100 transition-transform duration-300"></div>
                {/* Tooltip */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  {name}
                </div>
              </div>
            ))}
          </div>

          {/* Phone Info with Enhanced Styling */}
          <div
            className={`mt-4 pt-4 border-t border-gray-600 group/contact cursor-pointer transition-all duration-300 ${
              isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${(menuItems.length + 4) * 50}ms` : "0ms",
            }}
          >
            <div className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 group-hover/contact:bg-[#D4A574]/10 group-hover/contact:translate-x-1">
              <div className="bg-gray-600 p-2 rounded-full transition-all duration-300 group-hover/contact:bg-[#D4A574] group-hover/contact:scale-110 relative overflow-hidden">
                <Phone className="w-4 h-4 text-white transition-all duration-300 group-hover/contact:scale-110 relative z-10" />
                {/* Pulse ring */}
                <div className="absolute inset-0 border-2 border-[#D4A574] rounded-full scale-100 group-hover/contact:scale-150 opacity-0 group-hover/contact:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="transition-all duration-300 group-hover/contact:transform group-hover/contact:scale-105">
                <div className="text-xs text-gray-400 transition-colors duration-300 group-hover/contact:text-[#D4A574]">
                  Her zaman arayın
                </div>
                <div className="text-sm text-white font-medium transition-colors duration-300 group-hover/contact:text-[#D4A574]">
                  +90 (212) 555 0123
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
