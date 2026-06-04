import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ostia Marari',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia4.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Legal</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>Privacy Policy</h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ background: '#ffffff' }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-raleway)', color: 'var(--text-light)' }}>
          <p className="text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>Last Updated: June 2026</p>

          {[
            {
              title: '1. Information We Collect',
              text: 'We collect personal information you provide directly, such as name, email address, phone number, and booking details when you make a reservation or contact us through our website.',
            },
            {
              title: '2. How We Use Your Information',
              text: 'We use your information to process bookings, send confirmation emails, respond to inquiries, and improve our services. We do not sell your personal information to third parties.',
            },
            {
              title: '3. Data Security',
              text: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
            },
            {
              title: '4. Cookies',
              text: 'Our website uses cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings, though this may affect some functionality.',
            },
            {
              title: '5. Contact Us',
              text: 'If you have questions about this Privacy Policy, please contact us at info@ostiamarari.com or call +91 98460 44955.',
            },
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
