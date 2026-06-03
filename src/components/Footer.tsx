'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { MapPin, Phone, Mail } from 'lucide-react'
import {
  WhatsAppIcon,
  PhoneCallIcon,
  InstagramIcon,
  FacebookIcon,
  socialIconClsDark,
} from '@/components/icons'

export default function Footer() {
  const pathname = usePathname()
  const hideCtaBanner = pathname?.startsWith('/booking')

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = href
      }
    }
  }

  const quickLinks = [
    { label: 'Home',           href: '/' },
    { label: 'About Us',       href: '/about' },
    { label: 'Rooms & Suites', href: '/rooms-suites' },
    { label: 'Packages',       href: '/#packages' },
    { label: 'Price',          href: '/#rooms' },
    { label: 'Blogs',          href: '/blogs' },
    { label: 'Gallery',        href: '/gallery' },
    { label: 'Booking',        href: '/booking' },
    { label: 'Contact',        href: '/contact' },
  ]

  const legalLinks = [
    { label: 'Privacy Policy',      href: '/privacy-policy' },
    { label: 'Cancellation Policy', href: '/cancellation-policy' },
    { label: 'Terms & Conditions',  href: '/terms' },
  ]

  const colHeadingStyle: React.CSSProperties = {
    fontFamily: 'var(--font-raleway)',
    fontSize: '14px',
    fontWeight: 700,
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '22px',
  }

  const linkStyle: React.CSSProperties = {
    color: 'rgba(255,255,255,0.62)',
    fontSize: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    transition: 'color 0.2s',
  }

  const arrowStyle: React.CSSProperties = {
    color: '#c9a84c',
    fontSize: '14px',
    lineHeight: 1,
    flexShrink: 0,
  }

  return (
    <footer
      style={{
        background: '#1a1a1a',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {/* ── CTA Banner ── */}
      {!hideCtaBanner && (
        <div
          className="text-center py-14 px-6"
          style={{
            background: 'linear-gradient(135deg, #222 0%, #1a1a1a 100%)',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <span className="section-label">Ready for your beach escape?</span>
          <h2
            className="heading text-3xl md:text-4xl text-white font-semibold mb-6 mt-2"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Book Your Stay at Ostia Marari
          </h2>
          <Link href="/booking" className="btn-primary">
            Book Now
          </Link>
        </div>
      )}

      {/* ── Main Footer ── */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '60px 28px 52px',
        }}
      >
        {/* 6-column grid: Brand | Quick Links | Legal | Get In Touch | Find Us | Socials */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '220px minmax(120px,1fr) minmax(140px,1fr) minmax(180px,1fr) 180px 100px',
            columnGap: '20px',
            alignItems: 'start',
          }}
        >

          {/* ── Col 1 : Brand ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Logo + Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Image
                src="/ostiamararilogo.png"
                alt="Ostia Marari Logo"
                width={72}
                height={72}
                className="rounded object-cover"
                style={{ flexShrink: 0 }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-playfair)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Ostia Marari
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-raleway)',
                    fontSize: '10px',
                    color: '#c9a84c',
                    textTransform: 'uppercase',
                    letterSpacing: '0.28em',
                    marginTop: '5px',
                  }}
                >
                  Boutique Beach Stay
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              style={{
                color: 'rgba(255,255,255,0.62)',
                fontSize: '15px',
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              Discover a luxurious boutique beach stay in Alleppey, Kerala.
              Enjoy serene ocean views, elegant interiors, peaceful surroundings,
              and personalized hospitality designed for unforgettable coastal
              experiences.
            </p>
          </div>

          {/* ── Col 2 : Quick Links ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={colHeadingStyle}>Quick Links</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={(e) => handleNavClick(l.href, e)}
                    style={linkStyle}
                    className="hover:!text-[#c9a84c]"
                  >
                    <span style={arrowStyle}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3 : Legal ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={colHeadingStyle}>Legal</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '13px' }}>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={linkStyle}
                    className="hover:!text-[#c9a84c]"
                  >
                    <span style={arrowStyle}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4 : Get In Touch ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={colHeadingStyle}>Get In Touch</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={17} style={{ color: '#c9a84c', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', lineHeight: 1.75 }}>
                  Kurisadi Road, Beach, Thumpoly,<br />
                  Alappuzha, Kerala 688008
                </span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={17} style={{ color: '#c9a84c', flexShrink: 0 }} />
                <a
                  href="tel:+919846044955"
                  className="hover:!text-[#c9a84c]"
                  style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  +91 98460 44955
                </a>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Mail size={17} style={{ color: '#c9a84c', flexShrink: 0 }} />
                <a
                  href="mailto:info@ostiamarari.com"
                  className="hover:!text-[#c9a84c]"
                  style={{ color: 'rgba(255,255,255,0.62)', fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s' }}
                >
                  info@ostiamarari.com
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 5 : Find Us ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={colHeadingStyle}>Find Us</h4>
            <div
              style={{
                border: '1px solid rgba(201,168,76,0.25)',
                overflow: 'hidden',
                width: '180px',
                height: '180px',
                flexShrink: 0,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d76.3124823!3d9.5198796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08858cbba3d117%3A0x4e2c2db4bf5d8165!2sOstia%20Marari%20-%20a%20Boutique%20Beach%20Stay!5e0!3m2!1sen!2sin!4v1"
                width="180"
                height="180"
                loading="lazy"
                title="Ostia Marari Location"
                style={{ filter: 'grayscale(80%) invert(90%)', display: 'block' }}
              />
            </div>
          </div>

          {/* ── Col 6 : Socials ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 style={colHeadingStyle}>Socials</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="https://www.instagram.com/ostiamarari"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={socialIconClsDark}
                style={{ width: '40px', height: '40px' }}
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/919846044955"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={socialIconClsDark}
                style={{ width: '40px', height: '40px' }}
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href="tel:+919846044955"
                aria-label="Call"
                className={socialIconClsDark}
                style={{ width: '40px', height: '40px' }}
              >
                <PhoneCallIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={socialIconClsDark}
                style={{ width: '40px', height: '40px' }}
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '18px 0',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'rgba(255,255,255,0.32)', fontSize: '13px', letterSpacing: '0.06em', margin: 0 }}>
          Designed and Developed By{' '}
          <a
            href="https://www.credencesoft.in/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
            className="hover:underline"
          >
            CredenceSoft
          </a>
          , Powered By{' '}
          <a
            href="https://bookonepms.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit' }}
            className="hover:underline"
          >
            BookOne
          </a>
          .
        </p>
      </div>
    </footer>
  )
}