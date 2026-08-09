import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Medicinal Cannabis UK CIC collects, uses, and protects your personal data.',
}

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy policy" lastUpdated="3 August 2026">
      <h2>1. Introduction</h2>
      <p>Medicinal Cannabis UK CIC (MCUK) is committed to protecting and respecting your privacy. This policy explains how we collect, use, store, and protect personal data in line with UK data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>
      <p>We recognise that much of the information we handle may be sensitive, particularly given our work supporting patients. We therefore take our responsibilities seriously and aim to handle all personal data lawfully, fairly, and transparently.</p>

      <h2>2. Purpose</h2>
      <p>The purpose of this policy is to:</p>
      <ul>
        <li>Explain what personal data we collect and why</li>
        <li>Set out how we use and protect personal data</li>
        <li>Ensure compliance with legal and regulatory requirements</li>
        <li>Provide transparency to our service users, volunteers, and stakeholders</li>
      </ul>

      <h2>3. Scope</h2>
      <p>This policy applies to service users and community members, website visitors and digital platform users, volunteers, staff, and directors, and partners, supporters, and stakeholders. It covers all personal data processed by MCUK, whether collected online, in person, or through third parties.</p>

      <h2>4. Data Protection Principles</h2>
      <p>MCUK will ensure that personal data is:</p>
      <ul>
        <li>Processed lawfully, fairly, and transparently</li>
        <li>Collected for specified, explicit, and legitimate purposes</li>
        <li>Adequate, relevant, and limited to what is necessary</li>
        <li>Accurate and kept up to date</li>
        <li>Retained only for as long as necessary</li>
        <li>Kept secure using appropriate technical and organisational measures</li>
      </ul>

      <h2>5. What Data We Collect</h2>
      <p>We may collect and process the following types of personal data:</p>
      <ul>
        <li>Identity data (e.g. name, username)</li>
        <li>Contact data (e.g. email address, phone number)</li>
        <li>Technical data (e.g. IP address, browser type, website usage)</li>
        <li>Communication data (e.g. messages, enquiries, feedback)</li>
        <li>Volunteer or staff data (e.g. role information, availability)</li>
      </ul>
      <p>As an organisation supporting medicinal cannabis patients, individuals may choose to share information relating to their health or medical circumstances. This is known as special category personal data. Where we process this information, we will do so only where permitted by law and with appropriate safeguards, such as explicit consent or another lawful condition under UK GDPR.</p>

      <h2>6. How We Use Personal Data</h2>
      <p>We use personal data to provide support, information, and services; respond to enquiries and communicate with individuals; manage volunteers and organisational operations; improve our services and digital platforms; and comply with legal and regulatory obligations.</p>
      <p>We will only process personal data where we have a lawful basis to do so, including consent, legitimate interests, legal obligation, or performance of a contract.</p>

      <h2>7. Sharing Personal Data</h2>
      <p>MCUK does not sell personal data. We may share data where necessary with service providers (e.g. IT, hosting, or communication platforms), professional advisers (e.g. legal or financial), and regulators or authorities where required by law.</p>
      <p>MCUK may use carefully selected third-party service providers to deliver its services. These organisations are only given access to personal data where necessary and are required to protect it appropriately and process it in accordance with data protection law.</p>

      <h2>8. Data Security</h2>
      <p>MCUK takes appropriate measures to protect personal data, including secure systems and access controls, limiting access to authorised individuals only, use of secure platforms and encryption where appropriate, and regular review of data handling practices.</p>
      <p>Everyone working on behalf of MCUK is expected to maintain the confidentiality of personal information and only access data where necessary for their role.</p>

      <h2>9. Data Retention</h2>
      <p>We will only retain personal data for as long as necessary to fulfil the purposes for which it was collected, including legal, accounting, or reporting requirements. Retention periods will vary depending on the type of data and its purpose. Once personal data is no longer required, it will be securely deleted or anonymised.</p>

      <h2>10. Your Rights</h2>
      <p>Under UK data protection law, individuals have the right to access their personal data; request correction of inaccurate data; request deletion of their data (where applicable); restrict or object to processing; request transfer of their data (data portability); and withdraw consent at any time (where consent is relied upon).</p>
      <p>Requests can be made by contacting us using the details below. We will normally respond to requests relating to personal data within one month, in accordance with UK data protection legislation.</p>

      <h2>11. Cookies and Website Data</h2>
      <p>Our website may use cookies or similar technologies to improve user experience and understand how our services are used. Where required, users will be given clear information and choices about cookie usage. For full details, see our <a href="/policies/cookies">cookie policy</a>.</p>

      <h2>12. Breaches</h2>
      <p>In the event of a personal data breach, MCUK will assess the risk to individuals, take appropriate steps to contain and resolve the issue, notify the Information Commissioner's Office (ICO) where required, and inform affected individuals where there is a high risk to their rights and freedoms.</p>

      <h2>13. Responsibility</h2>
      <p>The Board of Directors has overall responsibility for ensuring that MCUK complies with data protection legislation. Day-to-day responsibility for implementing this policy rests with those handling personal data as part of their role. All staff and volunteers are responsible for handling personal data in line with this policy and reporting any concerns or breaches promptly.</p>

      <h2>14. Review</h2>
      <p>This policy will be reviewed at least annually, or sooner following significant organisational changes, legislative changes, or a data protection incident.</p>

      <h2>15. Contact</h2>
      <p>If you have any questions about this policy or how your data is handled, please contact Medicinal Cannabis UK CIC at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>.</p>
      <p>If you are dissatisfied with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO). We encourage you to contact us first so that we have the opportunity to resolve your concerns.</p>
    </PolicyPage>
  )
}