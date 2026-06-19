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
            <div className="team-grid">

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>JH</span>
                </div>
                <div className="team-info">
                  <h3>Jane Hitchliffe</h3>
                  <div className="team-role">Founder &amp; Head of Patient Advocacy</div>
                  <p>Bio coming soon.</p>
                  <div className="team-tags">
                    <span className="team-tag">Patient advocate</span>
                    <span className="team-tag">Founder</span>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>LW</span>
                </div>
                <div className="team-info">
                  <h3>Lex Wolfe</h3>
                  <div className="team-role">Founder &amp; Head of Digital Systems</div>
                  <p>Lex co-founded MCUK as a prescribed cannabis patient who wanted the kind of practical, organised support that wasn&apos;t there when he needed it. Today Lex builds and runs the tools — the website, social channels, and internal processes — that keep MCUK running smoothly.</p>
                  <div className="team-tags">
                    <span className="team-tag">Web &amp; systems</span>
                    <span className="team-tag">Founder</span>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>LB</span>
                </div>
                <div className="team-info">
                  <h3>Lee Bailey</h3>
                  <div className="team-role">Chair of Operations</div>
                  <p>Bio coming soon.</p>
                  <div className="team-tags">
                    <span className="team-tag">Operations</span>
                    <span className="team-tag">Chair</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ADMIN */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-label">Administration</div>
            <h2>Our admin team</h2>
            <p className="section-sub">The people who keep MCUK running — managing communications, content, and community support behind the scenes.</p>
            <div className="team-grid">

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>AJ</span>
                </div>
                <div className="team-info">
                  <h3>Alex Johnson</h3>
                  <div className="team-role">Community Manager</div>
                  <p>Placeholder bio — Alex manages our online communities across Facebook and Discord, ensuring members feel welcomed, heard, and supported.</p>
                  <div className="team-tags">
                    <span className="team-tag">Community</span>
                    <span className="team-tag">Social media</span>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>SW</span>
                </div>
                <div className="team-info">
                  <h3>Sam Wilson</h3>
                  <div className="team-role">Content &amp; Communications</div>
                  <p>Placeholder bio — Sam leads on content creation, blog editing, and external communications, making sure MCUK speaks clearly and honestly to its community.</p>
                  <div className="team-tags">
                    <span className="team-tag">Content</span>
                    <span className="team-tag">Writing</span>
                  </div>
                </div>
              </div>

              <div className="team-card">
                <div className="team-photo placeholder-photo">
                  <span>RB</span>
                </div>
                <div className="team-info">
                  <h3>Riley Brown</h3>
                  <div className="team-role">Patient Support Coordinator</div>
                  <p>Placeholder bio — Riley coordinates our patient support services and is the first point of contact for members seeking guidance on accessing prescription cannabis.</p>
                  <div className="team-tags">
                    <span className="team-tag">Patient support</span>
                    <span className="team-tag">C.A.L.S.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ADVISERS */}
        <section className="section">
          <div className="container">
            <div className="section-label">Advisers</div>
            <h2>Our advisory panel</h2>
            <p className="section-sub">Our advisers bring professional expertise in medicine, law, policy, and patient advocacy — helping us make sure everything we do is accurate, safe, and effective.</p>
            <div className="team-grid adviser-grid">

              <div className="team-card team-card--adviser">
                <div className="team-photo placeholder-photo placeholder-photo--sm">
                  <span>DR</span>
                </div>
                <div className="team-info">
                  <h3>Dr. Placeholder</h3>
                  <div className="team-role">Medical Adviser</div>
                  <p>Placeholder — specialist in cannabis-based medicine with a background in pain management and neurology.</p>
                  <div className="team-tags">
                    <span className="team-tag">Medicine</span>
                    <span className="team-tag">Pain management</span>
                  </div>
                </div>
              </div>

              <div className="team-card team-card--adviser">
                <div className="team-photo placeholder-photo placeholder-photo--sm">
                  <span>LP</span>
                </div>
                <div className="team-info">
                  <h3>L. Placeholder</h3>
                  <div className="team-role">Legal Adviser</div>
                  <p>Placeholder — specialist in healthcare and drug policy law, advising on patient rights and equality legislation.</p>
                  <div className="team-tags">
                    <span className="team-tag">Law</span>
                    <span className="team-tag">Patient rights</span>
                  </div>
                </div>
              </div>

              <div className="team-card team-card--adviser">
                <div className="team-photo placeholder-photo placeholder-photo--sm">
                  <span>PP</span>
                </div>
                <div className="team-info">
                  <h3>P. Placeholder</h3>
                  <div className="team-role">Policy Adviser</div>
                  <p>Placeholder — experienced in health policy and NHS engagement, supporting our advocacy and consultation work.</p>
                  <div className="team-tags">
                    <span className="team-tag">Policy</span>
                    <span className="team-tag">NHS</span>
                  </div>
                </div>
              </div>

              <div className="team-card team-card--adviser">
                <div className="team-photo placeholder-photo placeholder-photo--sm">
                  <span>PA</span>
                </div>
                <div className="team-info">
                  <h3>P. Adviser</h3>
                  <div className="team-role">Patient Advocacy Adviser</div>
                  <p>Placeholder — long-term patient advocate with experience representing the cannabis medicine community at national level.</p>
                  <div className="team-tags">
                    <span className="team-tag">Advocacy</span>
                    <span className="team-tag">Policy</span>
                  </div>
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