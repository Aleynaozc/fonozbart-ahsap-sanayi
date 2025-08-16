"use client"

import type React from "react"

import { useCallback, useRef, useState } from "react"

interface TouchGestureOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  onTap?: () => void
  onLongPress?: () => void
  threshold?: number
  longPressDelay?: number
}

export function useTouchGestures({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  onTap,
  onLongPress,
  threshold = 50,
  longPressDelay = 500,
}: TouchGestureOptions) {
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null)
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null)
  const [isPressed, setIsPressed] = useState(false)

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0]
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
      }
      setIsPressed(true)

      // Long press detection
      if (onLongPress) {
        longPressTimerRef.current = setTimeout(() => {
          onLongPress()
          // Add haptic feedback simulation
          if (navigator.vibrate) {
            navigator.vibrate(50)
          }
        }, longPressDelay)
      }
    },
    [onLongPress, longPressDelay],
  )

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    // Cancel long press if finger moves
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current)
      longPressTimerRef.current = null
    }
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      setIsPressed(false)

      if (longPressTimerRef.current) {
        clearTimeout(longPressTimerRef.current)
        longPressTimerRef.current = null
      }

      if (!touchStartRef.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y
      const deltaTime = Date.now() - touchStartRef.current.time

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      // Tap detection (small movement, quick release)
      if (absDeltaX < 10 && absDeltaY < 10 && deltaTime < 300 && onTap) {
        onTap()
        // Add tap feedback
        if (navigator.vibrate) {
          navigator.vibrate(25)
        }
        return
      }

      // Swipe detection
      if (absDeltaX > threshold || absDeltaY > threshold) {
        if (absDeltaX > absDeltaY) {
          // Horizontal swipe
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight()
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft()
          }
        } else {
          // Vertical swipe
          if (deltaY > 0 && onSwipeDown) {
            onSwipeDown()
          } else if (deltaY < 0 && onSwipeUp) {
            onSwipeUp()
          }
        }

        // Add swipe feedback
        if (navigator.vibrate) {
          navigator.vibrate(30)
        }
      }

      touchStartRef.current = null
    },
    [onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown, onTap, threshold],
  )

  return {
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
    },
    isPressed,
  }
}
