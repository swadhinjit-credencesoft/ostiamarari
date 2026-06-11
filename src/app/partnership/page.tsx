import type { Metadata } from 'next'
import Link from 'next/link'
import { seoConfig, buildWebPageSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import { Mail, Phone, Globe, ExternalLink, TrendingUp, Building2, Hotel, Target, Shield, Handshake, ArrowRight, MapPin, Award, Users, Star, Sparkles } from 'lucide-react'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'Partnership & Investment Opportunities | Ostia Marari Alleppey',
  description:
    'Explore strategic partnership and investment opportunities with Ostia Marari, a premium boutique beach hospitality brand in Alleppey, Kerala.',
  alternates: { canonical: '/partnership' },
  openGraph: {
    title: 'Partnership & Investment Opportunities | Ostia Marari Alleppey',
    description:
      'Partner with Ostia Marari — a premium boutique beach hospitality brand in Kerala. Equity, JV, resort expansion, villa development and tourism investment opportunities.',
    url: `${siteUrl}/partnership`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        width: 1200,
        height: 630,
        alt: 'Partnership opportunities with Ostia Marari boutique beach stay in Alleppey Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership & Investment Opportunities | Ostia Marari Alleppey',
    description:
      'Invest in coastal hospitality. Explore equity, JV, resort expansion and villa development opportunities with Ostia Marari in Kerala.',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        alt: 'Ostia Marari partnership opportunities',
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

const partnerships = [
  { title: 'Equity Partnerships', icon: TrendingUp, desc: 'Own a stake in a growing beach hospitality brand with proven traction and prime real estate.' },
  { title: 'Strategic Investments', icon: Target, desc: 'Fund targeted growth initiatives including property expansion, marketing, and guest experience upgrades.' },
  { title: 'Joint Ventures', icon: Handshake, desc: 'Co-develop new beachfront properties, wellness retreats, or tourism experiences under the Ostia Marari brand.' },
  { title: 'Resort Expansion Projects', icon: Building2, desc: 'Expand our footprint with new resort concepts, villa clusters, and beachfront developments along the Kerala coast.' },
  { title: 'Boutique Villa Developments', icon: Hotel, desc: 'Create exclusive private villa experiences for the luxury traveller seeking privacy and coastal serenity.' },
  { title: 'Wellness & Retreat Concepts', icon: Shield, desc: 'Develop holistic wellness retreats combining Ayurveda, yoga, and Kerala\'s natural healing traditions.' },
  { title: 'International Collaborations', icon: Globe, desc: 'Bring global hospitality standards and international traveller networks to the Alleppey coast.' },
  { title: 'Tourism Infrastructure', icon: MapPin, desc: 'Invest in supporting infrastructure that elevates the guest experience and strengthens the local tourism ecosystem.' },
]

const investorTypes = [
  { emoji: '🇮🇳', label: 'Indian Citizens', sub: 'Resident Investors' },
  { emoji: '🌍', label: 'NRIs', sub: 'Non-Resident Indians' },
  { emoji: '🌎', label: 'International', sub: 'Global Investors' },
  { emoji: '🏨', label: 'Hospitality Pros', sub: 'Industry Professionals' },
  { emoji: '💼', label: 'Entrepreneurs', sub: 'Business Owners' },
  { emoji: '🤝', label: 'Tourism Partners', sub: 'Strategic Collaborators' },
]

export default function PartnershipPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('partnership')} />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[520px] md:min-h-[600px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center scale-110" style={{ backgroundImage: "url('/images/ostia2.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.80) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.20) 0%, transparent 60%)' }} />
        <div className="absolute inset-0" style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23c9a84c\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative z-10 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 text-[10px] font-semibold tracking-[0.25em] uppercase mb-6 text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)', backdropFilter: 'blur(8px)' }}>
            <Sparkles size={12} className="text-[#c9a84c]" /> Invest in the Future of Coastal Hospitality
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Partner With <span style={{ color: '#c9a84c' }}>Ostia Marari</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-raleway)' }}>
            A rare opportunity to be part of an exclusive beach hospitality brand in Kerala, India.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#opportunities" className="px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:shadow-lg" style={{ background: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
              Explore Opportunities
            </a>
            <Link href="/contact" className="px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 border border-white/30 hover:border-white/70 hover:bg-white/10" style={{ fontFamily: 'var(--font-raleway)' }}>
              Send an Enquiry
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} />
      </section>

      {/* ============ WELCOME / INTRO ============ */}
      <section className="py-20 md:py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="section-label">Welcome</span>
              <span className="gold-line-left" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
                Invest in the Future of{' '}
                <span style={{ color: '#c9a84c' }}>Coastal Hospitality</span>
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                <p>
                  At <strong style={{ color: 'var(--text)' }}>Ostia Marari – A Boutique Beach Stay</strong>, we are creating more than a destination;
                  we are building a premium coastal lifestyle brand that combines authentic Kerala hospitality,
                  sustainable tourism, and exceptional guest experiences.
                </p>
                <p>
                  Following the growing success of our boutique beach retreat, we are now exploring strategic
                  partnerships and investment opportunities to expand our hospitality portfolio, develop new
                  beachfront experiences, and strengthen our position in the luxury travel market.
                </p>
                <p>
                  Whether you are an individual investor, entrepreneur, NRI, hospitality enthusiast, family office,
                  or institutional partner, we welcome discussions with visionary partners who share our passion
                  for creating extraordinary tourism experiences.
                </p>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#e8e4dc]">
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>27+</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>Years Excellence</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>1000+</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>Happy Guests</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>4.9★</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>Rating</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>Prime</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>Beach Location</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia11.avif')" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 px-7 py-5 hidden md:block shadow-lg" style={{ background: '#c9a84c' }}>
                <p className="text-white text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Since 1997
                </p>
                <p className="text-white/80 text-[10px] tracking-wider uppercase mt-0.5" style={{ fontFamily: 'var(--font-raleway)' }}>
                  27+ Years of Hospitality Excellence
                </p>
              </div>
              <div className="absolute top-5 left-5 w-20 h-20 flex items-center justify-center hidden md:flex" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <Star size={28} className="text-[#c9a84c]" fill="#c9a84c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY PARTNER (image background section) ============ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/Thumpoly-Beach.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.82), rgba(0,0,0,0.70))' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
              Why Partner
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-6 mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why Partner With Us?
            </h2>
            <p className="text-white/60 text-sm max-w-xl mx-auto" style={{ fontFamily: 'var(--font-raleway)' }}>
              Discover what makes Ostia Marari a compelling investment opportunity in Kerala&apos;s thriving tourism sector
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Prime Beachfront Location', desc: 'Situated in the heart of Thumpoly Beach, Alleppey — one of Kerala\'s most sought-after coastal destinations with direct beach access.', icon: MapPin },
              { title: 'Booming Travel Market', desc: 'Growing global demand for boutique and experiential travel presents a strong and timely investment opportunity.', icon: TrendingUp },
              { title: '27+ Years of Expertise', desc: 'Established tourism expertise with over 27 years of hospitality experience and a reputation for excellence.', icon: Award },
              { title: 'Expansion Ready', desc: 'Opportunities for expansion into luxury villas, wellness retreats, beach resorts, and curated tourism experiences.', icon: Building2 },
              { title: 'Transparent Partnerships', desc: 'We believe in transparent, professional partnership structures with clear communication and mutual respect.', icon: Shield },
              { title: 'High-Growth Sector', desc: 'Kerala tourism is one of India\'s fastest-growing sectors with strong year-on-year visitor growth and government support.', icon: TrendingUp },
            ].map(({ title, desc, icon: Icon }, i) => (
              <div key={title} className="group px-7 py-8 transition-all duration-300 hover:-translate-y-1" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #c9a84c' }}>
                <div className="w-11 h-11 flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.15)' }}>
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-base font-semibold mb-2.5 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</h3>
                <p className="text-xs leading-relaxed text-white/60" style={{ fontFamily: 'var(--font-raleway)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR VISION (image background) ============ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/backwater.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 100%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-6 mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Building a Premium Coastal{' '}
              <span style={{ color: '#c9a84c' }}>Lifestyle Brand</span>
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-raleway)' }}>
              We envision a portfolio of exceptional beachfront properties and curated travel experiences
              that define luxury coastal hospitality in Kerala. With the right partners, we can scale
              this vision across India&apos;s most beautiful coastlines.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { val: 'Premium', label: 'Hospitality' },
                { val: 'Authentic', label: 'Experiences' },
                { val: 'Sustainable', label: 'Growth' },
                { val: 'Global', label: 'Standards' },
              ].map(({ val, label }) => (
                <div key={val} className="text-center px-4 py-5" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>{val}</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVESTMENT OPPORTUNITIES ============ */}
      <section id="opportunities" className="py-20 md:py-28" style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label">Investment</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Investment Opportunities
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              We are open to discussing a wide range of partnership structures and investment models
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerships.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="group px-6 py-7 border border-[#e8e4dc] hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ background: '#fcfcfc' }}>
                <div className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md" style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-sm font-semibold mb-2.5" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NUMBERS / STATS (image background) ============ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/ostia5.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0.85))' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.10) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
              By the Numbers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Track Record of Excellence
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: '27+', label: 'Years of Hospitality', sub: 'Established 1997' },
              { value: '4.9★', label: 'Guest Rating', sub: 'Across All Platforms' },
              { value: '1000+', label: 'Happy Guests', sub: 'From 20+ Countries' },
              { value: 'Prime', label: 'Beachfront Location', sub: 'Thumpoly, Alleppey' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center px-4 py-8" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>{value}</p>
                <p className="text-xs font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-raleway)' }}>{label}</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider" style={{ fontFamily: 'var(--font-raleway)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVESTORS WELCOME ============ */}
      <section className="py-20 md:py-28" style={{ background: '#f8f8f8' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label">Global</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Investors Welcome Worldwide
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              We invite expressions of interest from visionary partners across the globe
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {investorTypes.map(({ emoji, label, sub }) => (
              <div key={label} className="text-center px-4 py-7 bg-white border border-[#e8e4dc] hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <span className="text-3xl block mb-3">{emoji}</span>
                <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text)', fontFamily: 'var(--font-raleway)' }}>{label}</p>
                <p className="text-[10px] tracking-wider uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA (image background) ============ */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/ostia6.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 50%)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
                Connect
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mt-6 mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Let&apos;s Build Something{' '}
                <span style={{ color: '#c9a84c' }}>Extraordinary</span> Together
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-raleway)' }}>
                If you are interested in exploring investment or partnership opportunities with Ostia Marari,
                we would be delighted to connect with you. Our partnership team is ready to discuss
                how we can create value together.
              </p>
              <div className="space-y-3">
                <a href="mailto:ostiamarari@gmail.com" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>Email</p>
                    <p className="text-sm font-medium truncate text-white" style={{ fontFamily: 'var(--font-raleway)' }}>ostiamarari@gmail.com</p>
                  </div>
                  <ExternalLink size={15} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <a href="https://wa.me/919846044955" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>WhatsApp</p>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: 'var(--font-raleway)' }}>+91 98460 44955</p>
                  </div>
                  <ExternalLink size={15} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <a href="https://ostiamarari.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.15)' }}>
                    <Globe size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>Website</p>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: 'var(--font-raleway)' }}>ostiamarari.com</p>
                  </div>
                  <ExternalLink size={15} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              </div>
            </div>
            <div className="px-8 lg:px-12 py-10 relative" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.10)' }}>
              <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: '#c9a84c' }} />
              <Users size={32} className="text-[#c9a84c] mb-5" />
              <p className="text-sm leading-relaxed italic text-white/80 mb-6" style={{ fontFamily: 'var(--font-raleway)' }}>
                &ldquo;Confidential discussions and detailed project information are available upon request.&rdquo;
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300" style={{ background: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
                Send an Enquiry <ArrowRight size={14} />
              </Link>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
                <p className="text-[10px] uppercase tracking-widest mb-2 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>Our Location</p>
                <p className="text-xs text-white/70" style={{ fontFamily: 'var(--font-raleway)' }}>
                  Kurisadi Road, Thumpoly Beach<br />
                  Alappuzha (Alleppey), Kerala 688008, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
