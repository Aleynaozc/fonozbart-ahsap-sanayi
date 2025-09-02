"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface PageHeroProps {
  backgroundImage: string
  badgeText?: string
  title: string
  highlight?: string
  description?: string
  cta?: {
    label: string
    href: string
  }
  icon?: React.ReactNode
}

export function PageHero({
  backgroundImage,
  badgeText,
  title,
  highlight,
  description,
  cta,
  icon
}: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // background tipini otomatik algıla
  const backgroundType = (() => {
    const ext = backgroundImage.split(".").pop()?.toLowerCase()
    if (["mp4", "webm", "ogg"].includes(ext || "")) {
      return "video"
    }
    return "image"
  })()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundType === "image" ? (
          <Image
            src={backgroundImage}
            alt={badgeText || title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src={backgroundImage}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm shadow-lg mb-6">
              {icon && <span className="text-[#FF6B35] w-5 h-5">{icon}</span>}
              <span className="text-[#FF6B35] font-medium text-sm tracking-wide">
                {badgeText}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            {title}
            {highlight && (
              <span className="block bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] bg-clip-text text-transparent mt-2">
                {highlight}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden group bg-[#FF6B35] hover:bg-[#E55A2B] text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href={cta.href}>
                <span className="relative z-10">{cta.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
