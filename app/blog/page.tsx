'use client'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const posts = [
  {
    slug: 'welcome-to-the-mcuk-blog',
    title: 'Welcome to the MCUK blog — our space for honest conversation',
    excerpt: 'MCUK exists because patients deserve a space where they can speak openly, find honest information, and support each other. This blog is part of that — and we want your voice in it.',
    category: 'mcuk-updates',
    categoryLabel: 'MCUK updates',
    date: '7 June 2026',
    author: 'The MCUK Team',
    authorRole: 'MCUK',
    authorInitials: 'MC',
    anonymous: false,
    featured: true,
  },
  {
    slug: 'placeholder-vaporiser-review',
    title: 'Placeholder: Vaporiser review',
    excerpt: 'A patient\'s honest review of a popular dry herb vaporiser — what works, what doesn\'t, and whether it\'s worth the price.',
    category: 'product-reviews',
    categoryLabel: 'Product reviews',
    date: 'Coming soon',
    author: 'A. Patient',
    authorRole: 'Community member',
    authorInitials: 'AB',
    anonymous: false,
    featured: false,
  },
  {
    slug: 'placeholder-journey-to-prescription',
    title: 'Placeholder: My journey to a prescription',
    excerpt: 'One patient shares their experience navigating the UK medical cannabis system — from first enquiry to first prescription.',
    category: 'patient-stories',
    categoryLabel: 'Patient stories',
    date: 'Coming soon',
    author: 'Anonymous',
    authorRole: 'Patient',
    authorInitials: '?',
    anonymous: true,
    featured: false,
  },
  {
    slug: 'placeholder-policy-changes',
    title: 'Placeholder: What the latest policy changes mean for patients',
    excerpt: 'A plain English breakdown of recent developments in UK cannabis medicine policy and what they mean for patients on the ground.',
    category: 'news',
    categoryLabel: 'News & current affairs',
    date: 'Coming soon',
    author: 'The MCUK Team',
    authorRole: 'MCUK',
    authorInitials: 'MC',
    anonymous: false,
    featured: false,
  },
  {
    slug: 'placeholder-talking-to-employer',
    title: 'Placeholder: Talking to your employer about your prescription',
    excerpt: 'Practical advice for patients navigating conversations about cannabis medicine in the workplace.',
    category: 'guides',
    categoryLabel: 'Guides & advice',
    date: 'Coming soon',
    author: 'The MCUK Team',
    authorRole: 'MCUK',
    authorInitials: 'MC',
    anonymous: false,
    featured: false,
  },
  {
    slug: 'placeholder-chronic-pain',
    title: 'Placeholder: Living with chronic pain — how cannabis changed things',
    excerpt: 'A long-term chronic pain patient shares what life looked like before and after accessing prescription cannabis medicine.',
    category: 'patient-stories',
    categoryLabel: 'Patient stories',
    date: 'Coming soon',
    author: 'Anonymous',
    authorRole: 'Patient',
    authorInitials: '?',
    anonymous: true,
    featured: false,
  },
  {
    slug: 'placeholder-oil-vs-flower',
    title: 'Placeholder: Oil vs flower — which is right for you?',
    excerpt: 'A comparison of the two most common prescription cannabis formats — the pros, cons, and practical differences for patients.',
    category: 'product-reviews',
    categoryLabel: 'Product reviews',
    date: 'Coming soon',
    author: 'A. Contributor',
    authorRole: 'Guest writer',
    authorInitials: 'AB',
    anonymous: false,
    featured: false,
  },
]

const categoryColours: Record<string, string> = {
  'product-reviews': 'cat-product-reviews',
  'patient-stories': 'cat-patient-stories',
  'news': 'cat-news',
  'guides': 'cat-guides',
  'mcuk-updates': 'cat-mcuk-updates',
}

const filters = [
  { label: 'All posts', value: 'all' },
  { label: 'Product reviews', value: 'product-reviews' },
  { label: 'Patient stories', value: 'patient-stories' },
  { label: 'News & current affairs', value: 'news' },
  { label: 'Guides & advice', value: 'guides' },
  { label: 'MCUK updates', value: 'mcuk-updates' },
]

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('all')

  const featured = posts.find(p => p.featured)
  const grid = posts.filter(p => !p.featured)

  const filteredFeatured = activeFilter === 'all' || featured?.category === activeFilter ? featured : null
  const filteredGrid = grid.filter(p => activeFilter === 'all' || p.category === activeFilter)

  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Blog</div>
            <h1>News, views &amp; patient stories</h1>
            <p className="hero-sub">Product reviews, current affairs, patient experiences, and more — written by patients and advocates for the UK cannabis medicine community.</p>
          </div>
        </section>

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

        {/* FEATURED POST */}
        {filteredFeatured && (
          <section className="section" style={{paddingBottom: 0}}>
            <div className="container">
              <Link href={`/blog/${filteredFeatured.slug}`} className="blog-featured">
                <div className="blog-featured-image">
                  <div className="blog-image-placeholder blog-image-placeholder--large">
                    <span>Featured image</span>
                  </div>
                </div>
                <div className="blog-featured-body">
                  <div className="blog-post-meta">
                    <span className={`blog-category-tag ${categoryColours[filteredFeatured.category]}`}>
                      {filteredFeatured.categoryLabel}
                    </span>
                    <span className="blog-date">{filteredFeatured.date}</span>
                  </div>
                  <h2>{filteredFeatured.title}</h2>
                  <p>{filteredFeatured.excerpt}</p>
                  <div className="blog-author">
                    <div className={`blog-author-avatar placeholder-avatar ${filteredFeatured.anonymous ? 'anon' : ''}`}>
                      {filteredFeatured.authorInitials}
                    </div>
                    <div>
                      <div className="blog-author-name">{filteredFeatured.author}</div>
                      <div className="blog-author-role">{filteredFeatured.authorRole}</div>
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
            {filteredGrid.length > 0 ? (
              <div className="blog-grid">
                {filteredGrid.map(post => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                    <div className="blog-card-image">
                      <div className="blog-image-placeholder">
                        <span>Featured image</span>
                      </div>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-post-meta">
                        <span className={`blog-category-tag ${categoryColours[post.category]}`}>
                          {post.categoryLabel}
                        </span>
                        <span className="blog-date">{post.date}</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <div className="blog-author">
                        <div className={`blog-author-avatar placeholder-avatar ${post.anonymous ? 'anon' : ''}`}>
                          {post.authorInitials}
                        </div>
                        <div>
                          <div className="blog-author-name">{post.author}</div>
                          <div className="blog-author-role">{post.authorRole}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{color:'#6b7494'}}>No posts in this category yet — check back soon.</p>
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

      </main>
      <Footer />
    </>
  )
}