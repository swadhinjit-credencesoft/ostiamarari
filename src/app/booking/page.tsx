'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { MessageCircle, Mail, ArrowLeft, CalendarDays } from 'lucide-react'
import DatePicker from 'react-datepicker'
import { format, addDays } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

type FormState = {
  title: string
  fullName: string
  mobile: string
  email: string
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
  { option: ROOM_OPTIONS[0], aliases: ['Premium Top Suites', 'Premium Top Suites 4 Bedrooms', 'premium-ocean-suite'] },
  { option: ROOM_OPTIONS[1], aliases: ['Premium Floor Suites', 'Premium Floor Suites 2 Bedrooms', 'boutique-deluxe-room'] },
  {
    option: ROOM_OPTIONS[2],
    aliases: ['Premium Full Suites', 'Premium Full Suites 6 Bedrooms Entire Property', 'Premium Full Suites (6 Bedrooms Entire Property)', 'family-beach-villa'],
  },
  { option: ROOM_OPTIONS[3], aliases: ['Premium Double Suites', 'Premium Double Suites 1 Bedroom', 'premium-double-suites'] },
  {
    option: ROOM_OPTIONS[4],
    aliases: ['Beach and Boats Package 2 Nights 3 Days', 'Beach & Boats Package 2 Nights 3 Days', 'beach-boats-2nights'],
  },
  {
    option: ROOM_OPTIONS[5],
    aliases: ['Beach and Boats Package 3 Nights 4 Days', 'Beach & Boats Package 3 Nights 4 Days', 'beach-boats-3nights'],
  },
]

function normalizeSelectionText(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '')
}

function resolveBookingSelection(value: string) {
  if (!value) return ''
  const normalizedValue = normalizeSelectionText(value)
  const exactOption = ROOM_OPTIONS.find(option => normalizeSelectionText(option) === normalizedValue)
  if (exactOption) return exactOption
  const matchedAlias = BOOKING_SELECTION_ALIASES.find(({ aliases }) =>
    aliases.some(alias => {
      const normalizedAlias = normalizeSelectionText(alias)
      return normalizedValue === normalizedAlias || normalizedValue.includes(normalizedAlias) || normalizedAlias.includes(normalizedValue)
    })
  )
  return matchedAlias?.option || ''
}

/* ── Shared styles ── */
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

/* ── Curated list of country codes for mobile number field ── */
const COUNTRY_CODES = [
  { code: '+91', country: 'IN', label: 'India (+91)' },
  { code: '+1', country: 'US/CA', label: 'USA/Canada (+1)' },
  { code: '+44', country: 'UK', label: 'UK (+44)' },
  { code: '+61', country: 'AU', label: 'Australia (+61)' },
  { code: '+971', country: 'AE', label: 'UAE (+971)' },
  { code: '+49', country: 'DE', label: 'Germany (+49)' },
  { code: '+33', country: 'FR', label: 'France (+33)' },
  { code: '+65', country: 'SG', label: 'Singapore (+65)' },
  { code: '+7', country: 'RU', label: 'Russia (+7)' },
  { code: '+81', country: 'JP', label: 'Japan (+81)' },
  { code: '+86', country: 'CN', label: 'China (+86)' },
  { code: '+39', country: 'IT', label: 'Italy (+39)' },
  { code: '+34', country: 'ES', label: 'Spain (+34)' },
  { code: '+41', country: 'CH', label: 'Switzerland (+41)' },
  { code: '+31', country: 'NL', label: 'Netherlands (+31)' },
  { code: '+46', country: 'SE', label: 'Sweden (+46)' },
  { code: '+60', country: 'MY', label: 'Malaysia (+60)' },
  { code: '+64', country: 'NZ', label: 'New Zealand (+64)' },
  { code: '+966', country: 'SA', label: 'Saudi Arabia (+966)' },
  { code: '+974', country: 'QA', label: 'Qatar (+974)' },
  { code: '+965', country: 'KW', label: 'Kuwait (+965)' },
  { code: '+968', country: 'OM', label: 'Oman (+968)' },
  { code: '+973', country: 'BH', label: 'Bahrain (+973)' },
]


