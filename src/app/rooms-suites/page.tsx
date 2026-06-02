import Image from 'next/image'
import { Check, Users, Maximize2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Suites | Ostia Marari',
  description: 'Explore our luxury rooms and suites at Ostia Marari — from the Luxury Villa with Jacuzzi to the Deluxe Room.',
}

const rooms = [
  {
    id: 'luxury-villa-jacuzzi',
    name: 'Luxury Villa with Jacuzzi',
    price: '₹8,500',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    capacity: '2',
    size: '650 sq ft',
    shortDesc: 'Spacious private villa with a poolside view and premium amenities.',
    fullDesc: 'Our flagship suite, the Luxury Villa with Jacuzzi, offers an unmatched blend of space, privacy, and opulence. The private jacuzzi, premium king bed, and poolside view make it the most coveted stay at Mudra. Ideal for couples seeking an extraordinary romantic escape, this villa ensures every moment is absolutely memorable.',
    amenities: ['Private Jacuzzi', 'King Bed', 'Pool View', 'Air Conditioning', 'Smart TV', 'Mini Bar', 'Private Balcony', '24/7 Room Service', 'Free Breakfast', 'Complimentary WiFi', 'Luxury Toiletries', 'Daily Housekeeping'],
    image: 'https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-1.12.31-PM.jpeg',
  },
  {
    id: 'villa-premium',
    name: 'Villa Premium',
    price: '₹6,500',
    tag: 'Sea View',
    tagColor: '#4a9fd4',
    capacity: '2',
    size: '500 sq ft',
    shortDesc: 'Wake up to stunning sunrises and the sound of the waves.',
    fullDesc: 'The Villa Premium offers sweeping sunrise views and a refined ambience. Wake up to the sound of the waves with premium furnishings, a cozy lounge corner, and all modern comforts. A dreamy retreat for couples and solo travelers seeking peace, elegance, and a deep connection with nature.',
    amenities: ['Sea View', 'King Bed', 'Air Conditioning', 'Smart TV', 'Private Balcony', '24/7 Room Service', 'Free Breakfast', 'Complimentary WiFi', 'Luxury Toiletries', 'Daily Housekeeping', 'Pool Access', 'Lounge Area'],
    image: 'https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-12.55.06-PM.jpeg',
  },
  {
    id: 'deluxe-group-room',
    name: 'Deluxe Group Room',
    price: '₹5,500',
    tag: 'Best for Groups',
    tagColor: '#5da86c',
    capacity: '6',
    size: '850 sq ft',
    shortDesc: 'Perfect for families and groups with a spacious scenic balcony.',
    fullDesc: 'Perfect for groups and families, the Deluxe Group Room features multiple beds, a spacious layout, and a scenic balcony. Enjoy shared luxury without compromise. The room is designed to accommodate larger groups while providing an intimate and comfortable experience for every guest.',
    amenities: ['Multiple Beds', 'Air Conditioning', 'Smart TV', 'Scenic Balcony', '24/7 Room Service', 'Free Breakfast', 'Pool Access', 'Complimentary WiFi', 'Luxury Toiletries', 'Daily Housekeeping', 'Large Lounge Area', 'Extra Bedding'],
    image: 'https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-1.12.32-PM-1.jpeg',
  },
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    price: '₹4,000',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    capacity: '2',
    size: '400 sq ft',
    shortDesc: 'Elegant interiors, scenic balcony view, and absolute comfort.',
    fullDesc: 'Our Deluxe Room is the perfect balance of style and value. With elegant interiors, a cozy double bed, and a beautiful balcony view, it offers everything you need for a memorable stay. Ideal for couples and solo travelers who want the full Mudra experience at an accessible price point.',
    amenities: ['Double Bed', 'Air Conditioning', 'Smart TV', 'Balcony', '24/7 Room Service', 'Free Breakfast', 'Complimentary WiFi', 'Luxury Toiletries', 'Daily Housekeeping', 'Pool Access'],
    image: 'https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-12.55.05-PM-scaled.jpeg',
  },
]

export default function RoomsSuitesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative flex items-end justify-center overflow-hidden" style={{ height: 340, paddingBottom: 48 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-04-at-1.12.31-PM.jpeg')" }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Our Accommodations</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Rooms &amp; Suites
          </h1>
          <p className="text-white/55 mt-3 text-sm max-w-md mx-auto">
            Luxury stays designed for your comfort &amp; unforgettable moments
          </p>
        </div>
      </section>

      {/* Rooms */}
      <section className="py-20" style={{ background: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
          {rooms.map((room, idx) => (
            <div
              key={room.id}
              id={room.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 overflow-hidden`}
              style={{ border: '1px solid var(--border)', background: '#ffffff' }}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden img-zoom-wrap" style={{ minHeight: 340 }}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.05))' }} />
                {/* Tag */}
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase"
                  style={{ background: room.tagColor, color: '#fff', fontFamily: 'var(--font-raleway)' }}
                >
                  {room.tag}
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>
                    {room.price}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--text-light)' }}>/ night</span>
                </div>

                <h2 className="text-dark text-2xl lg:text-3xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {room.name}
                </h2>

                {/* Meta */}
                <div className="flex items-center gap-5 mb-4">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Users size={13} style={{ color: '#c9a84c' }} />
                    Up to {room.capacity} guests
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Maximize2 size={13} style={{ color: '#c9a84c' }} />
                    {room.size}
                  </span>
                </div>

                {/* Gold line */}
                <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: 16 }} />

                <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-light)' }}>{room.fullDesc}</p>

                {/* Amenities grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-7">
                  {room.amenities.map(a => (
                    <div key={a} className="flex items-center gap-2">
                      <Check size={12} style={{ color: '#c9a84c', flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: 'var(--text-light)' }}>{a}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <a
                    href="https://bookone.io/Mudra-Villa-and-Resort?bookingEngine=true"
                    target="_blank" rel="noreferrer"
                    className="btn-primary"
                  >
                    Book This Room <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
