import ResourcePage from '../../../components/ResourcePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What is Medical Cannabis?',
  description: 'A plain English explainer for anyone new to cannabis medicine or considering it as a treatment option in the UK.',
}

export default function WhatIsMedicalCannabis() {
  return (
    <ResourcePage
      category="Getting started"
      title="What is medical cannabis?"
      intro="A plain English explainer for anyone who is new to cannabis medicine or considering it as a treatment option in the UK."
      tocItems={[
        { href: '#what-is-it', label: 'What is it?' },
        { href: '#is-it-legal', label: 'Is it legal in the UK?' },
        { href: '#what-conditions', label: 'What conditions does it treat?' },
        { href: '#forms', label: 'What forms does it come in?' },
      ]}
      relatedGuides={[
        { href: '/resources/finding-a-clinic', label: 'Finding a clinic' },
        { href: '/resources/cost-of-prescription', label: 'Cost of prescription' },
        { href: '/resources/storing-your-medicine', label: 'Storing your medicine' },
      ]}
    >
      <h2 id="what-is-it">What is medical cannabis?</h2>
      <p>This guide is being written by the MCUK team and will be published shortly. Check back soon, or <a href="/contact">get in touch</a> if you have a specific question we can help with in the meantime.</p>

      <h2 id="is-it-legal">Is it legal in the UK?</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="what-conditions">What conditions does it treat?</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>

      <h2 id="forms">What forms does it come in?</h2>
      <p>Placeholder — your team will replace this content with the full guide.</p>
    </ResourcePage>
  )
}