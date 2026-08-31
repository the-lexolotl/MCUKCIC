import Image from 'next/image'
import Link from 'next/link'
import { client, blogListQuery } from '../../lib/sanity'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCUK — Links',
  description: 'Medicinal Cannabis UK CIC — patient-led support for UK prescription cannabis patients.',
}

export const revalidate = 60

export default async function LinkPage() {
  const posts = await client.fetch(blogListQuery)
  const latestPost = posts[0] || null

  return (
    <div className="lp-shell">

      {/* LOGO */}
      <div className="lp-logo">
        <Image
          src="/images/logo.png"
          alt="MCUK — Medicinal Cannabis UK"
          width={100}
          height={100}
          style={{ width: '100px', height: 'auto' }}
        />
        <h1 className="lp-title">Medicinal Cannabis UK</h1>
        <p className="lp-subtitle">Patient-led · Registered CIC · No. 17373828</p>
      </div>

      {/* SOCIAL LINKS */}
      <div className="lp-section">
        <div className="lp-social-row">
          <a href="https://www.facebook.com/groups/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#1877f2'}}>
            <span className="lp-social-icon">f</span> Facebook
          </a>
          <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#5865f2'}}>
            <span className="lp-social-icon">&#9671;</span> Discord
          </a>
          <a href="https://www.instagram.com/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#e1306c'}}>
            <span className="lp-social-icon">&#9679;</span> Instagram
          </a>
          <a href="https://www.youtube.com/@MCUK-CIC" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#ff0000'}}>
            <span className="lp-social-icon">&#9654;</span> YouTube
          </a>
          <a href="https://www.linkedin.com/company/mcuk-cic/" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#0a66c2'}}>
            <span className="lp-social-icon">in</span> LinkedIn
          </a>
          <a href="https://bsky.app/profile/mcuk-cic.bsky.social" target="_blank" rel="noopener noreferrer" className="lp-social-btn" style={{background:'#0085ff'}}>
            <span className="lp-social-icon">&#9728;</span> Bluesky
          </a>
        </div>
      </div>

      {/* PRIMARY ACTIONS */}
      <div className="lp-section">
        <h2 className="lp-section-title">Quick links</h2>
        <div className="lp-links">
          <Link href="/" className="lp-link lp-link--primary">
            <span className="lp-link-icon">&#127968;</span>
            <div>
              <div className="lp-link-title">Visit our website</div>
              <div className="lp-link-desc">Resources, blog, and patient support</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </Link>
          <Link href="/contact" className="lp-link">
            <span className="lp-link-icon">&#9993;</span>
            <div>
              <div className="lp-link-title">Contact us</div>
              <div className="lp-link-desc">Get in touch with our team</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </Link>
          <Link href="/newsletter" className="lp-link">
            <span className="lp-link-icon">&#128140;</span>
            <div>
              <div className="lp-link-title">Newsletter signup</div>
              <div className="lp-link-desc">Stay up to date with MCUK news</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </Link>
          <Link href="/contact?type=volunteering" className="lp-link">
            <span className="lp-link-icon">&#9829;</span>
            <div>
              <div className="lp-link-title">Get involved</div>
              <div className="lp-link-desc">Volunteer or contribute to MCUK</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </Link>
        </div>
      </div>

      {/* FEATURED CONTENT */}
      <div className="lp-section">
        <h2 className="lp-section-title">Featured</h2>
        <div className="lp-links">

          {/* Medical Cannabis Awareness Week */}
          <a href="https://www.medicinalcannabisweek.co.uk" target="_blank" rel="noopener noreferrer" className="lp-link lp-link--campaign">
            <span className="lp-link-icon">&#127807;</span>
            <div>
              <div className="lp-link-title">Medical Cannabis Awareness Week</div>
              <div className="lp-link-desc">1–7 November annually — raising awareness of cannabis-based medicines across the UK</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>

          {/* Latest blog post — dynamic */}
          {latestPost && (
            <Link href={`/blog/${latestPost.slug.current}`} className="lp-link">
              <span className="lp-link-icon">&#128221;</span>
              <div>
                <div className="lp-link-badge">Latest from the blog</div>
                <div className="lp-link-title">{latestPost.title}</div>
                <div className="lp-link-desc">{latestPost.excerpt}</div>
              </div>
              <span className="lp-link-arrow">→</span>
            </Link>
          )}

        </div>
      </div>

      {/* MEET THE TEAM */}
      <div className="lp-section">
        <h2 className="lp-section-title">Meet the team</h2>
        <div className="lp-team-row">
          <Link href="/link/lex" className="lp-team-card">
            <div className="lp-team-avatar">LW</div>
            <div className="lp-team-name">Lex Wolfe</div>
            <div className="lp-team-role">Head of Digital</div>
          </Link>
          <Link href="/link/lee" className="lp-team-card">
            <div className="lp-team-avatar">LB</div>
            <div className="lp-team-name">Lee Bailey</div>
            <div className="lp-team-role">Deputy MD</div>
          </Link>
          <Link href="/link/jane" className="lp-team-card">
            <div className="lp-team-avatar">JH</div>
            <div className="lp-team-name">Jane Hinchliffe</div>
            <div className="lp-team-role">Founder & MD</div>
          </Link>
        </div>
      </div>

      {/* COMMUNITY */}
      <div className="lp-section">
        <h2 className="lp-section-title">Join our community</h2>
        <div className="lp-links">
          <a href="https://www.facebook.com/groups/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon" style={{color:'#1877f2'}}>f</span>
            <div>
              <div className="lp-link-title">Facebook community</div>
              <div className="lp-link-desc">Our active patient community group</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
          <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon" style={{color:'#5865f2'}}>&#9671;</span>
            <div>
              <div className="lp-link-title">Discord server</div>
              <div className="lp-link-desc">Real-time chat and community support</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
        </div>
      </div>

      {/* SUPPORT MCUK */}
      <div className="lp-section">
        <h2 className="lp-section-title">Support MCUK</h2>
        <p className="lp-section-desc">MCUK is a not-for-profit CIC. Your support helps us keep our resources free and grow our advocacy work.</p>
        <Link href="/donate" className="lp-donate-btn">
          &#9829; Donate to MCUK
        </Link>
      </div>

      {/* CONTACT */}
      <div className="lp-section">
        <h2 className="lp-section-title">Contact</h2>
        <div className="lp-contact-grid">
          <a href="mailto:hello@mcukcic.co.uk" className="lp-contact-item">
            <span>&#9993;</span>
            <span>hello@mcukcic.co.uk</span>
          </a>
          <a href="mailto:support@mcukcic.co.uk" className="lp-contact-item">
            <span>&#9829;</span>
            <span>support@mcukcic.co.uk</span>
          </a>
          <a href="mailto:media@mcukcic.co.uk" className="lp-contact-item">
            <span>&#128248;</span>
            <span>media@mcukcic.co.uk</span>
          </a>
          <a href="mailto:partnerships@mcukcic.co.uk" className="lp-contact-item">
            <span>&#129309;</span>
            <span>partnerships@mcukcic.co.uk</span>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div className="lp-footer">
        <p>Medicinal Cannabis UK CIC</p>
        <p>Registered in England and Wales · Company no. 17373828</p>
        <p>Union House, 111 New Union Street, Coventry, CV1 2NT</p>
        <p className="lp-footer-disclaimer">This page does not provide medical advice. Always consult your prescribing clinician.</p>
      </div>

    </div>
  )
}