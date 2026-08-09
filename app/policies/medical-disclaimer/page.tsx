import PolicyPage from '../../../components/PolicyPage'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medical Disclaimer',
  description: 'Important information about the nature of content on the MCUK website.',
}

export default function MedicalDisclaimer() {
  return (
    <PolicyPage title="Medical disclaimer" lastUpdated="August 2026">
      <h2>Important notice</h2>
      <p>The content published on the MCUK website (mcukcic.co.uk), including all resource guides, blog posts, FAQ answers, and community discussions, is provided for informational and educational purposes only.</p>
      <p><strong>Nothing on this website constitutes medical advice, diagnosis, or treatment.</strong></p>

      <h2>Always consult a clinician</h2>
      <p>Cannabis-based medicines are prescription-only products in the United Kingdom. Any decisions about your treatment — including starting, stopping, or changing your prescription — must be made in consultation with a qualified healthcare professional. If you have questions about your specific prescription, symptoms, or treatment plan, please contact your prescribing clinic directly.</p>

      <h2>Patient experiences</h2>
      <p>Content on this site may include personal accounts and experiences shared by patients. These are individual experiences and should not be taken as representative of what you will experience. Cannabis medicine affects people differently, and what works for one patient may not be appropriate for another.</p>

      <h2>Information currency</h2>
      <p>The UK medical cannabis landscape is evolving rapidly. While we make every effort to ensure our content is accurate and up to date, we cannot guarantee that all information reflects the most current clinical guidance, legal position, or product availability. Always verify important information with your clinician or a qualified professional.</p>

      <h2>Emergencies</h2>
      <p>If you are experiencing a medical emergency, call 999 immediately. If you are in mental health crisis, contact Samaritans on 116 123 (free, 24/7) or text SHOUT to 85258.</p>

      <h2>No professional relationship</h2>
      <p>Using this website or engaging with MCUK's services does not create a patient-clinician relationship between you and MCUK or any of its staff, volunteers, or contributors.</p>

      <h2>Limitation of liability</h2>
      <p>MCUK accepts no liability for any loss, harm, or damage arising from reliance on the information published on this website. See our <Link href="/policies/terms">terms and conditions</Link> for full details.</p>
    </PolicyPage>
  )
}