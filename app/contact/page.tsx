'use client'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'general' | 'blog'>('general')
  const [generalStatus, setGeneralStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [blogStatus, setBlogStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [subject, setSubject] = useState('General enquiry — MCUK website')

  const subjectMap: Record<string, string> = {
    'General enquiry': 'General enquiry — MCUK website',
    'Patient support': 'Patient support — MCUK website',
    'Media enquiry': 'Media enquiry — MCUK website',
    'Partnership': 'Partnership enquiry — MCUK website',
    'Volunteering': 'Volunteering enquiry — MCUK website',
  }

  async function handleGeneralSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setGeneralStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mjgdyvyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setGeneralStatus('success')
      } else {
        setGeneralStatus('error')
      }
    } catch {
      setGeneralStatus('error')
    }
  }

  async function handleBlogSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBlogStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/mjgdyvyn', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setBlogStatus('success')
      } else {
        setBlogStatus('error')
      }
    } catch {
      setBlogStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Get in touch</div>
            <h1>We&apos;re here to help</h1>
            <p className="hero-sub">Whether you have a question, need support, or want to get involved — we&apos;d love to hear from you. We aim to respond within 3 working days.</p>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section">
          <div className="container contact-layout">

            {/* LEFT: FORM */}
            <div className="contact-form-wrap">

              {/* TAB SWITCHER */}
              <div className="form-tabs">
                <button
                  className={`form-tab ${activeTab === 'general' ? 'active' : ''}`}
                  onClick={() => setActiveTab('general')}
                >
                  General enquiry
                </button>
                <button
                  className={`form-tab ${activeTab === 'blog' ? 'active' : ''}`}
                  onClick={() => setActiveTab('blog')}
                >
                  Submit a blog post
                </button>
              </div>

              {/* GENERAL ENQUIRY FORM */}
              {activeTab === 'general' && (
                <>
                  {generalStatus === 'success' ? (
                    <div className="form-success visible">
                      <div className="success-icon">&#10003;</div>
                      <h3>Message sent</h3>
                      <p>Thank you for getting in touch. We&apos;ll get back to you within 3 working days.</p>
                    </div>
                  ) : (
                    <form className="contact-form active-form" onSubmit={handleGeneralSubmit}>
                      <input type="hidden" name="_subject" value={subject} />

                      <div className="form-group">
                        <label htmlFor="name">Your name <span className="required">*</span></label>
                        <input type="text" id="name" name="name" placeholder="Full name" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">Email address <span className="required">*</span></label>
                        <input type="email" id="email" name="email" placeholder="your@email.com" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="enquiry">Type of enquiry <span className="required">*</span></label>
                        <select
                          id="enquiry"
                          name="enquiry_type"
                          required
                          onChange={e => setSubject(subjectMap[e.target.value] || 'Enquiry — MCUK website')}
                        >
                          <option value="" disabled>Please select...</option>
                          <option value="General enquiry">General enquiry</option>
                          <option value="Patient support">Patient support</option>
                          <option value="Media enquiry">Media enquiry</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Volunteering">Volunteering</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Your message <span className="required">*</span></label>
                        <textarea id="message" name="message" rows={6} placeholder="Tell us how we can help..." required />
                      </div>

                      <div className="form-group form-check">
                        <input type="checkbox" id="consent" name="consent" required />
                        <label htmlFor="consent">I consent to MCUK storing and using this information to respond to my enquiry. We will never share your details with third parties.</label>
                      </div>

                      <button type="submit" className="btn-submit" disabled={generalStatus === 'sending'}>
                        {generalStatus === 'sending' ? 'Sending...' : 'Send message'}
                      </button>

                      {generalStatus === 'error' && (
                        <p style={{color:'#c43a3a', marginTop:'0.75rem', fontSize:'0.9rem'}}>Something went wrong — please try again.</p>
                      )}
                    </form>
                  )}
                </>
              )}

              {/* BLOG SUBMISSION FORM */}
              {activeTab === 'blog' && (
                <>
                  {blogStatus === 'success' ? (
                    <div className="form-success visible">
                      <div className="success-icon">&#10003;</div>
                      <h3>Article submitted</h3>
                      <p>Thank you for your submission. Our editorial team will review it and be in touch within 5 working days.</p>
                    </div>
                  ) : (
                    <form className="contact-form active-form" onSubmit={handleBlogSubmit} encType="multipart/form-data">
                      <input type="hidden" name="_subject" value="Blog submission — MCUK website" />

                      <div className="form-info-box">
                        <p>We welcome blog posts from patients, clinicians, journalists, and advocates. All submissions are reviewed by our editorial team before publication.</p>
                      </div>

                      <div className="form-group">
                        <label htmlFor="blog_name">Your name <span className="required">*</span></label>
                        <input type="text" id="blog_name" name="name" placeholder="Full name" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="blog_email">Email address <span className="required">*</span></label>
                        <input type="email" id="blog_email" name="email" placeholder="your@email.com" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="author_type">I am a <span className="required">*</span></label>
                        <select id="author_type" name="author_type" required>
                          <option value="" disabled>Please select...</option>
                          <option value="Patient">Patient</option>
                          <option value="Clinician">Clinician</option>
                          <option value="Journalist">Journalist</option>
                          <option value="Advocate">Patient advocate</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="post_title">Post title <span className="required">*</span></label>
                        <input type="text" id="post_title" name="post_title" placeholder="What is your article called?" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="bio">Short bio <span className="required">*</span></label>
                        <textarea id="bio" name="bio" rows={3} placeholder="Tell us a little about yourself (max 100 words)" required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="article">Your article <span className="required">*</span></label>
                        <textarea id="article" name="article" rows={12} placeholder="Paste your full article here..." required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="photos">Photos <span className="optional">(optional)</span></label>
                        <input type="file" id="photos" name="photos" accept="image/*" multiple />
                        <div className="field-hint">You can attach up to 3 images. JPEG or PNG, max 5MB each.</div>
                      </div>

                      <div className="form-group form-check">
                        <input type="checkbox" id="blog_consent" name="consent" required />
                        <label htmlFor="blog_consent">I confirm this is my own original work and I consent to MCUK reviewing and potentially publishing it on the MCUK website.</label>
                      </div>

                      <button type="submit" className="btn-submit" disabled={blogStatus === 'sending'}>
                        {blogStatus === 'sending' ? 'Submitting...' : 'Submit article'}
                      </button>

                      {blogStatus === 'error' && (
                        <p style={{color:'#c43a3a', marginTop:'0.75rem', fontSize:'0.9rem'}}>Something went wrong — please try again.</p>
                      )}
                    </form>
                  )}
                </>
              )}
            </div>

            {/* RIGHT: CONTACT INFO */}
            <div className="contact-info">

              <div className="contact-info-card">
                <h4>Contact details</h4>
                <div className="contact-detail">
                  <div className="contact-detail-label">General enquiries</div>
                  <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-label">Patient support</div>
                  <a href="mailto:support@mcukcic.co.uk">support@mcukcic.co.uk</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-label">Media enquiries</div>
                  <a href="mailto:media@mcukcic.co.uk">media@mcukcic.co.uk</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-label">Partnerships</div>
                  <a href="mailto:partnerships@mcukcic.co.uk">partnerships@mcukcic.co.uk</a>
                </div>
                <div className="contact-detail">
                  <div className="contact-detail-label">Volunteering</div>
                  <a href="mailto:volunteer@mcukcic.co.uk">volunteer@mcukcic.co.uk</a>
                </div>
              </div>

              <div className="contact-info-card">
                <h4>Find us online</h4>
                <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer" className="contact-social">
                  <div className="contact-social-icon" style={{background:'#eef2fb', color:'#3b5998'}}>f</div>
                  <span>Facebook community</span>
                </a>
                <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer" className="contact-social">
                  <div className="contact-social-icon" style={{background:'#eeedfb', color:'#5865f2'}}>&#9671;</div>
                  <span>Discord server</span>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social">
                  <div className="contact-social-icon" style={{background:'#feeeed', color:'#ff0000'}}>&#9654;</div>
                  <span>YouTube channel</span>
                </a>
              </div>

              <div className="contact-info-card contact-info-card--tinted">
                <h4>Response times</h4>
                <p>We aim to respond to all enquiries within <strong>3 working days</strong>. For urgent patient support matters, please reach out via our <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer">Facebook community</a> or <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer">Discord server</a> where community members can often help sooner.</p>
                <p style={{marginTop:'0.75rem', fontSize:'0.8rem', color:'#84a38e'}}>MCUK does not provide medical advice. Always consult your prescribing clinician for medical guidance.</p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}