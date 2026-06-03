import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cancellation Policy | Ostia Marari',
}

export default function CancellationPolicyPage() {
  return (
    <>
      <section className="relative flex items-end justify-center overflow-hidden pt-20 lg:pt-24" style={{ minHeight: 240, paddingBottom: 36 }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia4.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.7)' }} />
        <div className="relative z-10 text-center px-4">
          <span className="section-label">Legal</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>Cancellation Policy</h1>
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
