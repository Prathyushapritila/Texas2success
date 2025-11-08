import { MetadataRoute } from 'next'
import { siteConfig } from '@/data/siteData'
import { services } from '@/data/siteData'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic service pages
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes]
}

