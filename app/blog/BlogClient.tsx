'use client'

import Link from 'next/link'
import { urlFor } from '../../lib/sanity'
import { useState } from 'react'

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

const filters = [
  { label: 'All posts', value: 'all' },
  { label: 'Product reviews', value: 'product-reviews' },
  { label: 'Patient stories', value: 'patient-stories' },
  { label: 'News & current affairs', value: 'news' },
  { label: 'Guides & advice', value: 'guides' },
  { label: 'MCUK updates', value: 'mcuk-updates' },
]

function getAuthorInitials(post: any) {
  if (post.anonymous) return '?'
  const name = post.author?.name || 'MC'
  return name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
}

function formatDate(dateString: string) {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}

export default function BlogClient({ posts }: { posts: any[] }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const featured = posts[0] || null
  const grid = posts.slice(1)

  const filteredFeatured = !featured ? null :
    (activeFilter === 'all' || featured.category === activeFilter ? featured : null)

  const filteredGrid = grid.filter((p: any) =>
    activeFilter === 'all' || p.category === activeFilter
  )

  const noResults = !filteredFeatured && filteredGrid.length === 0

  return (
    <>
      {/* CATEGORY FILTER */}
      <div className="blog-filter-bar">
        <div className="container">
          <div className="blog-filters">
            {filters.map(f => (
              <button
                key={f.value}
                className={`blog-filter ${activeFilter === f.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* NO POSTS STATE */}
      {posts.length === 0 && (
        <section className="section">
          <div className="container content-narrow">
            <div className="info-box">
              <p>No posts have been published yet — check back soon. In the meantime, join our <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer">Facebook community</a> or <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer">Discord server</a> for the latest discussions.</p>
            </div>
          </div>
        </section>
      )}

      {/* FEATURED POST */}
      {filteredFeatured && (
        <section className="section" style={{paddingBottom: 0}}>
          <div className="container">
            <Link href={`/blog/${filteredFeatured.slug.current}`} className="blog-featured">
              <div className="blog-featured-image">
                {filteredFeatured.featuredImage ? (
                  <img
                    src={urlFor(filteredFeatured.featuredImage).width(800).height(500).url()}
                    alt={filteredFeatured.featuredImage.alt || filteredFeatured.title}
                    style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
                  />
                ) : (
                  <div className="blog-image-placeholder blog-image-placeholder--large">
                    <span>No image</span>
                  </div>
                )}
              </div>
              <div className="blog-featured-body">
                <div className="blog-post-meta">
                  <span className={`blog-category-tag ${categoryColours[filteredFeatured.category] || ''}`}>
                    {categoryLabels[filteredFeatured.category] || filteredFeatured.category}
                  </span>
                  <span className="blog-date">{formatDate(filteredFeatured.publishedAt)}</span>
                </div>
                <h2>{filteredFeatured.title}</h2>
                <p>{filteredFeatured.excerpt}</p>
                <div className="blog-author">
                  <div className={`blog-author-avatar placeholder-avatar ${filteredFeatured.anonymous ? 'anon' : ''}`}>
                    {filteredFeatured.author?.photo && !filteredFeatured.anonymous ? (
                      <img
                        src={urlFor(filteredFeatured.author.photo).width(32).height(32).url()}
                        alt={filteredFeatured.author.name}
                        style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover'}}
                      />
                    ) : getAuthorInitials(filteredFeatured)}
                  </div>
                  <div>
                    <div className="blog-author-name">
                      {filteredFeatured.anonymous ? 'Anonymous' : filteredFeatured.author?.name || 'MCUK'}
                    </div>
                    <div className="blog-author-role">
                      {filteredFeatured.anonymous ? 'Patient' : filteredFeatured.author?.role || ''}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* BLOG GRID */}
      <section className="section">
        <div className="container">

          {noResults && posts.length > 0 && (
            <p style={{color:'#6b7494', marginBottom:'2rem'}}>
              No posts in this category yet — check back soon.
            </p>
          )}

          {filteredGrid.length > 0 && (
            <div className="blog-grid">
              {filteredGrid.map((post: any) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id} className="blog-card">
                  <div className="blog-card-image">
                    {post.featuredImage ? (
                      <img
                        src={urlFor(post.featuredImage).width(600).height(340).url()}
                        alt={post.featuredImage.alt || post.title}
                        style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
                      />
                    ) : (
                      <div className="blog-image-placeholder">
                        <span>No image</span>
                      </div>
                    )}
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-post-meta">
                      <span className={`blog-category-tag ${categoryColours[post.category] || ''}`}>
                        {categoryLabels[post.category] || post.category}
                      </span>
                      <span className="blog-date">{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-author">
                      <div className={`blog-author-avatar placeholder-avatar ${post.anonymous ? 'anon' : ''}`}>
                        {post.author?.photo && !post.anonymous ? (
                          <img
                            src={urlFor(post.author.photo).width(32).height(32).url()}
                            alt={post.author.name}
                            style={{width:'32px', height:'32px', borderRadius:'50%', objectFit:'cover'}}
                          />
                        ) : getAuthorInitials(post)}
                      </div>
                      <div>
                        <div className="blog-author-name">
                          {post.anonymous ? 'Anonymous' : post.author?.name || 'MCUK'}
                        </div>
                        <div className="blog-author-role">
                          {post.anonymous ? 'Patient' : post.author?.role || ''}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* SUBMIT CTA */}
          <div className="blog-submit-cta">
            <div className="blog-submit-inner">
              <div>
                <h3>Have something to share?</h3>
                <p>We welcome blog posts from patients, clinicians, journalists, and advocates. All submissions are reviewed before publication.</p>
              </div>
              <Link href="/contact" className="btn-primary">Submit a post</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}