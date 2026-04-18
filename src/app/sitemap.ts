import { MetadataRoute } from 'next';
import { prisma } from '@/lib/db';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://devvault.io';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static Routes
  const routes = [
    '',
    '/explore',
    '/collections',
    '/blog',
    '/pricing',
    '/about',
    '/contact',
    '/privacy-policy',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Attempt to fetch dynamically (safely catch if DB fails during build)
  try {
    const resources = await prisma.resource.findMany({
      where: { status: 'PUBLISHED' },
      select: { slug: true, updatedAt: true },
    });

    const resourceRoutes = resources.map((resource) => ({
      url: `${BASE_URL}/resource/${resource.slug}`,
      lastModified: resource.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...routes, ...resourceRoutes];
  } catch (error) {
    console.error('Sitemap DB Error:', error);
    return routes;
  }
}
