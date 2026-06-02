'use client'

import { useEffect, useState } from 'react'
// import { ChevronDown } from 'lucide-react'

const HERO_IMAGES = [
  '/images/ostia11.png',
  '/images/ostia1.png',
  '/images/ostia2.png',
  '/images/ostia3.png',
  '/images/ostia4.png',
  '/images/ostia5.png',
   '/images/ostia6.png',
   '/images/ostia7.png',
   '/images/ostia8.png',
   '/images/ostia9.png',
   '/images/ostia10.png',
]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* BG images slideshow */}
      {HERO_IMAGES.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${img}')`,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            animation: 'kenBurns 10s ease-in-out infinite alternate',
          }}
        />
      ))}
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.7) 100%)' }}
      />

      {/* Decorative corner frames */}
      <div className="absolute top-28 left-10 w-16 h-16 border-t-2 border-l-2 hidden lg:block" style={{ borderColor: 'rgba(201,168,76,0.5)' }} />
      <div className="absolute top-28 right-10 w-16 h-16 border-t-2 border-r-2 hidden lg:block" style={{ borderColor: 'rgba(201,168,76,0.5)' }} />
      <div className="absolute bottom-20 left-10 w-16 h-16 border-b-2 border-l-2 hidden lg:block" style={{ borderColor: 'rgba(201,168,76,0.5)' }} />
      <div className="absolute bottom-20 right-10 w-16 h-16 border-b-2 border-r-2 hidden lg:block" style={{ borderColor: 'rgba(201,168,76,0.5)' }} />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s',
        }}
      >
        <span className="section-label" style={{ opacity: loaded ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}>
          Ostia Marari
        </span>

        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: 'var(--font-playfair)', fontWeight: 700 }}
        >
          Ostia Marari
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div style={{ width: 60, height: 1, background: 'rgba(201,168,76,0.5)' }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#c9a84c' }} />
          <div style={{ width: 60, height: 1, background: 'rgba(201,168,76,0.5)' }} />
        </div>

        <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
           style={{ fontFamily: 'var(--font-raleway)', letterSpacing: '0.03em' }}>
          Discover a blend of comfort, elegance, and exceptional hospitality at Ostia Marari
        </p>

        <a
          href="https://bookone.io/Mudra-Villa-and-Resort?bookingEngine=true"
          target="_blank" rel="noreferrer"
          className="btn-primary text-sm"
        >
          Book Now
        </a>
      </div>

      {/* Scroll arrow */}
      {/* <button
        onClick={() => document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 anim-float"
        style={{ color: 'rgba(201,168,76,0.8)', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span style={{ fontSize: 10, letterSpacing: '3px', fontFamily: 'var(--font-raleway)', color: 'rgba(255,255,255,0.5)' }}>SCROLL</span>
        <ChevronDown size={18} />
      </button> */}
    </section>
  )
}
