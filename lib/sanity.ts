import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'epa3ts6q',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export const blogListQuery = `*[_type == "blogPost" && status == "published"] | order(featured desc, publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  featuredImage,
  featured,
  anonymous,
  author-> {
    name,
    role,
    photo
  }
}`

export const blogPostQuery = `*[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
  _id,
  title,
  slug,
  excerpt,
  category,
  publishedAt,
  featuredImage,
  body,
  tags,
  anonymous,
  author-> {
    name,
    role,
    photo,
    bio
  },
  submittedBy
}`

export const faqQuery = `*[_type == "faqItem" && published == true] | order(category asc, order asc) {
  _id,
  question,
  answer,
  category,
  order
}`

export const resourceListQuery = `*[_type == "resource" && status == "published"] | order(category asc, order asc) {
  _id,
  title,
  slug,
  intro,
  category,
  featuredImage,
  lastReviewed,
  author-> {
    name,
    role,
    photo
  }
}`

export const resourceBySlugQuery = `*[_type == "resource" && slug.current == $slug && status == "published"][0] {
  _id,
  title,
  slug,
  intro,
  category,
  featuredImage,
  body,
  lastReviewed,
  author-> {
    name,
    role,
    photo,
    bio
  },
  relatedResources[]-> {
    title,
    slug,
    intro,
    category
  }
}`