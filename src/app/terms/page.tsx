import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Ostia Marari',
}

export default function TermsPage() {
  return (
    <>
      <section className="relative flex items-end justify-center overflow-hidden" style={{ height: 240, paddingBottom: 36 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://mudravillaandresort.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-06-at-1.08.00-PM-2.jpeg')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Legal</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>Terms &amp; Conditions</h1>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', color: 'var(--text-light)' }}>
          <p className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>Last Updated: October 2025</p>
          {[
            { title: '1. Reservations', text: 'All reservations are subject to availability and confirmation. A valid government-issued photo ID is required at check-in for all guests.' },
            { title: '2. Payment', text: 'Full payment is required at the time of check-in. We accept cash, major credit cards, and UPI. Advance booking may require a deposit.' },
            { title: '3. Check-In / Check-Out', text: 'Standard check-in time is 12:00 PM and check-out is 11:00 AM. Early check-in and late check-out are subject to availability and may incur additional charges.' },
            { title: '4. Guest Conduct', text: 'Guests are expected to respect the resort premises, staff, and other guests. The management reserves the right to ask disruptive guests to leave without refund.' },
            { title: '5. Liability', text: 'Ostia Marari is not responsible for loss of valuables. Guests are advised to use the in-room safe or front desk locker for valuables.' },
            { title: '6. Governing Law', text: 'These terms are governed by the laws of Maharashtra, India. Any disputes shall be subject to the jurisdiction of Alibaug courts.' },
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
