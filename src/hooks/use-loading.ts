'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export function useLoading() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Show loader when route changes
    setIsLoading(true)
    
    // Simulate minimum loading time for better UX
    const minLoadingTime = 800
    const startTime = Date.now()
    
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
      
      setTimeout(() => {
        setIsLoading(false)
      }, remainingTime)
    }

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      // Wait for window load event
      window.addEventListener('load', handleLoad)
      
      // Fallback timeout
      const fallbackTimeout = setTimeout(() => {
        setIsLoading(false)
      }, 3000)
      
      return () => {
        window.removeEventListener('load', handleLoad)
        clearTimeout(fallbackTimeout)
      }
    }
  }, [pathname])

  return { isLoading }
}
