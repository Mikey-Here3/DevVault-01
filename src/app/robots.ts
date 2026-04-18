import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://devvault.io';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/submit',
        '/user/',
        '/_next/',
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
