'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Users,
  Maximize2,
  ArrowRight,
  Check,
} from 'lucide-react'

const rooms = [
  {
    id: 'premium-ocean-suite',
    name: 'Premium Ocean Suite',
    price: '₹18,500',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    shortDesc:
      'Experience luxurious beachfront living with elegant interiors, panoramic sea views, and premium comfort.',
    capacity: '2',
    size: '750 sq ft',
    amenities: [
      'Ocean View',
      'King Bed',
      'Private Balcony',
      'AC',
      'Smart TV',
      'Mini Bar',
      'Free Wi-Fi',
      'Breakfast Included',
    ],
    image:
      '/room1.jpg',
  },

  {
    id: 'boutique-deluxe-room',
    name: 'Boutique Deluxe Room',
    price: '₹12,500',
    tag: 'Sea View',
    tagColor: '#4a9fd4',
    shortDesc:
      'Wake up to calming waves and stylish interiors crafted for a relaxing coastal getaway.',
    capacity: '2',
    size: '550 sq ft',
    amenities: [
      'Sea View',
      'Queen Bed',
      'AC',
      'Smart TV',
      'Balcony',
      'Room Service',
      'Free Breakfast',
      'Luxury Bath',
    ],
    image:
      '/room2.jpg',
  },

  {
    id: 'family-beach-villa',
    name: 'Family Beach Villa',
    price: '₹24,000',
    tag: 'Best for Families',
    tagColor: '#5da86c',
    shortDesc:
      'Spacious beach villa designed for families and groups with premium comfort and stunning outdoor spaces.',
    capacity: '6',
    size: '1200 sq ft',
    amenities: [
      'Multiple Beds',
      'Private Lounge',
      'AC',
      'Smart TV',
      'Beach Access',
      'Breakfast Included',
      'Private Sit-Out',
      'Room Service',
    ],
    image:
      '/room3.jpg',
  },

  {
    id: 'classic-deluxe-room',
    name: 'Classic Deluxe Room',
    price: '₹9,500',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    shortDesc:
      'Elegant boutique-style room offering warmth, comfort, and a peaceful stay near the beach.',
    capacity: '2',
    size: '450 sq ft',
    amenities: [
      'Double Bed',
      'AC',
      'Smart TV',
      'Free Wi-Fi',
      'Room Service',
      'Breakfast Included',
      'Luxury Bathroom',
      'Garden View',
    ],
    image:
      '/room4.jpg',
  },
]

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      className="py-24"
      style={{ background: '#f8f8f8' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">
            Accommodations
          </span>

          <span className="gold-line" />

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{
              fontFamily: 'var(--font-playfair)',
            }}
          >
            Our Rooms &amp; Suites
          </h2>

          <p
            className="mt-4 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Discover elegant beachfront stays crafted
            for comfort, relaxation, and unforgettable
            coastal memories at Ostia Marari.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group overflow-hidden rounded-sm"
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                boxShadow:
                  '0 2px 12px rgba(0,0,0,0.04)',
                transition:
                  'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(
                  e.currentTarget as HTMLDivElement
                ).style.borderColor = '#c9a84c'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow =
                  '0 8px 30px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                ;(
                  e.currentTarget as HTMLDivElement
                ).style.borderColor = 'var(--border)'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow =
                  '0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
                  }}
                />

                {/* Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                  style={{
                    background: room.tagColor,
                    color: '#fff',
                    fontFamily:
                      'var(--font-raleway)',
                  }}
                >
                  {room.tag}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 text-right">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      fontFamily:
                        'var(--font-playfair)',
                      color: '#c9a84c',
                    }}
                  >
                    {room.price}
                  </span>

                  <span
                    className="block text-white/60 text-xs"
                    style={{
                      fontFamily:
                        'var(--font-raleway)',
                    }}
                  >
                    / night
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-dark text-xl font-semibold mb-1"
                  style={{
                    fontFamily:
                      'var(--font-playfair)',
                  }}
                >
                  {room.name}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-5 mb-3">
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{
                      color: 'var(--text-light)',
                    }}
                  >
                    <Users
                      size={12}
                      style={{ color: '#c9a84c' }}
                    />

                    Up to {room.capacity} guests
                  </span>

                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{
                      color: 'var(--text-light)',
                    }}
                  >
                    <Maximize2
                      size={12}
                      style={{ color: '#c9a84c' }}
                    />

                    {room.size}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{
                    color: 'var(--text-light)',
                  }}
                >
                  {room.shortDesc}
                </p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-2 mb-5">
                  {room.amenities
                    .slice(0, 6)
                    .map((a) => (
                      <div
                        key={a}
                        className="flex items-center gap-1.5"
                      >
                        <Check
                          size={11}
                          style={{
                            color: '#c9a84c',
                            flexShrink: 0,
                          }}
                        />

                        <span
                          className="text-xs"
                          style={{
                            color:
                              'var(--text-light)',
                          }}
                        >
                          {a}
                        </span>
                      </div>
                    ))}
                </div>

                {/* Buttons */}
                <div
                  className="flex items-center gap-4 pt-4"
                  style={{
                    borderTop:
                      '1px solid var(--border)',
                  }}
                >
                  <a
                    href="https://ostiamarari.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs px-5 py-2.5"
                  >
                    Book Now
                  </a>

                  <Link
                    href={`/rooms-suites#${room.id}`}
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase transition-colors hover:opacity-80"
                    style={{
                      color: '#c9a84c',
                      fontFamily:
                        'var(--font-raleway)',
                    }}
                  >
                    View Details

                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/rooms-suites"
            className="btn-outline"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </section>
  )
}