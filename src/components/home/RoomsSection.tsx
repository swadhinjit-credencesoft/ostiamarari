'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Maximize2, ArrowRight, Check } from 'lucide-react'

const rooms = [
  {
    id: 'premium-ocean-suite',
    name: 'Premium Top Suites',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    shortDesc: 'Luxury 4 Bedrooms with beachfront access, panoramic sea views, private balcony, and premium comfort for up to 12 guests.',
    capacity: '12',
    size: '1000 sq ft',
    amenities: ['Ocean View', 'King or Twin Beds', 'Private Balcony', 'Air Conditioning'],
    image: '/room1.avif',
  },
  {
    id: 'boutique-deluxe-room',
    name: 'Premium Floor Suites',
    tag: 'Garden View',
    tagColor: '#4a9fd4',
    shortDesc: 'Luxury 2 Bedrooms beachfront living with elegant interiors, garden views, and premium comfort for up to 6 guests.',
    capacity: '6',
    size: '500 sq ft',
    amenities: ['Garden View', 'King or Twin Beds', 'Air Conditioning'],
    image: '/room2.avif',
  },
  {
    id: 'family-beach-villa',
    name: 'Premium Full Suites (6 Bedrooms – Entire Property)',
    tag: 'Entire Property',
    tagColor: '#5da86c',
    shortDesc: 'Luxury 6 Bedrooms entire property with ocean views, private balcony, and premium comfort for up to 18 guests.',
    capacity: '18',
    size: '1500 sq ft',
    amenities: ['Ocean View', 'King or Twin Beds', 'Private Balcony', 'Air Conditioning'],
    image: '/room3.avif',
  },
  {
    id: 'premium-double-suites',
    name: 'Premium Double Suites',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    shortDesc: 'Luxury 1 Bedroom beachfront living with elegant interiors, private balcony, and premium comfort for up to 3 guests.',
    capacity: '3',
    size: '150 sq ft',
    amenities: ['King or Twin Beds', 'Private Balcony', 'Air Conditioning'],
    image: '/room4.avif',
  },
]

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-24" style={{ background: '#f8f8f8' }}>
      {/* Full-width container — consistent padding, no max-width cap */}
      <div className="w-full px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Accommodations</span>
          <span className="gold-line" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Rooms &amp; Suites
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: 'var(--text-light)' }}
          >
            Discover elegant <strong>6 Bedrooms</strong> crafted for comfort —{' '}
            <span style={{ color: '#c9a84c' }}>Bottom Floor: 2 Bedrooms</span>{' '}
            &amp; <span style={{ color: '#c9a84c' }}>Top Floor: 4 Bedrooms</span>{' '}
            with an Elegant Beach View Terrace. Experience relaxation and create unforgettable coastal memories at Ostia Marari.
          </p>
        </div>

        {/* Rooms Grid — 2 columns, full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group overflow-hidden rounded-sm flex flex-col h-full transition-all duration-300 border hover:border-[#c9a84c] bg-white"
              style={{
                border: '1px solid var(--border)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.10)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden shrink-0" style={{ height: 'clamp(200px, 28vw, 320px)' }}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }}
                />
                {/* Tag badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                  style={{ background: room.tagColor, color: '#fff', fontFamily: 'var(--font-raleway)' }}
                >
                  {room.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3
                  className="text-dark text-lg sm:text-xl font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {room.name}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-5 mb-3">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Users size={12} style={{ color: '#c9a84c' }} />
                    Up to {room.capacity} guests
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Maximize2 size={12} style={{ color: '#c9a84c' }} />
                    {room.size}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-light)' }}>
                  {room.shortDesc}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-5">
                  {room.amenities.slice(0, 6).map((a) => (
                    <div key={a} className="flex items-center gap-1.5">
                      <Check size={11} style={{ color: '#c9a84c', flexShrink: 0 }} />
                      <span className="text-xs leading-tight" style={{ color: 'var(--text-light)' }}>{a}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons — pushed to bottom */}
                <div
                  className="flex items-center gap-4 pt-4 mt-auto"
                  style={{ borderTop: '1px solid var(--border)' }}
                >
                  <Link
                    href={`/Hotel-Resort-Booking?select=${encodeURIComponent(room.id)}`}
                    className="btn-primary text-xs px-5 py-2.5"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/Book-Rooms-Suites#${room.id}`}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                  >
                    View Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link href="/Book-Rooms-Suites" className="btn-outline">
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}