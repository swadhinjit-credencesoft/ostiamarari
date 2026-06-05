import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Users, Maximize2 } from 'lucide-react'
import { seoConfig } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Room Rent Tariff | Ostia Marari – Beach Resort Pricing Alleppey',
  description: 'View room rent tariff and pricing for Ostia Marari beach resort in Alleppey, Kerala. Premium Top Suites, Floor Suites, Full Villa and Double Suites with complimentary breakfast.',
  alternates: { canonical: '/Room-Rent-Tariff' },
  openGraph: {
    title: 'Room Rent Tariff | Ostia Marari – Beach Resort Pricing Alleppey',
    description: 'View room rent tariff and pricing at Ostia Marari, Alleppey beach resort.',
    url: `${seoConfig.siteUrl}/Room-Rent-Tariff`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
  },
}

const tariff = [
  {
    id: 'premium-top-suites',
    name: 'Premium Top Suites',
    bedrooms: '4 Bedrooms',
    capacity: '12 Guests',
    size: '1000 sq ft',
    tag: 'Most Popular',
    tagColor: '#c9a84c',
    price: 'Contact for Pricing',
    highlights: ['Ocean View', 'Queen & Twin Beds', 'Private Balcony', 'AC', 'Complimentary Breakfast'],
    bookPath: '/premium-Hotel-Rooms-Topview-Floors-Suites',
    image: '/room1.avif',
  },
  {
    id: 'premium-floor-suites',
    name: 'Premium Floor Suites',
    bedrooms: '2 Bedrooms',
    capacity: '6 Guests',
    size: '500 sq ft',
    tag: 'Garden View',
    tagColor: '#4a9fd4',
    price: 'Contact for Pricing',
    highlights: ['Garden View', 'Twin Beds', 'Ensuite Bathroom', 'AC', 'Complimentary Breakfast'],
    bookPath: '/premium-Hotel-Rooms-garden-view-Floors-Suites',
    image: '/room2.avif',
  },
  {
    id: 'premium-full-villa',
    name: 'Premium Full Suites',
    bedrooms: '6 Bedrooms – Entire Property',
    capacity: '18 Guests',
    size: '1500 sq ft',
    tag: 'Entire Property',
    tagColor: '#5da86c',
    price: 'Contact for Pricing',
    highlights: ['Ocean View', 'Queen & Twin Beds', 'Private Lawn', 'BBQ', 'Indoor Parking'],
    bookPath: '/premium-Hotel-Rooms-full-Villa',
    image: '/room3.avif',
  },
  {
    id: 'premium-double-suites',
    name: 'Premium Double Suites',
    bedrooms: '1 Bedroom',
    capacity: '3 Guests',
    size: '150 sq ft',
    tag: 'Best Value',
    tagColor: '#c97d4c',
    price: 'Contact for Pricing',
    highlights: ['Beach Access (50m)', 'Twin / Queen Bed', 'Private Balcony', 'AC', 'Complimentary Breakfast'],
    bookPath: '/Hotel-Resort-Booking?select=premium-double-suites',
    image: '/room4.avif',
  },
]

export default function RoomRentTariffPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia1.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Room Pricing</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Room Rent Tariff
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Transparent pricing for all our premium rooms and suites at Ostia Marari, Alleppey.
          </p>
        </div>
      </section>

      {/* Tariff Note */}
      <section className="py-8" style={{ background: 'rgba(201,168,76,0.06)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
            📞 <strong style={{ color: 'var(--text)' }}>Room rates vary by season and dates.</strong> Contact us directly on{' '}
            <a href="tel:+919846044955" style={{ color: '#c9a84c', fontWeight: 600 }}>+91 98460 44955</a>{' '}
            or{' '}
            <a href="mailto:info@ostiamarari.com" style={{ color: '#c9a84c', fontWeight: 600 }}>info@ostiamarari.com</a>{' '}
            for the best rates and availability.
          </p>
        </div>
      </section>

      {/* Tariff Cards */}
      <section className="py-16 md:py-24" style={{ background: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Accommodations</span>
            <span className="gold-line" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-dark font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
              Room Categories &amp; Tariff
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              All rooms include complimentary breakfast, Wi-Fi, and direct beach access just 50 steps away.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {tariff.map((room) => (
              <div
                key={room.id}
                className="bg-white overflow-hidden rounded-sm flex flex-col"
                style={{ border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 'clamp(180px, 25vw, 280px)' }}>
                  <Image src={room.image} alt={room.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)' }} />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider" style={{ background: room.tagColor, color: '#fff', fontFamily: 'var(--font-raleway)' }}>
                    {room.tag}
                  </span>
                  {/* Bedrooms badge bottom */}
                  <span className="absolute bottom-4 left-4 text-white text-sm font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {room.bedrooms}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-dark text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {room.name}
                  </h2>

                  <div className="flex items-center gap-5 mb-4">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                      <Users size={12} style={{ color: '#c9a84c' }} /> Up to {room.capacity}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-light)' }}>
                      <Maximize2 size={12} style={{ color: '#c9a84c' }} /> {room.size}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-5">
                    {room.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-1.5">
                        <Check size={11} style={{ color: '#c9a84c', flexShrink: 0 }} />
                        <span className="text-xs" style={{ color: 'var(--text-light)' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price + CTA */}
                  <div className="mt-auto pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>Rate</p>
                        <p className="text-sm font-semibold" style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>{room.price}</p>
                      </div>
                      <Link href={room.bookPath} className="btn-primary text-xs px-5 py-2.5">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Packages CTA */}
          <div className="mt-16 text-center p-8 rounded-sm" style={{ background: '#ffffff', border: '1px solid var(--border)' }}>
            <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Looking for Package Deals?
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              Explore our Beach &amp; Boats packages combining beach stay with Kerala backwater houseboat experience.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link href="/Hotel-Resort-Booking" className="btn-primary">Enquire Now</Link>
              <Link href="/Book-Rooms-Suites" className="btn-outline">View All Rooms</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
