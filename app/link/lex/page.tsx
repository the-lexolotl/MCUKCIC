import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lex Wolfe — MCUK',
  description: 'Head of Digital Systems at Medicinal Cannabis UK CIC.',
}

export default function LexPage() {
  return (
    <div className="lp-shell">

      {/* LOGO */}
      <div className="lp-logo">
        <Link href="/link">
          <Image
            src="/images/logo.png"
            alt="MCUK"
            width={60}
            height={60}
            style={{ width: '60px', height: 'auto', margin: '0 auto' }}
          />
        </Link>
      </div>

      {/* PROFILE */}
      <div className="lp-profile">
        <div className="lp-profile-avatar">LW</div>
        <h1 className="lp-profile-name">Lex Wolfe</h1>
        <div className="lp-profile-role">Head of Digital Systems · MCUK CIC</div>
        <p className="lp-profile-bio">
          Placeholder bio — Lex oversees all digital systems for MCUK, including the website, social media, and operating procedures. Their professional background is in clinical toxicology with a specialism in cannabis.
        </p>
        <Link href="/team" className="lp-profile-link">View full profile →</Link>
      </div>

      {/* MCUK LINKS */}
      <div className="lp-section">
        <h2 className="lp-section-title">MCUK</h2>
        <div className="lp-links">
          <Link href="/" className="lp-link lp-link--primary">
            <span className="lp-link-icon">&#127968;</span>
            <div>
              <div className="lp-link-title">MCUK Website</div>
              <div className="lp-link-desc">Patient support, resources, and blog</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </Link>
          <a href="https://www.facebook.com/groups/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon" style={{color:'#1877f2'}}>f</span>
            <div>
              <div className="lp-link-title">Facebook community</div>
              <div className="lp-link-desc">Join our patient community</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
          <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon" style={{color:'#5865f2'}}>&#9671;</span>
            <div>
              <div className="lp-link-title">Discord server</div>
              <div className="lp-link-desc">Real-time community chat</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
          <a href="https://www.instagram.com/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon" style={{color:'#e1306c'}}>&#9679;</span>
            <div>
              <div className="lp-link-title">Instagram</div>
              <div className="lp-link-desc">@mcuk.cic</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
        </div>
      </div>

      {/* MY PROJECTS */}
      <div className="lp-section">
        <h2 className="lp-section-title">My projects</h2>
        <div className="lp-links">
          <div className="lp-link lp-link--placeholder">
            <span className="lp-link-icon">&#128187;</span>
            <div>
              <div className="lp-link-title">Project placeholder</div>
              <div className="lp-link-desc">Details coming soon</div>
            </div>
          </div>
          <div className="lp-link lp-link--placeholder">
            <span className="lp-link-icon">&#128187;</span>
            <div>
              <div className="lp-link-title">Project placeholder</div>
              <div className="lp-link-desc">Details coming soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* PERSONAL LINKS */}
      <div className="lp-section">
        <h2 className="lp-section-title">Find me online</h2>
        <div className="lp-links">
          <div className="lp-link lp-link--placeholder">
            <span className="lp-link-icon">&#128101;</span>
            <div>
              <div className="lp-link-title">LinkedIn</div>
              <div className="lp-link-desc">Coming soon</div>
            </div>
          </div>
          <div className="lp-link lp-link--placeholder">
            <span className="lp-link-icon">&#128247;</span>
            <div>
              <div className="lp-link-title">Instagram</div>
              <div className="lp-link-desc">Coming soon</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="lp-footer">
        <Link href="/link" className="lp-footer-back">← Back to MCUK links</Link>
        <p>Medicinal Cannabis UK CIC · Company no. 17373828</p>
        <p className="lp-footer-disclaimer">This page does not provide medical advice.</p>
      </div>

    </div>
  )
}