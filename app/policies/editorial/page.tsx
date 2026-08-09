import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Editorial Policy',
  description: 'How MCUK reviews, edits, and publishes content on our blog and resource pages.',
}

export default function EditorialPolicy() {
  return (
    <PolicyPage title="Editorial policy" lastUpdated="August 2026">
      <h2>Our editorial principles</h2>
      <p>MCUK is committed to publishing content that is accurate, honest, and genuinely useful to prescription cannabis patients in the UK. Our editorial decisions are guided by the following principles:</p>
      <ul>
        <li><strong>Patient-first</strong> — content must serve the interests of patients above all else</li>
        <li><strong>Accuracy</strong> — factual claims must be supportable and medical information must be reviewed carefully</li>
        <li><strong>Transparency</strong> — authors and potential conflicts of interest are disclosed</li>
        <li><strong>Independence</strong> — editorial decisions are not influenced by commercial relationships</li>
        <li><strong>Accessibility</strong> — content is written in plain English and accessible to non-specialist readers</li>
      </ul>

      <h2>Types of content we publish</h2>
      <ul>
        <li><strong>Resource guides</strong> — written or reviewed by the MCUK team, covering practical topics relevant to UK cannabis patients</li>
        <li><strong>Blog posts</strong> — written by MCUK staff, guest contributors, or community members, covering news, patient stories, product reviews, and advocacy</li>
        <li><strong>FAQ content</strong> — compiled and maintained by the MCUK team based on common patient questions</li>
      </ul>

      <h2>Submission and review process</h2>
      <p>All blog posts — whether written by staff or submitted by external contributors — go through the following process before publication:</p>
      <ul>
        <li>Initial review for suitability and alignment with our editorial principles</li>
        <li>Fact-checking of any specific claims</li>
        <li>Editorial review for tone, clarity, and accessibility</li>
        <li>Legal review where content touches on legal rights, drug law, or medical claims</li>
        <li>Final approval by a senior MCUK team member</li>
      </ul>
      <p>We aim to respond to all submissions within 5 working days. We reserve the right to edit, decline, or request revisions to any submission.</p>

      <h2>What we will not publish</h2>
      <ul>
        <li>Content that constitutes medical advice or recommends specific treatments</li>
        <li>Content that encourages or facilitates illegal activity</li>
        <li>Advertorial or sponsored content that is not clearly labelled</li>
        <li>Content that is defamatory, discriminatory, or harmful</li>
        <li>Unverified claims about specific products, clinics, or individuals</li>
        <li>Content that reproduces copyrighted material without permission</li>
      </ul>

      <h2>Author disclosure</h2>
      <p>All published content will clearly attribute its author unless the author has requested anonymity. Where a contributor has a relevant conflict of interest — for example, if they work for a cannabis clinic or manufacturer — this will be disclosed in the post.</p>

      <h2>Corrections</h2>
      <p>If an error is identified in published content, we will correct it promptly and note the correction at the bottom of the relevant post. We will not silently amend content. To report an error, contact us at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>.</p>

      <h2>Commercial relationships</h2>
      <p>MCUK does not accept payment in exchange for editorial coverage. Any commercial partnerships or sponsorships will be clearly disclosed and will not influence editorial content.</p>

      <h2>Review</h2>
      <p>This policy will be reviewed annually and updated as necessary.</p>
    </PolicyPage>
  )
}