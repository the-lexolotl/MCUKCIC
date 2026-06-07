import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { client, urlFor } from '../../lib/sanity'
import { blogListQuery } from '../../lib/sanity'
import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'News, views and patient stories from the UK cannabis medicine community.',
}

export const revalidate = 60

export default async function Blog() {
  const posts = await client.fetch(blogListQuery)

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

        <BlogClient posts={posts} />

      </main>
      <Footer />
    </>
  )
}