function BookingFormInner() {
  const searchParams = useSearchParams()
  const preselect = resolveBookingSelection(searchParams ? searchParams.get('select') || '' : '')

  const [form, setForm] = useState<FormState>({
    title: 'Mr',
    fullName: '',
    mobile: '',
    email: '',
    rooms: '1',
    adults: '2',
    children: '0',
    selectedRoom: preselect,
  })

  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)
  const [countryCode, setCountryCode] = useState('+91')

  useEffect(() => {
    setForm(prev => ({ ...prev, selectedRoom: preselect }))
  }, [preselect])

  /* If check-in changes to after check-out, reset check-out */
  const handleCheckInChange = (date: Date | null) => {
    setCheckIn(date)
    if (date && checkOut && checkOut <= date) {
      setCheckOut(null)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null
    const sendMethod = submitter?.value

    const checkInStr = checkIn ? format(checkIn, 'dd MMM yyyy') : 'Not specified'
    const checkOutStr = checkOut ? format(checkOut, 'dd MMM yyyy') : 'Not specified'

    const msg = `Hello Ostia Marari Team,

I would like to enquire about the following booking:

Selected Room / Package: ${form.selectedRoom || 'Not specified'}
Name: ${form.title}. ${form.fullName}
Mobile Number: ${countryCode} ${form.mobile}
Email ID: ${form.email}
Check-In Date: ${checkInStr}
Check-Out Date: ${checkOutStr}
Number of Rooms: ${form.rooms}
Number of Adults: ${form.adults}
Number of Children (Age 4–10): ${form.children}

Please share availability and pricing details.

Thank You.`

    if (sendMethod === 'whatsapp') {
      window.open(`https://wa.me/919846044955?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
      return
    }

    if (sendMethod === 'email') {
      window.location.href = `mailto:info@ostiamarari.com?subject=${encodeURIComponent(
        `Booking Enquiry - ${form.selectedRoom || 'General'}`
      )}&body=${encodeURIComponent(msg)}`
    }
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

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
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {form.selectedRoom && (
            <p className="mt-1.5 text-xs" style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}>
              ✓ Selected: {form.selectedRoom}
            </p>
          )}
        </div>

        {/* Title + Full Name */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label style={labelStyle}>Title *</label>
            <select name="title" value={form.title} onChange={handleChange} style={inputStyle} required>
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

        {/* Mobile + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Mobile Number *</label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                style={{ ...inputStyle, width: '120px', minWidth: '120px', paddingRight: '8px', paddingLeft: '8px' }}
                required
              >
                {COUNTRY_CODES.map(cc => (
                  <option key={cc.code} value={cc.code}>
                    {cc.country} ({cc.code})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Your mobile number"
                style={inputStyle}
                required
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Email ID *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email address"
              style={inputStyle}
              required
            />
          </div>
        </div>

        {/* Check-In / Check-Out — react-datepicker */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label style={labelStyle}>Check-In Date *</label>
            <div className="relative">
              <DatePicker
                selected={checkIn}
                onChange={handleCheckInChange}
                minDate={today}
                dateFormat="dd MMM yyyy"
                placeholderText="Select check-in date"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                selectsStart
                startDate={checkIn}
                endDate={checkOut}
                required
                className="w-full bg-[#fafafa] border border-[#e8e4dc] text-[#2d2d2d] font-barlow text-sm p-[13px] pr-[42px] outline-none transition-colors duration-300 focus:border-[#c9a84c] cursor-pointer"
              />
              <CalendarDays
                size={16}
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#c9a84c',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Check-Out Date *</label>
            <div className="relative">
              <DatePicker
                selected={checkOut}
                onChange={(date: Date | null) => setCheckOut(date)}
                minDate={checkIn ? addDays(checkIn, 1) : addDays(today, 1)}
                dateFormat="dd MMM yyyy"
                placeholderText="Select check-out date"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                selectsEnd
                startDate={checkIn}
                endDate={checkOut}
                required
                className="w-full bg-[#fafafa] border border-[#e8e4dc] text-[#2d2d2d] font-barlow text-sm p-[13px] pr-[42px] outline-none transition-colors duration-300 focus:border-[#c9a84c] cursor-pointer"
              />
              <CalendarDays
                size={16}
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#c9a84c',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Rooms + Adults + Children */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label style={labelStyle}>Number of Rooms</label>
            <select name="rooms" value={form.rooms} onChange={handleChange} style={inputStyle}>
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n} Room{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Adults</label>
            <select name="adults" value={form.adults} onChange={handleChange} style={inputStyle}>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18].map(n => (
                <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Children (Age 4–10)</label>
            <select name="children" value={form.children} onChange={handleChange} style={inputStyle}>
              {[0,1,2,3,4,5,6,7,8].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Submit buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            type="submit"
            name="sendMethod"
            value="whatsapp"
            className="inline-flex flex-1 items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{ background: '#25d366', color: '#ffffff', border: '2px solid #25d366', fontFamily: 'var(--font-raleway)', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#25d366' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.color = '#ffffff' }}
          >
            <MessageCircle size={18} />
            Confirm via WhatsApp
          </button>
          <button
            type="submit"
            name="sendMethod"
            value="email"
            className="inline-flex flex-1 items-center justify-center gap-2 px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300"
            style={{ background: 'transparent', color: '#c9a84c', border: '2px solid #c9a84c', fontFamily: 'var(--font-raleway)', cursor: 'pointer' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c' }}
          >
            <Mail size={18} />
            Send via Email
          </button>
        </div>

      </form>
    </div>
  )
}

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia5.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Booking</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Booking
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Select your preferred room or package and send your enquiry directly to our team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <span className="section-label">Get In Touch</span>
            <span className="gold-line" />
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Make a Booking Enquiry
            </h2>
            <p className="mt-3 text-sm" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              Complete the form below and send your enquiry directly via WhatsApp or Email.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-10" style={{ color: 'var(--text-muted)' }}>Loading form…</div>}>
            <BookingFormInner />
          </Suspense>

          {/* Contact Note */}
          <div className="mt-10 text-center">
            <p className="text-xs" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>
              Or contact us directly:{' '}
              <a href="tel:+919846044955" className="hover:underline" style={{ color: '#c9a84c' }}>+91 98460 44955</a>
              {' '}·{' '}
              <a href="mailto:info@ostiamarari.com" className="hover:underline" style={{ color: '#c9a84c' }}>info@ostiamarari.com</a>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
