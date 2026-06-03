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
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <p>Check-in: 2:00 PM</p>
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
