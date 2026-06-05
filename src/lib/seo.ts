import { faqItems } from './faq'
import type { Metadata } from 'next'

const siteUrl = 'https://ostiamarari.com'

export const seoConfig = {
  siteUrl,
  businessName: 'Ostia Marari - A Boutique Beach Stay',
  shortName: 'Ostia Marari',
  phone: '+91 9846044955',
  email: 'info@ostiamarari.com',
  address: {
    streetAddress: 'Kurisadi Road, Thumpoly Beach',
    addressLocality: 'Alappuzha',
    alternateLocality: 'Alleppey',
    addressRegion: 'Kerala',
    postalCode: '688008',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 9.4981,
    longitude: 76.3388,
  },
  primaryImage: `${siteUrl}/images/ostia11.avif`,
  logo: `${siteUrl}/ostiamararilogo.png`,
  sameAs: [
    'https://www.instagram.com/ostiamarari',
    'https://wa.me/919846044955',
    'https://www.google.com/travel/search?q=ostia%20marari',
  ],
}

export const homepageSeo = {
  title: 'Ostia Marari Beach Stay Alleppey | Luxury Villa Kerala',
  description:
    'Book Ostia Marari, a luxury beachfront boutique stay in Alleppey with sea-view rooms, beach access, breakfast, WiFi and Kerala hospitality.',
  h1: 'Ostia Marari',
  heroEyebrow: 'Boutique Beach Stay in Alleppey',
  heroHeadline: 'Ostia Marari',
  heroCopy:
    'A peaceful luxury beachfront stay near Thumpoly Beach, Alleppey, with sea-view rooms, direct beach access, private lawn, breakfast and warm Kerala hospitality.',
  bookingHeadlines: [
    'Book Direct for the Best Ostia Marari Experience',
    'Reserve Your Beachfront Stay in Alleppey',
    'Plan a Private Kerala Beach Vacation',
    'Confirm Your Sea-View Stay Directly With Us',
  ],
  ctas: [
    'Book Direct',
    'Check Availability',
    'Confirm via WhatsApp',
    'Send Booking Enquiry',
    'Reserve Your Beach Stay',
  ],
  whatsappShare: {
    title: 'Ostia Marari - Luxury Beachfront Stay in Alleppey',
    description:
      'Explore Ostia Marari, a boutique beach stay near Thumpoly Beach with sea-view rooms, private lawn, breakfast and direct booking.',
  },
  facebookShare: {
    title: 'Ostia Marari | Boutique Beach Stay Near Marari and Alleppey',
    description:
      'A premium Kerala beach escape with direct beach access, sea-view rooms, family-friendly suites, BBQ experiences and authentic hospitality.',
  },
  instagramBio:
    'Luxury boutique beach stay in Alleppey, Kerala. Sea-view rooms, beach access, private lawn, breakfast, BBQ and direct bookings. WhatsApp +91 9846044955.',
  googleBusinessProfileDescription:
    'Ostia Marari is a luxury boutique beach stay on Kurisadi Road near Thumpoly Beach, Alappuzha, Kerala. The property offers beachfront access, sea-view rooms, premium suites, private lawn space, complimentary breakfast, WiFi, BBQ experiences and warm Kerala hospitality for couples, families, honeymoon travelers and groups visiting Alleppey, Marari Beach and the backwaters.',
}

export type SeoPageKey =
  | 'home'
  | 'about'
  | 'roomsSuites'
  | 'booking'
  | 'gallery'
  | 'blogs'
  | 'contact'
  | 'privacyPolicy'
  | 'terms'
  | 'cancellationPolicy'

