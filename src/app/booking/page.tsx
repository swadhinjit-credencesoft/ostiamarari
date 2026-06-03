'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Send, CheckCircle, MessageCircle, Mail, ArrowLeft } from 'lucide-react'

type FormState = {
  title: string
  fullName: string
  checkIn: string
  checkOut: string
  rooms: string
  adults: string
  children: string
  selectedRoom: string
}

const ROOM_OPTIONS = [
  'Premium Top Suites (4 Bedrooms – Up to 12 Guests)',
  'Premium Floor Suites (2 Bedrooms – Up to 6 Guests)',
  'Premium Full Suites (6 Bedrooms – Entire Property, Up to 18 Guests)',
  'Premium Double Suites (1 Bedroom – Up to 3 Guests)',
  'Beach & Boats Package – 2 Nights · 3 Days (₹14,800 / 2 Persons)',
  'Beach & Boats Package – 3 Nights · 4 Days (₹18,800 / 2 Persons)',
]

const BOOKING_SELECTION_ALIASES = [
  {
    option: ROOM_OPTIONS[0],
    aliases: ['Premium Top Suites', 'Premium Top Suites 4 Bedrooms', 'premium-ocean-suite'],
  },
  {
    option: ROOM_OPTIONS[1],
    aliases: ['Premium Floor Suites', 'Premium Floor Suites 2 Bedrooms', 'boutique-deluxe-room'],
  },
  {
    option: ROOM_OPTIONS[2],
    aliases: [
      'Premium Full Suites',
      'Premium Full Suites 6 Bedrooms Entire Property',
      'Premium Full Suites (6 Bedrooms Entire Property)',
      'family-beach-villa',
    ],
  },
  {
    option: ROOM_OPTIONS[3],
    aliases: ['Premium Double Suites', 'Premium Double Suites 1 Bedroom', 'premium-double-suites'],
  },
  {
    option: ROOM_OPTIONS[4],
    aliases: [
      'Beach and Boats Package 2 Nights 3 Days',
      'Beach & Boats Package 2 Nights 3 Days',
      'beach-boats-2nights',
    ],
  },
  {
    option: ROOM_OPTIONS[5],
    aliases: [
      'Beach and Boats Package 3 Nights 4 Days',
      'Beach & Boats Package 3 Nights 4 Days',
      'beach-boats-3nights',
    ],
  },
]

function normalizeSelectionText(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '')
}

function resolveBookingSelection(value: string) {
  if (!value) return ''

  const normalizedValue = normalizeSelectionText(value)
  const exactOption = ROOM_OPTIONS.find(
    option => normalizeSelectionText(option) === normalizedValue
  )

  if (exactOption) return exactOption

  const matchedAlias = BOOKING_SELECTION_ALIASES.find(({ aliases }) =>
    aliases.some(alias => {
      const normalizedAlias = normalizeSelectionText(alias)
      return (
        normalizedValue === normalizedAlias ||
        normalizedValue.includes(normalizedAlias) ||
        normalizedAlias.includes(normalizedValue)
      )
    })
  )

  return matchedAlias?.option || ''
}

