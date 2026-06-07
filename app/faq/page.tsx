'use client'

import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    category: 'Getting started',
    id: 'getting-started',
    questions: [
      {
        q: 'What is medical cannabis?',
        a: <>
          <p>Medical cannabis refers to cannabis-based medicines that are prescribed by a licensed clinician to treat a specific medical condition. In the UK, these products are legal when prescribed and obtained through a licensed pharmacy or dispensary.</p>
          <p>Unlike recreational cannabis, prescription cannabis is produced to pharmaceutical standards, with consistent levels of cannabinoids such as THC and CBD. It comes in several forms including dried flower (for use in a vaporiser), oils, and capsules.</p>
          <p><Link href="/resources/what-is-medical-cannabis">Read our full guide to what medical cannabis is &rarr;</Link></p>
        </>
      },
      {
        q: 'Is prescription cannabis legal in the UK?',
        a: <>
          <p>Yes. Cannabis-based products for medicinal use (CBPMs) were legalised in the UK in November 2018. A specialist clinician can legally prescribe cannabis medicine for patients where other treatments have been ineffective or unsuitable.</p>
          <p>It is important to note that this only applies to cannabis obtained through a licensed clinic and pharmacy. Purchasing or growing cannabis outside of this system remains illegal regardless of your prescription status.</p>
        </>
      },
      {
        q: 'Who can get a prescription for cannabis?',
        a: <>
          <p>In the UK, cannabis can be prescribed for any condition where a specialist clinician believes it may be beneficial and where other treatments have not worked adequately. Common conditions include chronic pain, PTSD, anxiety, epilepsy, multiple sclerosis, and many others.</p>
          <p>There is no definitive list of qualifying conditions — it is down to the clinical judgement of a specialist doctor. Most prescriptions are currently issued through private clinics, as NHS prescribing remains rare.</p>
          <p><Link href="/resources/finding-a-clinic">Read our guide to finding a clinic &rarr;</Link></p>
        </>
      },
      {
        q: 'Do I need a GP referral to access medical cannabis?',
        a: <>
          <p>Not necessarily. Most private cannabis clinics in the UK accept self-referrals, meaning you can book an appointment directly without needing your GP to refer you. However, you will typically need to provide medical records showing your diagnosis and previous treatments.</p>
          <p>It is still worth speaking to your GP as they can provide supporting documentation and may be willing to co-prescribe or monitor your treatment alongside the specialist clinic.</p>
        </>
      },
    ]
  },
  {
    category: 'Prescriptions & clinics',
    id: 'prescriptions-clinics',
    questions: [
      {
        q: 'How much does a prescription cannabis cost?',
        a: <>
          <p>Costs vary depending on the clinic, the type of product prescribed, and the quantity. As a rough guide, monthly prescription costs typically range from £100 to £400 or more. Consultation fees are usually charged separately and can range from £50 to £200 for an initial appointment.</p>
          <p>These costs are one of the biggest barriers facing patients, and MCUK actively advocates for greater affordability and access.</p>
          <p><Link href="/resources/cost-of-prescription">Read our full guide to the cost of prescription cannabis &rarr;</Link></p>
        </>
      },
      {
        q: 'Can I get medical cannabis on the NHS?',
        a: <>
          <p>In theory, yes — but in practice, NHS prescribing of cannabis-based medicines remains extremely rare. The vast majority of patients access their prescription through private clinics and pay out of pocket.</p>
          <p>NHS prescribing is currently limited to a small number of conditions including certain forms of childhood epilepsy, chemotherapy-induced nausea, and muscle spasticity in MS. For most other conditions, private clinics are the only realistic route at present.</p>
        </>
      },
      {
        q: 'Can I change clinics if I\'m unhappy with my current one?',
        a: <>
          <p>Yes, you can switch clinics. Most clinics will ask for your medical records and previous prescription history. It is worth checking whether your new clinic will continue your existing prescription or require a fresh assessment.</p>
          <p>If you are having issues with your clinic, MCUK can offer guidance on your options. <Link href="/contact">Get in touch with our support team</Link> and we&apos;ll do our best to help.</p>
        </>
      },
      {
        q: 'How do I get my prescription dispensed?',
        a: <>
          <p>Once your prescription has been issued, it will typically be sent to a specialist pharmacy that is licenced to dispense cannabis-based medicines. Most clinics work with a small number of partner pharmacies and will guide you through this process.</p>
          <p>Prescriptions are usually delivered by post in discreet, secure packaging. You will need to sign for the delivery.</p>
        </>
      },
    ]
  },
  {
    category: 'Using your medicine',
    id: 'using-your-medicine',
    questions: [
      {
        q: 'How do I know what dose to take?',
        a: <>
          <p>Your prescribing clinician will provide dosing guidance as part of your prescription. The general principle for cannabis medicine is to start low and go slow — beginning with the smallest effective dose and gradually adjusting based on how you feel.</p>
          <p>Everyone responds differently to cannabis medicine, so what works for one patient may not work for another. Keeping a medication diary to track your doses, symptoms, and side effects can be very helpful.</p>
        </>
      },
      {
        q: 'What is the difference between THC and CBD?',
        a: <>
          <p>THC (tetrahydrocannabinol) and CBD (cannabidiol) are both naturally occurring compounds found in the cannabis plant, known as cannabinoids. They interact with the body&apos;s endocannabinoid system but have different effects.</p>
          <p>THC is the compound primarily responsible for the psychoactive effects of cannabis. It also has significant therapeutic properties including pain relief, appetite stimulation, and sleep support.</p>
          <p>CBD is non-psychoactive and is associated with anti-inflammatory, anti-anxiety, and neuroprotective effects. Many patients use a combination of both for maximum therapeutic benefit.</p>
        </>
      },
      {
        q: 'How should I store my cannabis medicine?',
        a: <>
          <p>Cannabis medicine should be stored in a cool, dark, dry place away from direct sunlight and heat. Most products come in airtight containers — keep them sealed when not in use to preserve potency and freshness.</p>
          <p>Always store your medicine securely and out of reach of children and others who should not have access to it. As a Schedule 2 controlled drug, you have a legal responsibility to store it appropriately.</p>
          <p><Link href="/resources/storing-your-medicine">Read our full storage guide &rarr;</Link></p>
        </>
      },
      {
        q: 'Can I use a vaporiser with my prescription flower?',
        a: <>
          <p>Yes — vaporisation is the recommended method for using prescription cannabis flower in the UK. Vaporisers heat the cannabis to a temperature that releases the active compounds without combustion, which is considered safer than smoking.</p>
          <p><Link href="/resources/dry-herb-vaporiser">Read our guide to using a dry herb vaporiser &rarr;</Link></p>
        </>
      },
    ]
  },
  {
    category: 'Legal & rights',
    id: 'legal-rights',
    questions: [
      {
        q: 'Can I drive if I use prescription cannabis?',
        a: <>
          <p>This is a complex area and one where MCUK strongly advises caution. It is illegal to drive while impaired by any substance, including prescription cannabis. The UK has a legal limit for THC in blood while driving, and roadside drug testing does not distinguish between prescribed and non-prescribed cannabis.</p>
          <p>This is an area where patient rights are currently inadequate, and MCUK actively advocates for reform.</p>
        </>
      },
      {
        q: 'Can I travel with my prescription cannabis?',
        a: <>
          <p>Travelling within the UK with your prescription cannabis is legal, provided you carry your prescription documentation with you. You should keep your medicine in its original pharmacy packaging.</p>
          <p>Travelling abroad with cannabis medicine is significantly more complex and risky. MCUK strongly advises against travelling abroad with cannabis medicine without thorough research and legal advice specific to your destination.</p>
        </>
      },
      {
        q: 'What are my rights at work as a cannabis patient?',
        a: <>
          <p>As a prescribed cannabis patient, you have rights under the Equality Act 2010 if your underlying condition qualifies as a disability. Your employer may be required to make reasonable adjustments to support you.</p>
          <p>MCUK recommends being open with your employer where possible and seeking legal advice if you face discrimination related to your prescription. <Link href="/contact">Get in touch</Link> if we can help.</p>
        </>
      },
      {
        q: 'What should I do if I am stopped by police?',
        a: <>
          <p>If you are stopped by police and have your prescription cannabis with you, remain calm and clearly explain that you hold a valid prescription. Carry your prescription documentation and pharmacy packaging at all times.</p>
          <p>If you have had a negative experience, please <Link href="/contact">share it with us</Link> — your experience helps our advocacy work.</p>
        </>
      },
    ]
  },
  {
    category: 'About MCUK',
    id: 'about-mcuk',
    questions: [
      {
        q: 'What is MCUK and what do you do?',
        a: <>
          <p>MCUK (Medicinal Cannabis UK) is a patient-led organisation in the process of registering as a Community Interest Company. We exist to support UK patients who use or are considering prescription cannabis medicine.</p>
          <p><Link href="/about">Learn more about us &rarr;</Link></p>
        </>
      },
      {
        q: 'Is MCUK free to use?',
        a: <>
          <p>Yes, completely. All of our resources, guides, and community support are free to access. We are a not-for-profit Community Interest Company — any income we generate goes directly back into supporting patients and funding our work.</p>
        </>
      },
      {
        q: 'What is C.A.L.S.?',
        a: <>
          <p>C.A.L.S. stands for Cannabis and Liaison Support Services. It is a volunteer-based patient support programme currently in development at MCUK.</p>
          <p>Once launched, trained and safeguarded MCUK volunteers will be able to accompany patients to healthcare appointments and provide practical and emotional support throughout the healthcare process.</p>
          <p>If you are interested in volunteering for C.A.L.S. once it launches, please <Link href="/contact">get in touch</Link>.</p>
        </>
      },
      {
        q: 'How can I get involved with MCUK?',
        a: <>
          <p>There are several ways to get involved. You can join our Facebook community and Discord server, volunteer your time or professional expertise, submit a blog post, or support us financially.</p>
          <p><Link href="/contact">Get in touch via our contact page</Link> and select &quot;Volunteering&quot; from the enquiry dropdown.</p>
        </>
      },
      {
        q: 'Does MCUK provide medical advice?',
        a: <>
          <p>No. MCUK is a patient support and advocacy organisation, not a medical provider. Nothing on this website or in our community spaces constitutes medical advice.</p>
          <p>We can offer peer support, signposting to resources, and help navigating the system — but for medical guidance, always consult your prescribing clinician or a qualified healthcare professional.</p>
        </>
      },
    ]
  },
]

