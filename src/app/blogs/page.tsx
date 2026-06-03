import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { buildCollectionSchema, buildWebPageSchema, createPageMetadata, seoConfig } from '@/lib/seo'

export const metadata: Metadata = createPageMetadata('blogs')

const blogs = [
  {
    id: 'thumpoly-beach-alleppey',
    title: 'Thumpoly Beach: Alleppey\'s Hidden Coastal Gem',
    excerpt:
      'Nestled away from the crowds, Thumpoly Beach is one of Alleppey\'s most serene and untouched coastal stretches. From quiet morning walks to breathtaking sunsets, discover why this beach is a must-visit for anyone staying near Marari.',
    author: 'Ostia Marari Team',
    date: 'May 15, 2026',
    readTime: '5 min read',
    category: 'Beach Guide',
    image: '/alpeybeach.png',
    color: '#1b6ca8',
  },
  {
    id: 'kerala-backwaters-houseboat-guide',
    title: 'Your Complete Guide to Kerala Backwater Houseboat Stays',
    excerpt:
      'The Kerala backwaters are a world unto themselves — a labyrinth of lakes, canals, and lagoons stretching across the coast. Learn how to plan the perfect houseboat experience from Alleppey and what to expect on board.',
    author: 'Ostia Marari Team',
    date: 'April 28, 2026',
    readTime: '7 min read',
    category: 'Travel Guide',
    image: '/backwater.png',
    color: '#16a085',
  },
  {
    id: 'marari-beach-experience',
    title: '10 Reasons to Visit Marari Beach This Season',
    excerpt:
      'Marari Beach, just 10 km from Ostia Marari, is celebrated for its pristine sands, swaying palms, and authentic Kerala fishing village charm. Here are the top 10 reasons why Marari should be on every traveller\'s bucket list.',
    author: 'Ostia Marari Team',
    date: 'April 10, 2026',
    readTime: '6 min read',
    category: 'Destination',
    image: '/mararibeach.png',
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
          style={{ backgroundImage: "url('/images/ostia7.png')" }}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article
                key={blog.id}
                className="group overflow-hidden rounded-sm transition-all duration-300 border border-[#e8e4dc] hover:border-[#c9a84c] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1.5 bg-white"
              >
                {/* Image */}
                <div
                  className="relative h-52 overflow-hidden"
                  style={{ background: blog.color }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }}
                  />
                  {/* Category Badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                    style={{
                      background: blog.color,
                      color: '#fff',
                      fontFamily: 'var(--font-raleway)',
                    }}
                  >
                    {blog.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 flex-wrap">
                    <span
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
                    >
                      <Calendar size={11} style={{ color: '#c9a84c' }} />
                      {blog.date}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
                    >
                      <Clock size={11} style={{ color: '#c9a84c' }} />
                      {blog.readTime}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs"
                      style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}
                    >
                      <User size={11} style={{ color: '#c9a84c' }} />
                      {blog.author}
                    </span>
                  </div>

                  <h3
                    className="text-dark text-lg font-semibold mb-3 leading-snug"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {blog.excerpt}
                  </p>

                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase pt-4"
                    style={{
                      borderTop: '1px solid var(--border)',
                      color: '#c9a84c',
                      fontFamily: 'var(--font-raleway)',
                    }}
                  >
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            ))}
          </div>

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

