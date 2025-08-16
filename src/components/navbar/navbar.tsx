"use client"

import type React from "react"
import { useLoading } from "@/hooks/use-loading"
import { Facebook, Instagram, X } from "lucide-react"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { PiPhoneCall } from "react-icons/pi"

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [clickedMenu, setClickedMenu] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })
  const [isHomepageDropdownOpen, setIsHomepageDropdownOpen] = useState(false)
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const { startPageTransition, isLoading } = useLoading()

  const homepageOptions = [{ name: "Home2", label: "ANASAYFA 2", path: "/home1" }]

  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/"},
    { name: "About", label: "HAKKIMIZDA", path: "/about" },
    { name: "Project", label: "PROJELERİMİZ", path: "/projects" },
    { name: "Services", label: "HİZMETLERİMİZ", path: "/services" },
    { name: "Blog", label: "BLOG", path: "/blog" },
    { name: "Contact", label: "İLETİŞİM", path: "/contact" },
  ]

  useEffect(() => {
    const currentItem =
      menuItems.find((item) => item.path === pathname) || homepageOptions.find((item) => item.path === pathname)
    if (currentItem) {
      if (homepageOptions.some((option) => option.path === pathname)) {
        setActiveMenu("Home")
      } else {
        setActiveMenu(currentItem.name)
      }
    }
  }, [pathname])

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isHomepageDropdownOpen) {
        setIsHomepageDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isHomepageDropdownOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isMobileMenuOpen])

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
    setActiveMenu(menuName)
    setIsMobileMenuOpen(false)
    setIsHomepageDropdownOpen(false)
    router.push(path)

    setTimeout(() => {
      setClickedMenu(null)
    }, 600)
  }

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsHomepageDropdownOpen(!isHomepageDropdownOpen)
  }

  return (
    <header className="bg-[#1e1e1f] fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg w-full">
      <div className="w-full px-4 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between w-full lg:justify-around">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center animate-fade-in group/logo cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="FNZ Mobilya Logo"
                  width={230}
                  height={60}
                  className="object-contain w-auto h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 max-w-[120px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[300px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex justify-around flex-1 max-w-4xl">
            {/* Social Icons */}
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

            {/* Navigation Menu */}
            <nav className="flex items-center justify-center mx-4 xl:mx-8 2xl:mx-12 relative">
              <div className="relative flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8 max-w-full">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative flex-shrink-0">
                    <div className="relative">
                      <button
                        onClick={() => handleMenuClick(item.name, item.path)}
                        onMouseEnter={() => setHoveredMenu(item.name)}
                        onMouseLeave={() => setHoveredMenu(null)}
                        className={`relative inline-block text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 py-2 px-1 whitespace-nowrap ${
                          activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                        } ${clickedMenu === item.name ? "animate-pulse" : ""}`}
                      >
                        {item.label}

                        {activeMenu === item.name && (
                          <div className="absolute -bottom-2 left-0 flex items-center">
                            <div className="w-8 h-0.5 bg-[#9c7256]"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div>
                          </div>
                        )}

                        {hoveredMenu === item.name && activeMenu !== item.name && (
                          <span className="absolute left-1/2 top-full -translate-x-1/2 mt-1.5 xl:mt-2 flex items-end gap-0.5 z-50 transition-all duration-300 opacity-50">
                            <span className="w-px h-1 xl:h-1.5 bg-gray-400 rounded-sm" />
                            <span className="w-px h-1.5 xl:h-2 bg-[#9c7256] rounded-sm" />
                            <span className="w-px h-1 xl:h-1.5 bg-gray-400 rounded-sm" />
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Desktop Contact Info */}
            <div className="hidden xl:flex items-center space-x-2 xl:space-x-3 group cursor-pointer">
              <div className="p-1.5 xl:p-2 rounded-full group-hover:bg-white transition-all duration-300 flex-shrink-0">
                <PiPhoneCall className="w-5 h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-[#D4A574]" />
              </div>
              <div className="text-right min-w-0">
                <div className="text-xs text-gray-400 group-hover:text-[#D4A574] transition-colors duration-300 whitespace-nowrap">
                  Bize Ulaşın
                </div>
                <div className="text-sm text-white font-medium group-hover:text-[#D4A574] transition-colors duration-300 whitespace-nowrap">
                  +90 532 333 50 67
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 p-2 group/hamburger relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 active:scale-95 flex-shrink-0 lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {isMobileMenuOpen ? (
                <div className="relative">
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover/hamburger:text-[#D4A574] group-hover/hamburger:scale-110 group-hover/hamburger:rotate-90" />
                  <div className="absolute inset-0 bg-[#D4A574]/20 rounded-full scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
                </div>
              ) : (
                <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-5 sm:group-hover/hamburger:w-6 origin-left group-hover/hamburger:rotate-12 group-hover/hamburger:translate-y-0.5 mb-1"></div>
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-3 sm:group-hover/hamburger:w-4 group-hover/hamburger:translate-x-1 group-hover/hamburger:opacity-75 mb-1"></div>
                  <div className="w-4 sm:w-5 h-0.5 bg-white transition-all duration-300 group-hover/hamburger:bg-[#D4A574] group-hover/hamburger:w-5 sm:group-hover/hamburger:w-6 origin-left group-hover/hamburger:-rotate-12 group-hover/hamburger:-translate-y-0.5"></div>
                  <div className="absolute inset-0 border-2 border-[#D4A574]/50 rounded-full scale-0 group-hover/hamburger:scale-125 transition-all duration-700 opacity-0 group-hover/hamburger:opacity-100"></div>
                  <div className="absolute inset-0 bg-[#D4A574]/10 rounded-full blur-md scale-0 group-hover/hamburger:scale-150 transition-all duration-500 opacity-0 group-hover/hamburger:opacity-100"></div>
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
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: "0" }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Menu Content */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1e1e1f] shadow-2xl transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <div className="flex items-center">
              <Image
                src="/assets/images/footer-logo.png"
                alt="FNZ Mobilya Logo"
                width={220}
                height={32}
                className="object-contain h-8"
              />
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handleMenuClick(item.name, item.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeMenu === item.name
                      ? "bg-[#D4A574] text-white"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <span className="font-medium tracking-wide">{item.label}</span>
                  {activeMenu === item.name && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </button>
              </div>
            ))}
          </nav>

          {/* Mobile Contact Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-[#D4A574] rounded-full">
                <PiPhoneCall className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400">Bize Ulaşın</div>
                <div className="text-sm text-white font-medium">+90 532 333 50 67</div>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-3">
              <div className="bg-[#2f2a27] rounded-full p-2 cursor-pointer hover:bg-white group transition-all duration-300">
                <Facebook className="w-4 h-4 text-white group-hover:text-[#2f2a27] transition-colors" />
              </div>
              <div className="bg-[#2f2a27] rounded-full p-2 cursor-pointer hover:bg-white group transition-all duration-300">
                <Instagram className="w-4 h-4 text-white group-hover:text-[#2f2a27] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
