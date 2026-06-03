import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How far is the beach?',
    answer: 'Thumpoly Beach is around 50 steps from the property, making it easy to enjoy quick beach walks and sunset time.',
  },
  {
    question: 'Is breakfast included?',
    answer: 'Yes, breakfast is included with the beach stay. Package bookings may also include additional meals as listed in the package details.',
  },
  {
    question: 'Is parking available?',
    answer: 'Yes, indoor parking is available at the property.',
  },
  {
    question: 'Is WiFi available?',
    answer: 'Yes, complimentary WiFi is available for guests.',
  },
  {
    question: 'Can houseboat trips be arranged?',
    answer: 'Yes, houseboat trips and beach plus backwater packages can be arranged for guests.',
  },
  {
    question: 'What is the nearest airport?',
    answer: 'Cochin International Airport, Nedumbassery is the nearest major airport, around 82 km from Ostia Marari.',
  },
]

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="py-24"
      style={{ background: '#f8f8f8' }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="section-label">FAQ</span>
          <span className="gold-line" />
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              className="group p-5 md:p-6"
              style={{ background: '#ffffff', border: '1px solid var(--border)' }}
              open={index === 0}
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-4"
                style={{ fontFamily: 'var(--font-raleway)' }}
              >
                <span className="flex items-center gap-3 text-left">
                  <HelpCircle size={17} style={{ color: '#c9a84c', flexShrink: 0 }} />
                  <span className="text-sm md:text-base font-semibold text-dark">
                    {question}
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
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