function BookingFormInner() {
  const searchParams = useSearchParams()
  const preselect = resolveBookingSelection(searchParams ? (searchParams.get('select') || '') : '')

  const [form, setForm] = useState<FormState>({
    title: 'Mr',
    fullName: '',
    checkIn: '',
    checkOut: '',
    rooms: '1',
    adults: '2',
    children: '0',
    selectedRoom: preselect,
  })

  const [submitted, setSubmitted] = useState(false)
  const [generatedMsg, setGeneratedMsg] = useState('')

  useEffect(() => {
    setForm(prev => ({ ...prev, selectedRoom: preselect }))
  }, [preselect])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Ostia Marari Team,

I would like to enquire about the following booking:

Selected Room / Package: ${form.selectedRoom || 'Not specified'}
Name: ${form.title}. ${form.fullName}
Check-In Date: ${form.checkIn}
Check-Out Date: ${form.checkOut}
Number of Rooms: ${form.rooms}
Number of Adults: ${form.adults}
Number of Children (Age 4–10): ${form.children}

Please share availability and pricing details.

Thank You.`
    setGeneratedMsg(msg)
    setSubmitted(true)
  }

  const whatsappUrl = `https://wa.me/919846044955?text=${encodeURIComponent(generatedMsg)}`
  const emailUrl = `mailto:info@ostiamarari.com?subject=${encodeURIComponent(
    `Booking Enquiry – ${form.selectedRoom || 'General'}`
  )}&body=${encodeURIComponent(generatedMsg)}`

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-10 px-4">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{ background: 'rgba(201,168,76,0.1)', border: '2px solid #c9a84c' }}
        >
          <CheckCircle size={36} style={{ color: '#c9a84c' }} />
        </div>
        <h2
          className="text-3xl font-semibold mb-3"
          style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
        >
          Enquiry Ready!
        </h2>
        <p className="text-sm mb-8" style={{ color: 'var(--text-light)' }}>
          Your booking enquiry has been prepared. Please send it to us via WhatsApp or Email.
        </p>

        {/* Message Preview */}
        <div
          className="text-left p-6 mb-8 text-sm leading-relaxed"
          style={{
            background: '#f8f8f8',
            border: '1px solid var(--border)',
            fontFamily: 'var(--font-raleway)',
            color: 'var(--text)',
            whiteSpace: 'pre-line',
          }}
        >
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#c9a84c' }}>
            Your Enquiry Message
          </p>
          {generatedMsg}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              background: '#25d366',
              color: '#ffffff',
              border: '2px solid #25d366',
              fontFamily: 'var(--font-raleway)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#25d366'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#25d366'
              e.currentTarget.style.color = '#ffffff'
            }}
          >
            <MessageCircle size={18} />
            Confirm via WhatsApp
          </a>
          <a
            href={emailUrl}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{
              background: 'transparent',
              color: '#c9a84c',
              border: '2px solid #c9a84c',
              fontFamily: 'var(--font-raleway)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#c9a84c'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#c9a84c'
            }}
          >
            <Mail size={18} />
            Send via Email
          </a>
        </div>

        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex items-center gap-2 text-sm"
          style={{
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-raleway)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <ArrowLeft size={14} /> Edit Enquiry
        </button>
      </div>
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#fafafa',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontFamily: 'var(--font-raleway)',
    fontSize: '14px',
    padding: '13px 16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    color: 'var(--text-light)',
    fontFamily: 'var(--font-raleway)',
    marginBottom: '6px',
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Room / Package Selection */}
        <div>
          <label style={labelStyle}>Room / Package *</label>
          <select
            name="selectedRoom"
            value={form.selectedRoom}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            <option value="">— Select a Room or Package —</option>
            {ROOM_OPTIONS.map(opt => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {form.selectedRoom && (
            <p
              className="mt-1.5 text-xs"
              style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
            >
              ✓ Selected: {form.selectedRoom}
            </p>
          )}
        </div>

        {/* Title + Full Name */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label style={labelStyle}>Title *</label>
            <select
              name="title"
              value={form.title}
              onChange={handleChange}
              style={inputStyle}
              required
            >
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Ms">Ms.</option>
            </select>
          </div>
          <div className="col-span-2">
            <label style={labelStyle}>Full Name *</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              style={inputStyle}
              required
            />
          </div>
        </div>

        {/* Check-In / Check-Out */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Check-In Date *</label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
          <div>
            <label style={labelStyle}>Check-Out Date *</label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </div>
        </div>

        {/* Rooms + Adults + Children */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label style={labelStyle}>Number of Rooms</label>
            <select name="rooms" value={form.rooms} onChange={handleChange} style={inputStyle}>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>
                  {n} Room{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Adults</label>
            <select name="adults" value={form.adults} onChange={handleChange} style={inputStyle}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(n => (
                <option key={n} value={n}>
                  {n} Adult{n > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Children (Age 4–10)</label>
            <select
              name="children"
              value={form.children}
              onChange={handleChange}
              style={inputStyle}
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Child' : 'Children'}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 font-semibold text-sm tracking-[2px] uppercase transition-all duration-300 inline-flex items-center justify-center gap-2"
          style={{
            background: '#c9a84c',
            color: '#ffffff',
            border: '2px solid #c9a84c',
            fontFamily: 'var(--font-raleway)',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#b8942e'
            e.currentTarget.style.borderColor = '#b8942e'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#c9a84c'
            e.currentTarget.style.borderColor = '#c9a84c'
          }}
        >
          <Send size={16} />
          Submit Enquiry
        </button>
      </form>
    </div>
  )
}

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24"
        style={{ minHeight: 300, paddingBottom: 44 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia5.png')" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)',
          }}
        />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Reserve Your Stay</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Booking Enquiry
          </h1>
          <p className="text-white/55 mt-2 text-sm max-w-sm mx-auto">
            Fill in your details and we&apos;ll get back to you with availability and pricing.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="section-label">Get In Touch</span>
            <span className="gold-line" />
            <h2
              className="text-2xl md:text-3xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
            >
              Make a Booking Enquiry
            </h2>
            <p
              className="mt-3 text-sm"
              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
            >
              Complete the form below and send your enquiry directly via WhatsApp or Email.
            </p>
          </div>

          <Suspense
            fallback={
              <div className="text-center py-10" style={{ color: 'var(--text-muted)' }}>
                Loading form…
              </div>
            }
          >
            <BookingFormInner />
          </Suspense>

          {/* Contact Note */}
          <div className="mt-10 text-center">
            <p
              className="text-xs"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
            >
              Or contact us directly:{' '}
              <a href="tel:+919846044955" className="hover:underline" style={{ color: '#c9a84c' }}>
                +91 98460 44955
              </a>
              {' '}·{' '}
              <a
                href="mailto:info@ostiamarari.com"
                className="hover:underline"
                style={{ color: '#c9a84c' }}
              >
                info@ostiamarari.com
              </a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm"
              style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
