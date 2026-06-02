import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ background: '#ffffff' }}
    >
      <span className="section-label mb-2">Error 404</span>
      <h1
        className="text-6xl md:text-8xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-playfair)', color: '#c9a84c' }}
      >
        404
      </h1>
      <p className="text-dark text-xl md:text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
        Page Not Found
      </p>
      <p className="text-sm mb-8 max-w-sm" style={{ color: 'var(--text-light)' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  )
}
