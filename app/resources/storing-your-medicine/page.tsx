import ResourcePage from '../../../components/ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Store Your Cannabis Medicine',
  description: 'How to keep your cannabis medicine fresh, potent, and safely stored at home.',
}

export default function StoringYourMedicine() {
  return (
    <ResourcePage
      category="Using your medicine"
      title="How to store your cannabis medicine"
      intro="How to keep your medicine fresh, potent, and safely stored at home."
      tocItems={[
        { href: '#where-to-store', label: 'Where to store it' },
        { href: '#temperature', label: 'Temperature and light' },
        { href: '#security', label: 'Keeping it secure' },
        { href: '#shelf-life', label: 'Shelf life' },
      ]}
      relatedGuides={[
        { href: '/resources/oils-and-tinctures', label: 'How to use oils and tinctures' },
        { href: '/resources/dry-herb-vaporiser', label: 'How to use a dry herb vaporiser' },
      ]}
    >
      <h2 id="where-to-store">Where to store your medicine</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="temperature">Temperature and light</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="security">Keeping it secure</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="shelf-life">Shelf life</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}