import { MetadataRoute } from 'next'
import { client } from '../lib/sanity'

const baseUrl = 'https://mcukcic.co.uk'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await client.fetch(`
    *[_type == "blogPost" && status == "published"] {
      "slug": slug.current,
      publishedAt
    }
  `)

  const resources = await client.fetch(`
    *[_type == "resource" && status == "published"] {
      "slug": slug.current,
      lastReviewed
    }
  `)

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/donate`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
{ url: `${baseUrl}/link`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ]

  const blogPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const resourcePages: MetadataRoute.Sitemap = resources.map((resource: any) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: resource.lastReviewed ? new Date(resource.lastReviewed) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...resourcePages]
}