export const pageSeo = {
  home: {
    path: '/',
    title: homepageSeo.title,
    description: homepageSeo.description,
    image: '/images/ostia11.avif',
  },
  about: {
    path: '/about-us',
    title: 'About Ostia Marari | Boutique Beach Stay Alleppey Kerala',
    description:
      'Learn about Ostia Marari, a boutique beachfront stay in Alleppey near Thumpoly Beach. Discover our story, rooms, amenities and the coastal experience.',
    image: '/images/ostia2.avif',
  },
  roomsSuites: {
    path: '/Book-Rooms-Suites',
    title: 'Sea View Rooms Alleppey | Luxury Suites at Ostia Marari',
    description:
      'Explore premium sea-view rooms and luxury suites at Ostia Marari, a boutique beachfront stay in Alleppey for couples, families and groups.',
    image: '/room1.avif',
  },
  booking: {
    path: '/Hotel-Resort-Booking',
    title: 'Book Ostia Marari Direct | Beachfront Stay Alleppey',
    description:
      'Book Ostia Marari direct for luxury beachfront accommodation in Alleppey with sea-view suites, breakfast, WiFi and WhatsApp booking support.',
    image: '/images/ostia5.avif',
  },
  gallery: {
    path: '/Beach-Resort-Gallery-images',
    title: 'Ostia Marari Gallery | Beach Villa and Sea View Rooms',
    description:
      'View photos of Ostia Marari, including sea-view rooms, boutique interiors, beachfront access, private lawn and coastal spaces in Alleppey.',
    image: '/images/ostia6.avif',
  },
  blogs: {
    path: '/kerala-alleppey-beach-blogs',
    title: 'Alleppey Beach Travel Blog | Ostia Marari Guides',
    description:
      'Read Alleppey beach guides, Kerala backwater travel tips, Marari Beach inspiration and direct booking advice from Ostia Marari.',
    image: '/images/ostia7.avif',
  },
  contact: {
    path: '/contact',
    title: 'Contact Ostia Marari | Beach Stay in Alleppey Kerala',
    description:
      'Contact Ostia Marari for direct bookings, availability, location details and special requests for your luxury beach stay in Alleppey.',
    image: '/images/ostia2.avif',
  },
  privacyPolicy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | Ostia Marari',
    description:
      'Read the Ostia Marari privacy policy for booking enquiries, guest communication and website data handling.',
    image: '/images/ostia4.avif',
  },
  terms: {
    path: '/terms-conditions',
    title: 'Terms and Conditions | Ostia Marari',
    description:
      'Read the booking terms and guest conditions for Ostia Marari, a boutique beach stay in Alleppey, Kerala.',
    image: '/images/ostia4.avif',
  },
  cancellationPolicy: {
    path: '/cancellation-policy',
    title: 'Cancellation Policy | Ostia Marari',
    description:
      'Review Ostia Marari cancellation terms, refund conditions and booking cancellation contact details.',
    image: '/images/ostia4.avif',
  },
} satisfies Record<SeoPageKey, { path: string; title: string; description: string; image: string }>

export function createPageMetadata(pageKey: SeoPageKey): Metadata {
  const page = pageSeo[pageKey]
  const absoluteUrl = `${siteUrl}${page.path}`

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl,
      siteName: seoConfig.shortName,
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: `${page.title} - ${seoConfig.shortName}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [
        {
          url: page.image,
          alt: `${page.title} - ${seoConfig.shortName}`,
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
        'max-video-preview': -1,
      },
    },
  }
}

export function buildBreadcrumbSchema(pageKey: SeoPageKey) {
  const page = pageSeo[pageKey]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      ...(page.path === '/'
        ? []
        : [
            {
              '@type': 'ListItem',
              position: 2,
              name: page.title.split('|')[0].trim(),
              item: `${siteUrl}${page.path}`,
            },
          ]),
    ],
  }
}

export function buildWebPageSchema(pageKey: SeoPageKey) {
  const page = pageSeo[pageKey]

  return {
    '@context': 'https://schema.org',
    '@type': pageKey === 'contact' ? 'ContactPage' : 'WebPage',
    '@id': `${siteUrl}${page.path}#webpage`,
    url: `${siteUrl}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${siteUrl}/#website` },
    about: { '@id': `${siteUrl}/#hotel` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${siteUrl}${page.image}`,
    },
    breadcrumb: buildBreadcrumbSchema(pageKey),
  }
}

export function buildCollectionSchema(pageKey: SeoPageKey, items: Array<{ name: string; url: string; image?: string; description?: string }>) {
  const page = pageSeo[pageKey]

  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteUrl}${page.path}#collection`,
    url: `${siteUrl}${page.path}`,
    name: page.title,
    description: page.description,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: item.url,
        item: {
          '@type': item.image ? 'ImageObject' : 'Thing',
          name: item.name,
          url: item.url,
          image: item.image,
          description: item.description,
        },
      })),
    },
  }
}

