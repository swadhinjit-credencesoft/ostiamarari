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

  return (
    <footer
      style={{
        background: '#1a1a1a',
        borderTop: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      {!hideCtaBanner && (
        <div
          className="text-center py-14 px-6"
          style={{
            background:
              'linear-gradient(135deg, #222 0%, #1a1a1a 100%)',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
          }}
        >
          <span className="section-label">
            Ready for your beach escape?
          </span>

          <h2
            className="heading text-3xl md:text-4xl text-white font-semibold mb-6 mt-2"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Book Your Stay at Ostia Marari
          </h2>

          <Link
            href="/booking"
            className="btn-primary"
          >
            Book Now
          </Link>
        </div>
      )}

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/ostiamararilogo.png"
              alt="Ostia Marari Logo"
              width={96}
              height={96}
              className="rounded object-cover"
            />

            <div className="flex flex-col leading-tight">
              <span
                className="heading text-white font-semibold text-lg uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                Ostia Marari
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.25em]"
                style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
              >
                Boutique Beach Stay
              </span>
            </div>
          </div>

          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Discover a luxurious boutique beach stay in Alleppey,
            Kerala. Enjoy serene ocean views, elegant interiors,
            peaceful surroundings, and personalized hospitality
            designed for unforgettable coastal experiences.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/ostiamarari"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={socialIconClsDark}
            >
              <InstagramIcon size={16} />
            </a>

            <a
              href="https://wa.me/919846044955"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={socialIconClsDark}
            >
              <WhatsAppIcon size={16} />
            </a>

            <a
              href="tel:+919846044955"
              aria-label="Call"
              className={socialIconClsDark}
            >
              <PhoneCallIcon size={16} />
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={socialIconClsDark}
            >
              <FacebookIcon size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Quick Links
          </h4>

          <ul className="space-y-3">
            {[
              { label: 'Home', href: '/' },
              { label: 'About Us', href: '/about' },
              { label: 'Rooms & Suites', href: '/rooms-suites' },
              { label: 'Packages', href: '/#packages' },
              { label: 'Price', href: '/#rooms' },
              { label: 'Blogs', href: '/blogs' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Booking', href: '/booking' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cancellation Policy', href: '/cancellation-policy' },
              { label: 'Terms & Conditions', href: '/terms' },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={(e) => handleNavClick(l.href, e)}
                  className="text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  <span
                    style={{
                      color: '#c9a84c',
                      fontSize: '10px',
                    }}
                  >
                    ›
                  </span>

                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Get In Touch
          </h4>

          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: '#c9a84c' }}
              />

              <span
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Kurisadi Road, Beach, Thumpoly,
                Alappuzha, Kerala 688008
              </span>
            </li>

            <li className="flex gap-3">
              <Phone
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: '#c9a84c' }}
              />

              <div className="flex flex-col gap-1">
                <a
                  href="tel:+919846044955"
                  className="text-sm hover:text-[#c9a84c] transition-colors"
                  style={{
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  +91 98460 44955
                </a>
              </div>
            </li>

            <li className="flex gap-3">
              <Mail
                size={16}
                className="shrink-0 mt-0.5"
                style={{ color: '#c9a84c' }}
              />

              <a
                href="mailto:info@ostiamarari.com"
                className="text-sm hover:text-[#c9a84c] transition-colors"
                style={{
                  color: 'rgba(255,255,255,0.55)',
                }}
              >
                info@ostiamarari.com
              </a>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h4
            className="text-white font-semibold text-sm tracking-widest uppercase mb-5"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            Find Us
          </h4>

          <div
            className="overflow-hidden"
            style={{
              border: '1px solid rgba(201,168,76,0.2)',
              height: '180px',
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d76.3124823!3d9.5198796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08858cbba3d117%3A0x4e2c2db4bf5d8165!2sOstia%20Marari%20-%20a%20Boutique%20Beach%20Stay!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              loading="lazy"
              title="Ostia Marari Location"
              style={{
                filter: 'grayscale(80%) invert(90%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-5 text-center"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <p
          className="text-xs tracking-widest"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          Designed and Developed By{' '}
          <a
            href="https://www.credencesoft.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            CredenceSoft
          </a>
          , Powered By{' '}
          <a
            href="https://bookonepms.com/"
            target="_blank"
            rel="noopener noreferrer"
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
