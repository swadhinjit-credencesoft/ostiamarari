'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import {
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  socialIconCls,
} from '@/components/icons'

export default function ContactPage() {
  return (
    <>
      {/* ── HERO — full bleed, unchanged ── */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia2.avif')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.62)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Contact</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Get In Touch
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Reach our team for bookings, availability, location details, and special requests.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-16 md:py-20" style={{ background: '#ffffff' }}>

        {/* Section heading — keeps its own padding */}
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="section-label">Reach Us</span>
            <span className="gold-line" />
            <h2
              className="text-2xl md:text-3xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
            >
              We&apos;d Love to Hear From You
            </h2>
            <p
              className="mt-3 text-sm max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
            >
              Plan your stay at Ostia Marari. We&apos;re here to help with bookings, queries, and special requests.
            </p>
          </div>
        </div>

        {/* Two-column grid — full viewport width */}
        <div className="w-full px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* LEFT — Contact details, add readable padding */}
            <div className="flex flex-col gap-5 px-6 lg:pl-10">

              {/* Address */}
              <div
                className="flex items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid var(--border)', background: '#fafafa' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.30)' }}
                >
                  <MapPin size={18} style={{ color: '#c9a84c' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                  >
                    Address
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    Kurisadi Road, Beach, Thumpoly,<br />
                    Alappuzha, Kerala 688008
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="flex items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid var(--border)', background: '#fafafa' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.30)' }}
                >
                  <Phone size={18} style={{ color: '#c9a84c' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+919846044955"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
                  >
                    +91 98460 44955
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="flex items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid var(--border)', background: '#fafafa' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.30)' }}
                >
                  <Mail size={18} style={{ color: '#c9a84c' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@ostiamarari.com"
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-light)')}
                  >
                    info@ostiamarari.com
                  </a>
                </div>
              </div>

              {/* Check-in / Check-out */}
              <div
                className="flex items-start gap-4 p-6 transition-shadow duration-300 hover:shadow-md"
                style={{ border: '1px solid var(--border)', background: '#fafafa' }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.30)' }}
                >
                  <Clock size={18} style={{ color: '#c9a84c' }} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
                  >
                    Check-in / Check-out
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    Check-in: 2:00 PM<br />
                    Check-out: 11:00 AM
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3 pt-1">
                <p
                  className="text-xs font-semibold tracking-widest uppercase mr-1"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
                >
                  Follow Us
                </p>
                <a
                  href="https://www.instagram.com/ostiamarari/"
                  className={socialIconCls}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href="https://wa.me/919846044955"
                  className={socialIconCls}
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href="https://www.facebook.com/"
                  className={socialIconCls}
                  aria-label="Facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon size={16} />
                </a>
              </div>
            </div>

            {/* RIGHT — Map, flush to right edge */}
            <div
              className="w-full overflow-hidden"
              style={{
                height: '480px',
                border: '1px solid var(--border)',
                minHeight: '320px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3!2d76.3124823!3d9.5198796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08858cbba3d117%3A0x4e2c2db4bf5d8165!2sOstia%20Marari%20-%20a%20Boutique%20Beach%20Stay!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                loading="lazy"
                title="Ostia Marari Location"
                style={{ display: 'block', border: 0 }}
              />
            </div>

          </div>
        </div>

      </section>
    </>
  )
}