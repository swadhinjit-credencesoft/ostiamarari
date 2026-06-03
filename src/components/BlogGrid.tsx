'use client'

import { useState } from 'react'
import { ArrowRight, ArrowUp, Calendar, Clock, User } from 'lucide-react'

type Blog = {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  color: string
}

interface BlogGridProps {
  blogs: Blog[]
}

export default function BlogGrid({ blogs }: BlogGridProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {blogs.map((blog) => {
        const isExpanded = expandedId === blog.id
        return (
          <article
            key={blog.id}
            className={`group overflow-hidden rounded-sm transition-all duration-300 border bg-white ${
              isExpanded
                ? 'border-[#c9a84c] shadow-lg md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6'
                : 'border-[#e8e4dc] hover:border-[#c9a84c] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1.5'
            }`}
          >
            {/* Image */}
            <div
              className={`relative overflow-hidden transition-all duration-500 ${
                isExpanded ? 'h-64 md:h-full min-h-[320px]' : 'h-52'
              }`}
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
            <div className={`p-6 flex flex-col justify-between ${isExpanded ? 'md:p-8' : ''}`}>
              <div>
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
                  className={`text-dark font-semibold mb-3 leading-snug ${
                    isExpanded ? 'text-xl md:text-2xl' : 'text-lg'
                  }`}
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {blog.title}
                </h3>

                {isExpanded ? (
                  <div
                    className="text-sm leading-relaxed mb-6 space-y-4"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {blog.content.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {blog.excerpt}
                  </p>
                )}
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleExpand(blog.id);
                }}
                className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase pt-4 w-full text-left"
                style={{
                  borderTop: '1px solid var(--border)',
                  color: '#c9a84c',
                  fontFamily: 'var(--font-raleway)',
                  background: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderLeft: 'none',
                  cursor: 'pointer',
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingBottom: 0,
                }}
              >
                {isExpanded ? (
                  <>
                    Read Less <ArrowUp size={13} />
                  </>
                ) : (
                  <>
                    Read More <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}
