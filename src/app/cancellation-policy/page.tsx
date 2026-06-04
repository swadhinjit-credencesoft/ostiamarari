import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Ostia Marari',
}

export default function CancellationPolicyPage() {
  return (
    <>
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia4.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Legal</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>Cancellation Policy</h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Understand our cancellation and refund terms before making a booking with us.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', color: 'var(--text-light)' }}>
          <p className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>Last Updated: June 2026</p>
          {[
            { title: 'Free Cancellation', text: 'Bookings cancelled more than 7 days before the check-in date will receive a full refund of the booking amount.' },
            { title: 'Partial Refund', text: 'Cancellations made between 3–7 days before check-in will receive a 50% refund of the total booking amount.' },
            { title: 'No Refund', text: 'Cancellations made within 72 hours of check-in are non-refundable. No-shows are also non-refundable.' },
            { title: 'How to Cancel', text: 'To cancel your booking, please contact us at info@ostiamarari.com or call +91 98460 44955 with your booking reference number.' },
            { title: 'Special Circumstances', text: 'In case of medical emergencies or unavoidable circumstances, we will consider refund requests on a case-by-case basis at the management\'s discretion.' },
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
