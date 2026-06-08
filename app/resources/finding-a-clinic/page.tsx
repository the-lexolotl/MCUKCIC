import ResourcePage from '../ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finding a Clinic',
  description: 'What to look for in a cannabis clinic, questions to ask, and the difference between private and NHS routes.',
}

export default function FindingAClinic() {
  return (
    <ResourcePage
      category="Getting started"
      title="Finding a clinic"
      intro="What to look for in a cannabis clinic, questions to ask, and understanding the difference between private and NHS routes."
      tocItems={[
        { href: '#nhs-vs-private', label: 'NHS vs private' },
        { href: '#what-to-look-for', label: 'What to look for' },
        { href: '#questions-to-ask', label: 'Questions to ask' },
        { href: '#first-appointment', label: 'Your first appointment' },
      ]}
      relatedGuides={[
        { href: '/resources/what-is-medical-cannabis', label: 'What is medical cannabis?' },
        { href: '/resources/cost-of-prescription', label: 'Cost of prescription' },
      ]}
    >
      <h2 id="nhs-vs-private">NHS vs private</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="what-to-look-for">What to look for in a clinic</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="questions-to-ask">Questions to ask</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="first-appointment">Your first appointment</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}