"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/hooks/use-loading"
import { usePathname } from "next/navigation"

export default function InitialLoaderWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { startPageTransition, isLoading } = useLoading()
  const [animate, setAnimate] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Sayfadaki tüm img’ler yüklendi mi?
  useEffect(() => {
    const images = document.querySelectorAll("img")
    let loadedCount = 0

    if (images.length === 0) {
      setImagesLoaded(true)
      return
    }

    const checkDone = () => {
      loadedCount++
      if (loadedCount === images.length) {
        setImagesLoaded(true)
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        checkDone()
      } else {
        img.addEventListener("load", checkDone, { once: true })
        img.addEventListener("error", checkDone, { once: true }) // hata olursa da say
      }
    })
  }, [pathname]) // her route değişiminde tekrar kontrol et

  // Path değiştiğinde loader başlat
  useEffect(() => {
    if (!pathname) return
    startPageTransition(pathname)

    setAnimate(false)
    requestAnimationFrame(() => setAnimate(true))
  }, [pathname])

  const showLoader = isLoading || !imagesLoaded

  if (showLoader) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#1e1e1f]">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img
            src="/assets/images/fnz-wood-logo-1.png"
            alt="FNZ Logo"
            className={`h-30 sm:h-20 transition-all duration-1000 ${animate ? "blur-0 opacity-100" : "blur-md opacity-0"
              }`}
            style={{
              filter: animate ? "grayscale(0%)" : "grayscale(100%)",
              transition: "all 1s ease-in-out",
            }}
          />

          {/* Loading Bar */}
          <div className="w-42">
            <div className="h-1 bg-[#333] rounded-full overflow-hidden">
              <div
                className={`h-1 bg-[#FF6B35] transition-all duration-1000 ${animate ? "w-full" : "w-0"
                  }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
