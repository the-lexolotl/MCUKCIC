import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import NewsletterSignup from '../../components/NewsletterSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subscribe — MCUK Newsletter',
  description: 'Sign up for the MCUK newsletter and get patient guides, resources, and community updates straight to your inbox.',
  openGraph: {
    title: 'Subscribe — MCUK Newsletter',
    description: 'Sign up for the MCUK newsletter and get patient guides, resources, and community updates straight to your inbox.',
  },
}

export default function NewsletterPage() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Stay connected</div>
            <h1>MCUK Newsletter</h1>
            <p className="hero-sub" style={{ marginBottom: 0 }}>
              Patient guides, community news, and updates from the UK cannabis medicine space — straight to your inbox. Free, always.
            </p>
          </div>
        </section>

        {/* SIGNUP SECTION */}
        <section className="section">
          <div className="container">
            <div className="newsletter-layout">

              {/* LEFT — what to expect */}
              <div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What to expect</h2>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="activity-number">01</div>
                    <div className="activity-body">
                      <h3>Patient resources</h3>
                      <p>Guides, explainers, and honest information to help you navigate your prescription with confidence.</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-number">02</div>
                    <div className="activity-body">
                      <h3>Community news</h3>
                      <p>Updates from the MCUK community, new features, events, and what we&apos;ve been working on.</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-number">03</div>
                    <div className="activity-body">
                      <h3>UK cannabis space</h3>
                      <p>Relevant developments in UK cannabis medicine — policy, research, and what it means for patients.</p>
                    </div>
                  </div>
                  <div className="activity-item">
                    <div className="activity-number">04</div>
                    <div className="activity-body">
                      <h3>No spam, ever</h3>
                      <p>We send when we have something worth saying. Unsubscribe any time, no questions asked.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — signup form */}
              <div style={{ position: 'sticky', top: '84px' }}>
                <NewsletterSignup variant="card" />
                <div className="info-box" style={{ marginTop: '1.5rem' }}>
                  <p>
                    By subscribing you agree to receive emails from MCUK. We handle your data in accordance with our{' '}
                    <a href="/policies/privacy">Privacy Policy</a>. You can unsubscribe at any time.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}