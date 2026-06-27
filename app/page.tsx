import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MCUK — Medicinal Cannabis UK',
  description: 'Patient-led support for UK prescription cannabis patients. Free guidance, resources, and community from a Community Interest Company.',
  openGraph: {
    title: 'MCUK — Medicinal Cannabis UK',
    description: 'Patient-led support for UK prescription cannabis patients. Free guidance, resources, and community from a Community Interest Company.',
  },
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>

        {/* HERO */}
        <section className="hero">
          <div className="container">
            <div className="hero-tag">Patient-led · UK Based</div>
            <h1>You're not alone on your <span className="highlight">cannabis medicine</span> journey</h1>
            <p className="hero-sub">MCUK supports UK patients navigating prescription cannabis — from your first appointment to long-term wellbeing.</p>
            <div className="hero-buttons">
              <Link href="/resources" className="btn-primary">Find support</Link>
              <Link href="/about" className="btn-secondary">About us</Link>
            </div>
            <div className="trust-bar">
              <span>Patient-led organisation</span>
              <span>Community Interest Company</span>
              <span>Free to access</span>
            </div>
          </div>
        </section>

        {/* HOW WE HELP */}
        <section className="section">
          <div className="container">
            <div className="section-label">How we help</div>
            <h2>Support at every step</h2>
            <p className="section-sub">Whether you're just starting out or have been a patient for years, we're here to help you feel informed and supported.</p>
            <div className="cards">
              <div className="card">
                <div className="card-icon icon-green">&#9829;</div>
                <h3>Patient guidance</h3>
                <p>Clear, honest information about accessing and managing your prescription.</p>
                <Link href="/resources" className="card-link">Explore resources &rarr;</Link>
              </div>
              <div className="card">
                <div className="card-icon icon-violet">&#9675;</div>
                <h3>Community</h3>
                <p>Connect with others who understand what it's like to be a UK cannabis patient.</p>
                <a href="#community" className="card-link">Join the community &rarr;</a>
              </div>
              <div className="card">
                <div className="card-icon icon-orange">&#9636;</div>
                <h3>News & views</h3>
                <p>Product reviews, discussion articles, and the latest from the UK cannabis space.</p>
                <Link href="/blog" className="card-link">Read the blog &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-label">From our community</div>
            <blockquote className="testimonial">
              <p>&ldquo;I felt completely lost before I found MCUK. Having somewhere to turn — run by people who actually get it — made all the difference.&rdquo;</p>
              <footer>Community member, chronic pain patient</footer>
            </blockquote>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="section" id="community">
          <div className="container">
            <div className="section-label">Find us online</div>
            <h2>Join our community</h2>
            <p className="section-sub">We're building spaces where UK cannabis patients can find support, share experiences, and stay informed.</p>
            <div className="social-cards">
              <a href="https://www.facebook.com/groups/mcuk.cic" target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon" style={{background:'#eef2fb', color:'#3b5998'}}>f</div>
                <div>
                  <h4>Facebook</h4>
                  <p>Our active community — join thousands of UK patients</p>
                </div>
              </a>
              <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon" style={{background:'#eeedfb', color:'#5865f2'}}>&#9671;</div>
                <div>
                  <h4>Discord</h4>
                  <p>Real-time chat, support channels, and community events</p>
                </div>
              </a>
              <a href="https://www.youtube.com/channel/UCxsbiTttOJZhiF281Etcx7w" target="_blank" rel="noopener noreferrer" className="social-card">
                <div className="social-icon" style={{background:'#feeeed', color:'#ff0000'}}>&#9654;</div>
                <div>
                  <h4>YouTube</h4>
                  <p>Guides, interviews, and patient stories</p>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
