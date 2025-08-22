"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

export interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
  title?: string
  description?: string
}

export function ImageModal({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  title = "Proje Görseli",
  description,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ESC tuşu ile kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown)
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  // Body scroll kapatma
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
      setCurrentIndex(initialIndex)
      return () => {
        document.body.style.overflow = originalStyle
      }
    }
  }, [isOpen, initialIndex])

  if (!mounted) return null
  if (!isOpen) return null

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center"
          onClick={onClose} // backdrop click
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative max-w-5xl w-full mx-auto px-4"
            onClick={(e) => e.stopPropagation()} // içerik tıklanınca kapanmasın
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:text-[#FF6B35] transition z-50"
            >
              <X size={28} />
            </button>

            <div className="flex flex-col items-center">
              {/* Main Image */}
              <div className="relative w-full h-[60vh] md:h-[70vh] mb-6">
                <Image
                  src={images[currentIndex]}
                  alt={title}
                  fill
                  className="object-contain rounded-lg"
                />

                {/* Prev / Next Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FF6B35]/70 transition z-40"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-[#FF6B35]/70 transition z-40"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-center">
                {title}
              </h3>
              {description && (
                <p className="text-gray-300 text-center max-w-2xl">{description}</p>
              )}

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-20 h-16 relative cursor-pointer rounded-md overflow-hidden border transition ${
                        currentIndex === idx
                          ? "border-[#FF6B35]"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${title} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
