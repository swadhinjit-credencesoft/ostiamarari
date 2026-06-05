import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ostia Marari Beach Stay – Alleppey',
  description: 'Read the terms and conditions for booking your stay at Ostia Marari boutique beach resort in Alleppey, Kerala.',
  alternates: { canonical: '/terms-conditions' },
}

export default function TermsConditionsPage() {
  return (
    <>
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia4.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Legal</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>Terms &amp; Conditions</h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Please read our terms carefully to understand the rules that govern your stay with us.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', color: 'var(--text-light)' }}>
          <p className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>Last Updated: June 2026</p>
          {[
            { title: '1. Reservations', text: 'All reservations are subject to availability and confirmation. A valid government-issued photo ID is required at check-in for all guests.' },
            { title: '2. Payment', text: 'Full payment is required at the time of check-in. We accept cash, major credit cards, and UPI. Advance booking may require a deposit.' },
            { title: '3. Check-In / Check-Out', text: 'Standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.' },
            { title: '4. Guest Conduct', text: 'Guests are expected to respect the property, staff, and other guests. The management reserves the right to ask disruptive guests to leave without refund.' },
            { title: '5. Liability', text: 'Ostia Marari is not responsible for loss of valuables. Guests are advised to use the in-room safe or front desk locker for valuables.' },
            { title: '6. Governing Law', text: 'These terms are governed by the laws of Kerala, India. Any disputes shall be subject to the jurisdiction of Alappuzha courts.' },
          ].map(({ title, text }) => (
            <div key={title}>
              <h2 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
