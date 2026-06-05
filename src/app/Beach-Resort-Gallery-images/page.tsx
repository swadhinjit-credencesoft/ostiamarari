'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

type Cat = 'All' | 'Rooms' | 'Beach' | 'Exterior' | 'interior'

const gallery: { src: string; alt: string; cat: Cat }[] = [
  { src: '/images/ostia11.avif', alt: 'Ostia Marari beach view', cat: 'Exterior' },
  { src: '/images/ostia1.avif', alt: 'Ostia Marari exterior', cat: 'Beach' },
  { src: '/images/ostia2.avif', alt: 'Luxury room interior', cat: 'Exterior' },
  { src: '/images/ostia3.avif', alt: 'Premium suite', cat: 'Exterior' },
  { src: '/images/ostia4.avif', alt: 'Beachfront view', cat: 'interior' },
  { src: '/images/ostia5.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia6.avif', alt: 'Coastal view', cat: 'interior' },
  { src: '/images/ostia7.avif', alt: 'Resort interior', cat: 'interior' },
  { src: '/images/ostia8.avif', alt: 'Luxury bedroom', cat: 'interior' },
  { src: '/images/ostia9.avif', alt: 'Garden area', cat: 'Exterior' },
  { src: '/images/ostia10.avif', alt: 'Sea view terrace', cat: 'interior' },
  { src: '/images/ostia12.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia13.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia14.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia15.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia16.avif', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/interior2.avif', alt: 'Sea view terrace', cat: 'interior' },
  { src: '/images/interior3.avif', alt: 'Sea view terrace', cat: 'interior' },
  { src: '/images/interior4.avif', alt: 'Sea view terrace', cat: 'interior' },
  { src: '/room1.avif', alt: 'Premium Top Suite', cat: 'Rooms' },
  { src: '/room2.avif', alt: 'Premium Floor Suite', cat: 'Rooms' },
  { src: '/room3.avif', alt: 'Premium Full Villa', cat: 'Rooms' },
  { src: '/room4.avif', alt: 'Premium Double Suite', cat: 'Rooms' },
  { src: '/room5.avif', alt: 'Premium Suite', cat: 'Rooms' },
]

const CATS: Cat[] = ['All', 'Rooms', 'Beach', 'Exterior', 'interior']

export default function BeachResortGalleryPage() {
  const [active, setActive] = useState<Cat>('All')
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  const filtered = active === 'All' ? gallery : gallery.filter(g => g.cat === active)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia6.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Visual Journey</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Beach Resort Gallery
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Explore the rooms, beach views, outdoor spaces, and coastal charm of Ostia Marari, Alleppey.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f8f8f8' }}>
        {/* Filter tabs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-raleway)',
                  border: '1px solid',
                  borderColor: active === cat ? '#c9a84c' : 'var(--border)',
                  background: active === cat ? '#c9a84c' : 'transparent',
                  color: active === cat ? '#ffffff' : 'var(--text-light)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="w-full px-0">
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={`${item.cat}-${i}`}
                className="relative group cursor-pointer overflow-hidden"
                style={{ border: '1px solid var(--border)' }}
                onClick={() => setLightbox(item.src)}
              >
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.45)' }}>
                  <div className="w-10 h-10 flex items-center justify-center" style={{ border: '1px solid #c9a84c', borderRadius: '50%' }}>
                    <ZoomIn size={16} style={{ color: '#c9a84c' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 anim-fade-in" style={{ background: 'rgba(0,0,0,0.93)' }} onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10" aria-label="Close">
            <X size={30} />
          </button>
          <div className="relative max-w-5xl w-full" style={{ maxHeight: '85vh', aspectRatio: '16/10', animation: 'fadeUp 0.4s ease both' }} onClick={e => e.stopPropagation()}>
            <Image src={lightbox} alt="Gallery" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </>
  )
}
