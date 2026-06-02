'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import {
  InstagramIcon,
  WhatsAppIcon,
  PhoneCallIcon,
  FacebookIcon,
  socialIconCls,
} from '@/components/icons'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Rooms & Suites', href: '/rooms-suites' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(255,255,255,0.97)'
          : 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid rgba(255,255,255,0.08)',
        padding: scrolled ? '12px 0' : '18px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/ostiamararilogo.png"
            alt="Ostia Marari"
            width={52}
            height={52}
            priority
            className="rounded-sm object-cover"
          />

          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-dark font-semibold text-xl uppercase tracking-wide"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Ostia Marari
            </span>

            <span
              className="text-[10px] uppercase tracking-[0.28em]"
              style={{
                color: '#c9a84c',
                fontFamily: 'var(--font-raleway)',
              }}
            >
              Boutique Beach Stay
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-raleway)' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/ostiamarari/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={socialIconCls}
          >
            <InstagramIcon size={17} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919846044955"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className={socialIconCls}
          >
            <WhatsAppIcon size={17} />
          </a>

          {/* Phone */}
          <a
            href="tel:+919846044955"
            aria-label="Call Ostia Marari"
            className={socialIconCls}
          >
            <PhoneCallIcon size={17} />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className={socialIconCls}
          >
            <FacebookIcon size={17} />
          </a>

          {/* Book Button */}
          <a
            href="https://ostiamarari.com"
            target="_blank"
            rel="noreferrer"
            className="ml-2 px-5 py-2.5 text-xs font-semibold tracking-[0.2em] uppercase text-white transition-all duration-300"
            style={{
              background: '#c9a84c',
              border: '2px solid #c9a84c',
              fontFamily: 'var(--font-raleway)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#b8952e'
              e.currentTarget.style.borderColor = '#b8952e'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#c9a84c'
              e.currentTarget.style.borderColor = '#c9a84c'
            }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-dark p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden border-t mt-2"
          style={{
            background: 'rgba(255,255,255,0.99)',
            borderColor: 'var(--border)',
            animation: 'slideDown 0.25s ease',
          }}
        >
          <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col gap-1">
            {/* Mobile Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="nav-link block py-3 border-b text-sm uppercase tracking-wider"
                style={{
                  borderColor: 'var(--border)',
                  fontFamily: 'var(--font-raleway)',
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex items-center gap-3 pt-5">
              <a
                href="https://www.instagram.com/ostiamarari/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className={socialIconCls}
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href="https://wa.me/919846044955"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className={socialIconCls}
              >
                <WhatsAppIcon size={17} />
              </a>

              <a
                href="tel:+919846044955"
                aria-label="Call"
                className={socialIconCls}
              >
                <PhoneCallIcon size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className={socialIconCls}
              >
                <FacebookIcon size={17} />
              </a>
            </div>

            {/* Mobile Contact Number */}
            <a
              href="tel:+919846044955"
              className="mt-4 text-sm font-medium"
              style={{
                color: '#1a1a1a',
                fontFamily: 'var(--font-raleway)',
              }}
            >
              Call Us: +91 98460 44955
            </a>

            {/* Mobile Book Button */}
            <a
              href="https://ostiamarari.com"
              target="_blank"
              rel="noreferrer"
              className="justify-center mt-4 px-5 py-3 text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 inline-flex items-center gap-2"
              style={{
                background: '#1a1a1a',
                color: '#ffffff',
                border: '2px solid #1a1a1a',
                fontFamily: 'var(--font-raleway)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c9a84c'
                e.currentTarget.style.borderColor = '#c9a84c'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#1a1a1a'
                e.currentTarget.style.borderColor = '#1a1a1a'
              }}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}