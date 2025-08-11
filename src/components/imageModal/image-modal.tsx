'use client'

import { X } from 'lucide-react'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string | null
  onClose: () => void
}

export function ImageModal({ isOpen, imageUrl, onClose }: ImageModalProps) {
  if (!isOpen || !imageUrl) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
          aria-label="Close image"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[85vh]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt="Large project view"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            priority
          />
        </div>
      </div>
    </div>
  )
}