"use client"

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react"

interface CacheItem<T = unknown> {
  data: T
  timestamp: number
  ttl: number // Time to live in milliseconds
  hits: number
  lastAccessed: number
}

interface CacheContextType {
  set: <T>(key: string, data: T, ttl?: number) => void
  get: <T>(key: string) => T | null
  has: (key: string) => boolean
  delete: (key: string) => boolean
  clear: () => void
  size: number
  getStats: () => {
    totalItems: number
    totalHits: number
    hitRate: number
    memoryUsage: number
  }
  prefetch: <T>(key: string, fetcher: () => Promise<T>, ttl?: number) => Promise<T>
}

const CacheContext = createContext<CacheContextType | undefined>(undefined)

const DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes
const MAX_CACHE_SIZE = 100
const CLEANUP_INTERVAL = 60 * 1000 // 1 minute

export function CacheProvider({ children }: { children: ReactNode }) {
  const [cache, setCache] = useState<Map<string, CacheItem>>(new Map())
  const [totalHits, setTotalHits] = useState(0)

  const cacheRef = useRef(cache)
  cacheRef.current = cache

  // Set cache item
  const set = useCallback(<T,>(key: string, data: T, ttl: number = DEFAULT_TTL) => {
    const now = Date.now()
    const item: CacheItem<T> = {
      data,
      timestamp: now,
      ttl,
      hits: 0,
      lastAccessed: now,
    }

    setCache((prev) => {
      const newCache = new Map(prev)

      // If cache is full, remove least recently used item
      if (newCache.size >= MAX_CACHE_SIZE && !newCache.has(key)) {
        let lruKey = ""
        let oldestAccess = now

        for (const [k, v] of newCache.entries()) {
          if (v.lastAccessed < oldestAccess) {
            oldestAccess = v.lastAccessed
            lruKey = k
          }
        }

        if (lruKey) {
          newCache.delete(lruKey)
        }
      }

      newCache.set(key, item)
      return newCache
    })
  }, [])

  const get = useCallback(
    <T,>(key: string): T | null => {
      const item = cacheRef.current.get(key) as CacheItem<T> | undefined

      if (!item) return null

      const now = Date.now()

      // Check if item has expired
      if (now - item.timestamp > item.ttl) {
        setCache((prev) => {
          const newCache = new Map(prev)
          newCache.delete(key)
          return newCache
        })
        return null
      }

      // Update access statistics
      item.hits++
      item.lastAccessed = now
      setTotalHits((prev) => prev + 1)

      return item.data
    },
    [], // Removed cache from dependencies
  )

  const has = useCallback(
    (key: string): boolean => {
      const item = cacheRef.current.get(key)
      if (!item) return false

      const now = Date.now()
      if (now - item.timestamp > item.ttl) {
        setCache((prev) => {
          const newCache = new Map(prev)
          newCache.delete(key)
          return newCache
        })
        return false
      }

      return true
    },
    [], // Removed cache from dependencies
  )

  // Delete cache item
  const deleteItem = useCallback((key: string): boolean => {
    const existed = cacheRef.current.has(key)
    if (existed) {
      setCache((prev) => {
        const newCache = new Map(prev)
        newCache.delete(key)
        return newCache
      })
    }
    return existed
  }, [])

  // Clear all cache
  const clear = useCallback(() => {
    setCache(new Map())
    setTotalHits(0)
  }, [])

  const getStats = useCallback(() => {
    const currentCache = cacheRef.current
    const totalItems = currentCache.size
    const hitRate = totalItems > 0 ? (totalHits / (totalHits + totalItems)) * 100 : 0

    // Estimate memory usage (rough calculation)
    let memoryUsage = 0
    for (const item of currentCache.values()) {
      memoryUsage += JSON.stringify(item.data).length * 2 // Rough estimate in bytes
    }

    return {
      totalItems,
      totalHits,
      hitRate: Math.round(hitRate * 100) / 100,
      memoryUsage: Math.round(memoryUsage / 1024), // KB
    }
  }, [totalHits]) // Removed cache from dependencies

  // Prefetch with caching
  const prefetch = useCallback(
    async <T,>(key: string, fetcher: () => Promise<T>, ttl: number = DEFAULT_TTL): Promise<T> => {
      // Check if already cached
      const cached = get<T>(key)
      if (cached !== null) {
        return cached
      }

      try {
        const data = await fetcher()
        set(key, data, ttl)
        return data
      } catch (error) {
        console.error(`Failed to prefetch data for key: ${key}`, error)
        throw error
      }
    },
    [get, set],
  )

  // Cleanup expired items periodically
  useEffect(() => {
    const cleanup = () => {
      const now = Date.now()
      setCache((prev) => {
        const newCache = new Map(prev)
        let cleaned = false

        for (const [key, item] of newCache.entries()) {
          if (now - item.timestamp > item.ttl) {
            newCache.delete(key)
            cleaned = true
          }
        }

        return cleaned ? newCache : prev
      })
    }

    const interval = setInterval(cleanup, CLEANUP_INTERVAL)
    return () => clearInterval(interval)
  }, [])

  // Save cache to localStorage on unload (for persistence)
  useEffect(() => {
    const saveCache = () => {
      try {
        const cacheData = Array.from(cacheRef.current.entries())
        localStorage.setItem("fnz-cache", JSON.stringify(cacheData))
      } catch (error) {
        console.warn("Failed to save cache to localStorage:", error)
      }
    }

    const loadCache = () => {
      try {
        const saved = localStorage.getItem("fnz-cache")
        if (saved) {
          const cacheData = JSON.parse(saved)
          const now = Date.now()
          const validItems = cacheData.filter(([_, item]: [string, CacheItem]) => now - item.timestamp < item.ttl)
          setCache(new Map(validItems))
        }
      } catch (error) {
        console.warn("Failed to load cache from localStorage:", error)
      }
    }

    if (typeof window !== "undefined") {
      loadCache()
      window.addEventListener("beforeunload", saveCache)

      return () => {
        window.removeEventListener("beforeunload", saveCache)
      }
    }
  }, [])

  const contextValue: CacheContextType = {
    set,
    get,
    has,
    delete: deleteItem,
    clear,
    size: cache.size,
    getStats,
    prefetch,
  }

  return <CacheContext.Provider value={contextValue}>{children}</CacheContext.Provider>
}

export function useCache() {
  const context = useContext(CacheContext)
  if (context === undefined) {
    throw new Error("useCache must be used within a CacheProvider")
  }
  return context
}
