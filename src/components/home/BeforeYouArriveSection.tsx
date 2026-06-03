import { Car, Clock, LogIn, LogOut, Plane, Train, Wifi } from 'lucide-react'

const arrivalDetails = [
  { icon: LogIn, label: 'Check-in Time', value: '2:00 PM' },
  { icon: LogOut, label: 'Check-out Time', value: '11:00 AM' },
  { icon: Car, label: 'Parking', value: 'Indoor parking available' },
  { icon: Wifi, label: 'WiFi', value: 'Complimentary WiFi' },
  { icon: Plane, label: 'Airport Distance', value: '82 km from Cochin International Airport' },
  { icon: Train, label: 'Railway Station Distance', value: '5 km from Alleppey Railway Station' },
]

export default function BeforeYouArriveSection() {
  return (
    <section
      id="before-you-arrive"
      className="py-24"
      style={{ background: '#f8f6f1' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label">Guest Information</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Before You Arrive
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            Practical details to help you plan your journey and settle in smoothly.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)' }}
        >
          {arrivalDetails.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="p-6 md:p-7 min-h-[150px]"
              style={{
                background: '#ffffff',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center rounded-full mb-5"
                style={{ background: 'rgba(201,168,76,0.12)' }}
              >
                <Icon size={19} style={{ color: '#c9a84c' }} />
              </div>
              <p
                className="text-xs uppercase tracking-widest font-semibold mb-2"
                style={{ color: '#c9a84c', fontFamily: 'var(--font-raleway)' }}
              >
                {label}
              </p>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: 'var(--text)', fontFamily: 'var(--font-raleway)' }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-center">
          <Clock size={15} style={{ color: '#c9a84c', flexShrink: 0 }} />
          <p
            className="text-sm"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            Early check-in or late check-out may be arranged based on availability.
          </p>
        </div>
      </div>
    </section>
  )
}
