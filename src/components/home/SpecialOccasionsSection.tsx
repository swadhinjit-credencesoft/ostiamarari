import {
  BriefcaseBusiness,
  Cake,
  Gift,
  HeartHandshake,
  PartyPopper,
  Users,
} from 'lucide-react'

const occasions = [
  { icon: Cake, title: 'Birthdays' },
  { icon: Gift, title: 'Anniversaries' },
  { icon: Users, title: 'Family Gatherings' },
  { icon: BriefcaseBusiness, title: 'Corporate Retreats' },
  { icon: HeartHandshake, title: 'Friends Getaways' },
]

export default function SpecialOccasionsSection() {
  return (
    <section
      id="special-occasions"
      className="py-16 md:py-20"
      style={{ background: '#ffffff' }}
    >
      {/* Full-width wrapper — no side padding */}
      <div className="w-full px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">

          {/* Left text — add back readable padding */}
          <div className="px-6 lg:px-10">
            <span className="section-label">Special Occasions</span>
            <span className="gold-line !mx-0" />
            <h2
              className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Celebrate Life&apos;s Special Moments
            </h2>
            <p
              className="mt-5 text-sm md:text-base max-w-xl leading-relaxed"
              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
            >
              Bring your favourite people together by the beach for meaningful celebrations,
              relaxed conversations, and memorable coastal evenings at Ostia Marari.
            </p>
          </div>

          {/* Right card — flush right edge, padding on left only */}
          <div
            className="p-7 md:p-8 lg:mr-0"
            style={{ background: '#faf9f7', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-full flex-shrink-0"
                style={{ background: 'rgba(201,168,76,0.12)' }}
              >
                <PartyPopper size={20} style={{ color: '#c9a84c' }} />
              </div>
              <h3
                className="text-xl font-semibold text-dark"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Perfect for
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {occasions.map(({ icon: Icon, title }) => (
                <div
                  key={title}
                  className="flex items-center gap-3 p-4"
                  style={{ background: '#ffffff', border: '1px solid var(--border)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.10)' }}
                  >
                    <Icon size={17} style={{ color: '#c9a84c' }} />
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: 'var(--text)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}