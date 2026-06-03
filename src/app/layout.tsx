import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { homepageSeo, seoConfig, topSeoKeywords } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: homepageSeo.title,
    template: `%s | ${seoConfig.shortName}`,
  },
  description: homepageSeo.description,
  applicationName: seoConfig.shortName,
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: topSeoKeywords,
  authors: [{ name: seoConfig.businessName, url: seoConfig.siteUrl }],
  creator: seoConfig.businessName,
  publisher: seoConfig.businessName,
  category: 'Luxury Boutique Beach Stay',
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
      en: '/',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/ostiamararilogo.png',
    shortcut: '/ostiamararilogo.png',
    apple: '/ostiamararilogo.png',
  },
  openGraph: {
    title: homepageSeo.facebookShare.title,
    description: homepageSeo.facebookShare.description,
    url: '/',
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/ostia11.png',
        width: 1200,
        height: 630,
        alt: 'Ostia Marari luxury beachfront boutique stay in Alleppey Kerala',
      },
      {
        url: '/images/ostia1.png',
        width: 1200,
        height: 630,
        alt: 'Sea-view rooms and beachfront access at Ostia Marari',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: homepageSeo.whatsappShare.title,
    description: homepageSeo.whatsappShare.description,
    images: [
      {
        url: '/images/ostia11.png',
        alt: 'Ostia Marari boutique beach stay near Thumpoly Beach Alleppey',
      },
    ],
  },
  other: {
    'geo.region': 'IN-KL',
    'geo.placename': 'Alappuzha, Kerala',
    'geo.position': `${seoConfig.geo.latitude};${seoConfig.geo.longitude}`,
    ICBM: `${seoConfig.geo.latitude}, ${seoConfig.geo.longitude}`,
    'business:contact_data:street_address': seoConfig.address.streetAddress,
    'business:contact_data:locality': seoConfig.address.addressLocality,
    'business:contact_data:region': seoConfig.address.addressRegion,
    'business:contact_data:postal_code': seoConfig.address.postalCode,
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': seoConfig.phone,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
