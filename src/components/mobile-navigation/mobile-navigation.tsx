"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Home, Info, Briefcase, Phone, Menu, X } from "lucide-react"

import { MobileTouchFeedback } from "./mobile-touch-feedback"
import { useTouchGestures } from "@/hooks/use-touch-gestures"

interface NavigationItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

const navigationItems: NavigationItem[] = [
  { id: "home", label: "Ana Sayfa", icon: Home, href: "#home" },
  { id: "about", label: "Hakkımızda", icon: Info, href: "#about" },
  { id: "services", label: "Hizmetler", icon: Briefcase, href: "#services" },
  { id: "contact", label: "İletişim", icon: Phone, href: "#contact" },
]

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Close menu on swipe up
  const { touchHandlers } = useTouchGestures({
    onSwipeUp: () => setIsOpen(false),
    onSwipeDown: () => setIsOpen(true),
    threshold: 30,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)

      // Haptic feedback
      if (navigator.vibrate) {
        navigator.vibrate(25)
      }
    }
  }

  return (
    <>
      {/* Mobile Menu Button - Fixed positioning to avoid conflicts */}
      <div className="lg:hidden fixed bottom-20 xs:bottom-24 right-4 xs:right-6 z-50">
        <MobileTouchFeedback>
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            onTouchStart={(e) => e.stopPropagation()}
            className="w-12 h-12 xs:w-14 xs:h-14 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full shadow-lg shadow-[#FF6B35]/25 flex items-center justify-center text-white transition-all duration-300 active:scale-90 touch-manipulation"
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            type="button"
          >
            {isOpen ? <X className="w-5 h-5 xs:w-6 xs:h-6" /> : <Menu className="w-5 h-5 xs:w-6 xs:h-6" />}
          </button>
        </MobileTouchFeedback>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsOpen(false)
          }}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] border-t border-[#FF6B35]/20 backdrop-blur-xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        {...touchHandlers}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-2 xs:pt-3 pb-1 xs:pb-2">
          <div className="w-8 xs:w-12 h-1 bg-gray-400 rounded-full"></div>
        </div>

        {/* Navigation Items */}
        <div className="px-4 xs:px-6 pb-6 xs:pb-8">
          <div className="grid grid-cols-2 gap-3 xs:gap-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <MobileTouchFeedback key={item.id}>
                  <button
                    onClick={(e) => scrollToSection(item.href, e)}
                    onTouchStart={(e) => e.stopPropagation()}
                    className={`flex flex-col items-center space-y-1 xs:space-y-2 p-3 xs:p-4 rounded-xl transition-all duration-300 touch-manipulation ${
                      isActive
                        ? "bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A2B]/20 border border-[#FF6B35]/30"
                        : "bg-gray-800/50 border border-gray-700/50 hover:border-[#FF6B35]/20"
                    }`}
                    type="button"
                  >
                    <Icon className={`w-5 h-5 xs:w-6 xs:h-6 ${isActive ? "text-[#FF6B35]" : "text-gray-300"}`} />
                    <span className={`text-xs xs:text-sm font-medium ${isActive ? "text-[#FF6B35]" : "text-gray-300"}`}>
                      {item.label}
                    </span>
                    {isActive && <div className="w-6 xs:w-8 h-0.5 bg-[#FF6B35] rounded-full"></div>}
                  </button>
                </MobileTouchFeedback>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-4 xs:mt-6 pt-3 xs:pt-4 border-t border-gray-700/50">
            <div className="flex space-x-2 xs:space-x-3">
              <MobileTouchFeedback className="flex-1">
                <button
                  className="w-full bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white py-2.5 xs:py-3 px-3 xs:px-4 rounded-lg font-medium text-xs xs:text-sm transition-all duration-300 active:scale-95 touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    // Teklif alma sayfasına git
                    console.log("Teklif al tıklandı")
                  }}
                  type="button"
                >
                  Teklif Al
                </button>
              </MobileTouchFeedback>

              <MobileTouchFeedback>
                <button
                  className="bg-gray-800/50 border border-gray-700/50 text-gray-300 py-2.5 xs:py-3 px-3 xs:px-4 rounded-lg font-medium text-xs xs:text-sm transition-all duration-300 active:scale-95 touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    // Telefon arama
                    window.location.href = "tel:+902527121234"
                  }}
                  type="button"
                >
                  Ara
                </button>
              </MobileTouchFeedback>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Alternative) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1e1e1f]/95 backdrop-blur-xl border-t border-[#FF6B35]/20 z-30">
        <div className="flex items-center justify-around py-1.5 xs:py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <MobileTouchFeedback key={item.id}>
                <button
                  onClick={(e) => scrollToSection(item.href, e)}
                  onTouchStart={(e) => e.stopPropagation()}
                  className="flex flex-col items-center space-y-0.5 xs:space-y-1 p-1.5 xs:p-2 transition-all duration-300 active:scale-90 touch-manipulation"
                  type="button"
                >
                  <Icon className={`w-4 h-4 xs:w-5 xs:h-5 ${isActive ? "text-[#FF6B35]" : "text-gray-400"}`} />
                  <span className={`text-xs ${isActive ? "text-[#FF6B35]" : "text-gray-400"}`}>{item.label}</span>
                  {isActive && <div className="w-3 xs:w-4 h-0.5 bg-[#FF6B35] rounded-full"></div>}
                </button>
              </MobileTouchFeedback>
            )
          })}
        </div>
      </div>
    </>
  )
}
