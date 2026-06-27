import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/images/logo.png"
              alt="MCUK"
              width={120}
              height={52}
              className="logo-footer-img"
            />
            <p>Medicinal Cannabis UK CIC — a patient-led organisation supporting UK prescription cannabis patients.</p>
            <p className="footer-note">CIC registration in progress.</p>
          </div>
          <div className="footer-links">
            <h5>Site</h5>
            <Link href="/about">About</Link>
            <Link href="/team">Our team</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h5>Community</h5>
            <a href="https://www.facebook.com/groups/mcuk.cic" target="_blank" rel="noopener">Facebook</a>
            <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener">Discord</a>
            <a href="https://www.youtube.com/channel/UCxsbiTttOJZhiF281Etcx7w" target="_blank" rel="noopener">YouTube</a>
          </div>
          <div className="footer-newsletter">
            <NewsletterSignup variant="compact" />
          </div>
        </div>
        <div className="footer-bottom">
          <p>This site does not provide medical advice. Always consult your prescribing clinician.</p>
          <p>&copy; {new Date().getFullYear()} Medicinal Cannabis UK CIC</p>
        </div>
      </div>
    </footer>
  )
}