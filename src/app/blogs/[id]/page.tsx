import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react'
import { blogs } from '@/lib/blogs'
import JsonLd from '@/components/JsonLd'
import { seoConfig } from '@/lib/seo'

interface BlogPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }))
}

export async function generateMetadata({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.id)
  if (!blog) return {}

  const title = `${blog.title} | ${seoConfig.shortName}`
  const description = blog.excerpt
  const url = `${seoConfig.siteUrl}/blogs/${blog.id}`

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${blog.id}`,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: seoConfig.shortName,
      locale: 'en_IN',
      type: 'article',
      publishedTime: new Date(blog.date).toISOString(),
      authors: [blog.author],
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [blog.image],
    },
  }
}

export default function BlogDetailPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) {
    notFound()
  }

  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2)

  // Generate schema structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${seoConfig.siteUrl}/blogs/${blog.id}#entry`,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${seoConfig.siteUrl}/blogs#collection`,
      name: 'Ostia Marari Blogs',
      url: `${seoConfig.siteUrl}/blogs`,
    },
    headline: blog.title,
    description: blog.excerpt,
    image: `${seoConfig.siteUrl}${blog.image}`,
    datePublished: new Date(blog.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: blog.author,
      url: seoConfig.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.logo,
      },
    },
    publisher: {
      '@type': 'Organization',
      name: seoConfig.businessName,
      logo: {
        '@type': 'ImageObject',
        url: seoConfig.logo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${seoConfig.siteUrl}/blogs/${blog.id}`,
    },
  }

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Hero section */}
      <section className="relative flex min-h-[440px] md:min-h-[520px] items-end justify-center overflow-hidden px-4 pb-12 pt-36 md:pt-44">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${blog.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/35" />
        <div className="relative z-10 max-w-4xl mx-auto w-full text-center md:text-left">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs tracking-wider uppercase mb-4 text-white/60 font-medium">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-white transition-colors duration-200">Blogs</Link>
            <span>/</span>
            <span className="text-white/90 truncate max-w-[200px] md:max-w-xs">{blog.title}</span>
          </div>

          <span
            className="inline-block px-3.5 py-1 text-[11px] font-semibold tracking-wider uppercase mb-4 text-white"
            style={{
              background: blog.color,
              fontFamily: 'var(--font-raleway)',
            }}
          >
            {blog.category}
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center justify-center md:justify-start gap-6 flex-wrap border-t border-white/10 pt-4 text-white/80">
            <span className="flex items-center gap-2 text-xs tracking-wider uppercase" style={{ fontFamily: 'var(--font-raleway)' }}>
              <Calendar size={13} className="text-[#c9a84c]" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2 text-xs tracking-wider uppercase" style={{ fontFamily: 'var(--font-raleway)' }}>
              <Clock size={13} className="text-[#c9a84c]" />
              {blog.readTime}
            </span>
            <span className="flex items-center gap-2 text-xs tracking-wider uppercase" style={{ fontFamily: 'var(--font-raleway)' }}>
              <User size={13} className="text-[#c9a84c]" />
              By {blog.author}
            </span>
          </div>
        </div>
      </section>

      {/* Blog content section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="article-body">
            {blog.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim()
              if (!trimmed) return null

              if (trimmed.startsWith('•')) {
                return (
                  <div key={index} className="flex gap-3.5 items-start my-4 pl-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                    <span className="text-[#c9a84c] text-xl leading-none">•</span>
                    <p className="flex-1 m-0">{trimmed.slice(1).trim()}</p>
                  </div>
                )
              }
              if (/^\d+\./.test(trimmed)) {
                const match = trimmed.match(/^(\d+)\.(.*)/)
                if (match) {
                  const num = match[1]
                  const text = match[2].trim()
                  return (
                    <div key={index} className="flex gap-3.5 items-start my-4 pl-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}>
                      <span className="text-[#c9a84c] font-semibold text-lg leading-none">{num}.</span>
                      <p className="flex-1 m-0">{text}</p>
                    </div>
                  )
                }
              }

              const isFirstParagraph = index === 0
              if (isFirstParagraph) {
                return (
                  <p
                    key={index}
                    className="text-base md:text-lg leading-relaxed mb-6 font-light first-letter:text-6xl first-letter:font-serif first-letter:text-[#c9a84c] first-letter:float-left first-letter:mr-3.5 first-letter:mt-1.5 first-letter:font-semibold"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {paragraph}
                  </p>
                )
              }
              return (
                <p
                  key={index}
                  className="text-base md:text-lg leading-relaxed mb-6 font-light"
                  style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Action Footer */}
          <div className="mt-16 pt-8 border-t border-[#e8e4dc] flex flex-col sm:flex-row justify-between items-center gap-6">
            <Link href="/blogs" className="btn-outline flex items-center gap-2 group">
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Blogs
            </Link>
            <Link href="/booking" className="btn-primary">
              Book Your Stay
            </Link>
          </div>
        </div>
      </section>

      {/* More stories / related section */}
      {relatedBlogs.length > 0 && (
        <section className="py-16 md:py-20 border-t border-[#e8e4dc]" style={{ background: '#f8f8f8' }}>
          <div className="max-w-5xl mx-auto px-6">
            <h3
              className="text-2xl md:text-3xl font-semibold mb-10 text-center"
              style={{ fontFamily: 'var(--font-playfair)', color: 'var(--text)' }}
            >
              More Stories
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedBlogs.map((related) => (
                <article
                  key={related.id}
                  className="group overflow-hidden rounded-sm border bg-white border-[#e8e4dc] hover:border-[#c9a84c] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden" style={{ background: related.color }}>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url('${related.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span
                        className="absolute top-4 left-4 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white"
                        style={{ background: related.color, fontFamily: 'var(--font-raleway)' }}
                      >
                        {related.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h4
                        className="font-semibold text-base mb-2 group-hover:text-[#c9a84c] transition-colors line-clamp-1"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                      >
                        <Link href={`/blogs/${related.id}`}>{related.title}</Link>
                      </h4>
                      <div className="flex items-center gap-3 text-[11px] mb-3" style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-raleway)' }}>
                        <span>{related.date}</span>
                        <span>•</span>
                        <span>{related.readTime}</span>
                      </div>
                      <p
                        className="text-xs leading-relaxed line-clamp-2"
                        style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                      >
                        {related.excerpt}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <Link
                      href={`/blogs/${related.id}`}
                      className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wider flex items-center gap-1.5 hover:text-[#b8942e] transition-colors"
                      style={{ fontFamily: 'var(--font-raleway)' }}
                    >
                      Read Article
                      <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
