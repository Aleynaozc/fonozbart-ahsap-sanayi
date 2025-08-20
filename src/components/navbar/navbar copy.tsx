"use client"

import { Facebook, Instagram, Phone, Search, Twitter } from "lucide-react"
import { FaPinterest } from "react-icons/fa"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useLoading } from "../hooks/use-loading"

export function Header() {
  const [activeMenu, setActiveMenu] = useState("Home")
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [clickedMenu, setClickedMenu] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const { startPageTransition, isLoading } = useLoading()

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

    // 🔥 LoadingProvider'dan gelen startPageTransition fonksiyonunu kullan
    startPageTransition(path)

    // Reset clicked state after animation
    setTimeout(() => {
      setClickedMenu(null)
    }, 600)
  }

  return (
    <header className="bg-[#3d3d3d] fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg w-full group">
      <div className="w-full max-w-none px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Social Media Section */}
          <div className="flex items-center space-x-6">
            {/* Logo with hover effect */}
            <div className="flex items-center animate-fade-in group/logo cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="FNZ Mobilya Logo"
                  width={120}
                  height={60}
                  className="object-contain transition-all duration-500 group-hover/logo:scale-110 group-hover/logo:brightness-110"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/0 via-[#D4A574]/20 to-[#D4A574]/0 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500 blur-xl"></div>
              </div>
            </div>

            {/* Social Media Icons with enhanced hover effects */}
            <div className="hidden lg:flex items-center space-x-3">
              {[
                { Icon: Twitter, color: "hover:bg-blue-500", name: "Twitter" },
                { Icon: Facebook, color: "hover:bg-blue-600", name: "Facebook" },
                { Icon: FaPinterest, color: "hover:bg-red-500", name: "Pinterest" },
                { Icon: Instagram, color: "hover:bg-pink-500", name: "Instagram" },
              ].map(({ Icon, color, name }, index) => (
                <div
                  key={name}
                  className={`bg-gray-600 ${color} rounded-full p-2 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 hover:shadow-lg group/social relative overflow-hidden`}
                  style={{ transitionDelay: `${index * 50}ms` }}
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
          </div>

          {/* Navigation Menu - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="relative flex items-center space-x-12">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  ref={(el) => (menuRefs.current[item.name] = el)}
                  className="relative group/menu"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuClick(item.name, item.path)
                    }}
                    className={`text-sm font-medium tracking-wide transition-all duration-500 hover:scale-105 relative group py-3 px-2 block ${
                      activeMenu === item.name
                        ? "text-white transform scale-105"
                        : "text-gray-300 hover:text-white group-hover/menu:text-[#D4A574]"
                    } ${clickedMenu === item.name ? "animate-pulse" : ""}`}
                  >
                    {item.label}

                    {/* 🔥 Loading spinner for clicked menu */}
                    {clickedMenu === item.name && isLoading && (
                      <div className="absolute -top-1 -right-1">
                        <div className="w-3 h-3 border border-[#D4A574] border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}

                    {/* Hover background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A574]/10 to-transparent opacity-0 group-hover/menu:opacity-100 transition-all duration-300 rounded-lg"></div>

                    {/* Hover preview indicator */}
                    {hoveredMenu === item.name && activeMenu !== item.name && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out opacity-50">
                        <div className="flex items-center space-x-1">
                          <div className="w-0.5 h-2 bg-[#D4A574] transition-all duration-200"></div>
                          <div className="w-0.5 h-2 bg-[#D4A574] transition-all duration-200 delay-75"></div>
                        </div>
                      </div>
                    )}

                    {/* Active indicator */}
                    <div
                      className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-out ${
                        activeMenu === item.name
                          ? "opacity-100 scale-100 translate-y-0"
                          : "opacity-0 scale-75 translate-y-2"
                      }`}
                    >
                      <div className="flex items-center space-x-1">
                        <div
                          className={`w-0.5 bg-[#D4A574] transition-all duration-300 ${
                            activeMenu === item.name ? "h-4" : "h-0"
                          }`}
                        ></div>
                        <div
                          className={`w-0.5 bg-[#D4A574] transition-all duration-300 delay-75 ${
                            activeMenu === item.name ? "h-4" : "h-0"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Subtle text shadow on hover */}
                    <div className="absolute inset-0 text-sm font-medium tracking-wide opacity-0 group-hover/menu:opacity-20 transition-opacity duration-300 text-[#D4A574] blur-sm">
                      {item.label}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </nav>

          {/* Contact Info and Search - Right Side */}
          <div className="flex items-center space-x-6">
            {/* Contact Info with hover effects */}
            <div className="hidden xl:flex items-center space-x-4 group/contact cursor-pointer">
              <div className="text-right transition-all duration-300 group-hover/contact:transform group-hover/contact:scale-105">
                <div className="text-xs text-gray-400 transition-all duration-300 group-hover/contact:text-[#D4A574]">
                  Call anytime
                </div>
                <div className="text-sm text-white font-medium transition-all duration-300 group-hover/contact:text-[#D4A574] relative">
                  +90 (212) 555 0123
                  {/* Underline effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A574] group-hover/contact:w-full transition-all duration-300"></div>
                </div>
              </div>
              <div className="bg-gray-600 p-2 rounded-full transition-all duration-300 group-hover/contact:bg-[#D4A574] group-hover/contact:scale-110 group-hover/contact:rotate-12 relative overflow-hidden">
                <Phone className="w-4 h-4 text-white transition-all duration-300 group-hover/contact:scale-110 relative z-10" />
                {/* Pulse effect */}
                <div className="absolute inset-0 bg-[#D4A574] rounded-full scale-0 group-hover/contact:scale-150 opacity-0 group-hover/contact:opacity-30 transition-all duration-500"></div>
              </div>
            </div>

            {/* Search Icon with enhanced effects */}
            <div className="bg-gray-600 hover:bg-[#D4A574] rounded-full p-2 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 group/search relative overflow-hidden hover:shadow-lg hover:shadow-[#D4A574]/50">
              <Search className="w-4 h-4 text-white transition-all duration-300 group-hover/search:scale-110 relative z-10" />
              {/* Rotating border effect */}
              <div className="absolute inset-0 border-2 border-[#D4A574] rounded-full scale-0 group-hover/search:scale-100 transition-transform duration-300 opacity-0 group-hover/search:opacity-100"></div>
              {/* Ripple effect */}
              <div className="absolute inset-0 bg-[#D4A574]/30 rounded-full scale-0 group-hover/search:scale-150 transition-transform duration-500"></div>
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/search:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Ara
              </div>
            </div>

            {/* Mobile Menu Button with morphing animation */}
            <button className="lg:hidden flex flex-col space-y-1 p-2 group/hamburger relative">
              <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-6 origin-left group-hover/hamburger:rotate-12"></div>
              <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-4 group-hover/hamburger:translate-x-1"></div>
              <div className="w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-6 origin-left group-hover/hamburger:-rotate-12"></div>
              {/* Hover background */}
              <div className="absolute inset-0 bg-[#D4A574]/20 rounded-lg scale-0 group-hover/hamburger:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with hover effects */}
        <div className="lg:hidden mt-4 border-t border-gray-600 pt-4 transition-all duration-500">
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative overflow-hidden group/mobile-menu">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.name, item.path)
                  }}
                  className={`text-sm font-medium tracking-wide transition-all duration-500 block py-3 px-2 transform relative z-10 ${
                    activeMenu === item.name
                      ? "text-white translate-x-2 scale-105"
                      : "text-gray-300 hover:text-white group-hover/mobile-menu:translate-x-1 group-hover/mobile-menu:text-[#D4A574]"
                  } ${clickedMenu === item.name ? "animate-pulse" : ""}`}
                  style={{
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {item.label}

                  {/* Mobile loading spinner */}
                  {clickedMenu === item.name && isLoading && (
                    <span className="inline-block ml-2">
                      <div className="w-3 h-3 border border-[#D4A574] border-t-transparent rounded-full animate-spin"></div>
                    </span>
                  )}
                </a>

                {/* Hover ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574]/10 via-[#D4A574]/20 to-transparent opacity-0 group-hover/mobile-menu:opacity-100 transition-all duration-300 transform -translate-x-full group-hover/mobile-menu:translate-x-0"></div>

                {/* Active indicator for mobile */}
                <div
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out ${
                    activeMenu === item.name
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-75 -translate-x-4"
                  }`}
                >
                  <div className="flex flex-col space-y-1">
                    <div
                      className={`bg-[#D4A574] transition-all duration-300 ${
                        activeMenu === item.name ? "w-4 h-0.5" : "w-0 h-0.5"
                      }`}
                    ></div>
                    <div
                      className={`bg-[#D4A574] transition-all duration-300 delay-75 ${
                        activeMenu === item.name ? "w-4 h-0.5" : "w-0 h-0.5"
                      }`}
                    ></div>
                  </div>
                </div>

                {/* Background highlight effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#D4A574]/10 to-transparent transition-all duration-500 ${
                    activeMenu === item.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                  }`}
                ></div>
              </div>
            ))}
          </nav>

          {/* Mobile Social Media - Enhanced hover effects */}
          <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-gray-600">
            {[
              { Icon: Twitter, color: "hover:bg-blue-500" },
              { Icon: Facebook, color: "hover:bg-blue-600" },
              { Icon: FaPinterest, color: "hover:bg-red-500" },
              { Icon: Instagram, color: "hover:bg-pink-500" },
            ].map(({ Icon, color }, index) => (
              <div
                key={index}
                className={`bg-gray-600 ${color} rounded-full p-2 transition-all duration-300 cursor-pointer hover:scale-125 hover:rotate-12 group/mobile-social relative overflow-hidden`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Icon className="w-4 h-4 text-white transition-all duration-300 group-hover/mobile-social:scale-110 relative z-10" />
                {/* Bounce effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/mobile-social:scale-100 group-hover/mobile-social:animate-ping transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {/* Mobile Contact - Enhanced hover */}
          <div className="mt-4 pt-4 border-t border-gray-600 group/mobile-contact cursor-pointer">
            <div className="flex items-center space-x-3 transition-all duration-300 group-hover/mobile-contact:translate-x-1">
              <div className="bg-gray-600 p-2 rounded-full transition-all duration-300 group-hover/mobile-contact:bg-[#D4A574] group-hover/mobile-contact:scale-110 relative overflow-hidden">
                <Phone className="w-4 h-4 text-white transition-all duration-300 group-hover/mobile-contact:scale-110 relative z-10" />
                {/* Pulse ring */}
                <div className="absolute inset-0 border-2 border-[#D4A574] rounded-full scale-100 group-hover/mobile-contact:scale-150 opacity-0 group-hover/mobile-contact:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="transition-all duration-300 group-hover/mobile-contact:transform group-hover/mobile-contact:scale-105">
                <div className="text-xs text-gray-400 transition-colors duration-300 group-hover/mobile-contact:text-[#D4A574]">
                  Her zaman arayın
                </div>
                <div className="text-sm text-white font-medium transition-colors duration-300 group-hover/mobile-contact:text-[#D4A574]">
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
