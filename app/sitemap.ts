import { MetadataRoute } from 'next'
import { client } from '../lib/sanity'

const baseUrl = 'https://mcukcic.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch published blog posts from Sanity
  const posts = await client.fetch(`
    *[_type == "blogPost" && status == "published"] {
      "slug": slug.current,
      publishedAt
    }
  `)

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    'what-is-medical-cannabis',
    'finding-a-clinic',
    'cost-of-prescription',
    'storing-your-medicine',
    'oils-and-tinctures',
    'dry-herb-vaporiser',
    'vape-cartridge',
    'how-to-use-a-grinder',
  ].map(slug => ({
    url: `${baseUrl}/resources/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog post pages from Sanity
  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...resourcePages, ...blogPages]
}