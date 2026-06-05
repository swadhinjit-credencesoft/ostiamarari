import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { seoConfig, buildWebPageSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'About Ostia Marari | Boutique Beach Stay Alleppey Kerala',
  description:
    'Learn about Ostia Marari, a boutique beachfront stay in Alleppey near Thumpoly Beach. Discover the story of founder Saritha Switen, our rooms, amenities and the coastal experience.',
  alternates: {
    canonical: '/about-us',
  },
  openGraph: {
    title: 'About Ostia Marari | Boutique Beach Stay Alleppey Kerala',
    description:
      'Discover the story of Ostia Marari, a boutique beachfront stay near Thumpoly Beach, Alleppey. Meet founder Saritha Switen and explore our coastal Kerala hospitality.',
    url: `${siteUrl}/about-us`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        width: 1200,
        height: 630,
        alt: 'Ostia Marari boutique beach stay in Alleppey Kerala – About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Ostia Marari | Boutique Beach Stay Alleppey Kerala',
    description:
      'Meet the founder and discover the story behind Ostia Marari, a boutique beachfront stay near Thumpoly Beach, Alleppey.',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        alt: 'Ostia Marari boutique beach stay – About page',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('about')} />
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia2.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.60)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">About Us</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Discover Ostia Marari
          </h1>
          <p className="mt-4 text-white/70 text-sm md:text-base leading-relaxed">
            A boutique beachfront stay in Alleppey, Kerala — where luxury meets the coast.
          </p>
        </div>
      </section>

      {/* Founder & Owner */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Owner &amp; Founder</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Meet the Woman Behind the Charming Retreat
            </h2>
          </div>
        </div>

        <div className="w-full px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Owner Image */}
            <div className="w-full">
              <div className="relative overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <Image
                  src="/ostiamarariowneraboutimg.avif"
                  alt="Saritha Switen – Founder &amp; Owner of Ostia Marari boutique beach stay in Alleppey"
                  width={600}
                  height={560}
                  className="w-full h-auto object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 100%)' }}>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)', fontWeight: 600 }}>
                    Founder &amp; Owner
                  </p>
                  <p className="text-xl font-semibold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                    Saritha Switen
                  </p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col justify-center px-6 lg:pr-10">
              <span className="gold-line-left" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
                Saritha Switen —{' '}
                <span style={{ color: '#c9a84c' }}>Founder &amp; Owner</span>
              </h3>

              <div className="space-y-4 text-sm leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                <p>
                  At Ostia Marari – A Boutique Beach Stay, excellence is more than a promise — it&apos;s
                  a way of life. Behind this beautiful beachfront retreat is{' '}
                  <strong style={{ color: 'var(--text)' }}>Saritha Switen</strong>, a passionate
                  entrepreneur who believes that exceptional hospitality begins with genuine care,
                  attention to detail, and uncompromising quality.
                </p>
                <p>
                  A devoted wife and mother of two children, Saritha skilfully balances family life with
                  her dedication to creating unforgettable guest experiences. Her commitment to
                  personalised service ensures that every guest enjoys the perfect blend of comfort,
                  privacy, and authentic Kerala hospitality.
                </p>
                <p>
                  Professionally, Saritha is deeply passionate about cooking and takes pride in preparing
                  traditional Kerala delicacies using authentic recipes and fresh local ingredients. Her
                  culinary expertise adds a unique personal touch to the Ostia Marari experience,
                  allowing guests to savour the true flavours of Kerala.
                </p>
                <p>
                  Over the years, Saritha has welcomed and delighted thousands of guests from across
                  India and around the world. Through her warmth, dedication, and attention to every
                  detail, she has helped create countless cherished memories, making Ostia Marari a
                  preferred destination for travellers seeking relaxation, culture, and genuine
                  hospitality in the heart of Marari Beach, Alappuzha.
                </p>
                <blockquote className="px-5 py-4 text-sm" style={{ borderLeft: '3px solid #c9a84c', background: 'rgba(201,168,76,0.06)', fontStyle: 'italic', color: 'var(--text)' }}>
                  &ldquo;For Saritha, every guest is not just a visitor, but a part of the Ostia Marari family.&rdquo; 🌴✨
                </blockquote>
              </div>

              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Contact Owner &amp; Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
