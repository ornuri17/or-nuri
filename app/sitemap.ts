import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://or-nuri.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/for-bots`,
      lastModified: new Date('2026-04-20'),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
  ];
}
