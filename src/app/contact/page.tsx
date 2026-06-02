'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import {
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  socialIconCls,
} from '@/components/icons'

type FormState = {
  name: string
  email: string
  phone: string
  checkIn: string
  checkOut: string
  guests: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24"
        style={{ minHeight: 280, paddingBottom: 40 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/ostia2.png')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <span className="section-label">Reach Out</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT PANEL */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="section-label">Get In Touch</span>
                <span className="gold-line-left" />
                <h2
                  className="text-2xl lg:text-3xl font-semibold text-dark mb-3"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  We’d Love to Hear From You
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Plan your stay at Ostia Marari. We’re here to help with
                  bookings, queries, and special requests.
                </p>
              </div>

              {/* INFO */}
              <div className="space-y-4">
                {/* ADDRESS */}
                <div className="flex gap-4 p-5 border border-gray-200">
                  <MapPin className="text-[#c9a84c]" size={18} style={{ flexShrink: 0 }} />
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-800">Address</p>
                    <p>Kurisadi Road, Beach, Thumpoly, Alappuzha, Kerala 688008</p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex gap-4 p-5 border border-gray-200">
                  <Phone className="text-[#c9a84c]" size={18} style={{ flexShrink: 0 }} />
                  <div className="text-sm">
                    <a
                      href="tel:+919846044955"
                      className="block text-gray-600 hover:text-[#c9a84c]"
                    >
                      +91 98460 44955
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4 p-5 border border-gray-200">
                  <Mail className="text-[#c9a84c]" size={18} />
                  <a
                    href="mailto:info@ostiamarari.com"
                    className="text-sm text-gray-600 hover:text-[#c9a84c]"
                  >
                    info@ostiamarari.com
                  </a>
                </div>

                {/* TIME */}
                <div className="flex gap-4 p-5 border border-gray-200">
                  <Clock className="text-[#c9a84c]" size={18} />
                  <div className="text-sm text-gray-600">
                    <p>Check-in: 12:00 PM</p>
                    <p>Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="flex gap-3">
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

            {/* FORM */}
            <div className="lg:col-span-3 p-8 border border-gray-200">
              {sent ? (
                <div className="text-center py-16">
                  <Send className="mx-auto text-[#c9a84c]" size={30} />
                  <h3 className="text-xl font-semibold mt-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mt-2">
                    We will contact you soon.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-6">
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full p-3 border"
                      required
                    />

                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full p-3 border"
                      required
                    />

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full p-3 border"
                    />

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Message"
                      className="w-full p-3 border"
                      rows={4}
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#c9a84c] text-white py-3"
                    >
                      <Send className="inline mr-2" size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* MAP */}
          <div className="mt-14 h-[380px] border border-gray-200 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Ostia%20Marari%20Alappuzha%20Kerala&t=m&z=13&output=embed&iwloc=near"
              width="100%"
              height="100%"
              loading="lazy"
              title="Ostia Marari Location"
            />
          </div>
        </div>
      </section>
    </>
  )
}