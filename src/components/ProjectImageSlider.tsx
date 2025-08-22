"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectImageSliderProps {
  images: string[]
  title: string
  category:string
  onImageClick?: (index: number) => void
}

export default function ProjectImageSlider({
  images,
  title,
  category,
  onImageClick,
}: ProjectImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-full h-60 sm:h-72 md:h-80 overflow-hidden cursor-pointer group">
      {/* AnimatePresence ile crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onClick={() => onImageClick && onImageClick(currentImageIndex)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent pointer-events-none" />

      {/* Capture Icon on Hover */}
      <div className="absolute inset-0 flex items-center bg-black/60 transition-opacity duration-300 justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
        <CaptureIcon className="w-16 h-16" />
      </div>

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full transition ${
                i === currentImageIndex ? "bg-[#FF6B35]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Capture Icon
function CaptureIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 right-0 w-6 h-6">
        <div className="absolute top-0 right-0 w-4 h-0.5 bg-[#FF6B35]" />
        <div className="absolute top-0 right-0 w-0.5 h-4 bg-[#FF6B35]" />
      </div>
      <div className="absolute bottom-0 left-0 w-6 h-6">
        <div className="absolute bottom-0 left-0 w-4 h-0.5 bg-[#FF6B35]" />
        <div className="absolute bottom-0 left-0 w-0.5 h-4 bg-[#FF6B35]" />
      </div>
    </div>
  )
}
