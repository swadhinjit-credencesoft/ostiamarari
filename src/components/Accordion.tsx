import { HelpCircle } from 'lucide-react'

interface AccordionItem {
  title: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  firstOpen?: boolean
}

export default function Accordion({ items, firstOpen = false }: AccordionProps) {
  return (
    <div className="space-y-4">
      {items.map(({ title, content }, index) => (
        <details
          key={title}
          className="group p-5 md:p-6"
          style={{ background: '#ffffff', border: '1px solid var(--border)' }}
          open={firstOpen && index === 0}
        >
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4"
            style={{ fontFamily: 'var(--font-raleway)' }}
          >
            <span className="flex items-center gap-3 text-left">
              <HelpCircle size={17} style={{ color: '#c9a84c', flexShrink: 0 }} />
              <span className="text-sm md:text-base font-semibold text-dark">
                {title}
              </span>
            </span>
            <span
              className="text-xl leading-none transition-transform duration-200 group-open:rotate-45"
              style={{ color: '#c9a84c' }}
            >
              +
            </span>
          </summary>
          <p
            className="mt-4 pl-8 text-sm leading-relaxed"
            style={{ color: 'var(--text-light)', fontFamily: 'var(--font-raleway)' }}
          >
            {content}
          </p>
        </details>
      ))}
    </div>
  )
}
