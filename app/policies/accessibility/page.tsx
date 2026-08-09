import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: "MCUK's commitment to making our website accessible to everyone.",
}

export default function Accessibility() {
  return (
    <PolicyPage title="Accessibility statement" lastUpdated="August 2026">
      <h2>Our commitment</h2>
      <p>Medicinal Cannabis UK CIC is committed to making our website accessible to everyone, including people with disabilities. Many of our community members live with chronic illness, pain, or neurological conditions that affect how they use technology — accessibility is not an afterthought for us, it is a core part of how we design our services.</p>
      <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.</p>

      <h2>What we have done</h2>
      <p>We have taken the following steps to improve accessibility:</p>
      <ul>
        <li>Semantic HTML used throughout to support screen readers</li>
        <li>All images include descriptive alt text</li>
        <li>Colour contrast meets WCAG AA requirements across all pages</li>
        <li>Fonts are set in relative units to support browser text resizing</li>
        <li>The site is fully keyboard navigable</li>
        <li>ARIA labels used on interactive elements where appropriate</li>
        <li>No content flashes or animations that could trigger photosensitive conditions</li>
        <li>The site is designed to be easy on the eyes — important for users with fatigue or brain fog</li>
        <li>Fonts are self-hosted to ensure reliable loading without external dependencies</li>
      </ul>

      <h2>Known limitations</h2>
      <p>We are aware of the following limitations and are working to address them:</p>
      <ul>
        <li>Some embedded third-party content (including Zeffy payment pages) is outside our control and may not fully meet accessibility standards</li>
        <li>PDF documents, if published, may not be fully accessible — we will work to provide accessible alternatives</li>
      </ul>

      <h2>Feedback</h2>
      <p>We welcome feedback on the accessibility of our website. If you experience any barriers or have suggestions for improvement, please contact us at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>. We aim to respond within 5 working days.</p>

      <h2>Enforcement</h2>
      <p>If you are not satisfied with our response, you can contact the Equality Advisory and Support Service (EASS) at <a href="https://www.equalityadvisoryservice.com" target="_blank" rel="noopener noreferrer">equalityadvisoryservice.com</a>.</p>

      <h2>Review</h2>
      <p>This statement was prepared in August 2026 and will be reviewed annually.</p>
    </PolicyPage>
  )
}