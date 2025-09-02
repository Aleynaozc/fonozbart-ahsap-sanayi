"use client"
import { Facebook, Instagram, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Poppins } from "next/font/google"
import { PiPhoneCall } from "react-icons/pi"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState("Home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const menuItems = [
    { name: "Home", label: "ANASAYFA", path: "/" },
    { name: "About", label: "HAKKIMIZDA", path: "/hakkimizda" },
    { name: "Services", label: "HİZMETLERİMİZ", path: "/hizmetlerimiz" },
    { name: "Project", label: "PROJELERİMİZ", path: "/projeler" },
    { name: "Referance", label: "REFERANSLARIMIZ", path: "/referanslar" },
    { name: "Contact", label: "İLETİŞİM", path: "/iletisim" },
    { name: "Blog", label: "BLOG", path: "/blog" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/fnzwood/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fnzwood/" },
  ]

  useEffect(() => {

    const currentItem = menuItems.find((item) =>
      pathname === item.path || pathname.startsWith(item.path + "/")
    )
    if (currentItem) {
      setActiveMenu(currentItem.name)
    }


    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const handleMenuClick = (menuName: string, path: string) => {
    setIsMobileMenuOpen(false)
    setActiveMenu(menuName)
    router.push(path)
  }

  return (
    <header
      className={`${poppins.className} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-[#1e1e1f]/95 shadow-lg backdrop-blur-lg" : "bg-[#1e1e1f]/80"
        }`}
    >
      {/* Top Contact Bar - only lg+ */}
      <div className="hidden lg:block border-b border-[#FF6B35]/10 bg-[#1a1a1b]/60">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-2 text-sm">
          <div className="flex items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2 hover:text-[#FF6B35]">
              <Phone size={14} />
              <span>+90 532 333 50 67</span>
            </div>
            <div className="flex items-center gap-2 hover:text-[#FF6B35]">
              <Mail size={14} />
              <span>fonozbart@hotmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>Marmaris, Muğla</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} target="_blank" className="text-gray-400 hover:text-[#FF6B35]">
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-3 lg:py-5 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/assets/images/fnz-wood-logo-1.png"
          alt="FNZ AHŞAP SANAYİ"
          width={180}
          height={50}
          className="h-10 w-auto object-contain"
          priority
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleMenuClick(item.name, item.path)}
              className={`relative text-sm font-medium tracking-wide transition ${activeMenu === item.name ? "text-white" : "text-gray-300 hover:text-white"
                }`}
            >
              {item.label}
              {activeMenu === item.name && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#FF6B35] rounded"></span>
              )}
            </button>
          ))}
        </nav>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+905323335067"
            className="hidden xl:flex items-center gap-2 bg-[#FF6B35] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#e85c27] transition"
          >
            <Phone size={16} />
            Hemen Ara
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-[#FF6B35]/20"
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

          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-black backdrop-blur-sm transition-opacity ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-[#1e1e1f] transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header row with logo and close button */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <Image
              src="/assets/images/fnz-wood-logo-1.png"
              alt="FNZ Logo"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-[#FF6B35]/20 transition-colors"
              aria-label="Menüyü kapat"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col p-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item.name, item.path)}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${activeMenu === item.name
                  ? "bg-[#FF6B35] text-white"
                  : "text-gray-300 hover:bg-gray-700/50"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="p-6 border-t border-gray-700">
            <a
              href="tel:+905323335067"
              className="flex items-center justify-center gap-2 bg-[#FF6B35] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#e85c27] transition"
            >
              <Phone className="w-4 h-4" />
              Hemen Ara
            </a>
          </div>
        </div>
      </div>

    </header>
  )
}
