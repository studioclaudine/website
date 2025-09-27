import { useState, useEffect } from 'preact/hooks'
import ceramicsData from '../data/ceramics.json'

interface CeramicData {
  id: number
  order: number
  title: string
  subtitle: string
  photo: string
  price: string
  etsyLink: string | null
}

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Get top 5 photos based on order
  const topPhotos = (ceramicsData as CeramicData[])
    .sort((a, b) => a.order - b.order)
    .slice(0, 5)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % topPhotos.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [topPhotos.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + topPhotos.length) % topPhotos.length)
  }

  return (
    <div className="relative w-full h-[70vh] overflow-hidden mx-auto max-w-6xl px-6 mt-24 rounded-3xl">
      {/* Slideshow Images */}
      <div className="relative w-full h-full rounded-3xl overflow-hidden">
        {topPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={photo.photo}
              alt={photo.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Overlay gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-colors duration-300 z-20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Title and Subtitle Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-neutral-charcoal mb-6 font-barlow font-semibold tracking-wide uppercase drop-shadow-2xl">
          Studio Claudine
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-neutral-darker font-light tracking-wider drop-shadow-lg">
          Handmade ceramics with soul
        </p>
      </div>
    </div>
  )
}