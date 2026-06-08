import ResourcePage from '../ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use a Vape Cartridge',
  description: 'A straightforward guide to using cannabis vape cartridges safely and effectively.',
}

export default function VapeCartridge() {
  return (
    <ResourcePage
      category="Devices & equipment"
      title="How to use a vape cartridge"
      intro="A straightforward guide to using cannabis vape cartridges safely and effectively."
      tocItems={[
        { href: '#what-is-it', label: 'What is a vape cartridge?' },
        { href: '#how-to-use', label: 'How to use it' },
        { href: '#dosing', label: 'Dosing tips' },
        { href: '#storage', label: 'Storage and care' },
      ]}
      relatedGuides={[
        { href: '/resources/dry-herb-vaporiser', label: 'How to use a dry herb vaporiser' },
        { href: '/resources/storing-your-medicine', label: 'Storing your medicine' },
      ]}
    >
      <h2 id="what-is-it">What is a vape cartridge?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="how-to-use">How to use it</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="dosing">Dosing tips</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="storage">Storage and care</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}