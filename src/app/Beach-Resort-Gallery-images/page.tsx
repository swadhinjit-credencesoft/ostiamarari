import type { Metadata } from 'next'
import { seoConfig, buildCollectionSchema } from '@/lib/seo'
import GalleryClient from '@/components/GalleryClient'
import { gallery } from '@/lib/gallery'
import JsonLd from '@/components/JsonLd'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'Ostia Marari Gallery | Beach Villa and Sea View Rooms Alleppey',
  description:
    'View photos of Ostia Marari, including sea-view rooms, boutique interiors, beachfront access, private lawn, garden spaces and coastal beauty in Alleppey.',
  alternates: {
    canonical: '/Beach-Resort-Gallery-images',
  },
  openGraph: {
    title: 'Ostia Marari Gallery | Beach Villa and Sea View Rooms Alleppey',
    description:
      'Explore photos of Ostia Marari boutique beach stay – rooms, beach views, outdoor spaces, private lawn and coastal charm in Alleppey, Kerala.',
    url: `${siteUrl}/Beach-Resort-Gallery-images`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia6.avif`,
        width: 1200,
        height: 630,
        alt: 'Ostia Marari beach resort gallery – rooms, beach and outdoor spaces in Alleppey',
      },
      {
        url: `${siteUrl}/images/ostia11.avif`,
        width: 1200,
        height: 630,
        alt: 'Ostia Marari beachfront boutique stay gallery Alleppey Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ostia Marari Gallery | Beach Villa and Sea View Rooms Alleppey',
    description:
      'Browse photos of Ostia Marari boutique beach stay in Alleppey – rooms, beachfront, private lawn and coastal Kerala beauty.',
    images: [
      {
        url: `${siteUrl}/images/ostia6.avif`,
        alt: 'Ostia Marari beach resort gallery Alleppey Kerala',
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

export default function BeachResortGalleryPage() {
  const collectionSchema = buildCollectionSchema(
    'gallery',
    gallery.map((g) => ({
      name: g.alt,
      url: `${siteUrl}/Beach-Resort-Gallery-images#${g.src.split('/').pop()?.split('.')[0] || ''}`,
      image: `${siteUrl}${g.src}`,
      description: g.alt,
    }))
  )

  return (
    <>
      <JsonLd data={collectionSchema} />
      <GalleryClient />
    </>
  )
}
