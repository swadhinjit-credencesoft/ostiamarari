import type { Metadata } from 'next'
import Link from 'next/link'
import { seoConfig, buildWebPageSchema } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import {
  Mail, Phone, Globe, ExternalLink, TrendingUp, Building2, Hotel,
  Target, Shield, Handshake, ArrowRight, MapPin, Award, Users, Star,
  CheckCircle2, Leaf, Waves
} from 'lucide-react'

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
  { title: 'Joint Ventures', icon: Handshake, desc: 'Co-develop new beachfront properties, wellness retreats, or tourism experiences under the Ostia Marari brand.' },
  { title: 'Resort & Villa Development', icon: Hotel, desc: 'Create exclusive private villa and resort experiences for the luxury traveller seeking coastal serenity.' },
  { title: 'Wellness Retreats', icon: Waves, desc: 'Develop holistic wellness retreats combining Ayurveda, yoga, and Kerala\'s natural healing traditions.' },
  { title: 'Hospitality Asset Expansion', icon: Building2, desc: 'Expand our footprint with new resort concepts, villa clusters, and beachfront developments along the Kerala coast.' },
  { title: 'Tourism Infrastructure', icon: MapPin, desc: 'Invest in supporting infrastructure that elevates the guest experience and strengthens the local tourism ecosystem.' },
  { title: 'International Collaborations', icon: Globe, desc: 'Bring global hospitality standards and international traveller networks to the Alleppey coast.' },
  { title: 'Strategic Investments', icon: Target, desc: 'Fund targeted growth initiatives including property expansion, marketing, and guest experience upgrades.' },
]

const investorTypes = [
  { emoji: '🇮🇳', label: 'Indian Citizens', sub: 'Resident Investors' },
  { emoji: '🌍', label: 'NRIs', sub: 'Non-Resident Indians' },
  { emoji: '🌎', label: 'International', sub: 'Global Investors' },
  { emoji: '🏨', label: 'Hospitality Pros', sub: 'Industry Professionals' },
  { emoji: '💼', label: 'Entrepreneurs', sub: 'Business Owners' },
  { emoji: '🤝', label: 'Tourism Partners', sub: 'Strategic Collaborators' },
]

const strategicPoints = [
  'Thriving tourism destination with year-round demand',
  'Boutique hospitality with strong brand value',
  'Multiple avenues for expansion and growth',
  'Experienced team with proven hospitality expertise',
]

