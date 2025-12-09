"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import ProgressiveImage from "./progressive-image"
import { cn } from "@/lib/utils"

interface HeroCarouselProps {
  images: string[]
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function HeroCarousel({
  images,
  className = "",
  autoPlay = true,
  autoPlayInterval = 4000,
}: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (autoPlay && !isHovered && !isTransitioning) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, autoPlayInterval)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [autoPlay, isHovered, isTransitioning, autoPlayInterval])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-700 ease-in-out",
              index === currentSlide
                ? "translate-x-0 opacity-100 z-10"
                : index < currentSlide
                  ? "-translate-x-full opacity-0 z-0"
                  : "translate-x-full opacity-0 z-0",
            )}
          >
            <ProgressiveImage
              src={image}
              alt={`Hero Image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 z-20",
          "hover:scale-110 active:scale-95",
          isTransitioning && "opacity-50 cursor-not-allowed",
        )}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-slate-800" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className={cn(
          "absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 z-20",
          "hover:scale-110 active:scale-95",
          isTransitioning && "opacity-50 cursor-not-allowed",
        )}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-slate-800" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300",
              index === currentSlide ? "bg-white scale-110 shadow-lg" : "bg-white/50 hover:bg-white/75 hover:scale-105",
              isTransitioning && "cursor-not-allowed",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {autoPlay && !isHovered && (
        <div className="absolute top-6 right-6 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
          Auto-play
        </div>
      )}

      {/* Loading overlay for smooth transitions */}
      {isTransitioning && <div className="absolute inset-0 bg-black/10 z-30 pointer-events-none" />}
    </div>
  )
}
