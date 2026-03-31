// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sipedo.co.ke';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/services',
    '/cleaning',
    '/pest-control',
    '/blog',
    '/privacy-policy',
    '/terms',
  ];

  const cleaningServices = [
    'sofa-cleaning',
    'office-cleaning',
    'carpet-cleaning',
    'mattress-cleaning',
    'car-interior',
    'post-construction',
    'laundry-dry-cleaning',
  ];

  const pestControlServices = [
    'bedbugs',
    'cockroaches',
    'mosquitoes',
    'fleas',
    'termites',
    'rats',
  ];

  const blogPosts = [
    'signs-you-need-pest-control',
    'post-construction-cleaning-essential',
    'sofa-cleaning-tips',
    'eco-friendly-pest-control',
    'carpet-cleaning-benefits',
    'bedbug-treatment-nairobi',
  ];

  const servicePages = [
    ...cleaningServices.map(slug => `/cleaning/${slug}`),
    ...pestControlServices.map(slug => `/pest-control/${slug}`),
    ...blogPosts.map(slug => `/blog/${slug}`),
  ];

  const allPages = [...staticPages, ...servicePages].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1.0 : path.startsWith('/blog') ? 0.7 : 0.8,
  }));

  return allPages;
}