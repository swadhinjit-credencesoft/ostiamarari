'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ArrowRight, Anchor, Ship, ChevronDown, ChevronUp, CalendarDays } from 'lucide-react'

const packages = [
  {
    id: 'beach-boats-2nights',
    name: 'Beach & Boats Package',
    subtitle: '2 Nights · 3 Days',
    price: '₹14,800',
    priceNote: '/ 2 Persons',
    extraPerson: '+ ₹2,000 per extra person',
    tag: 'Popular',
    highlights: [
      '1 Night Boutique Beach Stay',
      '1 Night Deluxe Houseboat Stay',
      'Pickup & Drop Included',
      'Traditional Kerala Food Included',
      'Backwater Cruise Experience',
      'Breakfast at Beach Stay',
      'Full Board Meals on Houseboat',
      'Bedtime Hot Milk at Beach Stay',
    ],
    icon: Anchor,
    gradient: 'linear-gradient(135deg, #0f4c75 0%, #1b6ca8 50%, #16a085 100%)',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Ostia Marari | Boutique Beach Stay',
        icon: '🏖️',
        desc: "Pickup from Alleppey Railway Station or Bus Station and transfer to Ostia Marari – A Boutique Beach Stay. Check into your private beachside room located just 50 meters from Marari Beach. Relax in the calm and peaceful atmosphere while enjoying the beauty of Kerala's coastline. In the evening, enjoy the breathtaking sunset by the beach. Overnight stay at Ostia Marari, Alleppey.",
      },
      {
        day: 'Day 2',
        title: 'Coco Houseboats | Kerala Backwater Cruise',
        icon: '🚤',
        desc: 'After breakfast, relax at the beach property until checkout. Between 12:00 PM – 1:00 PM, proceed to check into your private houseboat. Cruise through the world-famous Kerala backwaters aboard your floating villa — experience village life, scenic canals, coconut lagoons, and paddy fields. Enjoy a peaceful sunset cruise and overnight stay on the backwaters. Meals Included: Welcome Drink, Traditional Kerala Lunch, Evening Tea & Snacks, Dinner & Breakfast.',
      },
      {
        day: 'Day 3',
        title: 'Alleppey Sightseeing & Departure',
        icon: '🌅',
        desc: 'After breakfast, proceed for optional Alleppey local sightseeing and shopping. Later, drop at Alleppey Railway Station / Bus Station or continue to your next destination.',
      },
    ],
    foodPlan: [
      { place: '🏖️ Ostia Marari', detail: 'Breakfast Included' },
      { place: '🚤 Coco Houseboats', detail: 'Full Board (Breakfast, Lunch & Dinner)' },
    ],
  },
  {
    id: 'beach-boats-3nights',
    name: 'Beach & Boats Package',
    subtitle: '3 Nights · 4 Days',
    price: '₹18,800',
    priceNote: '/ 2 Persons',
    extraPerson: '+ ₹2,000 per extra person',
    tag: 'Best Value',
    highlights: [
      '2 Nights Boutique Beach Stay',
      '1 Night Deluxe Houseboat Stay',
      'Pickup & Drop Included',
      'Traditional Kerala Food Included',
      'Backwater Cruise Experience',
      'Breakfast at Beach Stay',
      'Full Board Meals on Houseboat',
      'Bedtime Hot Milk at Beach Stay',
    ],
    icon: Ship,
    gradient: 'linear-gradient(135deg, #1a3a4a 0%, #0f6e5f 50%, #2d8a6e 100%)',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Ostia Marari | Boutique Beach Stay',
        icon: '🏖️',
        desc: "Pickup from Alleppey Railway Station or Bus Station and transfer to Ostia Marari – A Boutique Beach Stay. Check into your private beachside room located just 50 meters from Marari Beach. Relax, unwind and enjoy the serene coastal ambiance. In the evening, enjoy the breathtaking sunset by the beach. Overnight stay at Ostia Marari, Alleppey.",
      },
      {
        day: 'Day 2',
        title: 'Beach Relaxation & Coastal Exploration',
        icon: '🌴',
        desc: 'Enjoy a full day at the beach property. Explore nearby Thumpoly Beach (just 50 steps away), visit local fishing villages, and soak in the authentic Kerala coastal life. Breakfast included at the property. Evening leisure time at the beach.',
      },
      {
        day: 'Day 3',
        title: 'Coco Houseboats | Kerala Backwater Cruise',
        icon: '🚤',
        desc: 'After breakfast, checkout and proceed to your private houseboat between 12:00 PM – 1:00 PM. Cruise through the world-famous Kerala backwaters, experiencing village life, scenic canals, coconut lagoons, and paddy fields. Enjoy a peaceful sunset cruise and overnight stay on the backwaters. Full board meals included.',
      },
      {
        day: 'Day 4',
        title: 'Alleppey Sightseeing & Departure',
        icon: '🌅',
        desc: 'After breakfast, proceed for optional Alleppey local sightseeing and shopping. Drop at Alleppey Railway Station / Bus Station or continue to your next destination.',
      },
    ],
    foodPlan: [
      { place: '🏖️ Ostia Marari', detail: 'Breakfast Included (2 Nights)' },
      { place: '🚤 Coco Houseboats', detail: 'Full Board (Breakfast, Lunch & Dinner)' },
    ],
  },
]

