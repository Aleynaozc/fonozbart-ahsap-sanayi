'use client'
import { useEffect, useState, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()
  const prevPathnameRef = useRef<string | null>(null)
  const loadStartTimeRef = useRef<number>(Date.now())
  const isInitialLoadRef = useRef(true) // Sayfanın ilk yüklemesi mi?

  useEffect(() => {
    // Eğer pathname değiştiyse (navigasyon) veya ilk yükleme ise loader'ı göster
    if (pathname !== prevPathnameRef.current || isInitialLoadRef.current) {
      setIsLoading(true)
      loadStartTimeRef.current = Date.now() // Yükleme başlangıç zamanını kaydet
      prevPathnameRef.current = pathname

      const minLoadingTime = 800 // Loader'ın minimum görünür kalma süresi (ms)

      const handleLoadComplete = () => {
        const elapsedTime = Date.now() - loadStartTimeRef.current
        const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

        setTimeout(() => {
          setIsLoading(false)
          isInitialLoadRef.current = false // İlk yükleme tamamlandı
        }, remainingTime)
      }

      // İlk sayfa yüklemesi için (tam sayfa yenileme)
      if (isInitialLoadRef.current) {
        if (document.readyState === 'complete') {
          // Eğer sayfa zaten yüklüyse hemen tamamla
          handleLoadComplete()
        } else {
          // Sayfa yüklenene kadar bekle
          window.addEventListener('load', handleLoadComplete)
          // Yükleme event'i çok uzun sürerse diye bir fallback zamanlayıcı
          const fallbackTimeout = setTimeout(() => {
            window.removeEventListener('load', handleLoadComplete) // Fallback tetiklenirse listener'ı kaldır
            handleLoadComplete()
          }, 5000) // Maksimum 5 saniye bekle

          return () => {
            window.removeEventListener('load', handleLoadComplete)
            clearTimeout(fallbackTimeout)
          }
        }
      } else {
        // Sonraki istemci tarafı navigasyonlar için
        // Next.js'in router.events'i yerine pathname değişimini kullanıyoruz
        // ve doğrudan handleLoadComplete'i çağırıyoruz.
        handleLoadComplete()
      }
    }
  }, [pathname]) // Sadece pathname değiştiğinde bu useEffect'i tekrar çalıştır

  return { isLoading }
}
