import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { FacebookIcon, DiscordIcon, InstagramIcon } from '../../../components/SocialIcons'

export const metadata: Metadata = {
  title: 'Lee Bailey — MCUK',
  description: 'Deputy Managing Director at Medicinal Cannabis UK CIC.',
}

export default function LeePage() {
  return (
    <div className="lp-shell">

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

      <div className="lp-profile">
        <div className="lp-profile-avatar">LB</div>
        <h1 className="lp-profile-name">Lee Bailey</h1>
        <div className="lp-profile-role">Deputy Managing Director · MCUK CIC</div>
        <p className="lp-profile-bio">
          Placeholder bio — Lee is Deputy Managing Director of Medicinal Cannabis UK CIC, supporting the day-to-day running of the organisation and its community programmes.
        </p>
        <Link href="/team" className="lp-profile-link">View full profile →</Link>
      </div>

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
            <span className="lp-link-icon"><FacebookIcon size={24} /></span>
            <div>
              <div className="lp-link-title">Facebook community</div>
              <div className="lp-link-desc">Join our patient community</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
          <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon"><DiscordIcon size={24} /></span>
            <div>
              <div className="lp-link-title">Discord server</div>
              <div className="lp-link-desc">Real-time community chat</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
          <a href="https://www.instagram.com/mcuk.cic/" target="_blank" rel="noopener noreferrer" className="lp-link">
            <span className="lp-link-icon"><InstagramIcon size={24} /></span>
            <div>
              <div className="lp-link-title">Instagram</div>
              <div className="lp-link-desc">@mcuk.cic</div>
            </div>
            <span className="lp-link-arrow">→</span>
          </a>
        </div>
      </div>

      <div className="lp-section">
        <h2 className="lp-section-title">My projects</h2>
        <div className="lp-links">
          <div className="lp-link lp-link--placeholder">
            <span className="lp-link-icon">&#128196;</span>
            <div>
              <div className="lp-link-title">Project placeholder</div>
              <div className="lp-link-desc">Details coming soon</div>
            </div>
          </div>
        </div>
      </div>

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
        </div>
      </div>

      <div className="lp-footer">
        <Link href="/link" className="lp-footer-back">← Back to MCUK links</Link>
        <p>Medicinal Cannabis UK CIC · Company no. 17373828</p>
        <p className="lp-footer-disclaimer">This page does not provide medical advice.</p>
      </div>

    </div>
  )
}