'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

type Cat = 'All' | 'Rooms' | 'Beach' | 'Exterior'

const gallery: { src: string; alt: string; cat: Cat }[] = [
  { src: '/images/ostia11.png', alt: 'Ostia Marari beach view', cat: 'Beach' },
  { src: '/images/ostia1.png', alt: 'Ostia Marari exterior', cat: 'Exterior' },
  { src: '/images/ostia2.png', alt: 'Luxury room interior', cat: 'Rooms' },
  { src: '/images/ostia3.png', alt: 'Premium suite', cat: 'Rooms' },
  { src: '/images/ostia4.png', alt: 'Beachfront view', cat: 'Beach' },
  { src: '/images/ostia5.png', alt: 'Boutique stay exterior', cat: 'Exterior' },
  { src: '/images/ostia6.png', alt: 'Coastal view', cat: 'Beach' },
  { src: '/images/ostia7.png', alt: 'Resort interior', cat: 'Exterior' },
  { src: '/images/ostia8.png', alt: 'Luxury bedroom', cat: 'Rooms' },
  { src: '/images/ostia9.png', alt: 'Garden area', cat: 'Exterior' },
  { src: '/images/ostia10.png', alt: 'Sea view terrace', cat: 'Beach' },
  { src: '/room1.jpg', alt: 'Premium Top Suite', cat: 'Rooms' },
]

const CATS: Cat[] = ['All', 'Rooms', 'Beach', 'Exterior']

export default function GalleryPage() {
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
      <section className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24" style={{ minHeight: 280, paddingBottom: 40 }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia6.png')" }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Visual Journey</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Gallery
          </h1>
          <p className="text-white/55 mt-2 text-sm">
            A glimpse of Ostia Marari — where the beach meets luxury
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter tabs */}
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

          {/* Grid */}
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
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(0,0,0,0.45)' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: '1px solid #c9a84c', borderRadius: '50%' }}
                  >
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
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 anim-fade-in"
          style={{ background: 'rgba(0,0,0,0.93)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={30} />
          </button>
          <div
            className="relative max-w-5xl w-full"
            style={{
              maxHeight: '85vh',
              aspectRatio: '16/10',
              animation: 'fadeUp 0.4s ease both',
            }}
            onClick={e => e.stopPropagation()}
          >
            <Image src={lightbox} alt="Gallery" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </>
  )
}
