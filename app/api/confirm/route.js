export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  const email = searchParams.get('email');

  if (!token || !email) {
    return Response.json({ success: false, message: 'Invalid confirmation link.' }, { status: 400 });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  try {
    // Fetch the contact to verify the token matches
    const getRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'api-key': BREVO_API_KEY,
      },
    });

    if (!getRes.ok) {
      return Response.json({ success: false, message: 'Contact not found.' }, { status: 404 });
    }

    const contact = await getRes.json();
    const storedToken = contact?.attributes?.CONFIRM_TOKEN;

    if (!storedToken || storedToken !== token) {
      return Response.json({ success: false, message: 'Invalid or expired confirmation link.' }, { status: 400 });
    }

    // Mark as confirmed
    const updateRes = await fetch(`https://api.brevo.com/v3/contacts/${encodeURIComponent(email)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        attributes: {
          CONFIRMED: 'true',
        },
      }),
    });

    if (!updateRes.ok) {
      const error = await updateRes.json();
      console.error('Brevo confirm update error:', error);
      return Response.json({ success: false, message: 'Could not confirm subscription.' }, { status: 500 });
    }

    return Response.json({ success: true, message: 'Subscription confirmed.' }, { status: 200 });

  } catch (err) {
    console.error('Confirm API error:', err);
    return Response.json({ success: false, message: 'Server error.' }, { status: 500 });
  }
}