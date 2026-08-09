import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Policies',
  description: 'MCUK policies including privacy, cookies, safeguarding, and community standards.',
}

const policies = [
  { href: '/policies/cookies', title: 'Cookie policy', desc: 'How we use cookies and similar technologies on our website.' },
  { href: '/policies/privacy', title: 'Privacy policy', desc: 'How we collect, use, and protect your personal data.' },
  { href: '/policies/terms', title: 'Terms & conditions', desc: 'The terms governing your use of the MCUK website and services.' },
  { href: '/policies/complaints', title: 'Complaints policy', desc: 'How to raise a complaint and what to expect from us.' },
  { href: '/policies/community-standards', title: 'Free speech & community standards', desc: 'How MCUK approaches freedom of expression and community moderation.' },
  { href: '/policies/social-media', title: 'Social media policy', desc: 'Standards for social media use by those representing MCUK online.' },
  { href: '/policies/safeguarding', title: 'Safeguarding policy', desc: 'Our commitment to the safety and wellbeing of vulnerable people.' },
  { href: '/policies/medical-disclaimer', title: 'Medical disclaimer', desc: 'Important information about the nature of content on this site.' },
  { href: '/policies/editorial', title: 'Editorial policy', desc: 'How we review, edit, and publish content on the MCUK blog.' },
  { href: '/policies/accessibility', title: 'Accessibility statement', desc: 'Our commitment to making this site accessible to everyone.' },
  { href: '/policies/data-retention', title: 'Data retention policy', desc: 'How long we keep your data and when we delete it.' },
]

export default function Policies() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Governance</div>
            <h1>Our policies</h1>
            <p className="hero-sub">Transparency is one of our core values. These policies set out how MCUK operates, how we handle your data, and what you can expect from us.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="resource-grid">
              {policies.map(policy => (
                <Link key={policy.href} href={policy.href} className="resource-card">
                  <div className="resource-icon icon-green">&#9679;</div>
                  <div className="resource-body">
                    <h3>{policy.title}</h3>
                    <p>{policy.desc}</p>
                    <span className="resource-link">Read policy &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tinted">
          <div className="container content-narrow">
            <div className="info-box">
              <p><strong>Medicinal Cannabis UK CIC</strong> is registered in England and Wales, company number 17373828. Registered address: Union House, 111 New Union Street, Coventry, CV1 2NT. For any questions about our policies, please <Link href="/contact">get in touch</Link>.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}