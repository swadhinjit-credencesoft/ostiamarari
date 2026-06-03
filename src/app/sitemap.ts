import type { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo'

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/rooms-suites', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/booking', priority: 0.95, changeFrequency: 'daily' },
  { path: '/gallery', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blogs', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cancellation-policy', priority: 0.3, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(route => ({
    url: `${seoConfig.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
