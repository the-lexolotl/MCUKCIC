import PolicyPage from '../../../components/PolicyPage'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'The terms and conditions governing use of the MCUK website and services.',
}

export default function Terms() {
  return (
    <PolicyPage title="Terms & conditions" lastUpdated="August 2026">
      <h2>About these terms</h2>
      <p>These terms and conditions govern your use of the MCUK website (mcukcic.co.uk) and any services provided by Medicinal Cannabis UK CIC, company number 17373828, registered in England and Wales. Our registered address is Union House, 111 New Union Street, Coventry, CV1 2NT.</p>
      <p>By using our website or services, you agree to these terms. If you do not agree, please do not use our website.</p>

      <h2>Use of our website</h2>
      <p>You may use our website for lawful purposes only. You must not use our website in any way that breaches applicable law, infringes the rights of others, or is harmful, offensive, or objectionable. You must not attempt to gain unauthorised access to our website, servers, or databases, or interfere with the security or integrity of our systems.</p>

      <h2>Medical disclaimer</h2>
      <p>Nothing on this website constitutes medical advice. All content is provided for informational and educational purposes only. You should always consult a qualified healthcare professional before making any decisions about your treatment. For our full medical disclaimer, see our <Link href="/policies/medical-disclaimer">medical disclaimer policy</Link>.</p>

      <h2>Content accuracy</h2>
      <p>We make reasonable efforts to ensure the accuracy of information on our website, but we cannot guarantee it is complete, current, or error-free. We reserve the right to change or remove content at any time without notice. Blog posts and community-submitted content represent the views of individual authors and do not necessarily reflect the views of MCUK.</p>

      <h2>Intellectual property</h2>
      <p>The MCUK name, logo, and branding are the property of Medicinal Cannabis UK CIC. You must not use our branding without our written permission. Content published on our website by MCUK is licensed under a Creative Commons Attribution-NonCommercial 4.0 International licence unless otherwise stated. You may share and adapt our content for non-commercial purposes with appropriate credit.</p>
      <p>Content submitted by guest contributors remains the intellectual property of the contributor. By submitting content to MCUK, contributors grant us a non-exclusive licence to publish, edit, and distribute that content on our website and associated channels.</p>

      <h2>Membership</h2>
      <p>Paid membership subscriptions are processed by Zeffy. By subscribing, you agree to Zeffy's terms of service in addition to these terms. Membership fees are non-refundable except where required by law. You may cancel your membership at any time and it will remain active until the end of the current billing period.</p>

      <h2>Links to third-party websites</h2>
      <p>Our website contains links to third-party websites including our social media communities on Facebook, Discord, and YouTube. We are not responsible for the content, privacy practices, or availability of these websites. Links do not constitute endorsement.</p>

      <h2>Limitation of liability</h2>
      <p>To the fullest extent permitted by law, MCUK shall not be liable for any indirect, incidental, or consequential loss or damage arising from your use of our website or services, including but not limited to any decisions made based on content published on our website. Our total liability to you shall not exceed the amount you have paid to us in the 12 months preceding any claim.</p>

      <h2>Community conduct</h2>
      <p>Use of our online community spaces is governed by our <Link href="/policies/community-standards">free speech and community standards policy</Link>. Breach of community standards may result in removal from community spaces.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the revised terms. The date at the top of this page shows when these terms were last updated.</p>

      <h2>Contact</h2>
      <p>For questions about these terms, contact us at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>.</p>
    </PolicyPage>
  )
}