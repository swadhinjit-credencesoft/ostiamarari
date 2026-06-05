import type { Metadata } from 'next'
import { seoConfig, buildWebPageSchema } from '@/lib/seo'
import ContactClient from '@/components/ContactClient'
import JsonLd from '@/components/JsonLd'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'Contact Ostia Marari | Beach Stay in Alleppey Kerala',
  description:
    'Contact Ostia Marari for direct bookings, availability, location details and special requests for your luxury beach stay in Alleppey, Kerala.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Ostia Marari | Beach Stay in Alleppey Kerala',
    description:
      'Reach our team for direct bookings, availability and special requests. Call, email or WhatsApp us for your luxury beach stay in Alleppey.',
    url: `${siteUrl}/contact`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        width: 1200,
        height: 630,
        alt: 'Contact Ostia Marari boutique beach stay in Alleppey Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ostia Marari | Beach Stay in Alleppey Kerala',
    description:
      'Reach Ostia Marari for direct bookings, availability and special requests for your luxury beach stay in Alleppey.',
    images: [
      {
        url: `${siteUrl}/images/ostia2.avif`,
        alt: 'Contact Ostia Marari Alleppey Kerala',
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

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema('contact')} />
      <ContactClient />
    </>
  )
}