export const alternativeSeoTitles = [
  'Ostia Marari | Boutique Beach Stay in Alleppey Kerala',
  'Luxury Beachfront Stay in Alleppey | Ostia Marari',
  'Best Beach Stay Alleppey | Ostia Marari Boutique Villa',
  'Beach Villa Kerala Near Marari | Ostia Marari',
  'Sea View Rooms Alleppey | Ostia Marari Beach Stay',
  'Luxury Homestay Alleppey Near Thumpoly Beach',
  'Boutique Resort Kerala | Ostia Marari Beach Stay',
  'Beachfront Accommodation Alappuzha | Ostia Marari',
  'Private Beach Villa Kerala for Families and Couples',
  'Romantic Beach Stay Kerala | Ostia Marari Alleppey',
  'Premium Homestay Near Marari Beach | Ostia Marari',
  'Kerala Beach Vacation Stay | Ostia Marari Alleppey',
  'Luxury Stay Alleppey with Direct Beach Access',
  'Weekend Beach Stay from Kochi | Ostia Marari',
  'Family Beach Resort Kerala | Ostia Marari Alleppey',
  'Holiday Villa Alleppey Near Backwaters and Beach',
  'Best Hotels Near Beach Alleppey | Ostia Marari',
  'Beach Resort Alleppey with Sea View Rooms',
  'Boutique Beach Stay Near Alleppey Lighthouse',
  'Ostia Marari - Premium Beachfront Villa Kerala',
]

export const highCtrMetaDescriptions = [
  'Book Ostia Marari direct for a luxury beachfront stay in Alleppey with sea-view rooms, breakfast, WiFi and Kerala hospitality.',
  'Escape to Ostia Marari near Thumpoly Beach: premium suites, direct beach access, private lawn, BBQ and direct booking support.',
  'Plan a Kerala beach vacation at Ostia Marari, a boutique stay near Marari Beach, Alleppey Backwaters and Lighthouse.',
  'Luxury beach stay in Alleppey for couples, families and groups. Sea-view rooms, breakfast, WiFi and easy WhatsApp booking.',
  'Stay steps from Thumpoly Beach at Ostia Marari. Premium villa comfort, peaceful location and authentic Kerala hospitality.',
  'Discover a private beach villa experience in Kerala with sea views, family suites, lawn space, BBQ and direct reservations.',
  'Looking for the best beach stay in Alleppey? Book Ostia Marari direct for premium rooms and a secluded coastal setting.',
  'Ostia Marari blends luxury homestay comfort with beachfront access near Marari Beach and Alleppey Backwaters.',
  'Reserve a boutique beach stay in Alappuzha with sea-view rooms, complimentary breakfast and personalized service.',
  'Direct bookings open for Ostia Marari, a premium beachfront stay near Thumpoly Beach, Alleppey, Kerala.',
  'A romantic Kerala beach stay for honeymoons and couples with sea breezes, peaceful privacy and premium comfort.',
  'Book your family beach vacation at Ostia Marari: spacious suites, private lawn, breakfast, WiFi and coastal views.',
  'Weekend beach escape from Kochi, Bangalore, Chennai, Hyderabad or Mumbai. Stay direct at Ostia Marari Alleppey.',
  'Luxury boutique accommodation near Marari Beach with direct beach access, warm service and elegant rooms.',
  'Stay near Alleppey Lighthouse and Backwaters at a peaceful beachfront boutique villa in Kerala.',
  'Plan a secluded beach stay in Alleppey with premium suites, BBQ evenings and easy WhatsApp enquiries.',
  'Book direct with Ostia Marari for a luxury Kerala beach vacation near Thumpoly and Marari Beach.',
  'Sea-view rooms, direct beach walks and boutique hospitality in Alleppey. Contact Ostia Marari for availability.',
  'Premium Kerala beach villa for groups up to 18 guests with direct booking and personalized stay support.',
  'Experience Ostia Marari: beachfront comfort, authentic Kerala hospitality and easy direct booking from the official site.',
]

