import {
  Wifi,
  Wind,
  Tv,
  Car,
  ShieldCheck,
  Flame,
  Music,
  Refrigerator,
  Droplets,
  Zap,
  BedDouble,
  Shirt,
  Camera,
  Utensils,
  Trees,
  Tent,
} from 'lucide-react'

const amenities = [
  { icon: Wifi,         label: 'Complimentary Wi-Fi' },
  { icon: Wind,         label: 'Air Conditioning (All Rooms)' },
  { icon: Tv,           label: 'Smart TV' },
  { icon: Refrigerator, label: 'Refrigerator' },
  { icon: Flame,        label: 'BBQ / Barbecue (Extra Cost)' },
  { icon: Music,        label: 'Music System / Speaker' },
  { icon: Trees,        label: 'Private Lawn (1,000 sq ft)' },
  { icon: Tent,         label: 'Balcony / Terrace' },
  { icon: Car,          label: 'Indoor Parking (3 + 2 Cars)' },
  { icon: Droplets,     label: 'Water Purifier' },
  { icon: Zap,          label: 'Inverter / Power Backup' },
  { icon: ShieldCheck,  label: 'CCTV (External Areas)' },
  { icon: Camera,       label: 'Fire Extinguisher' },
  { icon: BedDouble,    label: 'Extra Mattress Available' },
  { icon: Shirt,        label: 'Iron & Wardrobe' },
  { icon: Utensils,     label: 'Equipped Kitchen' },
]

const howToReach = [
  { label: 'Nedumbassery Airport', distance: '82 km' },
  { label: 'Alleppey Railway Station', distance: '5 km' },
  { label: 'Alleppey Bus Stand', distance: '6 km' },
  { label: 'Thumpoly Junction', distance: '1 km' },
  { label: 'Thumpoly Beach', distance: '50 m away' },
]

const houseRules = [
  'Check-in: 2:00 PM  |  Check-out: 11:00 AM',
  'All-male groups allowed (Security deposit: ₹6,000)',
  'Alcohol allowed in designated outdoor areas only',
  'Smoking permitted in exterior areas only',
  'Outside food allowed — Outside vendors NOT allowed',
  'Non-vegetarian food: cooking, reheating & consumption allowed',
  'Noise to be kept minimal after 10:00 PM',
  'Not pet-friendly · Not wheelchair-accessible',
  'Caretaker on-site · CCTV in external areas',
]

export default function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-24"
      style={{ background: '#f8f6f1' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">What We Offer</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Amenities &amp; Facilities
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)' }}
          >
            Every comfort thoughtfully arranged for an unforgettable coastal retreat at Ostia Marari.
          </p>
        </div>

        {/* StayVista Badge */}
        <div className="flex justify-center mb-14">
          <div
            className="inline-flex items-center gap-4 px-6 py-4"
            style={{
              background: '#fff',
              border: '1px solid var(--border)',
              borderLeft: '4px solid #c9a84c',
            }}
          >
            <div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-0.5"
                style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
              >
                StayVista Verified
              </p>
              <p
                className="text-dark font-bold text-lg"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                ⭐ 4.9 / 5 &nbsp;—&nbsp; Guest Favourite!
              </p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                Based on 7 verified guest reviews
              </p>
            </div>
          </div>
        </div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Amenities Grid */}
          <div
            className="lg:col-span-2 p-8"
            style={{ background: '#fff', border: '1px solid var(--border)' }}
          >
            <h3
              className="text-xl font-semibold text-dark mb-6"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Property Amenities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-4">
              {amenities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ background: 'rgba(201,168,76,0.10)' }}
                  >
                    <Icon size={16} style={{ color: '#c9a84c' }} />
                  </div>
                  <span
                    className="text-sm leading-tight"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How to Reach + House Rules */}
          <div className="flex flex-col gap-6">

            {/* How to Reach */}
            <div
              className="p-6"
              style={{ background: '#fff', border: '1px solid var(--border)' }}
            >
              <h3
                className="text-lg font-semibold text-dark mb-5"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                How to Reach
              </h3>
              <div className="space-y-3">
                {howToReach.map(({ label, distance }) => (
                  <div key={label} className="flex items-center justify-between gap-2">
                    <span
                      className="text-sm"
                      style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                    >
                      {label}
                    </span>
                    <span
                      className="text-xs font-bold px-2 py-0.5 flex-shrink-0"
                      style={{
                        background: 'rgba(201,168,76,0.12)',
                        color: '#c9a84c',
                        fontFamily: 'var(--font-raleway)',
                      }}
                    >
                      {distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules */}
            <div
              className="p-6"
              style={{ background: '#fff', border: '1px solid var(--border)' }}
            >
              <h3
                className="text-lg font-semibold text-dark mb-5"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                House Rules
              </h3>
              <ul className="space-y-2.5">
                {houseRules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2 text-sm leading-snug"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    <span style={{ color: '#c9a84c', flexShrink: 0, marginTop: 2 }}>›</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Activities & Experiences */}
        <div
          className="mt-10 p-8"
          style={{ background: '#fff', border: '1px solid var(--border)' }}
        >
          <h3
            className="text-xl font-semibold text-dark mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Activities &amp; Experiences
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: '☕', title: 'Morning Beach Coffee', desc: 'Start your day with a cup of coffee on the breezy sit-out as ocean waves set a tranquil tone.' },
              { emoji: '🏖️', title: 'Private Beach Strolls', desc: 'Stroll along the shore or unwind on the manicured 1,000 sq ft lawn with lush greenery and coastal air.' },
              { emoji: '🎮', title: 'Indoor & Outdoor Games', desc: 'Gather for board games, indoor games, and friendly competitions — perfect for groups and families.' },
              { emoji: '🍖', title: 'BBQ Under the Stars', desc: 'Fire up a delightful barbecue feast and dine under the open sky with good food and great company.' },
              { emoji: '🎤', title: 'Karaoke Nights', desc: 'When night falls, turn up the energy with a lively karaoke session — singing and dancing into the night.' },
              { emoji: '⛵', title: 'Nearby Water Activities', desc: "Kayaking, cycling, cruising, fishing, and boating — all available nearby in Alleppey's famous backwaters." },
            ].map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-4"
                style={{ background: '#faf9f7', border: '1px solid var(--border)' }}
              >
                <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                <div>
                  <p
                    className="text-sm font-semibold text-dark mb-1"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
