import type { Metadata } from 'next'
import { seoConfig, buildWebPageSchema } from '@/lib/seo'
import BookingPageClient from './BookingPageClient'
import JsonLd from '@/components/JsonLd'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'Book Ostia Marari Direct | Beachfront Stay Alleppey Kerala',
  description:
    'Book Ostia Marari direct for luxury beachfront accommodation in Alleppey with sea-view suites, breakfast, WiFi and WhatsApp booking support. Best rates guaranteed.',
  alternates: {
    canonical: '/Hotel-Resort-Booking',
  },
  openGraph: {
    title: 'Book Ostia Marari Direct | Beachfront Stay Alleppey Kerala',
    description:
      'Reserve your luxury beach stay at Ostia Marari, Alleppey. Choose from Top Suites, Floor Suites, Full Villa or Double Suites. Confirm via WhatsApp or email.',
    url: `${siteUrl}/Hotel-Resort-Booking`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia5.avif`,
        width: 1200,
        height: 630,
        alt: 'Book Ostia Marari – direct beachfront stay booking in Alleppey Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Ostia Marari Direct | Beachfront Stay Alleppey Kerala',
    description:
      'Book direct for the best rates at Ostia Marari boutique beach stay in Alleppey, Kerala. WhatsApp or email booking available.',
    images: [
      {
        url: `${siteUrl}/images/ostia5.avif`,
        alt: 'Ostia Marari hotel resort booking – Alleppey beach stay',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HotelResortBookingPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('booking')} />
      <BookingPageClient />
    </>
  )
}
