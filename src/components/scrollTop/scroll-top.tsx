'use client'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollTopSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 hover:bg-[#b65e00] bg-[#f98e02] rounded-full p-2 transition-all duration-300 hover:scale-110 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Yukarı çık"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  )
}
