import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MCUK — a patient-led Community Interest Company supporting UK prescription cannabis patients.',
}

export default function About() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">About us</div>
            <h1>Holistic patient-led support</h1>
            <p className="hero-sub">Founded by patients, for patients. MCUK exists to make sure no one navigates prescription cannabis alone.</p>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="section">
          <div className="container content-narrow">
            <div className="section-label">Our story</div>
            <h2>Where we started</h2>
            <p>MCUK began on 28 October 2021, when a small group of prescribed cannabis patients came together on Facebook with a simple idea: that patients supporting each other could make a real difference.</p>
            <p>What started as a community space quickly grew into something more. Members shared experiences, helped each other navigate clinics and prescriptions, and spoke openly about how cannabis medicine was affecting their lives — for better and for worse. That honesty, and that sense of mutual support, remains at the heart of everything we do.</p>
            <p>Today, MCUK is in the process of registering as a Community Interest Company — a formal recognition of our commitment to putting patients and community benefit above all else.</p>
          </div>
        </section>

        {/* MISSION */}
        <section className="section section-tinted">
          <div className="container content-narrow">
            <div className="section-label">Our mission</div>
            <h2>What we exist to do</h2>
            <p>MCUK exists to improve the lives of patients who use, or may benefit from, prescribed medical cannabis treatment in the United Kingdom. We do this through patient services, education, support, representation, and public awareness.</p>
            <p>We believe that every patient deserves clear information, fair treatment, and a community that understands their experience. We work to reduce stigma, challenge misinformation, and ensure that the patient voice is heard — in healthcare settings, workplaces, and public life.</p>
            <p>We also acknowledge the reality faced by many patients: that the cost of prescription cannabis in the UK places it out of reach for some. We believe access to effective medicine should not be determined by financial means, and we will continue to advocate for a system that works for everyone.</p>
          </div>
        </section>

        {/* VALUES */}
        <section className="section">
          <div className="container">
            <div className="section-label">Our values</div>
            <h2>What guides us</h2>
            <p className="section-sub">These aren&apos;t just words — they shape every decision we make as an organisation.</p>
            <div className="cards">
              <div className="card">
                <div className="card-icon icon-green">&#9829;</div>
                <h3>Patient-first</h3>
                <p>Every decision we make starts with the question: does this benefit patients? We are led by lived experience, not institutional interests.</p>
              </div>
              <div className="card">
                <div className="card-icon icon-violet">&#9675;</div>
                <h3>Honesty &amp; transparency</h3>
                <p>We say what we mean. We acknowledge uncertainty where it exists, and we never overstate what we know or what we can do.</p>
              </div>
              <div className="card">
                <div className="card-icon icon-orange">&#9636;</div>
                <h3>Inclusion</h3>
                <p>We welcome all patients regardless of condition, background, or circumstance. Our community is built on respect and mutual support.</p>
              </div>
              <div className="card">
                <div className="card-icon icon-green">&#9830;</div>
                <h3>Community-led</h3>
                <p>We are not a corporation or a clinic. We are patients and advocates working together, accountable to the people we serve.</p>
              </div>
              <div className="card">
                <div className="card-icon icon-violet">&#9651;</div>
                <h3>Advocacy</h3>
                <p>We actively represent the patient voice in healthcare, policy, and public life — pushing for the fair and equal treatment every patient deserves.</p>
              </div>
              <div className="card">
                <div className="card-icon icon-orange">&#9632;</div>
                <h3>Education</h3>
                <p>We believe informed patients make better decisions. We work to make accurate, accessible information available to everyone who needs it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-label">Our work</div>
            <h2>How we deliver community benefit</h2>
            <p className="section-sub">As a CIC, everything we do is structured around clear, measurable benefit to the patient community.</p>
            <div className="activity-list">

              <div className="activity-item">
                <div className="activity-number">01</div>
                <div className="activity-body">
                  <h3>Patient services &amp; support</h3>
                  <p>We provide direct information and guidance to individuals navigating the medical cannabis system — including understanding legal rights, accessing prescriptions, and receiving fair treatment within healthcare services.</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-number">02</div>
                <div className="activity-body">
                  <h3>C.A.L.S. — Cannabis and Liaison Support Services <span className="badge">In development</span></h3>
                  <p>A volunteer-based patient support programme currently in development. Trained, safeguarded volunteers will accompany patients to healthcare appointments, help facilitate effective communication with clinicians, and provide practical and emotional support throughout the healthcare process.</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-number">03</div>
                <div className="activity-body">
                  <h3>Education &amp; awareness</h3>
                  <p>We develop and distribute educational resources aimed at patients, carers, healthcare professionals, employers, and public bodies — working to reduce stigma, challenge misinformation, and improve understanding of prescribed medical cannabis across society.</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-number">04</div>
                <div className="activity-body">
                  <h3>Rights, equality &amp; inclusion</h3>
                  <p>We actively promote patient rights, disability rights, and equality legislation — working to ensure fair treatment of prescribed cannabis patients in healthcare, workplaces, public venues, and educational environments.</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-number">05</div>
                <div className="activity-body">
                  <h3>Patient voice &amp; research</h3>
                  <p>We gather patient experiences and feedback to identify barriers to treatment, highlight systemic inequities, and ensure the patient perspective is represented in healthcare and policy consultations.</p>
                </div>
              </div>

              <div className="activity-item">
                <div className="activity-number">06</div>
                <div className="activity-body">
                  <h3>Community engagement &amp; events</h3>
                  <p>We attend conferences, exhibitions, and healthcare events to share accurate information and engage with both patients and professionals. Where patients cannot attend due to financial, health, or accessibility barriers, we represent their voices and share findings in accessible formats.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CIC STATEMENT */}
        <section className="section">
          <div className="container content-narrow">
            <div className="section-label">Our structure</div>
            <h2>Why a Community Interest Company?</h2>
            <p>A Community Interest Company (CIC) is a type of limited company specifically designed for organisations that exist to benefit the community rather than generate private profit. Unlike a standard limited company, a CIC is legally bound by an asset lock — meaning that all surplus and assets must remain dedicated to the community benefit objectives the organisation was founded to serve.</p>
            <p>We chose the CIC structure because it reflects exactly what MCUK is: an organisation that exists solely for its patients and community, with formal accountability to prove it.</p>
            <div className="info-box">
              <p><strong>MCUK CIC is currently in the process of registration.</strong> Our company number and registration details will be published here once confirmed. If you have questions about our structure or governance, please <Link href="/contact">get in touch</Link>.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}