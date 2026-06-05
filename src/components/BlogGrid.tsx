'use client'

import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import type { Blog } from '@/lib/blogs'

interface BlogGridProps {
  blogs: Blog[]
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((blog) => {
        return (
          <article
            key={blog.id}
            className="group overflow-hidden rounded-sm transition-all duration-300 border bg-white border-[#e8e4dc] hover:border-[#c9a84c] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              {/* Image */}
              <div
                className="relative overflow-hidden transition-all duration-500 h-52"
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
                  className="text-dark font-semibold mb-3 leading-snug text-lg group-hover:text-[#c9a84c] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  <Link href={`/kerala-alleppey-beach-blogs/${blog.id}`}>{blog.title}</Link>
                </h3>

                <p
                  className="text-sm leading-relaxed mb-5 line-clamp-3"
                  style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                >
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <Link
                href={`/kerala-alleppey-beach-blogs/${blog.id}`}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase pt-4 w-full text-left transition-colors duration-300 hover:text-[#b8942e]"
                style={{
                  borderTop: '1px solid var(--border)',
                  color: '#c9a84c',
                  fontFamily: 'var(--font-raleway)',
                  cursor: 'pointer',
                  display: 'flex',
                }}
              >
                Read More <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        )
      })}
    </div>
  )
}
