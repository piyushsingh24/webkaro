import { MetadataRoute } from 'next';
import { listPublishedServiceSlugs } from '@/lib/cms/services';
import { listPublishedProjectSlugs } from '@/lib/cms/projects';
import { listPublishedPosts } from '@/lib/cms/posts';
import { listPublishedFaqSlugs } from '@/lib/cms/content';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.webkaro.in';

  // Core pages (static — note: /cinematic is intentionally NOT indexed
  // as an immersive page, but the previous sitemap listed it; preserved).
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
    '/faq',
    '/location/delhi-wazirabad',
    '/cinematic',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Published content only — drafts never appear here.
  const [serviceSlugs, projectSlugs, posts, faqSlugs] = await Promise.all([
    listPublishedServiceSlugs(),
    listPublishedProjectSlugs(),
    listPublishedPosts(),
    listPublishedFaqSlugs(),
  ]);

  const servicePages = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const projectPages = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedISO),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const faqPages = faqSlugs.map((slug) => ({
    url: `${baseUrl}/faq/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Category pages (static hub routes)
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

  return [...corePages, ...servicePages, ...projectPages, ...blogPages, ...faqPages, ...categoryRoutes];
}
