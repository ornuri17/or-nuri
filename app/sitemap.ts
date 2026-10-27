import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://or-nuri.com';

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-10-27'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/for-bots/`,
      lastModified: new Date('2026-10-27'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
