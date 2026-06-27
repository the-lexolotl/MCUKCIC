export async function POST(req) {
  const { email, firstName } = await req.json();

  if (!email) {
    return Response.json({ message: 'Email address is required.' }, { status: 400 });
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID = Number(process.env.BREVO_LIST_ID); // Your list ID as a number

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: firstName || '',
        },
        listIds: [LIST_ID],
        updateEnabled: true, // updates existing contacts rather than erroring
      }),
    });

    // 201 = created, 204 = updated (existing contact)
    if (res.status === 201 || res.status === 204) {
      return Response.json({ message: 'Subscribed successfully.' }, { status: 200 });
    }

    const error = await res.json();
    console.error('Brevo error:', error);
    return Response.json({ message: 'Could not subscribe at this time.' }, { status: 500 });

  } catch (err) {
    console.error('Newsletter API error:', err);
    return Response.json({ message: 'Server error.' }, { status: 500 });
  }
}