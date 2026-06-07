import Nav from './Nav'
import Footer from './Footer'
import Link from 'next/link'

interface RelatedGuide {
  href: string
  label: string
}

interface ResourcePageProps {
  category: string
  title: string
  intro: string
  lastReviewed?: string
  children: React.ReactNode
  relatedGuides?: RelatedGuide[]
  tocItems?: { href: string; label: string }[]
}

export default function ResourcePage({
  category,
  title,
  intro,
  lastReviewed = 'June 2026',
  children,
  relatedGuides = [],
  tocItems = [],
}: ResourcePageProps) {
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
                <span className="resource-category">{category}</span>
                <span className="resource-date">Last reviewed: {lastReviewed}</span>
              </div>

              <h1>{title}</h1>
              <p className="resource-intro">{intro}</p>

              <div className="resource-body-content">
                {children}
              </div>

              {/* DISCLAIMER */}
              <div className="resource-disclaimer">
                <p><strong>Medical disclaimer:</strong> This guide is for informational purposes only and does not constitute medical advice. Always follow the guidance of your prescribing clinician. If you have questions about your prescription or treatment, contact your clinic directly.</p>
              </div>

            </div>

            {/* SIDEBAR */}
            <aside className="resource-sidebar">

              {tocItems.length > 0 && (
                <div className="sidebar-card">
                  <h4>In this guide</h4>
                  <ul className="sidebar-toc">
                    {tocItems.map(item => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedGuides.length > 0 && (
                <div className="sidebar-card">
                  <h4>Related guides</h4>
                  <ul className="sidebar-links">
                    {relatedGuides.map(guide => (
                      <li key={guide.href}>
                        <Link href={guide.href}>{guide.label} &rarr;</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Need more help?</h4>
                <p>Our community is full of experienced patients who can offer peer support and advice.</p>
                <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Join Facebook group</a>
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