'use client'

import { useState } from 'react'
import { HelpCircle, Plus, Minus } from 'lucide-react'
import { faqItems } from '@/lib/faq'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) =>
    setOpenIndex(prev => (prev === index ? null : index))

  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="section-label">FAQ</span>
          <span className="gold-line" />
          <h2
            className="text-3xl sm:text-4xl md:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="mt-4 text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            Everything you need to know before booking your stay at Ostia Marari.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={question}
                className="overflow-hidden rounded-sm transition-all duration-300"
                style={{
                  background: '#ffffff',
                  border: '1px solid',
                  borderColor: isOpen ? '#c9a84c' : 'var(--border)',
                  boxShadow: isOpen ? '0 4px 20px rgba(201,168,76,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
                }}
              >
                {/* Question Row */}
                <button
                  className="w-full flex cursor-pointer items-center justify-between gap-4 px-5 py-5 md:px-6 text-left"
                  style={{ fontFamily: 'var(--font-raleway)', background: 'transparent', border: 'none' }}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle
                      size={17}
                      style={{ color: '#c9a84c', flexShrink: 0 }}
                    />
                    <span
                      className="text-sm md:text-base font-semibold text-left"
                      style={{ color: isOpen ? '#c9a84c' : 'var(--text)' }}
                    >
                      {question}
                    </span>
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300"
                    style={{
                      background: isOpen ? '#c9a84c' : 'rgba(201,168,76,0.10)',
                      color: isOpen ? '#fff' : '#c9a84c',
                    }}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>

                {/* Answer — animated expand */}
                <div
                  style={{
                    maxHeight: isOpen ? '600px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    className="px-5 pb-5 md:px-6 md:pb-6 pl-14 text-sm leading-relaxed"
                    style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
                  >
                    {answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
