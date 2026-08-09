import PolicyPage from '../../../components/PolicyPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How MCUK uses cookies and similar technologies on our website.',
}

export default function CookiePolicy() {
  return (
    <PolicyPage title="Cookie policy" lastUpdated="August 2026">
      <h2>What are cookies?</h2>
      <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work, or to work more efficiently, and to provide information to the website owner.</p>
      <p>This policy explains what cookies are used on the MCUK website (mcukcic.co.uk), why we use them, and what your rights are in relation to them.</p>

      <h2>Our approach to cookies</h2>
      <p>We have designed our website to be as privacy-friendly as possible. We do not use advertising cookies, tracking pixels, or analytics tools that monitor your behaviour across the web. Our cookie use is minimal and limited to what is necessary for the site to function correctly. Our fonts (DM Sans and Lora) are self-hosted on our own servers and do not make any requests to Google or other third parties.</p>

      <h2>Cookies we use</h2>
      <h3>Strictly necessary cookies</h3>
      <p>These cookies are essential for the website to function. They do not track you or store any personally identifiable information and cannot be switched off.</p>
      <ul>
        <li><strong>Session cookies</strong> — temporary cookies that expire when you close your browser, used to maintain your session as you navigate between pages</li>
        <li><strong>Cookie acknowledgement</strong> — a cookie that records when you have dismissed our cookie notice, so it does not appear on every page</li>
        <li><strong>Formspree</strong> — when you submit a form on our website, Formspree (our contact form provider) may set a cookie to prevent spam and verify that the submission is genuine</li>
      </ul>

      <h3>Third-party cookies</h3>
      <p>When you click through to make a payment or donation via Zeffy (our payment and membership platform), you will be directed to Zeffy's website where their own cookie and privacy policies apply. We recommend reviewing <a href="https://www.zeffy.com/en-GB/privacy-policy" target="_blank" rel="noopener noreferrer">Zeffy's privacy policy</a> for full details.</p>

      <h2>What we do not use</h2>
      <p>We do not currently use any of the following on our website:</p>
      <ul>
        <li>Google Analytics or any other website analytics tools</li>
        <li>Facebook Pixel or any social media tracking</li>
        <li>Advertising or retargeting cookies</li>
        <li>Any third-party tracking or profiling tools</li>
      </ul>

      <h2>Your rights</h2>
      <p>Because we only use strictly necessary cookies, we are not legally required to obtain your consent for them under UK PECR. However, we believe in being transparent about our practices.</p>
      <p>You can control and delete cookies through your browser settings at any time. Please note that blocking strictly necessary cookies may affect the functionality of the website. For guidance on managing cookies in your browser, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">aboutcookies.org</a>.</p>

      <h2>Changes to this policy</h2>
      <p>We will update this policy if we introduce new cookies or technologies to our website. The date at the top of this page shows when it was last updated.</p>

      <h2>Contact us</h2>
      <p>If you have any questions about our use of cookies, please contact us at <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a>.</p>
    </PolicyPage>
  )
}