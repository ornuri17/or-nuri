import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://or-nuri.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-04-27'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/for-bots/`,
      lastModified: new Date('2026-04-20'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
