import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the team behind MCUK — patients, advocates, and professionals united by a shared commitment to better outcomes for UK cannabis medicine patients.',
}

export default function Team() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Our people</div>
            <h1>The team behind MCUK</h1>
            <p className="hero-sub">Patients, advocates, and professionals — united by a shared commitment to better outcomes for the UK cannabis medicine community.</p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="section">
          <div className="container">
            <div className="section-label">Leadership</div>
            <h2>Who leads us</h2>
            <p className="section-sub">Our leadership team are all patients or carers with direct experience of the UK prescription cannabis system.</p>

            <div className="team-list">

              <div className="team-row">
                <div className="team-row-identity">
                  <div className="team-photo placeholder-photo">
                    <span>JH</span>
                  </div>
                  <div>
                    <h3 className="team-row-name">Jane Hitchliffe</h3>
                    <div className="team-role">Head of Patient Advocacy</div>
                    <div className="team-tags">
                      <span className="team-tag">Patient advocate</span>
                      <span className="team-tag">Chronic pain</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>Jane came to medicinal cannabis through her own experience of chronic pain, navigating a system that was often difficult to understand and even harder to access. That journey shaped her belief that patients deserve better — clearer information, stronger voices, and a community that truly has their back. As Head of Patient Advocacy at MCUK, she leads with that lived experience at the forefront, championing education, access, and patient-led change across the UK.</p>
                </div>
              </div>

              <div className="team-row">
                <div className="team-row-identity">
                  <div className="team-photo placeholder-photo">
                    <span>LW</span>
                  </div>
                  <div>
                    <h3 className="team-row-name">Lex Wolfe</h3>
                    <div className="team-role">Head of Digital Systems</div>
                    <div className="team-tags">
                      <span className="team-tag">Web &amp; systems</span>
                      <span className="team-tag">Digital</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>As Head of Digital Systems at MCUK, Lex builds and maintains everything that keeps the organisation running behind the scenes — the website, social channels, and internal processes that help patients find what they need. Living with Ehlers-Danlos syndrome, ADHD, and PTSD brought him to medicinal cannabis, and that lived experience shapes his commitment to making sure MCUK is accessible, well-organised, and genuinely useful for the people it serves.</p>
                </div>
              </div>

              <div className="team-row">
                <div className="team-row-identity">
                  <div className="team-photo placeholder-photo">
                    <span>LB</span>
                  </div>
                  <div>
                    <h3 className="team-row-name">Lee Bailey</h3>
                    <div className="team-role">Chair of Operations</div>
                    <div className="team-tags">
                      <span className="team-tag">Operations</span>
                      <span className="team-tag">Chair</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>Lee&apos;s relationship with cannabis spans over 35 years — from early curiosity and time in Amsterdam to a deepening interest in its medicinal potential and cultural significance. After a 25+ year career in logistics and leadership with the Ministry of Defence, he became a legal medicinal cannabis patient in 2025, an experience that cemented his commitment to improving patient access and challenging stigma in the UK. Now Chair of Operations at MCUK, Lee brings that breadth of experience to building an organisation that genuinely puts patients first.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* JOIN THE TEAM */}
        <section className="section section-tinted">
          <div className="container content-narrow">
            <div className="section-label">Get involved</div>
            <h2>Want to join us?</h2>
            <p>MCUK is a patient-led organisation that grows through the dedication of volunteers and community members. Whether you have professional expertise to offer, lived experience to share, or simply want to help — we&apos;d love to hear from you.</p>
            <Link href="/contact" className="btn-primary" style={{display:'inline-block', marginTop:'0.5rem'}}>Get in touch</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}