import ResourcePage from '../../../components/ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use Oils and Tinctures',
  description: 'A step-by-step guide to using cannabis oils and tinctures correctly and consistently.',
}

export default function OilsAndTinctures() {
  return (
    <ResourcePage
      category="Using your medicine"
      title="How to use oils and tinctures"
      intro="A step-by-step guide to using cannabis oils and tinctures correctly and consistently."
      tocItems={[
        { href: '#what-are-they', label: 'What are oils and tinctures?' },
        { href: '#how-to-use', label: 'How to use them' },
        { href: '#dosing', label: 'Dosing guidance' },
        { href: '#tips', label: 'Tips and common mistakes' },
      ]}
      relatedGuides={[
        { href: '/resources/storing-your-medicine', label: 'Storing your medicine' },
        { href: '/resources/dry-herb-vaporiser', label: 'How to use a dry herb vaporiser' },
      ]}
    >
      <h2 id="what-are-they">What are oils and tinctures?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="how-to-use">How to use them</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="dosing">Dosing guidance</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="tips">Tips and common mistakes</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}