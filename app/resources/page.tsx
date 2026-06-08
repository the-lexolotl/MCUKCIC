import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { client, resourceListQuery, urlFor } from '../../lib/sanity'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Clear, honest guides written for patients, by patients. No jargon, no agenda — just the information you need.',
}

export const revalidate = 60

const categoryOrder = [
  'getting-started',
  'using-your-medicine',
  'devices-equipment',
  'legal-rights',
  'living-as-a-patient',
  'system-advocacy',
]

const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting started',
  'using-your-medicine': 'Using your medicine',
  'devices-equipment': 'Devices & equipment',
  'legal-rights': 'Legal & rights',
  'living-as-a-patient': 'Living as a patient',
  'system-advocacy': 'The system & advocacy',
}

const categoryIntros: Record<string, string> = {
  'getting-started': 'Everything you need to understand the basics and take your first steps as a patient.',
  'using-your-medicine': 'Practical guides to help you get the most from your cannabis medicine safely and effectively.',
  'devices-equipment': 'Step-by-step guides to the most common devices used by prescription cannabis patients in the UK.',
  'legal-rights': 'Understanding your rights as a prescription cannabis patient in the UK.',
  'living-as-a-patient': 'Practical guidance for day-to-day life as a prescription cannabis patient.',
  'system-advocacy': 'Understanding the UK medical cannabis system and how to advocate for change.',
}

const categoryIcons: Record<string, string> = {
  'getting-started': 'icon-green',
  'using-your-medicine': 'icon-violet',
  'devices-equipment': 'icon-orange',
  'legal-rights': 'icon-green',
  'living-as-a-patient': 'icon-violet',
  'system-advocacy': 'icon-orange',
}

export default async function Resources() {
  const resources = await client.fetch(resourceListQuery)

  const grouped = categoryOrder
    .map(cat => ({
      id: cat,
      label: categoryLabels[cat],
      intro: categoryIntros[cat],
      iconClass: categoryIcons[cat],
      items: resources.filter((r: any) => r.category === cat)
    }))
    .filter(group => group.items.length > 0)

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

        {/* NO RESOURCES STATE */}
        {grouped.length === 0 && (
          <section className="section">
            <div className="container content-narrow">
              <div className="info-box">
                <p>Our resource guides are being written and will be published shortly. In the meantime, join our <a href="https://www.facebook.com/groups/175157768142025" target="_blank" rel="noopener noreferrer">Facebook community</a> or <a href="https://discord.gg/m5HajJPPj2" target="_blank" rel="noopener noreferrer">Discord server</a> where experienced patients can help answer your questions.</p>
              </div>
            </div>
          </section>
        )}

        {/* RESOURCE CATEGORIES */}
        {grouped.map((group, index) => (
          <section
            key={group.id}
            className={`section ${index % 2 !== 0 ? 'section-tinted' : ''}`}
          >
            <div className="container">
              <div className="section-label">{group.label}</div>
              <h2>{group.label}</h2>
              <p className="section-sub">{group.intro}</p>
              <div className="resource-grid">
                {group.items.map((resource: any) => (
                  <Link
                    key={resource._id}
                    href={`/resources/${resource.slug.current}`}
                    className="resource-card"
                  >
                    <div className={`resource-icon ${group.iconClass}`}>&#9679;</div>
                    <div className="resource-body">
                      <h3>{resource.title}</h3>
                      <p>{resource.intro}</p>
                      <span className="resource-link">Read guide &rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

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