"use client"

import type React from "react"

import { useLoading } from "@/hooks/use-loading"
import { Facebook, Instagram, Phone, X, ChevronDown } from "lucide-react"
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

  const homepageOptions = [
    { name: "Home2", label: "ANASAYFA 2", path: "/home1" },
  ]

  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/", hasDropdown: true },
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
    <header className="bg-[#333333] fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-lg w-full">
      <div className="w-full px-4 lg:px-8 py-4">
        <div className="hidden lg:flex items-center justify-around w-full">
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6 xl:space-x-8 flex-shrink-0">
            <div className="flex items-center animate-fade-in group/logo cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/assets/images/footer-logo.png"
                  alt="FNZ Mobilya Logo"
                  width={230}
                  height={60}
                   className="object-contain w-auto h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 max-w-[200px] sm:max-w-[160px] md:max-w-[200px] lg:max-w-[260px] xl:max-w-[300px]"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="justify-around flex">
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

            <nav className="hidden lg:flex items-center justify-center mx-4 xl:mx-8 2xl:mx-12 relative">
              <div className="relative flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8 max-w-full">
                {menuItems.map((item) => (
                  <div key={item.name} className="relative flex-shrink-0">
                    <div className="relative">
                      <button
                        onClick={() => handleMenuClick(item.name, item.path)}
                        className={`relative inline-block text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 py-2 px-1 whitespace-nowrap ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
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

          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
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

            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 p-2 group/hamburger relative overflow-hidden rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 active:scale-95 flex-shrink-0"
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

        <div
          className={`lg:hidden w-full overflow-visible transition-all duration-500 ease-in-out ${isMobileMenuOpen
              ? "max-h-[80vh] opacity-100 mt-3 sm:mt-4 border-t border-gray-600 pt-3 sm:pt-4"
              : "max-h-0 opacity-0 mt-0 overflow-hidden"
            }`}
        >
          <nav className="flex flex-col space-y-2 sm:space-y-3 max-h-[50vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setIsHomepageDropdownOpen(!isHomepageDropdownOpen)}
                className={`flex items-center justify-between w-full text-sm sm:text-base font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 min-h-[44px] text-left ${activeMenu === "Home" ? "text-white bg-[#D4A574]/20" : "text-gray-300 hover:text-white"
                  }`}
              >
                <span>ANASAYFA</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isHomepageDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isHomepageDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1 bg-[#2a2a2a] rounded-lg p-2 border border-gray-600">
                  {homepageOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={() => handleMenuClick("Home", option.path)}
                      className="block w-full text-left text-sm py-2 px-3 text-gray-400 hover:text-white hover:bg-[#D4A574]/10 rounded transition-colors duration-200"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {menuItems.slice(1).map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name, item.path)}
                className={`block text-sm sm:text-base font-medium py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg transition-all duration-300 hover:bg-[#D4A574]/10 hover:translate-x-2 min-h-[44px] flex items-center text-left w-full ${activeMenu === item.name ? "text-white bg-[#D4A574]/20" : "text-gray-300 hover:text-white"
                  } ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"}`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${(index + 1) * 50}ms` : "0ms",
                }}
              >
                <span className="flex-1">{item.label}</span>
                {activeMenu === item.name && (
                  <span className="inline-block ml-2 w-2 h-2 bg-[#D4A574] rounded-full animate-pulse flex-shrink-0"></span>
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 sm:space-x-4 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600">
            {[
              { Icon: Facebook, color: "hover:bg-[#2f2a27]", name: "Facebook" },
              { Icon: Instagram, color: "hover:bg-[#2f2a27]", name: "Instagram" },
            ].map(({ Icon, color, name }, index) => (
              <div
                key={index}
                className={`bg-gray-600 ${color} rounded-full p-2 sm:p-2.5 cursor-pointer hover:scale-125 hover:rotate-12 group/social relative overflow-hidden transition-all duration-300 flex-shrink-0 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${(index + menuItems.length) * 50}ms` : "0ms",
                }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover/social:scale-110 relative z-10" />
                <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover/social:scale-100 transition-transform duration-300"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover/social:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                  {name}
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-600 group/contact cursor-pointer transition-all duration-300 ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
              }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${(menuItems.length + 4) * 50}ms` : "0ms",
            }}
          >
            <div className="flex items-center space-x-3 sm:space-x-4 p-2 sm:p-3 rounded-lg transition-all duration-300 group-hover/contact:bg-[#D4A574]/10 group-hover/contact:translate-x-1 min-h-[44px]">
              <div className="bg-gray-600 p-2 sm:p-2.5 rounded-full transition-all duration-300 group-hover/contact:bg-[#D4A574] group-hover/contact:scale-110 relative overflow-hidden flex-shrink-0">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300 group-hover/contact:scale-110 relative z-10" />
                <div className="absolute inset-0 border-2 border-[#D4A574] rounded-full scale-100 group-hover/contact:scale-150 opacity-0 group-hover/contact:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="transition-all duration-300 group-hover/contact:transform group-hover/contact:scale-105 min-w-0 flex-1">
                <div className="text-xs sm:text-sm text-gray-400 transition-colors duration-300 group-hover/contact:text-[#D4A574] whitespace-nowrap overflow-hidden text-ellipsis">
                  Her zaman arayın
                </div>
                <div className="text-sm sm:text-base text-white font-medium transition-colors duration-300 group-hover/contact:text-[#D4A574] whitespace-nowrap overflow-hidden text-ellipsis">
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