export const topSeoKeywords = [
  'Ostia Marari',
  'Boutique Beach Stay Alleppey',
  'Beachfront Stay Kerala',
  'Luxury Homestay Alleppey',
  'Beach Villa Kerala',
  'Sea View Rooms Alleppey',
  'Beach Resort Alleppey',
  'Best Beach Stay Alleppey',
  'Marari Beach Stay',
  'Luxury Beach Resort Kerala',
  'Beachfront Accommodation Alappuzha',
  'Romantic Beach Stay Kerala',
  'Family Beach Resort Kerala',
  'Beach Vacation Kerala',
  'Holiday Villa Alleppey',
  'Private Villa Kerala',
  'Boutique Resort Kerala',
  'Stay Near Marari Beach',
  'Luxury Stay Alleppey',
  'Best Hotels Near Beach Alleppey',
  'Thumpoly Beach stay',
  'Alleppey beachfront villa',
  'Alappuzha luxury homestay',
  'Kerala boutique villa',
  'Kerala sea view rooms',
  'beach homestay Alleppey',
  'premium beach stay Kerala',
  'private beach stay Alleppey',
  'luxury villa Alappuzha',
  'Alleppey vacation rental',
  'Kerala honeymoon beach stay',
  'couple friendly beach stay Kerala',
  'family stay in Alleppey',
  'group stay Alleppey',
  'weekend stay Alleppey',
  'weekend beach stay from Kochi',
  'beach stay from Bangalore',
  'beach stay from Chennai',
  'Kerala staycation beach',
  'Alleppey backwater beach package',
  'beach and backwater package Alleppey',
  'rooms near Thumpoly Beach',
  'rooms near Marari Beach',
  'hotels near Alleppey beach',
  'boutique hotel Alleppey',
  'resort near Alleppey Lighthouse',
  'villa near Alleppey Backwaters',
  'private lawn villa Kerala',
  'BBQ stay Kerala',
  'complimentary breakfast stay Alleppey',
  'free WiFi beach stay Kerala',
  'authentic Kerala hospitality stay',
  'secluded beach resort Kerala',
  'peaceful beach stay Alleppey',
  'premium suites Alleppey',
  'sea view suite Kerala',
  'entire villa Alleppey',
  '6 bedroom villa Alleppey',
  'beachfront group villa Kerala',
  'Alleppey luxury resort',
  'Marari luxury stay',
  'Thumpoly Beach resort',
  'Alappuzha beach resort',
  'best resort in Alleppey for family',
  'best resort in Alleppey for couples',
  'honeymoon resort Kerala beach',
  'Kerala coastal resort',
  'boutique beach hotel Kerala',
  'direct beach access stay Kerala',
  'official Ostia Marari booking',
  'book Ostia Marari direct',
  'Ostia Marari rooms',
  'Ostia Marari booking',
  'Ostia Marari phone number',
  'Ostia Marari Alleppey',
  'Ostia Marari Thumpoly Beach',
  'Ostia Marari Alappuzha',
  'Kerala beach accommodation',
  'premium homestay Kerala',
  'coastal villa Kerala',
  'beachfront family villa India',
  'luxury beach vacation India',
  'Alleppey tourist stay',
  'stay near Alleppey houseboat',
  'stay near backwaters Alleppey',
  'Marari Beach accommodation',
  'Alleppey holiday home',
  'Kerala holiday villa',
  'Alleppey beach house',
  'beach house Kerala',
  'luxury rooms Alleppey',
  'Kerala family vacation stay',
  'Kerala group vacation villa',
  'premium stay near Marari',
  'beach stay with breakfast Kerala',
  'boutique stay near beach Kerala',
  'seaview homestay Alleppey',
  'Alleppey travel accommodation',
  'Kerala tourism beach stay',
  'best place to stay in Alleppey',
  'luxury accommodation Alappuzha',
]

export const longTailKeywords = [
  'best luxury beachfront stay in Alleppey for families',
  'boutique beach villa near Marari Beach with sea view rooms',
  'private beachfront homestay in Kerala with complimentary breakfast',
  'romantic beach stay in Alleppey for honeymoon couples',
  'group villa in Alleppey near beach and backwaters',
  'weekend beach getaway from Kochi to Alleppey',
  'premium beach stay near Alleppey Lighthouse and Thumpoly Beach',
  'direct booking beach resort in Alleppey Kerala',
  'family friendly beach accommodation near Marari Beach',
  'Kerala beach vacation villa with private lawn and BBQ',
]

export const semanticKeywords = [
  'direct beach access',
  'sea breeze',
  'coastal stay',
  'Kerala backwaters',
  'Alappuzha tourism',
  'Marari coastline',
  'boutique hospitality',
  'premium suites',
  'private lawn',
  'beach walks',
  'sunset views',
  'family vacation',
  'honeymoon escape',
  'weekend getaway',
  'direct booking',
]

