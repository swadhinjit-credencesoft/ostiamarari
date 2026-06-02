'use client'

import {
  Waves,
  Sparkles,
  MountainSnow,
} from 'lucide-react'

const features = [
  {
    Icon: Waves,
    title: 'Direct Beach Access',
    desc:
      'Enjoy peaceful mornings and breathtaking sunsets with direct access to the serene beaches of Thumpoly Beach at Alleppey, near Marari.',
  },
  {
    Icon: Sparkles,
    title: 'Luxury Boutique Stay',
    desc:
      'Experience elegant interiors, personalized hospitality, and premium comfort crafted for unforgettable stays.',
  },
  {
    Icon: MountainSnow,
    title: 'Scenic Coastal Views',
    desc:
      'Wake up to calming ocean breezes, lush surroundings, and stunning coastal Fisherman Village landscapes every day.',
  },
]

export default function WhyChooseSection() {
  return (
    <section
      id="why-choose"
      className="py-24"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">
            Our Highlights
          </span>

          <span className="gold-line" />

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{
              fontFamily: 'var(--font-playfair)',
            }}
          >
            Why Choose Ostia Marari?
          </h2>

          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{
              color: 'var(--text-light)',
              fontFamily: 'var(--font-raleway)',
            }}
          >
            Discover a refined coastal escape where
            luxury, tranquility, and personalized
            hospitality come together for a truly
            unforgettable beachside experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group text-center p-10 rounded-sm"
              style={{
                background: '#ffffff',
                border: '1px solid var(--border)',
                transition:
                  'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                ;(
                  e.currentTarget as HTMLDivElement
                ).style.borderColor = '#c9a84c'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow =
                  '0 8px 30px rgba(0,0,0,0.06)'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.transform =
                  'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                ;(
                  e.currentTarget as HTMLDivElement
                ).style.borderColor =
                  'var(--border)'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.boxShadow =
                  'none'

                ;(
                  e.currentTarget as HTMLDivElement
                ).style.transform =
                  'translateY(0px)'
              }}
            >

              {/* Icon Circle */}
              <div
                className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-all duration-300"
                style={{
                  border:
                    '1px solid rgba(201,168,76,0.3)',
                  borderRadius: '50%',
                  background:
                    'rgba(201,168,76,0.06)',
                }}
              >
                <Icon
                  size={26}
                  style={{ color: '#c9a84c' }}
                />
              </div>

              {/* Title */}
              <h3
                className="text-dark text-xl font-semibold mb-3"
                style={{
                  fontFamily:
                    'var(--font-playfair)',
                }}
              >
                {title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily:
                    'var(--font-raleway)',
                  color: 'var(--text-light)',
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}