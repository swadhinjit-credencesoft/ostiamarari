import Image from 'next/image'
import Link from 'next/link'
import { Check, Users, Maximize2, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { buildCollectionSchema, buildWebPageSchema, createPageMetadata, seoConfig } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('roomsSuites')

const rooms = [
  {
    id: 'premium-ocean-suite',
    name: 'Premium Top Suites',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    capacity: '12',
    size: '1000 sq ft',
    shortDesc:
      'Experience luxurious 4 Bedrooms on the first floor with ocean views, private balconies, and premium comfort for up to 12 guests.',
    fullDesc:
      'The Premium Top Suites occupy the entire first floor with 4 beautifully appointed bedrooms. Bedroom 3 & 6 feature Twin Beds with small attached balconies. Bedroom 4 & 5 feature Queen Size Beds with full attached balconies and stunning views. All bedrooms include AC, Wi-Fi, electric kettle, wardrobe, extra mattress, and an ensuite bathroom with geyser, towels, and toiletries.',
    amenities: [
      'AC (All Rooms)',
      'Complimentary Wi-Fi',
      'Queen & Twin Beds',
      'Attached Balconies',
      'Ensuite Bathrooms',
      'Electric Kettle',
      'Wardrobe',
      'Extra Mattress',
      'Geyser',
      'Complimentary Breakfast',
    ],
    highlights: ['Ocean View', 'Queen & Twin Beds', 'Private Balcony', 'AC'],
    image: '/room1.avif',
  },
  {
    id: 'boutique-deluxe-room',
    name: 'Premium Floor Suites',
    tag: 'Garden View',
    tagColor: '#4a9fd4',
    capacity: '6',
    size: '500 sq ft',
    shortDesc:
      'Experience luxurious 2 Bedrooms on the ground floor with garden views, ensuite bathrooms, and premium comfort for up to 6 guests.',
    fullDesc:
      'The Premium Floor Suites occupy the ground floor with 2 spacious Twin Bed bedrooms. Both bedrooms (Bedroom 1 & 2) are elegantly furnished with AC, complimentary Wi-Fi, electric kettle, wardrobe, extra single mattress, and a private ensuite bathroom. Guests also enjoy access to the shared 1,000 sq ft private lawn and the open-air outdoor dining area.',
    amenities: [
      'AC (All Rooms)',
      'Complimentary Wi-Fi',
      'Twin Beds',
      'Ensuite Bathrooms',
      'Electric Kettle',
      'Wardrobe',
      'Extra Mattress',
      'Geyser',
      'Private Lawn Access',
      'Complimentary Breakfast',
    ],
    highlights: ['Garden View', 'Twin Beds', 'Ensuite Bathroom', 'AC'],
    image: '/room2.avif',
  },
  {
    id: 'family-beach-villa',
    name: 'Premium Full Suites (6 Bedrooms – Entire Property)',
    tag: 'Entire Property',
    tagColor: '#5da86c',
    capacity: '18',
    size: '1500 sq ft',
    shortDesc:
      'Book the entire villa — 6 bedrooms across 2 floors, private lawn, open-air dining, ocean views, and premium comfort for up to 18 guests.',
    fullDesc:
      'The entire property features 6 premium bedrooms across 2 floors. Ground Floor: 2 Twin Bed rooms (Bedroom 1 & 2) with ensuite bathrooms. First Floor: 2 Twin Bed rooms (Bedroom 3 & 6) with small balconies + 2 Queen Bed rooms (Bedroom 4 & 5) with full attached balconies. All 6 bedrooms have AC, Wi-Fi, electric kettle, wardrobe, extra mattress, and ensuite bathrooms with geyser, towels & toiletries. Includes a 1,000 sq ft private lawn, open-air outdoor dining area, living room with TV & CCTV, music system, BBQ (at extra cost), and indoor parking for 3 cars.',
    amenities: [
      'All 6 Bedrooms',
      'AC Throughout',
      'Complimentary Wi-Fi',
      'Private 1,000 sq ft Lawn',
      'Open-Air Dining Area',
      'BBQ (Extra Cost)',
      'Music System / Karaoke',
      'Indoor Parking (3 Cars)',
      'CCTV & Security',
      'Complimentary Breakfast',
    ],
    highlights: ['Ocean View', 'Queen & Twin Beds', 'Private Balcony', 'Private Lawn'],
    image: '/room3.avif',
  },
  {
    id: 'premium-double-suites',
    name: 'Premium Double Suites',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    capacity: '3',
    size: '150 sq ft',
    shortDesc:
      'A cosy 1 Bedroom suite ideal for couples or small groups, with beachfront access, private balcony, and premium comfort.',
    fullDesc:
      'The Premium Double Suite is a beautifully appointed single bedroom retreat. The room features a Queen or Twin Bed, AC, complimentary Wi-Fi, electric kettle, wardrobe, extra mattress, and a private ensuite bathroom with geyser, towels, and toiletries. Guests have access to the shared property lawn, outdoor dining area, and just 50 metres from the serene shores of Thumpoly Beach.',
    amenities: [
      'Air Conditioning',
      'Complimentary Wi-Fi',
      'Queen or Twin Bed',
      'Ensuite Bathroom',
      'Electric Kettle',
      'Wardrobe',
      'Extra Mattress',
      'Geyser',
      'Private Balcony',
      'Complimentary Breakfast',
    ],
    highlights: ['Beach Access (50m)', 'Twin / Queen Bed', 'Private Balcony', 'AC'],
    image: '/room4.avif',
  },
]

export default function RoomsSuitesPage() {
  const roomsSchema = buildCollectionSchema(
    'roomsSuites',
    rooms.map(room => ({
      name: room.name,
      url: `${seoConfig.siteUrl}/rooms-suites#${room.id}`,
      image: `${seoConfig.siteUrl}${room.image}`,
      description: room.shortDesc,
    }))
  )

  return (
    <>
      <JsonLd data={[buildWebPageSchema('roomsSuites'), roomsSchema]} />
      {/* Page hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia3.avif')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%)',
          }}
        />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Rooms &amp; Suites</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Rooms &amp; Suites
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Choose elegant beachside suites designed for comfort, privacy, and memorable coastal stays.
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
                    href={`/booking?select=${encodeURIComponent(room.id)}`}
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

