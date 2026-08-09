import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Complaints Policy',
  description: 'How to raise a complaint with MCUK and what you can expect from us.',
}

export default function ComplaintsPolicy() {
  return (
    <PolicyPage title="Complaints policy" lastUpdated="4 August 2026">
      <h2>1. Purpose and Scope</h2>
      <p>Medicinal Cannabis UK CIC (MCUK) is committed to providing a safe, respectful, and supportive environment for everyone who engages with our organisation. We recognise that, despite our best efforts, there may be occasions where someone has a concern or feels dissatisfied with our services, activities, decisions, communications, or the conduct of someone representing MCUK.</p>
      <p>This policy applies to complaints from patients and community members, volunteers and moderators, staff and contractors, supporters and donors, partner organisations, and members of the public. MCUK will handle all complaints fairly, respectfully, confidentially, and without discrimination.</p>
      <p><strong>What is a complaint?</strong> A complaint is an expression of dissatisfaction about MCUK's services, decisions, actions, omissions, communications, or the behaviour of someone acting on behalf of MCUK, where the individual would like the matter investigated or resolved. General feedback, suggestions, or disagreements with organisational policy are not normally treated as complaints unless they relate to a specific concern about how MCUK has acted.</p>

      <h2>2. Immediate Safety Concerns</h2>
      <p>Where a concern relates to an immediate risk to someone's safety or wellbeing, appropriate action will be taken without delay. This may include contacting emergency services where there is an immediate threat to life or safety, following MCUK safeguarding procedures, and escalating concerns to the appropriate authority where required. The safety and wellbeing of individuals will always take priority.</p>

      <h2>3. Informal Complaints</h2>
      <p>Many concerns can be resolved quickly through open communication. Anyone with a concern is encouraged to raise it with a member of the MCUK team, where appropriate, as soon as possible. This allows us to understand the issue and attempt to resolve it promptly.</p>
      <p>Where an informal concern cannot be resolved immediately, MCUK will record relevant details including the complainant's name and contact details, the nature of the concern, what outcome the individual is seeking, relevant dates and circumstances, and details of any individuals involved. The complainant will be informed if the matter needs to be escalated for formal review.</p>

      <h2>4. Formal Complaints</h2>
      <p>Where someone wishes to make a formal complaint, they should contact the MCUK Complaints Lead or nominated Director. Complaints should be submitted in writing where possible, either by email to <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a> or by post to our registered address, and marked as Private and Confidential.</p>
      <p>To help MCUK investigate a complaint effectively, individuals should include their contact information, details of what happened (including when, where, and who was involved), why they believe the situation was unsatisfactory, and what outcome they are seeking.</p>

      <h3>Complaints that we cannot investigate</h3>
      <p>MCUK may not investigate complaints that relate solely to disagreement with MCUK's policies or campaigning position, concern organisations or individuals outside MCUK's control, have already been fully investigated unless significant new evidence is provided, or are malicious, abusive, or frivolous.</p>

      <h2>5. Investigation Process</h2>
      <p>MCUK will acknowledge receipt of a formal complaint, where possible, within 7 working days. The complaint will then be reviewed and investigated, which may include reviewing relevant records, speaking with individuals involved, requesting additional information, and seeking specialist advice where appropriate.</p>
      <p>MCUK aims to provide a written response within 14 working days of acknowledging the complaint. Where this is not possible, the complainant will receive a holding response explaining the reason for the delay, progress made, and when a response is expected.</p>
      <p>The final response will explain the findings of the investigation, any actions taken or planned, and any changes being made as a result.</p>

      <h2>6. Appeals</h2>
      <p>If a complainant remains dissatisfied with the outcome, they may request an appeal. Appeals must be submitted in writing within 28 days of receiving the complaint response and should explain why the complainant believes the outcome was incorrect, any relevant information not previously considered, and what aspect of the process they believe was unfair.</p>
      <p>The appeal will normally be reviewed by a senior MCUK representative who was not directly involved in the original decision. A final decision will normally be provided within 28 days. The outcome of the appeal will be final.</p>

      <h2>7. Wider Actions and Learning</h2>
      <p>Regardless of the outcome of a complaint, MCUK will consider whether further action is required, including updating policies or procedures, improving training, reviewing systems or processes, addressing identified risks, and reporting concerns to relevant authorities where legally required. MCUK views complaints as an opportunity to improve the organisation and strengthen the support we provide.</p>

      <h2>8. Anonymous Complaints</h2>
      <p>MCUK will accept anonymous complaints and will review any information available. However, anonymous complaints may limit our ability to fully investigate the concern, request clarification, or provide an outcome to the complainant. Where possible, individuals are encouraged to provide contact details so that MCUK can communicate throughout the process.</p>

      <h2>9. Data Protection Complaints</h2>
      <p>Anyone who believes MCUK has not handled their personal information appropriately has the right to raise a data protection complaint. MCUK will acknowledge receipt within 7 working days, investigate the concern fairly and without unnecessary delay, and provide a clear explanation of the outcome and any actions taken.</p>
      <p>If an individual remains dissatisfied after MCUK's internal process has concluded, they may escalate the matter to the Information Commissioner's Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.</p>

      <h2>10. Confidentiality</h2>
      <p>Complaints will be treated confidentially. Information relating to complaints will only be shared with individuals who need access to investigate, respond to, or manage the issue. All information will be handled in accordance with MCUK's Data Protection Policy and applicable data protection legislation.</p>

      <h2>11. Availability of this Policy</h2>
      <p>This policy is publicly available and will be provided to anyone who wishes to submit a complaint. MCUK is committed to ensuring that complaints are accessible, fairly handled, and used to improve our services and support for the medicinal cannabis community.</p>
    </PolicyPage>
  )
}