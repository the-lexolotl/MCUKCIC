import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safeguarding Policy',
  description: "MCUK's commitment to the safety and wellbeing of vulnerable people in our community.",
}

export default function SafeguardingPolicy() {
  return (
    <PolicyPage title="Safeguarding policy" lastUpdated="1 August 2026">
      <h2>Purpose</h2>
      <p>Our activities at Medicinal Cannabis UK CIC (MCUK) include working with individuals who may be vulnerable, including patients with chronic health conditions and those seeking support or information about medicinal cannabis. The purpose of this policy is to protect them and provide stakeholders and the public with the overarching principles that guide our approach in doing so.</p>

      <h2>Designated Safeguarding Lead</h2>
      <p>The Board of Directors will appoint a Designated Safeguarding Lead (DSL) to provide oversight of safeguarding and to lead on any incident investigation and reporting.</p>
      <p><strong>Safeguarding Lead:</strong> Lex Wolfe — Head of Digital Systems</p>

      <h2>Applicability</h2>
      <p>This policy applies to anyone working on our behalf, including our directors, trustees (where applicable), staff, contractors, and volunteers. Partner organisations will be required to have their own safeguarding procedures that must, as a minimum, meet the standards outlined in this policy.</p>

      <h2>Principles</h2>
      <p>We believe that:</p>
      <ul>
        <li>Nobody who is involved in our work should ever experience abuse, harm, neglect, or exploitation</li>
        <li>We have a responsibility to promote the welfare of all individuals we engage with, particularly those who may be vulnerable due to health conditions or personal circumstances</li>
        <li>All individuals, regardless of age, disability, gender, race, religion, sexual orientation, or socioeconomic background, have the right to equal protection from harm</li>
        <li>Some people are additionally vulnerable because of the impact of previous experiences, their level of dependency, communication needs, or health status</li>
        <li>Working in partnership with individuals, their carers, and other organisations is essential to promoting welfare and safeguarding</li>
      </ul>

      <h2>Types of Abuse</h2>
      <p>Abuse can take many forms, including physical, psychological or emotional, financial, sexual, or institutional abuse, including neglect and exploitation. If you are concerned that someone is being abused or is at risk of harm, please report it immediately using the process below.</p>

      <h2>Reporting Concerns</h2>
      <p>If a crime is in progress or someone is in immediate danger, contact the police immediately on 999.</p>
      <p>If you are a beneficiary, service user, or member of the public, raise your concern with a member of our team, who will escalate it to a senior member of Medicinal Cannabis UK CIC.</p>
      <p>If you are a staff member, volunteer, or acting on behalf of MCUK, report concerns to your supervisor or the Designated Safeguarding Lead (DSL). If you feel unable to do so, escalate the concern to a director.</p>
      <p>Safeguarding concerns will be handled sensitively and, wherever possible, kept confidential. However, confidentiality cannot be guaranteed where information must be shared to protect someone from harm or where required by law.</p>

      <h2>Responsibilities</h2>
      <h3>Directors</h3>
      <p>This safeguarding policy will be reviewed and approved by the Board of Directors annually. Directors are responsible for ensuring that safeguarding and the protection of vulnerable individuals are embedded within governance, decision-making, and organisational culture.</p>

      <h3>Everyone</h3>
      <p>All staff, volunteers, and those working on behalf of MCUK must be aware of and follow this policy, undertake any required safeguarding training, be aware of risks and signs of potential abuse or harm, and report any concerns immediately in line with this policy.</p>

      <h2>Online Safety</h2>
      <p>We will identify and manage online risks by ensuring volunteers, staff, and directors understand how to keep themselves safe online, the online services we provide are suitable for our users, personal data is protected in accordance with data protection legislation, and we clearly explain how users can report online concerns.</p>
      <p>Where we host online communities, we apply proportionate measures to prevent children from accessing harmful or age-inappropriate content, carry out risk assessments relating to harmful content, and put in place measures to mitigate identified risks.</p>

      <h2>AI Safety</h2>
      <p>We recognise the growing use of AI and are committed to ensuring our use is safe, ethical, and does not expose individuals to harm. We follow recognised best practice for responsible AI use, including transparency, accountability, and minimising risks to vulnerable individuals. We do not allow the use of AI tools for crisis or emotional support, or to provide professional advice such as medical or legal guidance.</p>

      <h2>Fundraising and Vulnerable Donors</h2>
      <p>Fundraisers must treat donors fairly, enabling them to make an informed decision, particularly those in vulnerable circumstances. Individuals under 18 or adults lacking capacity are automatically considered vulnerable. Fundraisers must not exploit a lack of knowledge, need for support, or vulnerable circumstance. If a donor cannot make an informed decision, donations must not be accepted.</p>

      <h2>Emergency Contacts</h2>
      <ul>
        <li><strong>Emergency services:</strong> 999</li>
        <li><strong>Samaritans:</strong> 116 123 (free, 24/7)</li>
        <li><strong>Crisis text line:</strong> Text SHOUT to 85258</li>
        <li><strong>NHS urgent mental health support:</strong> 111</li>
      </ul>

      <h2>Review</h2>
      <p>This policy will be reviewed periodically, or following an incident, change in legislation, or other significant factors.</p>
    </PolicyPage>
  )
}