export default function PartnershipPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('partnership')} />

      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[520px] md:min-h-[620px] items-center overflow-hidden pt-28 md:pt-32">
        {/* Background: aerial beach photo left, content right */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/partner1.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.72) 55%, rgba(0,0,0,0.85) 100%)' }} />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10">
          <div className="ml-auto max-w-xl text-left">
            <p className="text-[#c9a84c] text-sm md:text-base italic mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              Invest in
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-[1.1] mb-6 uppercase tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Kerala&apos;s Coastal<br />Hospitality Future
            </h1>
            <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ fontFamily: 'var(--font-raleway)' }}>
              Partner with Ostia Marari and be part of a growing luxury hospitality brand in the heart of Marari Beach, Kerala.
            </p>
            {/* 3 key pillars */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: MapPin, label: 'Prime Beachfront Location' },
                { icon: TrendingUp, label: 'High Growth Potential' },
                { icon: Handshake, label: 'Strong Partnership Opportunities' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center w-24">
                  <div className="w-12 h-12 flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.30)' }}>
                    <Icon size={20} className="text-[#c9a84c]" />
                  </div>
                  <p className="text-[10px] text-white/70 leading-tight uppercase tracking-wide" style={{ fontFamily: 'var(--font-raleway)' }}>{label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#opportunities" className="px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:opacity-90" style={{ background: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
                Explore Opportunities
              </a>
              <Link href="/contact" className="px-8 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 border border-white/30 hover:border-white/70 hover:bg-white/10" style={{ fontFamily: 'var(--font-raleway)' }}>
                Send an Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STRATEGIC INVESTMENT + EXPANDING HORIZONS + WELLNESS (3-col mosaic) ============ */}
      <section className="py-0" style={{ background: '#0d1117' }}>
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* Col 1: Strategic Investment Opportunity */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/ostia5.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'rgba(13,17,23,0.80)' }} />
            <div className="relative z-10 px-8 py-14 lg:py-16">
              <p className="text-[10px] font-semibold tracking-[0.20em] uppercase mb-4 text-[#c9a84c]" style={{ fontFamily: 'var(--font-raleway)' }}>Strategic</p>
              <h2 className="text-2xl md:text-3xl font-bold text-white uppercase leading-tight mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                A Strategic<br />Investment<br />Opportunity
              </h2>
              <ul className="space-y-3">
                {strategicPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#c9a84c] shrink-0 mt-0.5" />
                    <span className="text-xs text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 2: Expanding Horizons (large image with overlay text) */}
          <div className="relative min-h-[380px] md:min-h-0 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia11.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.20) 60%)' }} />
            <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-8">
              <p className="text-[10px] font-semibold tracking-[0.20em] uppercase mb-2 text-[#c9a84c]" style={{ fontFamily: 'var(--font-raleway)' }}>Growth</p>
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
                Expanding Horizons
              </h3>
              <p className="text-xs text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
                New villas. Wellness retreats. Signature experiences.<br />A future of endless possibilities.
              </p>
            </div>
          </div>

          {/* Col 3: Wellness & Experiences */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('/images/ostia6.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'rgba(30,20,10,0.88)' }} />
            <div className="relative z-10 px-8 py-14 lg:py-16">
              <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)' }}>
                <Waves size={18} className="text-[#c9a84c]" />
              </div>
              <p className="text-[10px] font-semibold tracking-[0.20em] uppercase mb-2 text-[#c9a84c]" style={{ fontFamily: 'var(--font-raleway)' }}>Experiences</p>
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Wellness &<br />Experiences
              </h3>
              <p className="text-xs text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
                Wellness retreats, yoga experiences, spa and holistic healing in a serene beachfront setting.
              </p>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(201,168,76,0.20)' }}>
                <p className="text-[10px] font-semibold tracking-[0.20em] uppercase mb-2 text-[#c9a84c]" style={{ fontFamily: 'var(--font-raleway)' }}>Sustainability</p>
                <p className="text-xs text-white/70 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
                  We are committed to responsible tourism and sustainable development for a better future.
                </p>
              </div>
            </div>
          </div>

        </div>
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
                {[
                  { val: '27+', label: 'Years Excellence' },
                  { val: '1000+', label: 'Happy Guests' },
                  { val: '4.9★', label: 'Rating' },
                  { val: 'Prime', label: 'Beach Location' },
                ].map(({ val, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>{val}</p>
                    <p className="text-[10px] uppercase tracking-wider mt-1" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden" style={{ border: '1px solid var(--border)' }}>
                <div className="aspect-[4/5] bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia11.avif')" }} />
              </div>
              <div className="absolute -bottom-5 -right-5 px-7 py-5 hidden md:block shadow-lg" style={{ background: '#c9a84c' }}>
                <p className="text-white text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: 'var(--font-raleway)' }}>Since 1997</p>
                <p className="text-white/80 text-[10px] tracking-wider uppercase mt-0.5" style={{ fontFamily: 'var(--font-raleway)' }}>27+ Years of Hospitality Excellence</p>
              </div>
              <div className="absolute top-5 left-5 w-20 h-20 flex items-center justify-center hidden md:flex" style={{ background: 'rgba(255,255,255,0.95)' }}>
                <Star size={28} className="text-[#c9a84c]" fill="#c9a84c" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY PARTNER (image bg) ============ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Thumpoly-Beach.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.60), rgba(0,0,0,0.72))' }} />
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
              { title: 'Booming Travel Market', desc: 'Growing global demand for boutique and experiential travel presents a strong opportunity.', icon: TrendingUp },
              { title: '27+ Years of Expertise', desc: 'Established tourism expertise with over 27 years of hospitality experience and a reputation for excellence.', icon: Award },
              { title: 'Expansion Ready', desc: 'Opportunities for expansion into luxury villas, wellness retreats, beach resorts, and curated tourism experiences.', icon: Building2 },
              { title: 'Transparent Partnerships', desc: 'We believe in transparent, professional partnership structures with clear communication and mutual respect.', icon: Shield },
              { title: 'High-Growth Sector', desc: 'Kerala tourism is one of India\'s fastest-growing sectors with year-on-year visitor growth and government support.', icon: TrendingUp },
            ].map(({ title, desc, icon: Icon }) => (
              <div key={title} className="group px-7 py-8 transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid #c9a84c' }}>
                <div className="w-11 h-11 flex items-center justify-center mb-5" style={{ background: 'rgba(201,168,76,0.18)' }}>
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-base font-semibold mb-2.5 text-white" style={{ fontFamily: 'var(--font-playfair)' }}>{title}</h3>
                <p className="text-xs leading-relaxed text-white/65" style={{ fontFamily: 'var(--font-raleway)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR VISION (image bg) ============ */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/partner2.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.62), rgba(0,0,0,0.42))' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
              Our Vision
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-6 mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Building a Premium Coastal{' '}
              <span style={{ color: '#c9a84c' }}>Lifestyle Brand</span>
            </h2>
            <p className="text-white/78 text-sm md:text-base leading-relaxed mb-8" style={{ fontFamily: 'var(--font-raleway)' }}>
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
                <div key={val} className="text-center px-4 py-5" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>{val}</p>
                  <p className="text-[10px] uppercase tracking-wider mt-1 text-white/55" style={{ fontFamily: 'var(--font-raleway)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVESTMENT OPPORTUNITIES ============ */}
      <section id="opportunities" className="py-20 md:py-28" style={{ background: '#f8f8f8' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="section-label">Investment</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Investment Opportunities
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              We are open to discussing a wide range of partnership structures and investment models
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnerships.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="group px-6 py-7 bg-white border border-[#e8e4dc] hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="w-12 h-12 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(201,168,76,0.1)' }}>
                  <Icon size={20} className="text-[#c9a84c]" />
                </div>
                <h3 className="text-sm font-semibold mb-2.5" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>{title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SUSTAINABILITY + PARTNER WITH US + INVEST TODAY (3-col dark mosaic) ============ */}
      <section className="py-0" style={{ background: '#0d1117' }}>
        <div className="grid grid-cols-1 md:grid-cols-3">

          {/* Rooted in Nature */}
          <div className="relative overflow-hidden min-h-[340px]">
            <div className="absolute inset-0 bg-cover bg-center opacity-35" style={{ backgroundImage: "url('/images/ostia5.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'rgba(5,20,10,0.82)' }} />
            <div className="relative z-10 px-8 py-14">
              <Leaf size={28} className="text-[#c9a84c] mb-5" />
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Rooted in Nature.<br />Focused on<br />Sustainability.
              </h3>
              <p className="text-xs text-white/65 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
                We are committed to responsible tourism and sustainable development for a better future.
              </p>
            </div>
          </div>

          {/* Partner With Us */}
          <div className="relative overflow-hidden min-h-[340px]">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia2.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.50) 100%)' }} />
            <div className="relative z-10 px-8 py-14 flex flex-col justify-end h-full">
              <Users size={28} className="text-[#c9a84c] mb-4" />
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase leading-tight mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                Partner With Us
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-raleway)' }}>
                Let&apos;s build a world-class hospitality legacy together.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase text-white self-start transition-all duration-300 hover:opacity-90" style={{ background: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
                Get in Touch <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Invest Today */}
          <div className="relative overflow-hidden min-h-[340px]">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/images/ostia6.avif')" }} />
            <div className="absolute inset-0" style={{ background: 'rgba(20,10,5,0.88)' }} />
            <div className="relative z-10 px-8 py-14">
              <div className="w-10 h-1 mb-6" style={{ background: '#c9a84c' }} />
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                Invest Today.<br />Build Tomorrow.<br />Inspire Generations.
              </h3>
              <p className="text-xs text-white/65 leading-relaxed" style={{ fontFamily: 'var(--font-raleway)' }}>
                Be part of Ostia Marari&apos;s journey and create lasting impact in the world of hospitality.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ============ STATS (image bg) ============ */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia5.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.58), rgba(0,0,0,0.68))' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-white border border-white/20" style={{ fontFamily: 'var(--font-raleway)', background: 'rgba(201,168,76,0.15)' }}>
              By the Numbers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              A Track Record of Excellence
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '27+', label: 'Years of Hospitality', sub: 'Established 1997' },
              { value: '4.9★', label: 'Guest Rating', sub: 'Across All Platforms' },
              { value: '1000+', label: 'Happy Guests', sub: 'From 20+ Countries' },
              { value: 'Prime', label: 'Beachfront Location', sub: 'Thumpoly, Alleppey' },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center px-4 py-8" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <p className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>{value}</p>
                <p className="text-xs font-semibold text-white mb-1" style={{ fontFamily: 'var(--font-raleway)' }}>{label}</p>
                <p className="text-[10px] text-white/55 uppercase tracking-wider" style={{ fontFamily: 'var(--font-raleway)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INVESTORS WELCOME ============ */}
      <section className="py-20 md:py-28" style={{ background: '#f8f8f8' }}>
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <span className="section-label">Global</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Investors Welcome Worldwide
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              We invite expressions of interest from visionary partners across the globe
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {investorTypes.map(({ emoji, label, sub }) => (
              <div key={label} className="text-center px-4 py-7 bg-white border border-[#e8e4dc] hover:border-[#c9a84c] transition-all duration-300 hover:-translate-y-0.5">
                <span className="text-3xl block mb-3">{emoji}</span>
                <p className="text-xs font-semibold mb-0.5" style={{ color: 'var(--text)', fontFamily: 'var(--font-raleway)' }}>{label}</p>
                <p className="text-[10px] tracking-wider uppercase" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA (image bg) ============ */}
      <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia6.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.68), rgba(0,0,0,0.52))' }} />
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
              <p className="text-white/75 text-sm leading-relaxed mb-8" style={{ fontFamily: 'var(--font-raleway)' }}>
                If you are interested in exploring investment or partnership opportunities with Ostia Marari,
                we would be delighted to connect with you. Our partnership team is ready to discuss
                how we can create value together.
              </p>
              <div className="space-y-3">
                <a href="mailto:ostiamarari@gmail.com" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.18)' }}>
                    <Mail size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>Email</p>
                    <p className="text-sm font-medium truncate text-white" style={{ fontFamily: 'var(--font-raleway)' }}>ostiamarari@gmail.com</p>
                  </div>
                  <ExternalLink size={15} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <a href="https://wa.me/919846044955" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.18)' }}>
                    <Phone size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] tracking-widest uppercase mb-0.5 text-white/50" style={{ fontFamily: 'var(--font-raleway)' }}>WhatsApp</p>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: 'var(--font-raleway)' }}>+91 98460 44955</p>
                  </div>
                  <ExternalLink size={15} className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <a href="https://ostiamarari.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 px-6 py-4 transition-all duration-200 group" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderLeft: '3px solid #c9a84c' }}>
                  <div className="w-10 h-10 flex items-center justify-center shrink-0" style={{ background: 'rgba(201,168,76,0.18)' }}>
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
            <div className="px-8 lg:px-12 py-10 relative" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: '#c9a84c' }} />
              <Users size={32} className="text-[#c9a84c] mb-5" />
              <p className="text-sm leading-relaxed italic text-white/80 mb-6" style={{ fontFamily: 'var(--font-raleway)' }}>
                &ldquo;Confidential discussions and detailed project information are available upon request.&rdquo;
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 hover:opacity-90" style={{ background: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
                Send an Enquiry <ArrowRight size={14} />
              </Link>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
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