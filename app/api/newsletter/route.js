import crypto from 'crypto';

export async function POST(req) {
  const { email, firstName } = await req.json();

  if (!email) {
    return Response.json({ message: 'Email address is required.' }, { status: 400 });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID = Number(process.env.BREVO_LIST_ID);

  const confirmToken = crypto.randomBytes(24).toString('hex');

  try {
    // Create or update the contact, marked as unconfirmed, with a token
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || '',
          CONFIRMED: 'false',
          CONFIRM_TOKEN: confirmToken,
        },
        listIds: [LIST_ID],
        updateEnabled: true,
      }),
    });

    if (contactRes.status !== 201 && contactRes.status !== 204) {
      const error = await contactRes.json();
      console.error('Brevo contact error:', error);
      return Response.json({ message: 'Could not subscribe at this time.' }, { status: 500 });
    }

    // Send the confirmation email via Brevo's transactional email API
    const confirmUrl = `https://mcukcic.co.uk/confirm?token=${confirmToken}&email=${encodeURIComponent(email)}`;

    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: 'MCUK CIC', email: 'hello@mcukcic.co.uk' },
        to: [{ email, name: firstName || undefined }],
        subject: 'Please confirm your subscription',
        htmlContent: buildConfirmEmailHtml(firstName, confirmUrl),
      }),
    });

    if (!emailRes.ok) {
      const error = await emailRes.json();
      console.error('Brevo email send error:', error);
      return Response.json({ message: 'Could not send confirmation email.' }, { status: 500 });
    }

    return Response.json({ message: 'Please check your inbox to confirm.' }, { status: 200 });

  } catch (err) {
    console.error('Newsletter API error:', err);
    return Response.json({ message: 'Server error.' }, { status: 500 });
  }
}

function buildConfirmEmailHtml(firstName, confirmUrl) {
  const greeting = firstName ? `Hello ${escapeHtml(firstName)},` : 'Hello,';

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin:0; padding:0; background-color:#f7f7f9; font-family: 'DM Sans', Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f7f9; padding: 40px 0;">
      <tr>
        <td align="center">
          <table width="500" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:14px; padding: 40px;">
            <tr>
              <td style="text-align:center; padding-bottom: 20px;">
                <span style="font-size: 20px; font-weight: 600; color:#2a3559;">MCUK</span>
              </td>
            </tr>
            <tr>
              <td style="text-align:center; padding-bottom: 16px;">
                <h2 style="margin:0; color:#2a3559; font-size: 24px; font-weight: 600;">${greeting}</h2>
              </td>
            </tr>
            <tr>
              <td style="text-align:center; padding-bottom: 28px;">
                <p style="margin:0; color:#4a5270; font-size: 15px; line-height: 1.6;">
                  Please confirm your subscription to the MCUK newsletter by clicking the button below.
                </p>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding-bottom: 28px;">
                <a href="${confirmUrl}" target="_blank" style="background-color:#84a38e; color:#ffffff; text-decoration:none; padding: 14px 32px; border-radius: 24px; font-weight: 600; font-size: 15px; display: inline-block;">
                  Yes, subscribe me
                </a>
              </td>
            </tr>
            <tr>
              <td style="text-align:center;">
                <p style="margin:0; color:#a0a8bc; font-size: 13px; line-height: 1.6;">
                  If you didn't request this, you can safely ignore this email — you won't be subscribed unless you click the link above.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}