'use client'

const reviews = [
  {
    author: 'Arun S',
    text: 'Had a truly pleasant and memorable stay. The ambience was serene, the property was well maintained, and the hospitality was excellent. A perfect beachside getaway.',
    rating: 5,
    time: '3 months ago',
  },
  {
    author: 'Aparajita Ponnarasu',
    text: 'Had a good stay here. The staff were very helpful and friendly. Special thanks to Manager Nibin Thomas for making our stay comfortable.',
    rating: 5,
    time: '3 months ago',
  },
  {
    author: 'Jeeva K',
    text: 'Good experience overall. Neat rooms, pleasant environment, and friendly staff. Would recommend this place.',
    rating: 5,
    time: '3 months ago',
  },
  {
    author: 'Mohammed Abdul Moid',
    text: 'Very good property close to the beach. The rooms are clean and the manager was extremely accommodating and helpful throughout our stay.',
    rating: 5,
    time: '4 months ago',
  },
  {
    author: 'Asha R',
    text: 'Excellent property within walking distance of the beach. Friendly staff, good food, and great travel guidance. Our entire family enjoyed the stay.',
    rating: 5,
    time: '1 month ago',
  },
  {
    author: 'Paul Googlemail',
    text: 'A modern, clean, and hospitable guesthouse with beach views. Comfortable beds and excellent air conditioning made for a relaxing stay.',
    rating: 5,
    time: '1 month ago',
  },
  {
    author: 'Vaneshree Reddy',
    text: 'Clean rooms, great value for money, and very close to the beach. The staff were attentive and we loved having breakfast in the beautiful garden.',
    rating: 5,
    time: '2 weeks ago',
  },
  {
    author: 'Krithi Y',
    text: 'Had a wonderful stay. Everything was smooth and comfortable. A special mention to Manager Nibin Thomas for his helpful guidance and support.',
    rating: 5,
    time: '1 week ago',
  },
];

function StarRating({
  count,
}: {
  count: number
}) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map(
        (_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            fill="#c9a84c"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      )}
    </div>
  )
}

function ReviewCard({
  author,
  text,
  rating,
  time,
}: (typeof reviews)[0]) {
  return (
    <div
      className="flex-shrink-0 p-6 rounded-sm"
      style={{
        width: 320,
        background: '#ffffff',
        border: '1px solid var(--border)',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">

          {/* Google Icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 48 48"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.14 0 5.95 1.08 8.17 2.85L38.3 6.2C34.4 2.37 29.47 0 24 0 14.62 0 6.73 5.8 3.05 14.1l7.12 5.53C11.97 13.26 17.52 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.5 24.5c0-1.64-.15-3.22-.43-4.74H24v8.97h12.65c-.55 2.93-2.2 5.41-4.69 7.08l7.17 5.56C43.46 37.5 46.5 31.44 46.5 24.5z"
            />
            <path
              fill="#FBBC05"
              d="M10.17 28.63A14.66 14.66 0 019.5 24c0-1.61.28-3.16.67-4.63L3.05 13.84A24 24 0 000 24c0 3.87.92 7.53 2.56 10.77l7.61-6.14z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.47 0 11.9-2.14 15.87-5.8l-7.17-5.56C30.57 38.5 27.43 39.5 24 39.5c-6.48 0-12.03-3.76-14.83-9.24l-7.61 6.14C5.89 44.72 14.36 48 24 48z"
            />
          </svg>

          <span
            className="text-xs"
            style={{
              fontFamily:
                'var(--font-raleway)',
              color: 'var(--text-muted)',
            }}
          >
            Google Review
          </span>
        </div>

        <span
          className="text-xs"
          style={{
            color: 'var(--text-muted)',
          }}
        >
          {time}
        </span>
      </div>

      {/* Stars */}
      <StarRating count={rating} />

      {/* Review */}
      <p
        className="text-sm leading-relaxed mb-4 line-clamp-4"
        style={{
          fontFamily:
            'var(--font-raleway)',
          color: 'var(--text)',
        }}
      >
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer */}
      <div
        className="flex items-center gap-3 pt-3"
        style={{
          borderTop:
            '1px solid var(--border)',
        }}
      >

        {/* Avatar */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            background:
              'linear-gradient(135deg,#c9a84c,#a87e30)',
            color: '#ffffff',
            fontFamily:
              'var(--font-raleway)',
          }}
        >
          {author.charAt(0)}
        </div>

        {/* Name */}
        <div>
          <p
            className="text-dark text-sm font-semibold"
            style={{
              fontFamily:
                'var(--font-raleway)',
            }}
          >
            {author}
          </p>

          <p
            className="text-xs"
            style={{
              color: 'var(--text-muted)',
            }}
          >
            Verified Guest
          </p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const doubled = [...reviews, ...reviews]

  return (
    <section
      id="reviews"
      className="py-16 md:py-20 overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">
            Guest Reviews
          </span>

          <span className="gold-line" />

          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-dark font-semibold"
            style={{
              fontFamily:
                'var(--font-playfair)',
            }}
          >
            What Our Guests Say
          </h2>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-5 flex-wrap">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  fill="#c9a84c"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

           <span
  className="text-dark font-bold text-2xl"
  style={{
    fontFamily: 'var(--font-playfair)',
  }}
>
  ⭐ 5.0
</span>

{/* <span
  className="text-sm"
  style={{
    color: 'var(--text-muted)',
  }}
>
  · 29 Reviews
</span> */}
          </div>
        </div>
      </div>

      {/* Reviews Slider */}
      <div className="overflow-hidden">
        <div className="review-track flex gap-6 w-max">
          {doubled.map((r, i) => (
            <ReviewCard
              key={`${r.author}-${i}`}
              {...r}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12 px-6">
        <a
          href="https://www.google.com/travel/search?q=ostia%20marari&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C73064764&hl=en-IN&gl=in&ssta=1&ts=CAEaRwopEicyJTB4M2IwODg1OGNiYmEzZDExNzoweDRlMmMyZGI0YmY1ZDgxNjUSGhIUCgcI6g8QBhgBEgcI6g8QBhgCGAEyAhAA&qs=CAEyE0Nnb0k1WUwyLXN1Mmk1Wk9FQUU4AkIJCWWBXb-0LSxOQgkJZYFdv7QtLE4&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwiYn8X6p-WUAxUAAAAAHQAAAAAQAw"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          View All Reviews
        </a>
      </div>
    </section>
  )
}