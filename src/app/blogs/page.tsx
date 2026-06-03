import Link from 'next/link'
import type { Metadata } from 'next'
import BlogGrid from '@/components/BlogGrid'
import JsonLd from '@/components/JsonLd'
import { buildCollectionSchema, buildWebPageSchema, createPageMetadata, seoConfig } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('blogs')

const blogs = [
  {
    id: 'thumpoly-beach-alleppey',
    title: 'Thumpoly Beach: Alleppey\'s Hidden Coastal Gem',
    excerpt:
      'Nestled away from the crowds, Thumpoly Beach is one of Alleppey\'s most serene and untouched coastal stretches. From quiet morning walks to breathtaking sunsets, discover why this beach is a must-visit for anyone staying near Marari.',
    content: `Nestled away from the crowds, Thumpoly Beach is one of Alleppey's most serene and untouched coastal stretches. From quiet morning walks to breathtaking sunsets, discover why this beach is a must-visit for anyone staying near Marari.

Thumpoly Beach is a beautiful, quiet coastal stretch in Alappuzha, famous for its golden sands, scenic canals that meet the sea, and traditional fishing boats lining the shore. Unlike the more commercialized beaches in Kerala, Thumpoly offers a peaceful atmosphere where you can relax, take a leisurely stroll, and watch the local fishermen at work.

Here is what you can look forward to at Thumpoly Beach:

• Serene sunsets and sunrises away from major tourist crowds.

• Scenic views of the Thumpoly canal connecting the backwaters to the Arabian Sea.

• Opportunity to witness traditional fish harvesting and interact with local fishermen.

• Coastal walks along the clean, unspoiled shoreline right next to Ostia Marari.`,
    author: 'Ostia Marari Team',
    date: 'May 15, 2026',
    readTime: '5 min read',
    category: 'Beach Guide',
    image: '/alpeybeach.avif',
    color: '#1b6ca8',
  },
  {
    id: 'kerala-backwaters-houseboat-guide',
    title: 'Your Complete Guide to Kerala Backwater Houseboat Stays',
    excerpt:
      'The Kerala backwaters are a world unto themselves — a labyrinth of lakes, canals, and lagoons stretching across the coast. Learn how to plan the perfect houseboat experience from Alleppey and what to expect on board.',
    content: `The Kerala backwaters are a world unto themselves — a labyrinth of lakes, canals, and lagoons stretching across the coast. Learn how to plan the perfect houseboat experience from Alleppey and what to expect on board.

Cruising along the backwaters of Alleppey in a traditional Kerala houseboat (Kettuvallam) is a signature travel experience. Floating past tranquil villages, coconut groves, and lush green paddy fields offers a unique perspective on rural life in Kerala.

Tips for the perfect houseboat experience:

• Choose the right route: The Alleppey-Kumarakom route is ideal for scenic beauty and open lake vistas.

• Opt for the right time: Daytime cruises are excellent for photography and sightseeing, while overnight stays offer unparalleled peace under the starlit sky.

• Sample authentic cuisine: Indulge in freshly prepared traditional Kerala meals on board, including Karimeen Pollichathu (pearl spot fish) and local vegetable preparations.`,
    author: 'Ostia Marari Team',
    date: 'April 28, 2026',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: '/backwater.avif',
    color: '#16a085',
  },
  {
    id: 'marari-beach-experience',
    title: '10 Reasons to Visit Marari Beach This Season',
    excerpt:
      'Marari Beach, just 10 km from Ostia Marari, is celebrated for its pristine sands, swaying palms, and authentic Kerala fishing village charm. Here are the top 10 reasons why Marari should be on every traveller\'s bucket list.',
    content: `Marari Beach, just 10 km from Ostia Marari, is celebrated for its pristine sands, swaying palms, and authentic Kerala fishing village charm. Here are the top 10 reasons why Marari should be on every traveller's bucket list.

Marari Beach is a pristine, tranquil beach located just 10 km from Alleppey, offering a calm alternative to Kerala's busier tourist hotspots. Celebrated for its white sands and swaying palms, it remains a favorite for wellness seekers and nature lovers.

Top highlights of the Marari Beach experience:

1. Peaceful ambiance with minimal commercial intrusion.

2. Authentic fishing village culture that gives a glimpse into local life.

3. Perfect spot for yoga, meditation, and Ayurveda treatments.

4. Clean water suitable for swimming and sunbathing.

5. Scenic pathways lined with coconut trees, perfect for evening bicycling.`,
    author: 'Ostia Marari Team',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Destination',
    image: '/mararibeach.avif',
    color: '#5da86c',
  },
]

export default function BlogsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[360px] md:min-h-[420px] items-center justify-center overflow-hidden px-4 pt-28 md:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/ostia7.avif')" }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.78) 100%)' }} />
        <div className="relative z-10 max-w-2xl text-center">
          <span className="section-label">Blogs</span>
          <span className="gold-line" />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Blogs
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
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
            >
              Travel &amp; Inspiration
            </h2>
            <p
              className="mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
            >
              Explore our curated travel stories, destination guides, and insider tips
              to make the most of your Alleppey coastal experience.
            </p>
          </div>

          <BlogGrid blogs={blogs} />

          {/* CTA */}
          <div className="text-center mt-16">
            <p
              className="text-sm mb-6"
              style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
            >
              Ready to experience Alleppey&apos;s beauty in person?
            </p>
            <Link href="/booking" className="btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

