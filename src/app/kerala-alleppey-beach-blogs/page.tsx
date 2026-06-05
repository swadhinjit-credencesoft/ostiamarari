import Link from 'next/link'
import type { Metadata } from 'next'
import BlogGrid from '@/components/BlogGrid'
import JsonLd from '@/components/JsonLd'
import { seoConfig, buildCollectionSchema } from '@/lib/seo'
import { blogs } from '@/lib/blogs'

const siteUrl = seoConfig.siteUrl

export const metadata: Metadata = {
  title: 'Kerala Alleppey Beach Blogs | Travel Guide & Tips – Ostia Marari',
  description: 'Read Kerala and Alleppey travel blogs, beach guides, backwater tips and coastal travel stories from Ostia Marari boutique beach stay.',
  alternates: { canonical: '/kerala-alleppey-beach-blogs' },
  openGraph: {
    title: 'Kerala Alleppey Beach Blogs | Travel Guide & Tips – Ostia Marari',
    description: 'Read Kerala and Alleppey travel blogs, beach guides, and coastal travel stories from Ostia Marari.',
    url: `${siteUrl}/kerala-alleppey-beach-blogs`,
    siteName: seoConfig.shortName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/images/ostia7.avif`,
        width: 1200,
        height: 630,
        alt: 'Kerala Alleppey beach travel blogs – Ostia Marari boutique beach stay',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Alleppey Beach Blogs | Travel Guide & Tips – Ostia Marari',
    description: 'Read Alleppey beach guides, Kerala backwater travel tips and coastal travel stories from Ostia Marari.',
    images: [
      {
        url: `${siteUrl}/images/ostia7.avif`,
        alt: 'Kerala Alleppey beach travel blogs by Ostia Marari',
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

export default function KeralaAlleppeyBlogsPage() {
  const collectionSchema = buildCollectionSchema(
    'blogs',
    blogs.map((b) => ({
      name: b.title,
      url: `${siteUrl}/kerala-alleppey-beach-blogs/${b.id}`,
      image: `${siteUrl}${b.image}`,
      description: b.excerpt,
    }))
  )

  return (
    <>
      <JsonLd data={collectionSchema} />
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ostia7.avif')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Kerala Travel Blogs</span>
          <span className="gold-line" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold" style={{ fontFamily: 'var(--font-playfair)' }}>
            Kerala Alleppey Beach Blogs
          </h1>
          <p className="text-white/70 mt-3 text-sm md:text-base leading-relaxed">
            Read destination guides, beach stories, and travel tips from Alleppey and coastal Kerala.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20" style={{ background: '#f8f8f8' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <span className="section-label">Latest Articles</span>
            <span className="gold-line" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}>
              Travel &amp; Inspiration
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              Explore our curated travel stories, destination guides, and insider tips
              to make the most of your Alleppey coastal experience.
            </p>
          </div>
        </div>

        <div className="w-full px-0">
          <BlogGrid blogs={blogs} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mt-16">
            <p className="text-sm mb-6" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
              Ready to experience Alleppey&apos;s beauty in person?
            </p>
            <Link href="/Hotel-Resort-Booking" className="btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
