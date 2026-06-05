import Link from 'next/link'
import Image from 'next/image'
import { Check, Users, Maximize2, ArrowRight } from 'lucide-react'
import { seoConfig, createPageMetadata, buildWebPageSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = createPageMetadata('premiumGardenSuites')

const amenities = [
  'AC (All Rooms)', 'Complimentary Wi-Fi', 'Twin Beds', 'Ensuite Bathrooms',
  'Electric Kettle', 'Wardrobe', 'Extra Mattress', 'Geyser', 'Private Lawn Access', 'Complimentary Breakfast',
]

export default function PremiumFloorSuitesPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('premiumGardenSuites')} />
      {/* Hero */}
      <section className="relative flex min-h-[420px] md:min-h-[520px] items-end justify-center overflow-hidden px-4 pb-12 pt-36">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/room2.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.82) 100%)' }} />
        <div className="relative z-10 max-w-2xl text-center w-full">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-4 text-white" style={{ background: '#4a9fd4', fontFamily: 'var(--font-raleway)' }}>Garden View</span>
          <span className="gold-line" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Premium Garden View Floor Suites
          </h1>
          <p className="text-white/75 text-sm md:text-base leading-relaxed">
            2 Bedrooms · Garden View · Private Lawn · Up to 6 Guests
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-sm" style={{ height: 320 }}>
                <Image src="/room2.avif" alt="Premium Garden View Floor Suites – Ostia Marari" fill className="object-cover" unoptimized />
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-5 mb-4">
                <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-light)' }}>
                  <Users size={15} style={{ color: '#c9a84c' }} /> Up to 6 guests
                </span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--text-light)' }}>
                  <Maximize2 size={15} style={{ color: '#c9a84c' }} /> 500 sq ft
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
                Premium Floor Suites – 2 Bedrooms
              </h2>
              <div style={{ width: 48, height: 2, background: '#c9a84c', marginBottom: 16 }} />

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                The Premium Floor Suites occupy the ground floor with 2 spacious Twin Bed bedrooms. Both bedrooms (Bedroom 1 &amp; 2) are elegantly furnished with AC, complimentary Wi-Fi, electric kettle, wardrobe, extra single mattress, and a private ensuite bathroom. Guests also enjoy access to the shared 1,000 sq ft private lawn and the open-air outdoor dining area.
              </p>

              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 mb-8">
                {amenities.map((a) => (
                  <div key={a} className="flex items-center gap-2">
                    <Check size={12} style={{ color: '#c9a84c', flexShrink: 0 }} />
                    <span className="text-xs" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>{a}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/Hotel-Resort-Booking?select=boutique-deluxe-room" className="btn-primary flex items-center gap-2">
                  Book Now <ArrowRight size={15} />
                </Link>
                <Link href="/Book-Rooms-Suites" className="btn-outline">
                  View All Rooms
                </Link>
              </div>

              <div className="mt-6 p-4 rounded-sm" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <p className="text-xs" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                  📞 For rates and availability, call us at{' '}
                  <a href="tel:+919846044955" style={{ color: '#c9a84c', fontWeight: 600 }}>+91 98460 44955</a>
                  {' '}or email{' '}
                  <a href="mailto:info@ostiamarari.com" style={{ color: '#c9a84c', fontWeight: 600 }}>info@ostiamarari.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