export default function FAQ() {
  const [openItem, setOpenItem] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <>
      <Nav />
      <main>

        {/* PAGE HERO */}
        <section className="page-hero">
          <div className="container">
            <div className="section-label">FAQ</div>
            <h1>Frequently asked questions</h1>
            <p className="hero-sub">Answers to the questions we hear most often. Can&apos;t find what you&apos;re looking for? <Link href="/contact" style={{color:'#84a38e'}}>Get in touch</Link> and we&apos;ll help.</p>
          </div>
        </section>

        {/* FAQ CONTENT */}
        <section className="section">
          <div className="container faq-layout">

            {/* LEFT: QUESTIONS */}
            <div className="faq-main">
              {faqs.map(section => (
                <div className="faq-category" id={section.id} key={section.id}>
                  <div className="faq-category-label">{section.category}</div>
                  {section.questions.map((item, i) => {
                    const id = `${section.id}-${i}`
                    const isOpen = openItem === id
                    return (
                      <div className="faq-item" key={id}>
                        <button
                          className="faq-question"
                          aria-expanded={isOpen}
                          onClick={() => toggle(id)}
                        >
                          {item.q}
                          <span className="faq-icon">{isOpen ? '×' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="faq-answer open">
                            {item.a}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>

            {/* RIGHT: SIDEBAR */}
            <aside className="faq-sidebar">
              <div className="sidebar-card">
                <h4>Jump to section</h4>
                <ul className="sidebar-toc">
                  {faqs.map(section => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>{section.category}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Useful resources</h4>
                <ul className="sidebar-links">
                  <li><Link href="/resources/what-is-medical-cannabis">What is medical cannabis? &rarr;</Link></li>
                  <li><Link href="/resources/finding-a-clinic">Finding a clinic &rarr;</Link></li>
                  <li><Link href="/resources/cost-of-prescription">Cost of prescription &rarr;</Link></li>
                  <li><Link href="/resources/dry-herb-vaporiser">Using a vaporiser &rarr;</Link></li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--tinted">
                <h4>Still have questions?</h4>
                <p>Our community is full of experienced patients who may be able to help, or you can contact us directly.</p>
                <Link href="/contact" className="sidebar-btn">Contact us</Link>
                <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer" className="sidebar-btn">Ask in Facebook group</a>
              </div>
            </aside>

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}