import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Accordion from '@/components/Accordion'

export const metadata: Metadata = {
  title: 'About Us | Ostia Marari',
}

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
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

      {/* ── About Description ── */}
    

      {/* ── Meet Our Founder & Owner ── */}
      <section className="py-20 md:py-24" style={{ background: '#fafafa' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label">Owner &amp; Founder</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-semibold text-dark" style={{ fontFamily: 'var(--font-playfair)' }}>
              Meet the Woman Behind the Charming Retreat
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Image */}
            <div className="relative">
              <div
                className="relative overflow-hidden shadow-sm"
                style={{ border: '1px solid var(--border)' }}
              >
                <Image
                  src="/ostiamarariowneraboutimg.avif"
                  alt="Saritha Switen – Founder & Owner of Ostia Marari"
                  width={600}
                  height={580}
                  className="w-full h-auto object-cover"
                />
                {/* Name badge pinned to bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-4"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                >
                  <p
                    className="text-xs tracking-widest uppercase mb-0.5"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)', fontWeight: 600 }}
                  >
                    Founder &amp; Owner
                  </p>
                  <p
                    className="text-xl font-semibold text-white"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    Saritha Switen
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="gold-line-left" />
              <h3
                className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
              >
                Saritha Switen —{' '}
                <span style={{ color: '#c9a84c' }}>Founder &amp; Owner</span>
              </h3>

              <div
                className="space-y-4 text-sm leading-relaxed"
                style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
              >
                <p>
                  At Ostia Marari – A Boutique Beach Stay, excellence is more than a promise — it&apos;s
                  a way of life. Behind this beautiful beachfront retreat is{' '}
                  <strong style={{ color: 'var(--text)' }}>Saritha Switen</strong>, a passionate
                  entrepreneur who believes that exceptional hospitality begins with genuine care,
                  attention to detail, and uncompromising quality.
                </p>
                <p>
                  A devoted wife and mother of two children, Saritha skillfully balances family life with
                  her dedication to creating unforgettable guest experiences. Her commitment to personalized
                  service ensures that every guest enjoys the perfect blend of comfort, privacy, and
                  authentic Kerala hospitality.
                </p>
                <p>
                  Professionally, Saritha is deeply passionate about cooking and takes pride in preparing
                  traditional Kerala delicacies using authentic recipes and fresh local ingredients. Her
                  culinary expertise adds a unique personal touch to the Ostia Marari experience, allowing
                  guests to savour the true flavours of Kerala.
                </p>
                <p>
                  Over the years, Saritha has welcomed and delighted thousands of guests from across India
                  and around the world. Through her warmth, dedication, and attention to every detail, she
                  has helped create countless cherished memories, making Ostia Marari a preferred
                  destination for travellers seeking relaxation, culture, and genuine hospitality in the
                  heart of Marari Beach, Alappuzha.
                </p>

                {/* Quote */}
                <blockquote
                  className="mt-4 px-5 py-4"
                  style={{
                    borderLeft: '3px solid #c9a84c',
                    background: 'rgba(201,168,76,0.06)',
                    fontStyle: 'italic',
                    color: 'var(--text)',
                  }}
                >
                  &ldquo;For Saritha, every guest is not just a visitor, but a part of the Ostia Marari
                  family.&rdquo; 🌴✨
                </blockquote>
              </div>

              <div className="pt-8">
                <Link href="/contact" className="btn-primary">
                  Contact Owner &amp; Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Accordion: More About ── */}
      

      {/* ── Values ── */}
    
    </>
  )
}
