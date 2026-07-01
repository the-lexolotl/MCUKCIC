import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { client, blogPostQuery, urlFor } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import Image from 'next/image'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(blogPostQuery, { slug })
  return {
    title: post?.title || 'Blog post',
    description: post?.excerpt || '',
  }
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
  },
  types: {
    image: ({ value }: any) => (
      <div style={{ margin: '2rem 0', borderRadius: '12px', overflow: 'hidden' }}>
        <img
          src={urlFor(value).width(800).url()}
          alt={value.alt || ''}
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
    ),
  },
}

const categoryColours: Record<string, string> = {
  'product-reviews': 'cat-product-reviews',
  'patient-stories': 'cat-patient-stories',
  'news': 'cat-news',
  'guides': 'cat-guides',
  'mcuk-updates': 'cat-mcuk-updates',
}

const categoryLabels: Record<string, string> = {
  'product-reviews': 'Product reviews',
  'patient-stories': 'Patient stories',
  'news': 'News & current affairs',
  'guides': 'Guides & advice',
  'mcuk-updates': 'MCUK updates',
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await client.fetch(blogPostQuery, { slug })

  if (!post) {
    return (
      <>
        <Nav />
        <main>
          <section className="section">
            <div className="container content-narrow">
              <h1>Post not found</h1>
              <p>This post doesn&apos;t exist or hasn&apos;t been published yet.</p>
              <Link href="/blog" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
                Back to blog
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const authorName = post.anonymous ? 'Anonymous' : post.author?.name || post.submittedBy?.name || 'MCUK'
  const authorRole = post.anonymous ? 'Patient' : post.author?.role || post.submittedBy?.authorType || ''
  const authorInitials = authorName === 'Anonymous' ? '?' : authorName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <>
      <Nav />
      <main>

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <div className="container">
            <Link href="/blog">&larr; Back to blog</Link>
          </div>
        </div>

        {/* ARTICLE */}
        <article className="resource-article">
          <div className="container resource-layout">

            {/* MAIN CONTENT */}
            <div className="resource-content">

              <div className="resource-meta">
                <span className={`blog-category-tag ${categoryColours[post.category] || ''}`}>
                  {categoryLabels[post.category] || post.category}
                </span>
                <span className="resource-date">
                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  }) : ''}
                </span>
              </div>

              <h1>{post.title}</h1>
              <p className="resource-intro">{post.excerpt}</p>

              {/* AUTHOR BAR */}
              <div className="post-author-bar">
                <div className={`blog-author-avatar placeholder-avatar ${post.anonymous ? 'anon' : ''}`}>
                  {post.author?.photo && !post.anonymous ? (
                    <Image
                      src={urlFor(post.author.photo).width(44).height(44).url()}
                      alt={authorName}
                      width={44}
                      height={44}
                      style={{ borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : authorInitials}
                </div>
                <div>
                  <div className="blog-author-name">{authorName}</div>
                  <div className="blog-author-role">
                    {authorRole}
                    {post.publishedAt && ` · ${new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })}`}
                  </div>
                </div>
              </div>

              {/* FEATURED IMAGE */}
              {post.featuredImage && (
                <div className="post-featured-image">
                  <img
                    src={urlFor(post.featuredImage).width(800).url()}
                    alt={post.featuredImage.alt || post.title}
                    style={{ width: '100%', borderRadius: '12px', display: 'block' }}
                  />
                </div>
              )}

              {/* BODY */}
              <div className="resource-body-content">
                {post.body && <PortableText value={post.body} components={portableTextComponents} />}
              </div>

              {/* TAGS */}
              {post.tags && post.tags.length > 0 && (
                <div className="post-tags">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="post-tag">{tag}</span>
                  ))}
                </div>
              )}

              {/* DISCLAIMER */}
              <div className="resource-disclaimer">
                <p><strong>Please note:</strong> Views expressed in blog posts are those of the author and do not necessarily represent the views of MCUK. Nothing on this site constitutes medical advice. Always consult your prescribing clinician.</p>
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="resource-sidebar">

              {post.author && !post.anonymous && (
                <div className="sidebar-card">
                  <h4>About the author</h4>
                  <div className="blog-author" style={{ marginBottom: '0.75rem' }}>
                    <div className="blog-author-avatar placeholder-avatar">
                      {post.author.photo ? (
                        <Image
                          src={urlFor(post.author.photo).width(44).height(44).url()}
                          alt={post.author.name}
                          width={44}
                          height={44}
                          style={{ borderRadius: '50%', objectFit: 'cover' }}
                        />
                      ) : authorInitials}
                    </div>
                    <div>
                      <div className="blog-author-name">{post.author.name}</div>
                      <div className="blog-author-role">{post.author.role}</div>
                    </div>
                  </div>
                  {post.author.bio && (
                    <p style={{ fontSize: '0.875rem', color: '#6b7494', lineHeight: '1.6' }}>{post.author.bio}</p>
                  )}
                </div>
              )}

              <div className="sidebar-card">
                <h4>Categories</h4>
                <ul className="sidebar-links">
                  <li><Link href="/blog">All posts &rarr;</Link></li>
                  <li><Link href="/blog">Product reviews &rarr;</Link></li>
                  <li><Link href="/blog">Patient stories &rarr;</Link></li>
                  <li><Link href="/blog">News &amp; current affairs &rarr;</Link></li>
                  <li><Link href="/blog">Guides &amp; advice &rarr;</Link></li>
                  <li><Link href="/blog">MCUK updates &rarr;</Link></li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Write for us</h4>
                <p>We welcome submissions from patients, clinicians, and advocates. All posts are reviewed before publication.</p>
                <Link href="/contact" className="sidebar-btn">Submit a post</Link>
              </div>

              <div className="sidebar-card">
                <h4>Join the community</h4>
                <a href="https://www.facebook.com/groups/mcuk.cic" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Facebook group</a>
                <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Discord server</a>
              </div>

            </aside>

          </div>
        </article>

      </main>
      <Footer />
    </>
  )
}