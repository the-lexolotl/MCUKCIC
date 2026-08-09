import Nav from './Nav'
import Footer from './Footer'
import Link from 'next/link'

interface PolicyPageProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyPage({ title, lastUpdated, children }: PolicyPageProps) {
  return (
    <>
      <Nav />
      <main>
        <div className="breadcrumb">
          <div className="container">
            <Link href="/policies">&larr; Back to policies</Link>
          </div>
        </div>

        <article className="resource-article">
          <div className="container resource-layout">
            <div className="resource-content">
              <div className="resource-meta">
                <span className="resource-category">Policy</span>
                <span className="resource-date">Last updated: {lastUpdated}</span>
              </div>
              <h1>{title}</h1>
              <div className="resource-body-content policy-content">
                {children}
              </div>
            </div>

            <aside className="resource-sidebar">
              <div className="sidebar-card">
                <h4>Our policies</h4>
                <ul className="sidebar-links">
                  <li><Link href="/policies/cookies">Cookie policy &rarr;</Link></li>
                  <li><Link href="/policies/privacy">Privacy policy &rarr;</Link></li>
                  <li><Link href="/policies/terms">Terms &amp; conditions &rarr;</Link></li>
                  <li><Link href="/policies/complaints">Complaints procedure &rarr;</Link></li>
                  <li><Link href="/policies/community-standards">Community standards &rarr;</Link></li>
                  <li><Link href="/policies/social-media">Social media policy &rarr;</Link></li>
                  <li><Link href="/policies/safeguarding">Safeguarding policy &rarr;</Link></li>
                  <li><Link href="/policies/medical-disclaimer">Medical disclaimer &rarr;</Link></li>
                  <li><Link href="/policies/editorial">Editorial policy &rarr;</Link></li>
                  <li><Link href="/policies/accessibility">Accessibility statement &rarr;</Link></li>
                  <li><Link href="/policies/data-retention">Data retention policy &rarr;</Link></li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Questions?</h4>
                <p>If you have any questions about our policies, please get in touch.</p>
                <Link href="/contact" className="sidebar-btn">Contact us</Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}