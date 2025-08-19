"use client"
import { Facebook, Instagram, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Poppins } from "next/font/google"
import { PiPhoneCall } from "react-icons/pi"

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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/" },
    { name: "About", label: "HAKKIMIZDA", path: "/hakkimizda" },
    { name: "Services", label: "HİZMETLERİMİZ", path: "/services" },
    { name: "Project", label: "PROJELERİMİZ", path: "/projects" },
    { name: "Blog", label: "BLOG", path: "/blog" },
    { name: "Contact", label: "İLETİŞİM", path: "/contact" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/fnzwood/", color: "hover:text-blue-500" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fnzwood/", color: "hover:text-pink-500" },
  ]


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
    
    router.push(path)

    setTimeout(() => {
      setClickedMenu(null)
    }, 600)
  }


  return (
    <header className={`${poppins.className} fixed top-0 left-0 right-0 z-50 transition-all duration-500`}>

      {/* Top Contact Bar */}
      <div className="hidden lg:block border-b border-[#FF6B35]/10 bg-[#1a1a1b]/50">
        <div className="container mx-auto px-4 lg:px-8 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group">
              <Phone className="w-3 h-3 group-hover:animate-pulse" /> <span>+90 532 333 50 67</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-[#FF6B35] transition-colors duration-300 group">
              <Mail className="w-3 h-3 group-hover:animate-pulse" /> <span>fonozbart@hotmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-3 h-3" /> <span>Marmaris, Muğla</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-xs">Bizi Takip Edin:</span>
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`group relative p-1.5 bg-[#2a2a2b] rounded-lg transition-all duration-300 hover:bg-[#FF6B35] ${social.color}`} aria-label={social.name}>
                <social.icon className="w-3 h-3 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 lg:px-8 py-4 lg:py-6 flex items-center justify-between relative z-10 ">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 cursor-pointer">
          <div className="relative group">
            <Image src="/assets/images/footer-logo.png" alt="FNZ AHŞAP SANAYİ Logo" width={240} height={60} className="object-contain h-8 sm:h-10 lg:h-12 xl:h-14 w-auto transition-all duration-300 group-hover:scale-105" priority />
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/20 to-[#8B4513]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <button
                onClick={() => handleMenuClick(item.name, item.path)}
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
                className={`relative text-sm xl:text-base font-medium tracking-wide py-2 px-1 transition-all duration-300 ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"} ${clickedMenu === item.name ? "animate-pulse" : ""}`}
              >
                {item.label}
                {activeMenu === item.name && <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center"><div className="w-8 h-0.5 bg-[#FF6B35]"></div><div className="w-1 h-1 bg-gray-400 rounded-full ml-1"></div></div>}
                {hoveredMenu === item.name && activeMenu !== item.name && <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex items-center opacity-50 transition-opacity duration-300"><div className="w-6 h-0.5 bg-[#FF6B35]"></div></div>}
                <ArrowRight className={`absolute -right-5 top-1/2 transform -translate-y-1/2 w-3 h-3 text-[#FF6B35] transition-all duration-300 ${hoveredMenu === item.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
              </button>
            </div>
          ))}
        </nav>

        {/* Mobile & CTA */}
        <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
          <div className="hidden xl:flex items-center space-x-2 xl:space-x-3 group cursor-pointer">
            <div className="p-1.5 xl:p-2 rounded-full group-hover:bg-white transition-all duration-300 flex-shrink-0">
              <PiPhoneCall className="w-5 h-5 xl:w-6 xl:h-6 text-[#FF6B35]" />
            </div>
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-400 group-hover:text-[#FF6B35] transition-colors duration-300 whitespace-nowrap">Bize Ulaşın</div>
              <div className="text-sm text-white font-medium group-hover:text-[#FF6B35] transition-colors duration-300 whitespace-nowrap">+90 532 333 50 67</div>
            </div>
          </div>

          {/* Hamburger */}
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

      {/* Mobile Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#1e1e1f] shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <Image src="/assets/images/footer-logo.png" alt="FNZ Mobilya Logo" width={220} height={32} className="object-contain h-8" />
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-lg hover:bg-[#FF6B35]/10 transition-colors"><X className="w-5 h-5 text-white" /></button>
        </div>

        <nav className="flex flex-col p-6 space-y-4">
          {menuItems.map((item, index) => (
            <button key={item.name} onClick={() => handleMenuClick(item.name, item.path)} className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${activeMenu === item.name ? "bg-[#FF6B35] text-white" : "text-gray-300 hover:text-white hover:bg-gray-700/50"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="font-medium tracking-wide">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-[#FF6B35]/20 flex flex-col space-y-4">
          <div className="flex items-center space-x-3">
            <PiPhoneCall className="w-5 h-5 text-[#FF6B35]" />
            <div>
              <div className="text-xs text-gray-400">Bize Ulaşın</div>
              <div className="text-sm text-white font-medium">+90 532 333 50 67</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/fnzwood/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35] transition-colors"><Facebook className="w-5 h-5 text-white" /></a>
            <a href="https://www.instagram.com/fnzwood/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF6B35] transition-colors"><Instagram className="w-5 h-5 text-white" /></a>
          </div>
        </div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF6B35]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#8B4513]/5 to-transparent rounded-full blur-2xl"></div>
    </header>
  )
}
