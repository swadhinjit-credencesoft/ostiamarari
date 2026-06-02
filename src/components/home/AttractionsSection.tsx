'use client'

import Image from 'next/image'
import { MapPin } from 'lucide-react'

const attractions = [
  {
    name: 'Alleppey Beach',
    distance: '10 min drive',
    desc:
      'A beautiful coastal destination known for golden sunsets, lighthouse views, and relaxing beachside experiences.',
    image:
      '/alpeybeach.png',
  },

  {
    name: 'Marari Beach',
    distance: '15 min drive',
    desc:
      'A peaceful and scenic beach destination famous for swaying coconut palms, calm waters, and authentic Kerala charm.',
    image:
      '/mararibeach.png',
  },

  {
    name: 'Alappuzha Backwaters',
    distance: '20 min drive',
    desc:
      'Experience Kerala’s iconic backwaters with serene houseboat cruises through lush canals and scenic village landscapes.',
    image:
      '/backwater.png',
  },
]

export default function AttractionsSection() {
  return (
    <section
      id="attractions"
      className="py-24"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">
            Explore Nearby
          </span>

          <span className="gold-line" />

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{
              fontFamily: 'var(--font-playfair)',
            }}
          >
            Nearby Attractions
          </h2>

          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{
              color: 'var(--text-light)',
            }}
          >
            Discover the beauty surrounding Ostia
            Marari — pristine beaches, serene
            backwaters, and unforgettable coastal
            experiences in Alleppey, Kerala.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {attractions.map(
            ({ name, distance, desc, image }) => (
              <div
                key={name}
                className="group overflow-hidden rounded-sm"
                style={{
                  background: '#ffffff',
                  border:
                    '1px solid var(--border)',
                  transition:
                    'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.borderColor =
                    '#c9a84c'

                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.boxShadow =
                    '0 8px 30px rgba(0,0,0,0.06)'

                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.transform =
                    'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.borderColor =
                    'var(--border)'

                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.boxShadow =
                    'none'

                  ;(
                    e.currentTarget as HTMLDivElement
                  ).style.transform =
                    'translateY(0px)'
                }}
              >
                
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)',
                    }}
                  />

                  {/* Distance Badge */}
                  <div
                    className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 text-xs"
                    style={{
                      background: '#c9a84c',
                      color: '#ffffff',
                      fontFamily:
                        'var(--font-raleway)',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                    }}
                  >
                    <MapPin size={11} />

                    {distance}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    className="text-dark text-lg font-semibold mb-2"
                    style={{
                      fontFamily:
                        'var(--font-playfair)',
                    }}
                  >
                    {name}
                  </h3>

                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      color: 'var(--text-light)',
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}