'use client'

import Link from 'next/link'
import { Check, ArrowRight, Anchor, Ship } from 'lucide-react'

const packages = [
  {
    id: 'beach-boats-2nights',
    name: 'Beach & Boats Package',
    subtitle: '2 Nights',
    price: '₹14,800',
    priceNote: '/ 2 Persons',
    tag: 'Popular',
    tagColor: '#c9a84c',
    highlights: [
      '1 Night Boutique Beach Stay',
      '1 Night Deluxe Houseboat Stay',
      'Pickup & Drop',
      'Traditional Kerala Meals',
      'Backwater Cruise',
      'Breakfast at Beach Stay',
      'Full Board Meals on Houseboat',
    ],
    icon: Anchor,
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b6ca8 50%, #16a085 100%)',
  },
  {
    id: 'beach-boats-3nights',
    name: 'Beach & Boats Package',
    subtitle: '3 Nights',
    price: '₹18,800',
    priceNote: '/ 2 Persons',
    tag: 'Best Value',
    tagColor: '#5da86c',
    highlights: [
      '2 Nights Boutique Beach Stay',
      '1 Night Deluxe Houseboat Stay',
      'Pickup & Drop',
      'Traditional Kerala Meals',
      'Backwater Cruise',
      'Breakfast at Beach Stay',
      'Full Board Meals on Houseboat',
    ],
    icon: Ship,
    gradient: 'linear-gradient(135deg, #1a3a4a 0%, #0f6e5f 50%, #2d8a6e 100%)',
  },
]

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="py-24"
      style={{ background: '#f8f8f8' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Special Offers</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Packages
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            Combine the best of coastal beaches and Kerala backwaters with our
            curated beach &amp; houseboat packages. An unforgettable experience awaits.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <div
                key={pkg.id}
                className="rounded-sm overflow-hidden"
                style={{
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  background: '#ffffff',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
                }}
              >
                {/* Card Header */}
                <div
                  className="relative p-8 text-white"
                  style={{ background: pkg.gradient, minHeight: 180 }}
                >
                  {/* Badge */}
                  <div
                    className="absolute top-5 right-5 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      border: '1px solid rgba(255,255,255,0.35)',
                      color: '#fff',
                      fontFamily: 'var(--font-raleway)',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {pkg.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 mb-4 flex items-center justify-center"
                    style={{
                      background: 'rgba(255,255,255,0.15)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: '50%',
                    }}
                  >
                    <Icon size={26} style={{ color: '#c9a84c' }} />
                  </div>

                  <p
                    className="text-xs uppercase tracking-[3px] mb-1"
                    style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {pkg.subtitle}
                  </p>
                  <h3
                    className="text-2xl font-semibold"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#fff' }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span
                      className="text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-raleway)' }}
                    >
                      {pkg.priceNote}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
                  <p
                    className="text-xs uppercase tracking-widest mb-4"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-raleway)' }}
                  >
                    Package Includes
                  </p>
                  <ul className="space-y-2.5 mb-7">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={13}
                          style={{ color: '#c9a84c', flexShrink: 0, marginTop: 2 }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/booking?select=${encodeURIComponent(pkg.name + ' – ' + pkg.subtitle)}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 font-semibold text-xs tracking-[2px] uppercase transition-all duration-300"
                    style={{
                      background: '#c9a84c',
                      color: '#ffffff',
                      border: '2px solid #c9a84c',
                      fontFamily: 'var(--font-raleway)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#c9a84c'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#c9a84c'
                      e.currentTarget.style.color = '#ffffff'
                    }}
                  >
                    Book This Package
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
