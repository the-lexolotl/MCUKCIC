import ResourcePage from '../ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Cost of Prescription Cannabis',
  description: 'What to expect financially, why prescription cannabis costs what it does, and what help might be available.',
}

export default function CostOfPrescription() {
  return (
    <ResourcePage
      category="Getting started"
      title="The cost of prescription cannabis"
      intro="What to expect financially, why prescription cannabis costs what it does, and what help might be available to patients."
      tocItems={[
        { href: '#how-much', label: 'How much does it cost?' },
        { href: '#why-so-expensive', label: 'Why is it so expensive?' },
        { href: '#help-available', label: 'What help is available?' },
        { href: '#advocacy', label: 'Our position' },
      ]}
      relatedGuides={[
        { href: '/resources/finding-a-clinic', label: 'Finding a clinic' },
        { href: '/resources/what-is-medical-cannabis', label: 'What is medical cannabis?' },
      ]}
    >
      <h2 id="how-much">How much does it cost?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="why-so-expensive">Why is it so expensive?</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="help-available">What help is available?</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="advocacy">Our position</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}