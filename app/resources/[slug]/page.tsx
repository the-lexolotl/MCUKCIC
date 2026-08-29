import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { client, resourceBySlugQuery, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'

interface ResourcePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params
  const resource = await client.fetch(resourceBySlugQuery, { slug })
  return {
    title: resource?.title || 'Resource',
    description: resource?.intro || '',
  }
}

export const revalidate = 60

const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting started',
  'using-your-medicine': 'Using your medicine',
  'devices-equipment': 'Devices & equipment',
  'legal-rights': 'Legal & rights',
  'living-as-a-patient': 'Living as a patient',
  'system-advocacy': 'The system & advocacy',
}

const portableTextComponents = {
  block: {
    normal: ({ children }: any) => <p>{children}</p>,
    h2: ({ children }: any) => <h2>{children}</h2>,
    h3: ({ children }: any) => <h3>{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="testimonial" style={{ margin: '2rem 0' }}>
        <p>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    strong: ({ children }: any) => <strong>{children}</strong>,
    em: ({ children }: any) => <em>{children}</em>,
  },
  types: {
    image: ({ value }: any) => (
      <figure style={{ margin: '2rem 0' }}>
        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
        {value.caption && (
          <figcaption style={{
            fontSize: '0.85rem',
            color: '#6b7494',
            marginTop: '0.5rem',
            textAlign: 'center',
          }}>
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params
  const resource = await client.fetch(resourceBySlugQuery, { slug })

  if (!resource) {
    return (
      <>
        <Nav />
        <main>
          <section className="section">
            <div className="container content-narrow">
              <h1>Resource not found</h1>
              <p>This guide doesn&apos;t exist or hasn&apos;t been published yet.</p>
              <Link href="/resources" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Back to resources
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const authorName = resource.author?.name || 'MCUK'
  const authorInitials = authorName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <>
      <Nav />
      <main>

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <Link href="/resources">&larr; Back to resources</Link>
          </div>
        </div>

        {/* ARTICLE */}
        <article className="resource-article">
          <div className="container resource-layout">

            {/* MAIN CONTENT */}
            <div className="resource-content">

              <div className="resource-meta">
                <span className="resource-category">
                  {categoryLabels[resource.category] || resource.category}
                </span>
                {resource.lastReviewed && (
                  <span className="resource-date">
                    Last reviewed: {new Date(resource.lastReviewed).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}
                  </span>
                )}
              </div>

              <h1>{resource.title}</h1>
              <p className="resource-intro">{resource.intro}</p>

              {/* AUTHOR BAR */}
              {resource.author && (
                <div className="post-author-bar">
                  <div className="blog-author-avatar placeholder-avatar">
                    {resource.author.photo ? (
                      <Image
                        src={urlFor(resource.author.photo).width(44).height(44).url()}
                        alt={resource.author.photo.alt || authorName}
                        width={44}
                        height={44}
                        style={{ borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : authorInitials}
                  </div>
                  <div>
                    <div className="blog-author-name">{authorName}</div>
                    <div className="blog-author-role">{resource.author.role || 'MCUK'}</div>
                  </div>
                </div>
              )}

              {/* FEATURED IMAGE */}
              {resource.featuredImage && (
                <figure className="post-featured-image">
                  <img
                    src={urlFor(resource.featuredImage).width(800).url()}
                    alt={resource.featuredImage.alt || resource.title}
                    style={{ width: '100%', borderRadius: '12px', display: 'block' }}
                  />
                  {resource.featuredImage.caption && (
                    <figcaption style={{
                      fontSize: '0.85rem',
                      color: '#6b7494',
                      marginTop: '0.5rem',
                      textAlign: 'center',
                    }}>
                      {resource.featuredImage.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* BODY */}
              <div className="resource-body-content">
                {resource.body && (
                  <PortableText value={resource.body} components={portableTextComponents} />
                )}
              </div>

              {/* DISCLAIMER */}
              <div className="resource-disclaimer">
                <p><strong>Medical disclaimer:</strong> This guide is for informational purposes only and does not constitute medical advice. Always follow the guidance of your prescribing clinician. If you have questions about your prescription or treatment, contact your clinic directly.</p>
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="resource-sidebar">

              {resource.author && (
                <div className="sidebar-card">
                  <h4>About the author</h4>
                  <div className="blog-author" style={{ marginBottom: '0.75rem' }}>
                    <div className="blog-author-avatar placeholder-avatar">
                      {resource.author.photo ? (
                        <Image
                          src={urlFor(resource.author.photo).width(44).height(44).url()}
                          alt={resource.author.photo.alt || authorName}
                          width={44}
                          height={44}
                          style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                      ) : authorInitials}
                    </div>
                    <div>
                      <div className="blog-author-name">{authorName}</div>
                      <div className="blog-author-role">{resource.author.role}</div>
                    </div>
                  </div>
                  {resource.author.bio && (
                    <p style={{ fontSize: '0.875rem', color: '#6b7494', lineHeight: '1.6' }}>
                      {resource.author.bio}
                    </p>
                  )}
                </div>
              )}

              {resource.relatedResources && resource.relatedResources.length > 0 && (
                <div className="sidebar-card">
                  <h4>Related guides</h4>
                  <ul className="sidebar-links">
                    {resource.relatedResources.map((related: any) => (
                      <li key={related.slug.current}>
                        <Link href={`/resources/${related.slug.current}`}>
                          {related.title} &rarr;
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Need more help?</h4>
                <p>Our community is full of experienced patients who can offer peer support and advice.</p>
                <a href="https://www.facebook.com/groups/mcuk.cic" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Join Facebook group</a>
                <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Join Discord</a>
              </div>

            </aside>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}