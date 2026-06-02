import Image from 'next/image'
import Link from 'next/link'
import { Check, Users, Maximize2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Suites | Ostia Marari – Boutique Beach Stay, Alleppey',
  description:
    'Explore our luxury rooms and suites at Ostia Marari — Premium Top Suites (4 bedrooms, up to 12 guests), Premium Floor Suites (2 bedrooms, up to 6 guests), Premium Full Suites (entire property, 6 bedrooms, up to 18 guests), and Premium Double Suites (1 bedroom) near Thumpoly Beach, Alleppey.',
}

const rooms = [
  {
    id: 'premium-ocean-suite',
    name: 'Premium Top Suites',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    capacity: '12',
    size: '1000 sq ft',
    shortDesc:
      'Experience luxurious 4 Bedrooms beachfront living with elegant interiors, panoramic sea views, and premium comfort.',
    fullDesc:
      'Our flagship suite, the Luxury 4 Bedroom, offers an unmatched blend of space, privacy, and opulence. The private premium king beds or Twin Beds, and garden & Beach view make it the most coveted stay at Ostia Marari. Ideal for couples & Families seeking an extraordinary romantic escape, this villa ensures every moment is absolutely memorable.',
    amenities: [
      'King Bed',
      'Air Conditioning',
      'Smart TV',
      'Private Balcony',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
    ],
    highlights: ['Ocean View', 'King or Twin Beds', 'Private Balcony', 'AC'],
    image: '/room1.jpg',
  },
  {
    id: 'boutique-deluxe-room',
    name: 'Premium Floor Suites',
    tag: 'Garden View',
    tagColor: '#4a9fd4',
    capacity: '6',
    size: '500 sq ft',
    shortDesc:
      'Experience luxurious 2 Bedrooms beachfront living with elegant interiors, garden views, and premium comfort.',
    fullDesc:
      'Our flagship suite, the Luxury 2 Bedrooms, offers an unmatched blend of space, privacy, and opulence, premium king bed or Twin Beds, view make it the most coveted stay at Ostia Marari. Ideal for couples seeking an extraordinary romantic escape, this villa ensures every moment is absolutely memorable for Couples & Families.',
    amenities: [
      'King Bed',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
    ],
    highlights: ['Garden View', 'King or Twin Beds', 'AC'],
    image: '/room2.jpg',
  },
  {
    id: 'family-beach-villa',
    name: 'Premium Full Suites (6 Bedrooms – Entire Property)',
    tag: 'Entire Property',
    tagColor: '#5da86c',
    capacity: '18',
    size: '1500 sq ft',
    shortDesc:
      'Experience luxurious 6 Bedrooms entire property beachfront living with elegant interiors, panoramic sea views, and premium comfort.',
    fullDesc:
      'Our flagship suite, the Luxury 6 Bedrooms, offers an unmatched blend of space, privacy, and opulence, premium king bed or Twin Beds, view make it the most coveted stay at Ostia Marari. Ideal for couples seeking an extraordinary romantic escape, this villa ensures every moment is absolutely memorable for Couples & Families.',
    amenities: [
      'King Beds & Extra Beds',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
    ],
    highlights: ['Ocean View', 'King or Twin Beds', 'Private Balcony', 'AC'],
    image: '/room3.jpg',
  },
  {
    id: 'premium-double-suites',
    name: 'Premium Double Suites',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    capacity: '3',
    size: '150 sq ft',
    shortDesc:
      'Experience luxurious 1 Bedroom beachfront living with elegant interiors, private balcony, and premium comfort.',
    fullDesc:
      'Our flagship suite, the Luxury 1 Bedroom, offers an unmatched blend of space, privacy, and opulence, premium king bed or Twin Beds, view make it the most coveted stay at Ostia Marari. Ideal for couples seeking an extraordinary romantic escape, this villa ensures every moment is absolutely memorable for Couples & Families.',
    amenities: [
      'King Beds',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Private Balcony',
    ],
    highlights: ['King or Twin Beds', 'Private Balcony', 'AC'],
    image: '/room4.jpg',
  },
]

export default function RoomsSuitesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24"
        style={{ minHeight: 340, paddingBottom: 48 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia3.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Our Accommodations</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Rooms &amp; Suites
          </h1>
          <p className="text-white/55 mt-3 text-sm max-w-md mx-auto">
            Luxury stays designed for your comfort &amp; unforgettable coastal moments
          </p>
        </div>
      </section>

      {/* Description Banner */}
      <section
        className="py-10"
        style={{ background: '#faf9f7', borderBottom: '1px solid var(--border)' }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            Discover elegant{' '}
            <strong style={{ color: 'var(--text)' }}>6 Bedrooms</strong> crafted for
            comfort —{' '}
            <span style={{ color: '#c9a84c' }}>Bottom Floor: 2 Bedrooms</span> &amp;{' '}
            <span style={{ color: '#c9a84c' }}>Top Floor: 4 Bedrooms</span> with an{' '}
            <strong style={{ color: 'var(--text)' }}>Elegant Beach View Terrace</strong>.{' '}
            Experience relaxation and create unforgettable coastal memories at Ostia Marari.
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
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-0 overflow-hidden`}
              style={{ border: '1px solid var(--border)', background: '#ffffff' }}
            >
              {/* Image */}
              <div
                className="lg:w-1/2 relative overflow-hidden img-zoom-wrap"
                style={{ minHeight: 340 }}
              >
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 60%, rgba(0,0,0,0.05))',
                  }}
                />
                {/* Tag */}
                <div
                  className="absolute top-5 left-5 px-3 py-1.5 text-xs font-semibold tracking-widest uppercase"
                  style={{
                    background: room.tagColor,
                    color: '#fff',
                    fontFamily: 'var(--font-raleway)',
                  }}
                >
                  {room.tag}
                </div>
              </div>

              {/* Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Meta */}
                <div className="flex items-center gap-5 mb-3">
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: 'var(--text-light)' }}
                  >
                    <Users size={13} style={{ color: '#c9a84c' }} />
                    Up to {room.capacity} guests
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-xs"
                    style={{ color: 'var(--text-light)' }}
                  >
                    <Maximize2 size={13} style={{ color: '#c9a84c' }} />
                    {room.size}
                  </span>
                </div>

                <h2
                  className="text-dark text-2xl lg:text-3xl font-semibold mb-2"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {room.name}
                </h2>

                {/* Gold line */}
                <div
                  style={{
                    width: 48,
                    height: 2,
                    background: '#c9a84c',
                    marginBottom: 16,
                  }}
                />

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-light)' }}
                >
                  {room.fullDesc}
                </p>

                {/* Quick Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1 text-xs font-semibold tracking-wide uppercase"
                      style={{
                        background: 'rgba(201,168,76,0.08)',
                        border: '1px solid rgba(201,168,76,0.3)',
                        color: '#c9a84c',
                        fontFamily: 'var(--font-raleway)',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Amenities grid */}
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-7">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2">
                      <Check size={12} style={{ color: '#c9a84c', flexShrink: 0 }} />
                      <span className="text-xs" style={{ color: 'var(--text-light)' }}>
                        {a}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <Link
                    href={`/booking?select=${encodeURIComponent(room.name)}`}
                    className="btn-primary"
                  >
                    Book This Room <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
