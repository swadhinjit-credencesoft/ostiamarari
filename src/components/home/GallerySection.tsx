'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

type Cat = 'All' | 'Rooms' | 'Exterior'

const gallery: { src: string; alt: string; cat: Cat; aspect: string }[] = [
  {
    src: '/images/ostia11.png',
    alt: 'Resort pool area',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia1.png',
    alt: 'Resort exterior',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia2.png',
    alt: 'Luxury Villa with Jacuzzi',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia3.png',
    alt: 'Villa Premium',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia4.png',
    alt: 'Deluxe Group Room',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia5.png',
    alt: 'Deluxe Room',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia6.png',
    alt: 'Resort interior',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia7.png',
    alt: 'Pool view',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
  {
    src: '/images/ostia8.png',
    alt: 'Exterior view 2',
    cat: 'Exterior',
    aspect: 'aspect-[4/3]',
  },
   {
    src: '/room2.jpg',
    alt: 'Deluxe Group Room',
    cat: 'Rooms',
    aspect: 'aspect-[4/3]',
  },
   {
    src: '/room3.jpg',
    alt: 'Deluxe Group Room',
    cat: 'Rooms',
    aspect: 'aspect-[4/3]',
  },
   {
    src: '/room1.jpg',
    alt: 'Deluxe Group Room',
    cat: 'Rooms',
    aspect: 'aspect-[4/3]',
  },
]

const CATS: Cat[] = ['All', 'Rooms', 'Exterior']

export default function GallerySection() {
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
    <section id="gallery" className="py-24" style={{ background: '#f8f8f8' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Visual Journey</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Gallery
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-3 flex-wrap mb-10">
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="text-xs font-semibold tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
              style={{
                fontFamily: 'var(--font-raleway)',
                border: '1px solid',
                borderColor: active === cat ? '#c9a84c' : 'var(--border)',
                background: active === cat ? '#c9a84c' : 'transparent',
                color: active === cat ? '#ffffff' : 'var(--text-light)',
                cursor: 'pointer',
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
              key={`${item.src}-${i}`}
              className="relative group cursor-pointer overflow-hidden"
              style={{ border: '1px solid var(--border)' }}
              onClick={() => setLightbox(item.src)}
            >
              <div className={`relative w-full ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              {/* Overlay */}
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
            <Image
              src={lightbox}
              alt="Gallery"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
