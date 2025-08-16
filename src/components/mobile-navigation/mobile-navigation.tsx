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
  { id: "hero", label: "Ana Sayfa", icon: Home, href: "#hero" },
  { id: "about", label: "Hakkımızda", icon: Info, href: "#about" },
  { id: "services", label: "Hizmetler", icon: Briefcase, href: "#services" },
  { id: "contact", label: "İletişim", icon: Phone, href: "#contact" },
]

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

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

  const scrollToSection = (href: string) => {
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
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <MobileTouchFeedback>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] rounded-full shadow-lg shadow-[#FF6B35]/25 flex items-center justify-center text-white transition-all duration-300 active:scale-90"
            aria-label={isOpen ? "Menüyü Kapat" : "Menüyü Aç"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </MobileTouchFeedback>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#1e1e1f] via-[#2a2a2b] to-[#1e1e1f] border-t border-[#FF6B35]/20 backdrop-blur-xl z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        {...touchHandlers}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-400 rounded-full"></div>
        </div>

        {/* Navigation Items */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-2 gap-4">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <MobileTouchFeedback key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-[#FF6B35]/20 to-[#E55A2B]/20 border border-[#FF6B35]/30"
                        : "bg-gray-800/50 border border-gray-700/50 hover:border-[#FF6B35]/20"
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isActive ? "text-[#FF6B35]" : "text-gray-300"}`} />
                    <span className={`text-sm font-medium ${isActive ? "text-[#FF6B35]" : "text-gray-300"}`}>
                      {item.label}
                    </span>
                    {isActive && <div className="w-8 h-0.5 bg-[#FF6B35] rounded-full"></div>}
                  </button>
                </MobileTouchFeedback>
              )
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-4 border-t border-gray-700/50">
            <div className="flex space-x-3">
              <MobileTouchFeedback className="flex-1">
                <button className="w-full bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 active:scale-95">
                  Teklif Al
                </button>
              </MobileTouchFeedback>

              <MobileTouchFeedback>
                <button className="bg-gray-800/50 border border-gray-700/50 text-gray-300 py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 active:scale-95">
                  Ara
                </button>
              </MobileTouchFeedback>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar (Alternative) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#1e1e1f]/95 backdrop-blur-xl border-t border-[#FF6B35]/20 z-30">
        <div className="flex items-center justify-around py-2">
          {navigationItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <MobileTouchFeedback key={item.id}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="flex flex-col items-center space-y-1 p-2 transition-all duration-300 active:scale-90"
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-[#FF6B35]" : "text-gray-400"}`} />
                  <span className={`text-xs ${isActive ? "text-[#FF6B35]" : "text-gray-400"}`}>{item.label}</span>
                  {isActive && <div className="w-4 h-0.5 bg-[#FF6B35] rounded-full"></div>}
                </button>
              </MobileTouchFeedback>
            )
          })}
        </div>
      </div>
    </>
  )
}
