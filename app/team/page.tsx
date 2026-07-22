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
                    <h3 className="team-row-name">Jane Hntchliffe</h3>
                    <div className="team-role">Founder &amp; Managing Director</div>
                    <div className="team-tags">
                      <span className="team-tag">Chronic pain</span>
                      <span className="team-tag">Managing Director</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>Jane came to medicinal cannabis through her own experience of chronic pain, navigating a system that was often difficult to understand and even harder to access. That journey shaped her belief that patients deserve better — clearer information, stronger voices, and a community that truly has their back. As Founder and Managing Director of MCUK, she leads with that lived experience at the forefront, championing education, access, and patient-led change across the UK.</p>
                </div>
              </div>

              <div className="team-row">
                <div className="team-row-identity">
                  <div className="team-photo placeholder-photo">
                    <span>LB</span>
                  </div>
                  <div>
                    <h3 className="team-row-name">Lee Bailey</h3>
                    <div className="team-role">Deputy Managing Director</div>
                    <div className="team-tags">
                      <span className="team-tag">PTSD</span>
                      <span className="team-tag">Operations</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>Lee&apos;s relationship with cannabis spans over 35 years - from early curiosity as a teenager and time in Amsterdam, to a deepening interest in its medicinal potential and cultural significance. He now uses it to treat his PTSD, and became a legal medicinal cannabis patient in 2025, an experience that cemented his commitment to improving the patient journey and challenging stigma in the UK. With 14 years in logistics, supply chain, and leadership with the Ministry of Defence alongside a varied career across other sectors, Lee brings a unique perspective to MCUK. Now Deputy Managing Director, he channels that breadth of experience into building an organisation that genuinely puts patients first.</p>
                </div>
              </div>

              <div className="team-row">
                <div className="team-row-identity">
                  <div className="team-photo placeholder-photo">
                    <span>LW</span>
                  </div>
                  <div>
                    <h3 className="team-row-name">Lex Wolfe</h3>
                    <div className="team-role">Co-founder &amp; Head of Digital Systems</div>
                    <div className="team-tags">
                      <span className="team-tag">Digital Systems</span>
                      <span className="team-tag">Chronic illness</span>
                    </div>
                  </div>
                </div>
                <div className="team-row-bio">
                  <p>Living with Ehlers-Danlos syndrome, ADHD, and C-PTSD, Lex brings lived experience to his work alongside a professional background in toxicology, specialising in cannabis. He has been a legal medicinal cannabis patient since 2019, among the first following the UK law change. As Co-founder and Head of Digital Systems at MCUK, he builds and maintains the website, social platforms, and internal processes that help patients reliably find the support they need. That combination of personal insight and specialist knowledge underpins his commitment to making MCUK accurate, accessible, and genuinely useful for the community it serves.</p>
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