import Link from 'next/link'
import Image from 'next/image'

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
            <p className="footer-note">Registered in England and Wales · Company no. 17373828</p>
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
            <h5>Site</h5>
            <Link href="/about">About</Link>
            <Link href="/team">Our team</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-links">
            <h5>Legal</h5>
            <Link href="/policies">All policies</Link>
            <Link href="/policies/privacy">Privacy policy</Link>
            <Link href="/policies/cookies">Cookie policy</Link>
            <Link href="/policies/terms">Terms &amp; conditions</Link>
            <Link href="/policies/complaints">Complaints</Link>
            <Link href="/policies/safeguarding">Safeguarding</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>This site does not provide medical advice. Always consult your prescribing clinician.</p>
          <p>&copy; {new Date().getFullYear()} Medicinal Cannabis UK CIC · Registered in England and Wales · Company no. 17373828</p>
        </div>
      </div>
    </footer>
  )
}