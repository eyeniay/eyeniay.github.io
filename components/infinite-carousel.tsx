"use client"

import React, { useEffect, useRef, useState } from "react"

interface CarouselItem {
  title: string
  org: string
  year: string
}

interface InfiniteCarouselProps {
  items: CarouselItem[]
  direction: "left" | "right"
}

export function InfiniteCarousel({ items, direction }: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  // Start with enough copies to fill the screen and avoid gaps
  const [displayItems, setDisplayItems] = useState<CarouselItem[]>(() => {
    const copies = Math.max(3, Math.ceil(1920 / 296)) // Ensure enough items for any screen
    return Array(copies).fill(items).flat()
  })
  const animationRef = useRef<number | undefined>(undefined)
  const scrollPositionRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const speed = 0.5 // pixels per frame
    const itemWidth = 296 // 280px + 16px gap
    const singleSetWidth = items.length * itemWidth
    
    const animate = () => {
      if (direction === "left") {
        scrollPositionRef.current += speed
        // Reset position seamlessly when we've scrolled one complete set
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = scrollPositionRef.current - singleSetWidth
        }
      } else {
        scrollPositionRef.current -= speed
        // Reset position seamlessly for right direction
        if (scrollPositionRef.current <= 0) {
          scrollPositionRef.current = scrollPositionRef.current + singleSetWidth
        }
      }
      
      container.style.transform = `translateX(${-scrollPositionRef.current}px)`
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize scroll position for right direction
    if (direction === "right") {
      scrollPositionRef.current = singleSetWidth
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [items, direction])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ willChange: 'transform' }}
      >
        {displayItems.map((item: CarouselItem, index: number) => (
          <div
            key={`${item.title}-${index}`}
            className="flex-none p-4 bg-muted/20 border border-border rounded-lg min-w-[280px]"
          >
            <div className="space-y-2">
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.org}</p>
              <p className="text-xs text-muted-foreground font-mono">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}