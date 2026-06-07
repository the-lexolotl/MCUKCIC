import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Clear, honest guides written for patients, by patients. No jargon, no agenda — just the information you need.',
}

export default function Resources() {
  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Resources</div>
            <h1>Patient guides &amp; information</h1>
            <p className="hero-sub">Clear, honest guides written for patients, by patients. No jargon, no agenda — just the information you need.</p>
          </div>
        </section>

        {/* GETTING STARTED */}
        <section className="section">
          <div className="container">
            <div className="section-label">Getting started</div>
            <h2>New to medical cannabis?</h2>
            <p className="section-sub">Everything you need to understand the basics and take your first steps as a patient.</p>
            <div className="resource-grid">

              <Link href="/resources/what-is-medical-cannabis" className="resource-card">
                <div className="resource-icon icon-green">&#9679;</div>
                <div className="resource-body">
                  <h3>What is medical cannabis?</h3>
                  <p>A plain English explainer for anyone new to cannabis medicine or considering it as a treatment option.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

              <Link href="/resources/finding-a-clinic" className="resource-card">
                <div className="resource-icon icon-violet">&#9679;</div>
                <div className="resource-body">
                  <h3>Finding a clinic</h3>
                  <p>What to look for in a cannabis clinic, questions to ask, and the difference between private and NHS routes.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

              <Link href="/resources/cost-of-prescription" className="resource-card">
                <div className="resource-icon icon-orange">&#9679;</div>
                <div className="resource-body">
                  <h3>The cost of prescription cannabis</h3>
                  <p>What to expect financially, why it costs what it does, and what help might be available.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* USING YOUR MEDICINE */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-label">Using your medicine</div>
            <h2>Managing your prescription</h2>
            <p className="section-sub">Practical guides to help you get the most from your cannabis medicine safely and effectively.</p>
            <div className="resource-grid">

              <Link href="/resources/storing-your-medicine" className="resource-card">
                <div className="resource-icon icon-green">&#9679;</div>
                <div className="resource-body">
                  <h3>How to store your cannabis medicine</h3>
                  <p>Keeping your medicine fresh, safe, and out of the wrong hands — what you need to know.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

              <Link href="/resources/oils-and-tinctures" className="resource-card">
                <div className="resource-icon icon-violet">&#9679;</div>
                <div className="resource-body">
                  <h3>How to use oils and tinctures</h3>
                  <p>A step-by-step guide to using cannabis oils and tinctures correctly and consistently.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* DEVICES & EQUIPMENT */}
        <section className="section">
          <div className="container">
            <div className="section-label">Devices &amp; equipment</div>
            <h2>Using your equipment</h2>
            <p className="section-sub">Step-by-step guides to the most common devices used by prescription cannabis patients in the UK.</p>
            <div className="resource-grid">

              <Link href="/resources/dry-herb-vaporiser" className="resource-card">
                <div className="resource-icon icon-green">&#9679;</div>
                <div className="resource-body">
                  <h3>How to use a dry herb vaporiser</h3>
                  <p>Everything you need to know about loading, using, and getting the most from your dry herb vaporiser.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

              <Link href="/resources/vape-cartridge" className="resource-card">
                <div className="resource-icon icon-violet">&#9679;</div>
                <div className="resource-body">
                  <h3>How to use a vape cartridge</h3>
                  <p>A straightforward guide to using cannabis vape cartridges safely and effectively.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

              <Link href="/resources/how-to-use-a-grinder" className="resource-card">
                <div className="resource-icon icon-orange">&#9679;</div>
                <div className="resource-body">
                  <h3>How to use a grinder</h3>
                  <p>How to grind your cannabis flower correctly for the best results from your vaporiser.</p>
                  <span className="resource-link">Read guide &rarr;</span>
                </div>
              </Link>

            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="section section-tinted">
          <div className="container content-narrow">
            <div className="info-box">
              <p><strong>Please note:</strong> The resources on this site are for informational purposes only and do not constitute medical advice. Always follow the guidance of your prescribing clinician. If you have questions about your prescription or treatment, please contact your clinic directly or <Link href="/contact">get in touch with us</Link>.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}