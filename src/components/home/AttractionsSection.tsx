'use client'

import { useRef, useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const attractions = [
  {
    name: 'Thumpoly Beach',
    distance: '50 Steps',
    desc: 'Step directly onto the serene shores of Thumpoly Beach — our nearest gem, just 50 steps from the property.',
    icon: '🏖️',
  },
  {
    name: 'Alleppey Main Beach',
    distance: '5 km',
    desc: 'A beautiful coastal destination known for golden sunsets, lighthouse views, and relaxing beachside experiences.',
    icon: '🌅',
  },
  {
    name: 'Marari Beach',
    distance: '10 km',
    desc: 'A peaceful and scenic beach destination famous for swaying coconut palms, calm waters, and authentic Kerala charm.',
    icon: '🌴',
  },
  {
    name: 'Alleppey Backwaters',
    distance: '6 km',
    desc: 'Experience Kerala\'s iconic backwaters with serene houseboat cruises through lush canals and scenic village landscapes.',
    icon: '⛵',
  },
  {
    name: 'Jain Temple',
    distance: '6 km',
    desc: 'A historic and architecturally beautiful Jain temple showcasing intricate craftsmanship and spiritual serenity.',
    icon: '🛕',
  },
  {
    name: 'Mannarasala Snake Temple',
    distance: '30 km',
    desc: 'A revered Hindu temple dedicated to serpent deities, famous for its ancient rituals and dense forest surroundings.',
    icon: '🐍',
  },
  {
    name: 'Ambalapuzha Temple',
    distance: '20 km',
    desc: 'Renowned for its divine Palpayasam prasad, this ancient temple is a spiritual landmark of Alleppey.',
    icon: '🪔',
  },
  {
    name: 'Thumpoly Church',
    distance: '1 km',
    desc: 'A serene historic church located within walking distance, offering a peaceful retreat and stunning architecture.',
    icon: '⛪',
  },
  {
    name: 'Arthunkal Basilica Church',
    distance: '17 km',
    desc: 'A famous basilica known for its annual pilgrimages, stunning interiors, and beautiful coastal setting.',
    icon: '✝️',
  },
  {
    name: 'Revi Karunakaran Museum',
    distance: 'Nearby',
    desc: 'An impressive private museum showcasing rare antiques, art collections, and curios from across the world.',
    icon: '🏛️',
  },
  {
    name: 'Alleppey Lighthouse',
    distance: 'Nearby',
    desc: 'A historic lighthouse offering panoramic views of the Arabian Sea and the scenic Alleppey coastline.',
    icon: '🗼',
  },
  {
    name: 'International Coir Museum',
    distance: 'Nearby',
    desc: 'Explore the history and craft of Kerala\'s coir industry in this unique museum celebrating local heritage.',
    icon: '🌿',
  },
  {
    name: 'Mullakkal Temple',
    distance: 'Nearby',
    desc: 'The presiding deity of Alleppey, this vibrant temple is at the heart of the city\'s cultural and spiritual life.',
    icon: '🏯',
  },
]

export default function AttractionsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 10)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -360 : 360, behavior: 'smooth' })
    setTimeout(updateScrollState, 400)
  }

  return (
    <section
      id="attractions"
      className="py-24"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Explore Nearby</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Nearby Attractions
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Discover the beauty surrounding Ostia Marari — pristine beaches, serene
            backwaters, sacred temples, and unforgettable coastal experiences in Alleppey, Kerala.
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-11 h-11 hidden md:flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
            style={{
              background: canScrollLeft ? '#c9a84c' : '#e8e4dc',
              color: canScrollLeft ? '#fff' : '#aaa',
              border: '2px solid',
              borderColor: canScrollLeft ? '#c9a84c' : '#e8e4dc',
            }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-11 h-11 hidden md:flex items-center justify-center rounded-full shadow-lg transition-all duration-200"
            style={{
              background: canScrollRight ? '#c9a84c' : '#e8e4dc',
              color: canScrollRight ? '#fff' : '#aaa',
              border: '2px solid',
              borderColor: canScrollRight ? '#c9a84c' : '#e8e4dc',
            }}
          >
            <ChevronRight size={20} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            onScroll={updateScrollState}
            className="scrollbar-none overflow-x-auto flex gap-5 pb-3 px-1"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {attractions.map(({ name, distance, desc, icon }) => (
              <div
                key={name}
                className="flex-shrink-0 group overflow-hidden rounded-sm"
                style={{
                  width: 270,
                  scrollSnapAlign: 'start',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = '#c9a84c'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = 'none'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Icon Header */}
                <div
                  className="flex items-center justify-center text-4xl"
                  style={{
                    height: 110,
                    background: 'linear-gradient(135deg, var(--light-2) 0%, var(--light-3) 100%)',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {icon}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={12} style={{ color: '#c9a84c', flexShrink: 0 }} />
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                    >
                      {distance}
                    </span>
                  </div>

                  <h3
                    className="text-dark text-base font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {name}
                  </h3>

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipe hint on mobile */}
        <p
          className="text-center text-xs mt-6 md:hidden"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
        >
          ← Swipe to explore more →
        </p>
      </div>
    </section>
  )
}