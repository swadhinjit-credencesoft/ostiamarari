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
    tagColor: '#c9a84c',
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
        desc: 'Pickup from Alleppey Railway Station or Bus Station and transfer to Ostia Marari – A Boutique Beach Stay. Check into your private beachside room located just 50 meters from Marari Beach. Relax in the calm and peaceful atmosphere while enjoying the beauty of Kerala\'s coastline. In the evening, enjoy the breathtaking sunset by the beach. Overnight stay at Ostia Marari, Alleppey.',
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
    tagColor: '#5da86c',
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
        desc: 'Pickup from Alleppey Railway Station or Bus Station and transfer to Ostia Marari – A Boutique Beach Stay. Check into your private beachside room located just 50 meters from Marari Beach. Relax, unwind and enjoy the serene coastal ambiance. In the evening, enjoy the breathtaking sunset by the beach. Overnight stay at Ostia Marari, Alleppey.',
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
            3 Days Kerala Backwater &amp; Beach Special Package 🌴 — Perfect for Couples &amp; Families.
            Experience the charm of Kerala with a perfect blend of peaceful beaches, enchanting backwaters, and traditional hospitality.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            const isOpen = expanded === pkg.id
            return (
              <div
                key={pkg.id}
                className="rounded-sm overflow-hidden"
                style={{
                  border: '1px solid var(--border)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  background: '#ffffff',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                {/* Card Header */}
                <div
                  className="relative p-8 text-white"
                  style={{ background: pkg.gradient, minHeight: 200 }}
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
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
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
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-raleway)' }}>
                      {pkg.extraPerson}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7">
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

                  {/* Toggle Itinerary */}
                  <button
                    onClick={() => toggle(pkg.id)}
                    className="w-full flex items-center justify-between py-3 px-4 mb-5 text-xs font-semibold tracking-wider uppercase transition-all duration-200"
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
                      <CalendarDays size={14} style={{ color: isOpen ? '#c9a84c' : 'var(--text-light)' }} />
                      View Day-by-Day Itinerary
                    </span>
                    {isOpen ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>

                  {/* Itinerary Accordion */}
                  {isOpen && (
                    <div className="mb-6 space-y-4">
                      {pkg.itinerary.map((item, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-sm"
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
                            className="text-dark font-semibold text-sm mb-1"
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
                        className="p-4 rounded-sm"
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
                        {pkg.foodPlan.map((f, i) => (
                          <p key={i} className="text-xs mb-1" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                            <strong style={{ color: 'var(--text)' }}>{f.place}:</strong> {f.detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

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

        {/* Ideal For Note */}
        <div className="mt-12 text-center">
          <p
            className="text-sm"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            ✨ <strong style={{ color: 'var(--text)' }}>Ideal for Couples &amp; Families</strong> — Pickup &amp; Drop from Alleppey Railway / Bus Station included.
          </p>
        </div>
      </div>
    </section>
  )
}
