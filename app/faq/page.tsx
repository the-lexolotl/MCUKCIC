import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { client, faqQuery } from '../../lib/sanity'
import { PortableText } from '@portabletext/react'
import type { Metadata } from 'next'
import FaqClient from './FaqClient'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most frequently asked questions about prescription cannabis in the UK.',
}

export const revalidate = 60

const categoryOrder = [
  'getting-started',
  'prescriptions-clinics',
  'using-your-medicine',
  'legal-rights',
  'about-mcuk',
]

const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting started',
  'prescriptions-clinics': 'Prescriptions & clinics',
  'using-your-medicine': 'Using your medicine',
  'legal-rights': 'Legal & rights',
  'about-mcuk': 'About MCUK',
}

export default async function FAQ() {
  const items = await client.fetch(faqQuery)

  // Group by category
  const grouped = categoryOrder
    .map(cat => ({
      id: cat,
      category: categoryLabels[cat],
      questions: items.filter((item: any) => item.category === cat)
    }))
    .filter(group => group.questions.length > 0)

  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">FAQ</div>
            <h1>Frequently asked questions</h1>
            <p className="hero-sub">
              Answers to the questions we hear most often. Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" style={{color:'#84a38e'}}>Get in touch </Link> and we&apos;ll help.
            </p>
          </div>
        </section>

        {/* FAQ CONTENT */}
        <section className="section">
          <div className="container faq-layout">

            <FaqClient grouped={grouped} />

            {/* SIDEBAR */}
            <aside className="faq-sidebar">
              <div className="sidebar-card">
                <h4>Jump to section</h4>
                <ul className="sidebar-toc">
                  {grouped.map(section => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.category}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Useful resources</h4>
                <ul className="sidebar-links">
                  <li><Link href="/resources/what-is-medical-cannabis">What is medical cannabis? &rarr;</Link></li>
                  <li><Link href="/resources/finding-a-clinic">Finding a clinic &rarr;</Link></li>
                  <li><Link href="/resources/cost-of-prescription">Cost of prescription &rarr;</Link></li>
                  <li><Link href="/resources/dry-herb-vaporiser">Using a vaporiser &rarr;</Link></li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Still have questions?</h4>
                <p>Our community is full of experienced patients who may be able to help, or you can contact us directly.</p>
                <Link href="/contact" className="sidebar-btn">Contact us</Link>
                <a href="https://www.facebook.com/groups/mcuk.cic" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Ask in Facebook group</a>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}