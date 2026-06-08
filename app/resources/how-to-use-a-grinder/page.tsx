import ResourcePage from '../ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use a Grinder',
  description: 'How to grind your cannabis flower correctly for the best results from your vaporiser.',
}

export default function HowToUseAGrinder() {
  return (
    <ResourcePage
      category="Devices & equipment"
      title="How to use a grinder"
      intro="How to grind your cannabis flower correctly for the best results from your vaporiser."
      tocItems={[
        { href: '#what-is-it', label: 'What is a grinder?' },
        { href: '#how-to-grind', label: 'How to grind' },
        { href: '#consistency', label: 'Getting the right consistency' },
        { href: '#cleaning', label: 'Cleaning your grinder' },
      ]}
      relatedGuides={[
        { href: '/resources/dry-herb-vaporiser', label: 'How to use a dry herb vaporiser' },
        { href: '/resources/storing-your-medicine', label: 'Storing your medicine' },
      ]}
    >
      <h2 id="what-is-it">What is a grinder?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="how-to-grind">How to grind</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="consistency">Getting the right consistency</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="cleaning">Cleaning your grinder</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}