export const nlpKeywords = [
  'Ostia Marari is a boutique beachfront stay in Alappuzha',
  'located near Thumpoly Beach and Marari Beach',
  'offers sea-view rooms and premium suites',
  'suitable for couples families and groups',
  'provides direct beach access complimentary breakfast WiFi and BBQ',
  'near Alleppey Backwaters and Alleppey Lighthouse',
  'official direct booking is available through WhatsApp and email',
]

export const imageAltText = [
  'Ostia Marari beachfront boutique stay in Alleppey Kerala',
  'Sea-view room at Ostia Marari near Thumpoly Beach',
  'Luxury beach villa exterior at Ostia Marari Alappuzha',
  'Premium suite interior at Ostia Marari boutique beach stay',
  'Private balcony with coastal view at Ostia Marari',
  'Direct beach access near Ostia Marari Alleppey',
  'Private lawn at Ostia Marari for family vacations',
  'Beachfront villa stay near Marari Beach Kerala',
  'Premium top suites at Ostia Marari for group stays',
  'Premium floor suites at Ostia Marari with garden views',
  'Full villa accommodation at Ostia Marari for families',
  'Premium double suite at Ostia Marari for couples',
  'Kerala boutique beach stay room with elegant interiors',
  'Thumpoly Beach near Ostia Marari Alappuzha',
  'Marari Beach near Ostia Marari beach stay',
  'Alleppey Backwaters near Ostia Marari Kerala',
  'Alleppey Lighthouse near Ostia Marari',
  'Beach vacation stay in Alleppey Kerala',
  'Luxury homestay near Thumpoly Beach Kerala',
  'Family friendly accommodation at Ostia Marari',
  'Romantic beach stay in Kerala at Ostia Marari',
  'Honeymoon beach stay near Marari Beach',
  'BBQ experience at Ostia Marari private lawn',
  'Complimentary breakfast at Ostia Marari Alleppey',
  'Peaceful secluded beach stay in Alappuzha',
  'Authentic Kerala hospitality at Ostia Marari',
  'Weekend beach getaway from Kochi to Alleppey',
  'Beach stay from Bangalore at Ostia Marari',
  'Beach stay from Chennai at Ostia Marari Kerala',
  'Group beach villa in Kerala for up to 18 guests',
  'Sea view accommodation in Alleppey Kerala',
  'Boutique resort style stay near Alleppey beach',
  'Private Kerala villa near backwaters and beach',
  'Premium bedroom at Ostia Marari beach villa',
  'Elegant living area at Ostia Marari Alleppey',
  'Coastal interiors at Ostia Marari boutique stay',
  'Sunset beach walk near Ostia Marari',
  'Thumpoly coastal village near Ostia Marari',
  'Alappuzha tourist attractions near Ostia Marari',
  'Beach and backwater package accommodation Kerala',
  'Luxury Kerala vacation rental near Marari',
  'Official booking for Ostia Marari beach stay',
  'Ostia Marari logo boutique beach stay',
  'Kerala beach resort alternative in Alleppey',
  'Luxury stay near Alleppey houseboat routes',
  'Outdoor seating at Ostia Marari private villa',
  'Premium beach house in Kerala for vacations',
  'Family suite with air conditioning at Ostia Marari',
  'Ocean breeze terrace at Ostia Marari',
  'Best beach stay in Alleppey for direct bookings',
]

export const blogPostIdeas = [
  'Best Beach Stays in Alleppey for a Luxury Kerala Vacation',
  'Why Thumpoly Beach Is Alleppeys Most Peaceful Coastal Escape',
  'Ostia Marari vs OTA Booking: Why Direct Booking Is Better',
  'A Couples Guide to a Romantic Beach Stay in Kerala',
  'Family Beach Vacation in Alleppey: Where to Stay and What to Do',
  'Marari Beach vs Thumpoly Beach: Which Kerala Beach Is Right for You?',
  'How to Plan a Beach and Backwater Holiday in Alleppey',
  'Best Weekend Getaways from Kochi to the Alleppey Coast',
  'Luxury Homestay or Beach Resort in Kerala: What Should You Choose?',
  'Sea View Rooms in Alleppey: What to Look for Before Booking',
  'Top Things to Do Near Ostia Marari',
  'Alleppey Lighthouse Travel Guide for Beach Stay Guests',
  'Kerala Honeymoon Beach Stay Itinerary',
  'Group Villa Stay in Alleppey: Planning Guide',
  'Best Time to Visit Alleppey for a Beach Vacation',
  'Private Lawn Beach Villas in Kerala: Why Guests Love Them',
  'Kerala BBQ Nights by the Beach: Guest Experience Guide',
  'A Slow Travel Guide to Alappuzha Beaches',
  'How International Travelers Can Book a Kerala Beach Stay',
  'What Makes Boutique Beach Stays Different from Large Resorts',
]

