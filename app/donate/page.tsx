import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support Medicinal Cannabis UK CIC — help us keep our resources free and grow our patient advocacy work.',
}

export default function DonatePage() {
  return (
    <>
      <Nav />
      <main>

        <section className="page-hero">
          <div className="container">
            <div className="section-label">Support us</div>
            <h1>Support MCUK</h1>
            <p className="hero-sub">MCUK is a not-for-profit Community Interest Company. Every donation goes directly towards keeping our resources free and growing our patient advocacy work.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start'}}>

              <div>
                <div className="section-label">Why donate?</div>
                <h2>Help us support more patients</h2>
                <p style={{color:'var(--text-secondary)', marginBottom:'1.25rem', lineHeight:'1.8'}}>MCUK exists to support UK patients navigating prescription cannabis — from their first appointment to long-term wellbeing. We provide free resources, community support, and advocacy work.</p>
                <p style={{color:'var(--text-secondary)', marginBottom:'1.25rem', lineHeight:'1.8'}}>As a Community Interest Company, any surplus we generate goes directly back into supporting patients and funding our work. We are legally bound by a CIC asset lock — your donation cannot be used for anything other than our community benefit objectives.</p>
                <p style={{color:'var(--text-secondary)', marginBottom:'2rem', lineHeight:'1.8'}}>Your support helps us keep our guides and resources free to access, develop new patient support programmes including C.A.L.S., represent patient voices in policy and healthcare settings, and grow our community spaces.</p>

                <div className="info-box">
                  <p><strong>Medicinal Cannabis UK CIC</strong> is registered in England and Wales, company number 17373828. All donations are processed securely by Zeffy.</p>
                </div>
              </div>

              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `
                      <div data-zeffy-embed data-form-url="/embed/donation-form/support-our-team-8"></div>
                      <div data-zeffy-embed-fallback style="display:none;">
                        <div style="position:relative;overflow:hidden;height:450px;width:100%;"><iframe title='Donation form powered by Zeffy' style='position: absolute; border: 0; top:0;left:0;bottom:0;right:0;width:100%;height:100%' data-zeffy-embed-src='https://www.zeffy.com/embed/donation-form/support-our-team-8' allowpaymentrequest allowTransparency="true"></iframe></div>
                      </div>
                      <script
                        src="https://www.zeffy.com/embed/v2/zeffy-embed.js"
                        onerror="document.querySelectorAll('[data-zeffy-embed-fallback]').forEach(function(el){el.style.display='block';el.querySelectorAll('iframe[data-zeffy-embed-src]').forEach(function(f){f.src=f.getAttribute('data-zeffy-embed-src');});});">
                      </script>
                    `
                  }}
                />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}