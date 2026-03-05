import { MetadataRoute } from 'next';
import { blogs } from '@/data/blogs';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://webkaro.in';

  // Core pages
  const corePages = [
    '',
    '/about',
    '/services',
    '/projects',
    '/products',
    '/expertise',
    '/contact',
    '/blogs',
    '/careers',
    '/security',
    '/privacy-policy',
    '/terms',
    '/compliance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Service pages (Dynamic)
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Higher priority for service pages
  }));

  // Blog pages (Dynamic)
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Category pages
  const categoryRoutes = [
    '/blogs/frontend',
    '/blogs/backend',
    '/blogs/devops',
    '/blogs/database',
    '/blogs/startup',
    '/blogs/saas',
    '/blogs/product',
    '/blogs/trends',
    '/community/open-source',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...corePages, ...servicePages, ...blogPages, ...categoryRoutes];
}
