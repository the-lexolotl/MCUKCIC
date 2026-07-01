'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export default function ConfirmPage() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState('loading'); // loading | success | error
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (!token || !email) {
      setStatus('error');
      setMessage('This confirmation link looks incomplete. Please try signing up again.');
      return;
    }

    fetch(`/api/confirm?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus('success');
          setMessage('Your subscription is confirmed. Welcome to the MCUK community.');
        } else {
          setStatus('error');
          setMessage(data.message || 'We could not confirm your subscription.');
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
      });
  }, [searchParams]);

  return (
    <>
      <Nav />
      <main>
        <section className="section" style={{ minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '520px', margin: '0 auto' }}>
            {status === 'loading' && (
              <p style={{ color: '#6b7494', fontSize: '1rem' }}>Confirming your subscription…</p>
            )}

            {status === 'success' && (
              <>
                <div className="success-icon" style={{ margin: '0 auto 1.5rem' }}>&#10003;</div>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>You're subscribed</h1>
                <p style={{ color: '#6b7494', lineHeight: 1.7 }}>{message}</p>
              </>
            )}

            {status === 'error' && (
              <>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#2a3559' }}>
                  Confirmation failed
                </h1>
                <p style={{ color: '#6b7494', lineHeight: 1.7 }}>{message}</p>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}