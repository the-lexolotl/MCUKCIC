import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Speech & Community Standards',
  description: 'How MCUK approaches freedom of expression and the standards expected in our community spaces.',
}

export default function CommunityStandards() {
  return (
    <PolicyPage title="Free speech & community standards" lastUpdated="5 August 2026">
      <h2>1. Purpose</h2>
      <p>Medicinal Cannabis UK CIC (MCUK) recognises the importance of freedom of expression and the right of individuals to hold and express their own opinions, including views that others may disagree with, find challenging, or find uncomfortable.</p>
      <p>As a patient advocacy organisation, MCUK believes that open discussion, respectful debate, and the sharing of lived experiences are essential to reducing stigma, improving understanding, and advancing awareness of medicinal cannabis.</p>
      <p>However, freedom of expression is not unlimited. The right to express an opinion does not include the right to threaten, harass, discriminate against, mislead, or harm others.</p>
      <p>MCUK recognises the importance of the right to freedom of expression under Article 10 of the European Convention on Human Rights, as incorporated into UK law by the Human Rights Act 1998.</p>

      <h2>2. Freedom of Expression</h2>
      <p>MCUK recognises that freedom of expression includes the right to hold personal opinions and beliefs, share information and ideas, question, criticise, or challenge established views, discuss controversial topics, and express views that others may find offensive, upsetting, or uncomfortable.</p>
      <p>Examples of lawful expression may include criticism of government policy or healthcare systems, debate about medicinal cannabis legislation, discussion of scientific evidence and differing interpretations, peaceful campaigning, satire or criticism of public figures or organisations, and sharing personal experiences and perspectives.</p>
      <p>However, the fact that something may be lawful does not automatically mean that it is appropriate within MCUK spaces. MCUK may set reasonable standards for behaviour within its communities to ensure discussions remain constructive and safe.</p>

      <h2>3. Limits of Free Speech</h2>
      <p>Freedom of expression does not include the right to:</p>
      <ul>
        <li><strong>Threaten or intimidate</strong> — communication that threatens harm, creates fear, or deliberately intimidates another person is not acceptable</li>
        <li><strong>Harass individuals</strong> — harassment includes repeated, targeted, or aggressive behaviour that causes distress, alarm, humiliation, or fear</li>
        <li><strong>Promote hatred or discrimination</strong> — MCUK does not permit communication intended to encourage hatred, hostility, or discrimination towards individuals or groups based on protected characteristics including race, religion or belief, disability, sex, sexual orientation, gender reassignment, or other legally protected characteristics</li>
        <li><strong>Encourage illegal activity</strong> — MCUK does not permit content that encourages or instructs others to commit criminal acts</li>
        <li><strong>Spread harmful or dangerous misinformation</strong> — information that is demonstrably false, misleading, or could place patients or others at risk may be corrected, challenged, or removed</li>
        <li><strong>Defame individuals or organisations</strong> — false statements presented as fact that unfairly damage another person's reputation are not acceptable</li>
        <li><strong>Place children or vulnerable individuals at risk</strong> — any communication or content that exploits, abuses, or places children or vulnerable individuals at risk is prohibited</li>
      </ul>

      <h2>4. Protecting Lawful Discussion</h2>
      <p>MCUK will not restrict lawful opinions simply because they are unpopular, controversial, or uncomfortable. We recognise that debate is important, disagreement is not automatically harmful, offence alone does not make something unlawful, and challenging conversations can lead to positive change.</p>
      <p>We will not remove content simply because we disagree with it, it criticises MCUK, it challenges accepted opinions, or it is unpopular.</p>

      <h2>5. Content Moderation</h2>
      <p>Content may be removed where it breaks the law, breaches community rules, contains harassment or abuse, creates a safeguarding concern, shares private information, contains harmful misinformation, or is unrelated spam or disruption.</p>
      <p>Where possible, moderators will explain moderation decisions, apply rules consistently, record significant moderation actions, and retain records in accordance with MCUK's data retention policy. Moderation decisions will, wherever reasonably practicable, be proportionate, consistent, and based on the behaviour rather than the viewpoint being expressed.</p>

      <h2>6. Campaigning and Advocacy</h2>
      <p>MCUK may campaign for changes in law, policy, healthcare access, public understanding, or practice where this supports our organisational objectives. MCUK remains politically independent and will not support political parties or candidates. We focus on policies and outcomes rather than party politics.</p>

      <h2>7. Reporting Concerns</h2>
      <p>If you witness behaviour that breaches these standards, please report it to a moderator or contact us at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>. All reports are taken seriously and handled confidentially.</p>
      <p>Posts indicating an immediate risk of serious harm should be escalated in accordance with MCUK's Safeguarding Policy without delay.</p>

      <h2>8. Review</h2>
      <p>This policy will be reviewed periodically, or following an incident, change in legislation, or other significant factors.</p>
    </PolicyPage>
  )
}