export default function PackagesSection() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggle = (id: string) => setExpanded(prev => (prev === id ? null : id))

  return (
    <section
      id="packages"
      className="py-16 md:py-24"
      style={{ background: '#ffffff' }}
    >
      {/* Full-width container — no max-width cap, consistent side padding only */}
      <div className="w-full px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">Special Offers</span>
          <span className="gold-line" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Packages
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            3 Days Kerala Backwater &amp; Beach Special Package 🌴 — Perfect for Couples &amp; Families.
            Experience the charm of Kerala with a perfect blend of peaceful beaches, enchanting backwaters, and traditional hospitality.
          </p>
        </div>

        {/* Package Cards — full width, equal 2-col split, no max-width constraint */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start"
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon
            const isOpen = expanded === pkg.id

            return (
              <div
                key={pkg.id}
                className="rounded-sm overflow-hidden flex flex-col w-full"
                style={{
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                  background: '#ffffff',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Card Header — gradient banner */}
                <div
                  className="relative p-7 sm:p-8 text-white"
                  style={{ background: pkg.gradient }}
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

                  {/* Icon circle */}
                  <div
                    className="w-14 h-14 mb-5 flex items-center justify-center"
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
                    style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {pkg.subtitle}
                  </p>
                  <h3
                    className="text-2xl font-semibold mb-5"
                    style={{ fontFamily: 'var(--font-playfair)', color: '#fff' }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span
                      className="text-3xl font-bold"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--font-raleway)' }}
                    >
                      {pkg.priceNote}
                    </span>
                  </div>
                  <p
                    className="text-xs mt-1.5"
                    style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {pkg.extraPerson}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col">

                  <p
                    className="text-xs uppercase tracking-widest mb-4"
                    style={{ color: 'var(--gold)', fontFamily: 'var(--font-raleway)' }}
                  >
                    ✅ Package Includes
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {pkg.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          size={13}
                          style={{ color: '#c9a84c', flexShrink: 0, marginTop: 3 }}
                        />
                        <span
                          className="text-sm leading-snug"
                          style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Toggle Itinerary Button */}
                  <button
                    onClick={() => toggle(pkg.id)}
                    className="w-full flex items-center justify-between py-3 px-4 mb-0 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
                    style={{
                      background: isOpen ? 'rgba(201,168,76,0.08)' : '#f5f5f5',
                      border: '1px solid',
                      borderColor: isOpen ? '#c9a84c' : 'var(--border)',
                      color: isOpen ? '#c9a84c' : 'var(--text-light)',
                      fontFamily: 'var(--font-raleway)',
                      cursor: 'pointer',
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <CalendarDays
                        size={14}
                        style={{ color: isOpen ? '#c9a84c' : 'var(--text-light)' }}
                      />
                      View Day-by-Day Itinerary
                    </span>
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {/* Itinerary Accordion — CSS grid trick, smooth open/close, never unmounts */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                      transition: 'grid-template-rows 0.35s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div className="pt-5 space-y-4">
                        {pkg.itinerary.map((item, i) => (
                          <div
                            key={i}
                            className="p-4"
                            style={{
                              background: '#faf9f7',
                              border: '1px solid var(--border)',
                              borderLeft: '3px solid #c9a84c',
                            }}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{item.icon}</span>
                              <span
                                className="text-xs font-bold uppercase tracking-widest"
                                style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                              >
                                {item.day}
                              </span>
                            </div>
                            <h4
                              className="text-dark font-semibold text-sm mb-1.5"
                              style={{ fontFamily: 'var(--font-playfair)' }}
                            >
                              {item.title}
                            </h4>
                            <p
                              className="text-xs leading-relaxed"
                              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                            >
                              {item.desc}
                            </p>
                          </div>
                        ))}

                        {/* Food Plan */}
                        <div
                          className="p-4"
                          style={{
                            background: 'rgba(201,168,76,0.05)',
                            border: '1px solid rgba(201,168,76,0.2)',
                          }}
                        >
                          <p
                            className="text-xs font-bold uppercase tracking-widest mb-2"
                            style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                          >
                            🍴 Food Plan
                          </p>
                          {pkg.foodPlan.map((f, idx) => (
                            <p
                              key={idx}
                              className="text-xs mb-1"
                              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                            >
                              <strong style={{ color: 'var(--text)' }}>{f.place}:</strong> {f.detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer between accordion and CTA */}
                  <div className="mt-6" />

                  {/* CTA Button — always at bottom, always visible */}
                  <Link
                    href={`/booking?select=${encodeURIComponent(pkg.id)}`}
                    className="flex items-center justify-center gap-2 w-full py-4 font-semibold text-xs tracking-[2px] uppercase transition-all duration-300"
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

        {/* Ideal For Note */}
        <div className="mt-12 text-center">
          <p
            className="text-sm"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            ✨{' '}
            <strong style={{ color: 'var(--text)' }}>Ideal for Couples &amp; Families</strong>{' '}
            — Pickup &amp; Drop from Alleppey Railway / Bus Station included.
          </p>
        </div>
      </div>
    </section>
  )
}