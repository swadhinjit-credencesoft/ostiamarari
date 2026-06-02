import Image from 'next/image'
import Link from 'next/link'
import { Check, Users, Maximize2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Suites | Ostia Marari – Boutique Beach Stay, Alleppey',
  description: 'Explore our luxury rooms and suites at Ostia Marari — Premium Top Suites (4 bedrooms), Premium Floor Suites (2 bedrooms), Premium Full Suites (entire property), and Premium Double Suites near Thumpoly Beach, Alleppey.',
}

const rooms = [
  {
    id: 'premium-top-suites',
    name: 'Premium Top Suites',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    capacity: '12',
    size: '1000 sq ft',
    shortDesc: 'Flagship Luxury 4 Bedroom Suite on the top floor with ocean views and private balcony.',
    fullDesc: 'Our flagship Luxury 4 Bedroom Suite offers an unmatched blend of space, privacy, and comfort. Featuring premium king or twin beds, garden and beach views, and a private balcony, it is ideal for families and groups seeking a memorable coastal getaway.',
    amenities: [
      'King or Twin Beds',
      'Air Conditioning',
      'Smart TV',
      'Private Balcony',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Ocean View',
      'Luxury 4 Bedrooms',
    ],
    image: '/room1.jpg',
  },
  {
    id: 'premium-floor-suites',
    name: 'Premium Floor Suites',
    tag: 'Garden View',
    tagColor: '#4a9fd4',
    capacity: '6',
    size: '500 sq ft',
    shortDesc: 'Elegant 2 Bedroom Suite on the bottom floor with garden views and premium comfort.',
    fullDesc: 'Our Luxury 2 Bedroom Suite combines comfort, privacy, and elegance. Featuring premium king or twin beds and spacious interiors, it is ideal for couples and families seeking a peaceful beachside stay.',
    amenities: [
      'King or Twin Beds',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Garden View',
      'Luxury 2 Bedrooms',
    ],
    image: '/room2.jpg',
  },
  {
    id: 'premium-full-suites',
    name: 'Premium Full Suites',
    tag: 'Entire Property',
    tagColor: '#5da86c',
    capacity: '18',
    size: '1500 sq ft',
    shortDesc: 'Exclusive access to the entire property — all 6 bedrooms, perfect for large families and events.',
    fullDesc: 'Our Luxury 6 Bedroom Suite offers exclusive access to the entire property. Perfect for large families, celebrations, and group vacations seeking privacy and premium comfort.',
    amenities: [
      'King Beds & Extra Beds',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Ocean View',
      'Private Balcony',
      'Luxury 6 Bedrooms',
    ],
    image: '/room3.jpg',
  },
  {
    id: 'premium-double-suites',
    name: 'Premium Double Suites',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    capacity: '3',
    size: '150 sq ft',
    shortDesc: 'Cozy 1 Bedroom Suite designed for couples and solo travelers with private balcony.',
    fullDesc: 'Our Luxury Double Suite is designed for couples and solo travelers seeking comfort, privacy, and a relaxing beachside experience.',
    amenities: [
      'King Bed',
      'Air Conditioning',
      'Smart TV',
      '24/7 Room Service',
      'Free Breakfast',
      'Complimentary WiFi',
      'Complimentary Toiletries',
      'Daily Housekeeping',
      'Private Balcony',
    ],
    image: '/room4.jpg',
  },
]

export default function RoomsSuitesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24" style={{ minHeight: 340, paddingBottom: 48 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia3.png')" }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Our Accommodations</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Rooms &amp; Suites
          </h1>
          <p className="text-white/55 mt-3 text-sm max-w-md mx-auto">
            Luxury stays designed for your comfort &amp; unforgettable coastal moments
          </p>
        </div>
      </section>

      {/* Description Banner */}
      <section className="py-10" style={{ background: '#faf9f7', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
            Discover elegant <strong style={{ color: 'var(--text)' }}>6 Bedrooms</strong> crafted for comfort —{' '}
            <span style={{ color: '#c9a84c' }}>Bottom Floor: 2 Bedrooms</span> &amp;{' '}
            <span style={{ color: '#c9a84c' }}>Top Floor: 4 Bedrooms</span> with an Elegant Beach View Terrace.
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
                  unoptimized
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
                {/* Meta */}
                <div className="flex items-center gap-5 mb-3">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Users size={13} style={{ color: '#c9a84c' }} />
                    Up to {room.capacity} guests
                  </span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                    <Maximize2 size={13} style={{ color: '#c9a84c' }} />
                    {room.size}
                  </span>
                </div>

                <h2 className="text-dark text-2xl lg:text-3xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {room.name}
                </h2>

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
