import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'About Us | Ostia Marari',
}

const accordionItems = [
  {
    title: 'Our Story',
    content:
      'Ostia Marari was born from a vision to create a serene coastal escape that blends Kerala\'s natural beauty with boutique luxury. Situated on the pristine shores of Thumpoly Beach in Alleppey, our property offers guests an intimate retreat away from crowded tourist hubs. Every detail, from the handpicked interiors to the warm hospitality, reflects our commitment to providing an unforgettable beachfront experience.',
  },
  {
    title: 'Our Rooms & Suites',
    content:
      'We offer four distinct accommodation options: Premium Top Suites (sleeps 12, ocean views), Premium Floor Suites (sleeps 6), Premium Full Suites (sleeps 18, ideal for groups), and Premium Double Suites (sleeps 3, perfect for couples). Each room features air conditioning, elegant interiors, and modern amenities designed for comfort and relaxation.',
  },
  {
    title: 'Amenities & Services',
    content:
      'Guests enjoy direct beach access, complimentary breakfast, free WiFi, private lawn spaces, BBQ experiences, indoor parking, and daily housekeeping. Our team is available around the clock to assist with travel arrangements, local recommendations, and special requests to make your stay truly memorable.',
  },
  {
    title: 'Location & Surroundings',
    content:
      'Located on Kurisadi Road, Thumpoly Beach, Alappuzha, Kerala, our property is within walking distance of the Arabian Sea. We are minutes from Alleppey Backwaters, Alleppey Lighthouse, and Marari Beach. Explore nearby houseboat cruises, local seafood restaurants, and the vibrant culture of coastal Kerala.',
  },
  {
    title: 'Sustainability & Practices',
    content:
      'We are committed to responsible tourism. Our practices include minimizing plastic use, supporting local artisans and suppliers, conserving water and energy, and promoting awareness of Kerala\'s fragile coastal ecosystem. We believe in giving back to the community and preserving the natural beauty that makes Alleppey special.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24" style={{ minHeight: 260, paddingBottom: 36 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia2.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">About Us</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Discover Ostia Marari
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label">Boutique Beach Stay</span>
              <span className="gold-line-left" />
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-dark" style={{ fontFamily: 'var(--font-playfair)' }}>
                A Peaceful Escape on the Shores of Thumpoly
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                <p>
                  Nestled along the serene coastline of Thumpoly Beach in Alleppey, Ostia Marari offers
                  a boutique beach stay experience that combines luxury with the unspoiled beauty of
                  Kerala&apos;s coastal landscape. Our property is designed for those seeking tranquility,
                  comfort, and authentic hospitality.
                </p>
                <p>
                  Whether you are planning a romantic getaway, a family vacation, or a group retreat,
                  our sea-view rooms, private lawn, and direct beach access provide the perfect setting
                  for unforgettable memories. Every stay is crafted with care, from complimentary
                  breakfast to personalized recommendations for exploring the backwaters and beaches
                  of Alappuzha.
                </p>
                <p>
                  At Ostia Marari, we believe that the best travel experiences come from genuine
                  connections — with nature, with culture, and with the people who make your stay
                  special. We invite you to slow down, breathe in the sea breeze, and discover the
                  magic of coastal Kerala.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <Image
                  src="/images/ostia1.avif"
                  alt="Ostia Marari boutique beach stay exterior"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div
                className="hidden md:block absolute -bottom-6 -left-6 w-48 h-48 z-10 overflow-hidden"
                style={{ border: '4px solid #ffffff' }}
              >
                <Image
                  src="/images/ostia5.avif"
                  alt="Beach view near Ostia Marari"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Founder & Owner ── */}
      <section className="py-20 md:py-24 bg-white border-t border-b border-[#e8e4dc]/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative overflow-hidden shadow-md" style={{ border: '1px solid var(--border)' }}>
                <Image
                  src="/ostiamarariowneraboutimg.avif"
                  alt="Founder & Owner of Ostia Marari"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-label">Owner &amp; Founder</span>
              <span className="gold-line-left" />
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-dark" style={{ fontFamily: 'var(--font-playfair)' }}>
                Meet the Visionary Behind Our Coastal Haven
              </h2>
              <div className="space-y-4 text-sm leading-relaxed mb-6" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                <p>
                  Ostia Marari was envisioned and created by our founder, who wanted to bring
                  a unique, high-end boutique beachfront living experience to Alleppey. Combining the rustic
                  charms of traditional Kerala architecture with contemporary luxury, they set out to build a
                  haven of peace and relaxation.
                </p>
                <p>
                  Our owner believes in personalized hospitality and hand-crafted experiences, ensuring every
                  guest feels like they are staying in their own luxury home on the beach. By partnering with
                  local staff, fishermen, and artisans, the property remains deeply rooted in Kerala&apos;s
                  warm community values.
                </p>
                <p>
                  &ldquo;We wanted to build something more than just a place to sleep — a sanctuary where the
                  ocean breeze, golden sands, and serene surroundings come together to rejuvenate your mind
                  and soul. We welcome you to experience Ostia Marari.&rdquo;
                </p>
              </div>
              <div className="pt-2">
                <Link href="/contact" className="btn-outline">
                  Contact Owner &amp; Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: '#ffffff' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label">Explore</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
              More About Ostia Marari
            </h2>
          </div>
          <Accordion items={accordionItems} firstOpen />
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: '#f5f0e8' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <span className="section-label">Values</span>
          <span className="gold-line" />
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-dark" style={{ fontFamily: 'var(--font-playfair)' }}>
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Beachfront Living',
                desc: 'Wake up to the sound of waves and enjoy direct access to one of Alleppey\'s most peaceful beaches.',
              },
              {
                title: 'Boutique Hospitality',
                desc: 'Intimate, personalized service in a small luxury property — no crowds, just comfort.',
              },
              {
                title: 'Authentic Kerala',
                desc: 'From architecture to cuisine, every experience is rooted in the rich culture of coastal Kerala.',
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="p-8 text-center transition-all duration-300 hover:-translate-y-1.5"
                style={{ background: '#ffffff', border: '1px solid var(--border)' }}
              >
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
