import type { MetadataRoute } from 'next'
import { seoConfig } from '@/lib/seo'
import { blogs } from '@/lib/blogs'

const staticRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/Book-Rooms-Suites', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/Hotel-Resort-Booking', priority: 0.95, changeFrequency: 'daily' },
  { path: '/Room-Rent-Tariff', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/Beach-Resort-Gallery-images', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/kerala-alleppey-beach-blogs', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/cancellation-policy', priority: 0.3, changeFrequency: 'yearly' },
  
  // Dedicated room landing pages
  { path: '/premium-Hotel-Rooms-Topview-Floors-Suites', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/premium-Hotel-Rooms-garden-view-Floors-Suites', priority: 0.85, changeFrequency: 'weekly' },
  { path: '/premium-Hotel-Rooms-full-Villa', priority: 0.85, changeFrequency: 'weekly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticSitemap = staticRoutes.map(route => ({
    url: `${seoConfig.siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency as 'weekly' | 'monthly' | 'daily' | 'yearly',
    priority: route.priority,
  }))

  const blogSitemap = blogs.map(blog => ({
    url: `${seoConfig.siteUrl}/kerala-alleppey-beach-blogs/${blog.id}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticSitemap, ...blogSitemap]
}
