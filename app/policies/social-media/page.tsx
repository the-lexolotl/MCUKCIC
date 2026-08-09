import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Policy',
  description: 'MCUK\'s approach to social media use and the standards expected of those representing the organisation online.',
}

export default function SocialMediaPolicy() {
  return (
    <PolicyPage title="Social media policy" lastUpdated="4 August 2026">
      <h2>1. Purpose</h2>
      <p>Medicinal Cannabis UK CIC (MCUK) uses social media to engage with patients, families, supporters, healthcare professionals, volunteers, and the wider community. Social media provides an important opportunity to share information, reduce stigma, promote patient advocacy, support community discussion, raise awareness of medicinal cannabis issues, and engage with policymakers and the public.</p>
      <p>However, social media communication is subject to legal responsibilities and can have a significant impact on MCUK's reputation and the people we support. This policy provides guidance on appropriate social media use and sets out expectations for anyone representing or engaging with MCUK online.</p>

      <h2>2. Scope</h2>
      <p>This policy applies to directors, staff, volunteers, community moderators, social media administrators, contributors, and anyone representing MCUK online. It covers MCUK-managed social media accounts, community groups and forums, public comments and discussions, and personal accounts where individuals identify themselves as connected with MCUK.</p>

      <h2>3. Legal Responsibilities</h2>
      <p>Social media activity is subject to UK law. Individuals may be personally responsible for content they publish, share, or endorse. Social media content may breach the law if it involves harassment, threatening or menacing behaviour, grossly offensive communications, defamation, data protection breaches, copyright infringement, or illegal content.</p>

      <h2>4. Medical Advice</h2>
      <p>MCUK provides information, education, peer support, and advocacy. Social media content should not be interpreted as personalised medical advice. Individuals should consult an appropriately qualified healthcare professional regarding their own medical treatment.</p>

      <h2>5. Online Safety</h2>
      <p>Where MCUK operates online communities where individuals can interact, we will take proportionate steps to maintain a safe environment. MCUK will maintain clear community rules and expectations, provide accessible methods for reporting concerns, monitor content appropriately, remove illegal or harmful content where necessary, and take action against accounts or users who repeatedly breach community standards.</p>

      <h2>6. Copyright and Use of Content</h2>
      <p>MCUK respects copyright and intellectual property rights. Before using content created by others — including images, videos, articles, graphics, or written material — MCUK will ensure appropriate permission, licensing, or legal exemption exists. MCUK will not use random images found online without checking ownership or licensing. Where unsure, individuals should seek advice before publishing.</p>

      <h2>7. Official Spokespeople</h2>
      <p>Only authorised MCUK representatives may speak officially on behalf of the organisation. If you are unsure whether you are authorised to speak on behalf of MCUK, assume that you are not. Individuals representing MCUK must follow MCUK messaging and values, avoid making unsupported claims, ensure factual claims are accurate and supported by reputable sources, maintain professionalism, and seek advice where uncertain.</p>

      <h2>8. Personal Social Media Use</h2>
      <p>MCUK respects that staff, volunteers, and supporters have personal opinions and personal social media accounts. Individuals are free to express lawful personal views, including views that differ from MCUK's position. However, personal opinions must not be presented as MCUK statements, individuals should not imply they represent MCUK without permission, and MCUK branding or logos should not be used to suggest endorsement of personal views.</p>

      <h2>9. Communication Standards</h2>
      <p>When communicating online on behalf of MCUK, individuals should protect privacy by not sharing personal information about others without appropriate consent, protect security by not sharing information that could create risks, and be clear and authentic. MCUK communication should be human, accessible, respectful, professional, and compassionate.</p>
      <p>Before posting, consider: Is this accurate? Is this respectful? Could this harm someone? Could this be misunderstood? Would I be comfortable seeing this publicly?</p>

      <h2>10. Disagreement and Debate</h2>
      <p>MCUK encourages respectful discussion and recognises that disagreement is a normal part of advocacy and public discussion. When responding to disagreement, address the issue not the individual, remain respectful, avoid personal attacks, provide evidence where possible, and focus on solutions. Constructive criticism helps organisations improve.</p>

      <h2>11. Abusive Behaviour</h2>
      <p>MCUK recognises the difference between a person expressing frustration, criticism, or disagreement, and a person intentionally attempting to cause harm or disruption. Not all angry comments are abusive — patients and families may express distress due to difficult experiences.</p>
      <p>MCUK may take action where behaviour includes personal attacks, threats, hate speech, harassment, repeated disruption, or deliberate misinformation intended to cause harm. Responses may include providing clarification, restricting interaction, removing content, blocking accounts, or reporting serious concerns.</p>

      <h2>12. Political Neutrality</h2>
      <p>MCUK remains politically independent. We may advocate for policy change and engage with government, respond to consultations, and highlight barriers affecting patients. We will not support political parties or candidates, and individuals representing MCUK must not use organisational platforms to promote personal political positions unrelated to MCUK's aims.</p>

      <h2>13. AI and Synthetic Content</h2>
      <p>MCUK will not knowingly share or promote misleading AI-generated content. We will not knowingly promote deepfakes, fabricated patient stories, fake medical information, or misleading synthetic content. Where MCUK uses AI-generated or digitally altered imagery, we will consider whether disclosure is necessary to avoid misleading audiences.</p>

      <h2>14. Review</h2>
      <p>This policy will be reviewed periodically, or following an incident, change in legislation, or other significant factors.</p>
    </PolicyPage>
  )
}