export function buildSchemaGraph() {
  const address = {
    '@type': 'PostalAddress',
    streetAddress: seoConfig.address.streetAddress,
    addressLocality: seoConfig.address.addressLocality,
    addressRegion: seoConfig.address.addressRegion,
    postalCode: seoConfig.address.postalCode,
    addressCountry: seoConfig.address.addressCountry,
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: seoConfig.businessName,
        url: siteUrl,
        logo: seoConfig.logo,
        image: seoConfig.primaryImage,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        address,
        sameAs: seoConfig.sameAs,
      },
      {
        '@type': 'Hotel',
        '@id': `${siteUrl}/#hotel`,
        name: seoConfig.businessName,
        alternateName: ['Ostia Marari', 'Ostia Marari Boutique Beach Stay'],
        url: siteUrl,
        image: [
          seoConfig.primaryImage,
          `${siteUrl}/images/ostia1.avif`,
          `${siteUrl}/room1.avif`,
          `${siteUrl}/room2.avif`,
          `${siteUrl}/room3.avif`,
          `${siteUrl}/room4.avif`,
        ],
        logo: seoConfig.logo,
        description: homepageSeo.description,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        priceRange: '$$',
        address,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: seoConfig.geo.latitude,
          longitude: seoConfig.geo.longitude,
        },
        amenityFeature: [
          'Beachfront property',
          'Direct beach access',
          'Sea-view rooms',
          'Private lawn',
          'BBQ experience',
          'Free WiFi',
          'Complimentary breakfast',
          'Family-friendly accommodation',
          'Air conditioning',
          'Indoor parking',
        ].map(name => ({
          '@type': 'LocationFeatureSpecification',
          name,
          value: true,
        })),
        containsPlace: [
          {
            '@type': 'HotelRoom',
            name: 'Premium Top Suites',
            occupancy: { '@type': 'QuantitativeValue', maxValue: 12 },
            amenityFeature: ['Ocean View', 'Private Balcony', 'Air Conditioning'].map(name => ({
              '@type': 'LocationFeatureSpecification',
              name,
              value: true,
            })),
          },
          {
            '@type': 'HotelRoom',
            name: 'Premium Floor Suites',
            occupancy: { '@type': 'QuantitativeValue', maxValue: 6 },
          },
          {
            '@type': 'HotelRoom',
            name: 'Premium Full Suites',
            occupancy: { '@type': 'QuantitativeValue', maxValue: 18 },
          },
          {
            '@type': 'HotelRoom',
            name: 'Premium Double Suites',
            occupancy: { '@type': 'QuantitativeValue', maxValue: 3 },
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '7',
          bestRating: '5',
        },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Akhil Raj' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Beautiful beachfront stay with amazing hospitality and very clean rooms. Highly recommended for a peaceful getaway in Alleppey.',
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sneha Menon' },
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
            reviewBody:
              'Loved the ambience, food, and private beach experience. The staff was extremely friendly and helpful throughout our stay.',
          },
        ],
        makesOffer: {
          '@type': 'Offer',
          url: `${siteUrl}/Hotel-Resort-Booking`,
          availability: 'https://schema.org/InStock',
          itemOffered: {
            '@type': 'Service',
            name: 'Direct booking for luxury beachfront accommodation in Alleppey',
          },
        },
        checkinTime: '12:00',
        checkoutTime: '11:00',
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: seoConfig.businessName,
        url: siteUrl,
        image: seoConfig.primaryImage,
        telephone: seoConfig.phone,
        email: seoConfig.email,
        address,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: seoConfig.geo.latitude,
          longitude: seoConfig.geo.longitude,
        },
        priceRange: '$$',
        areaServed: ['Alappuzha', 'Alleppey', 'Marari Beach', 'Thumpoly Beach', 'Kerala'],
        parentOrganization: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: seoConfig.businessName,
        url: siteUrl,
        publisher: { '@id': `${siteUrl}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/kerala-alleppey-beach-blogs?search={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqItems.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
        ],
      },
    ],
  }
}
