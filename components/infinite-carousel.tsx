"use client"

import { useEffect, useRef } from "react"

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
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrame: number
    const speed = 0.3 // pixels per frame
    
    const animate = () => {
      if (scrollContainer) {
        if (direction === "left") {
          scrollContainer.scrollLeft += speed
          // Reset when we've scrolled through half the content (since it's duplicated)
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0
          }
        } else {
          scrollContainer.scrollLeft -= speed
          // Reset when we've scrolled back to the end
          if (scrollContainer.scrollLeft <= 0) {
            scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2
          }
        }
      }
      animationFrame = requestAnimationFrame(animate)
    }

    // Start animation
    animationFrame = requestAnimationFrame(animate)

    // Set initial position for right direction
    if (direction === "right") {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth / 2
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [direction])

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedItems.map((item, index) => (
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