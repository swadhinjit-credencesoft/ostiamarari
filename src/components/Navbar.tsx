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
  { label: 'About Us', href: '/#why-choose' },
  { label: 'Rooms & Suites', href: '/rooms-suites' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Price', href: '/#rooms' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Booking', href: '/booking' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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
    setOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(255,255,255,0.1)',
        padding: scrolled ? '8px 0' : '14px 0',
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/ostiamararilogo.png"
            alt="Ostia Marari"
            width={scrolled ? 52 : 62}
            height={scrolled ? 52 : 62}
            priority
            className="rounded-sm object-cover transition-all duration-300"
            style={{ width: scrolled ? 52 : 62, height: scrolled ? 52 : 62 }}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="font-semibold tracking-wide"
              style={{ fontFamily: 'var(--font-cinzel)', fontSize: '1.05rem', color: '#1a1a1a', letterSpacing: '0.06em' }}
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
        </Link>

        {/* Desktop Nav — only shown on xl+ */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(link.href, e)}
              className="nav-link whitespace-nowrap"
              style={{ fontFamily: 'var(--font-raleway)', fontSize: '10.5px', letterSpacing: '1.4px' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Right — xl+ */}
        <div className="hidden xl:flex items-center gap-2 shrink-0">
          <a href="https://www.instagram.com/ostiamarari/" target="_blank" rel="noreferrer" aria-label="Instagram" className={socialIconCls}>
            <InstagramIcon size={16} />
          </a>
          <a href="https://wa.me/919846044955" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={socialIconCls}>
            <WhatsAppIcon size={16} />
          </a>
          <a href="tel:+919846044955" aria-label="Call" className={socialIconCls}>
            <PhoneCallIcon size={16} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className={socialIconCls}>
            <FacebookIcon size={16} />
          </a>
          <Link
            href="/booking"
            className="ml-1 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] uppercase text-white transition-all duration-300 whitespace-nowrap"
            style={{ background: '#c9a84c', border: '2px solid #c9a84c', fontFamily: 'var(--font-raleway)' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#b8952e'; e.currentTarget.style.borderColor = '#b8952e' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.borderColor = '#c9a84c' }}
          >
            Book Now
          </Link>
        </div>

        {/* Hamburger — shown below xl */}
        <button
          className="xl:hidden flex items-center justify-center w-10 h-10 shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: '#1a1a1a' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile / Tablet Drawer */}
      {open && (
        <div
          className="xl:hidden border-t"
          style={{
            background: 'rgba(255,255,255,0.99)',
            borderColor: 'var(--border)',
            animation: 'slideDown 0.25s ease',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
            {/* Links grid — 2 columns on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="nav-link block py-3 border-b text-sm uppercase tracking-wider"
                  style={{ borderColor: 'var(--border)', fontFamily: 'var(--font-raleway)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social + CTA row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5">
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/ostiamarari/" target="_blank" rel="noreferrer" aria-label="Instagram" className={socialIconCls}>
                  <InstagramIcon size={17} />
                </a>
                <a href="https://wa.me/919846044955" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={socialIconCls}>
                  <WhatsAppIcon size={17} />
                </a>
                <a href="tel:+919846044955" aria-label="Call" className={socialIconCls}>
                  <PhoneCallIcon size={17} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className={socialIconCls}>
                  <FacebookIcon size={17} />
                </a>
                <a
                  href="tel:+919846044955"
                  className="text-sm font-medium"
                  style={{ color: '#1a1a1a', fontFamily: 'var(--font-raleway)' }}
                >
                  +91 98460 44955
                </a>
              </div>

              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="px-6 py-2.5 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 inline-flex items-center"
                style={{ background: '#1a1a1a', color: '#ffffff', border: '2px solid #1a1a1a', fontFamily: 'var(--font-raleway)' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.borderColor = '#c9a84c' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.borderColor = '#1a1a1a' }}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}