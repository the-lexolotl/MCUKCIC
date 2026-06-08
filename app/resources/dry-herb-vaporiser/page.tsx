import ResourcePage from '../ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use a Dry Herb Vaporiser',
  description: 'Everything you need to know about loading, using, and getting the most from your dry herb vaporiser.',
}

export default function DryHerbVaporiser() {
  return (
    <ResourcePage
      category="Devices & equipment"
      title="How to use a dry herb vaporiser"
      intro="Everything you need to know about loading, using, and getting the most from your dry herb vaporiser."
      tocItems={[
        { href: '#what-is-it', label: 'What is a dry herb vaporiser?' },
        { href: '#getting-started', label: 'Getting started' },
        { href: '#loading', label: 'Loading your vaporiser' },
        { href: '#temperature', label: 'Temperature settings' },
        { href: '#cleaning', label: 'Cleaning and maintenance' },
      ]}
      relatedGuides={[
        { href: '/resources/how-to-use-a-grinder', label: 'How to use a grinder' },
        { href: '/resources/vape-cartridge', label: 'How to use a vape cartridge' },
        { href: '/resources/storing-your-medicine', label: 'Storing your medicine' },
      ]}
    >
      <h2 id="what-is-it">What is a dry herb vaporiser?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="getting-started">Getting started</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="loading">Loading your vaporiser</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="temperature">Temperature settings</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="cleaning">Cleaning and maintenance</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}