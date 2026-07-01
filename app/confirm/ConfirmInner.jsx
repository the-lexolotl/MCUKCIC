'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ConfirmInner() {
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
          setMessage(data.message || 'We could not confirm your subscription. The link may have already been used or expired.');
        }
      })
      .catch(() => {
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
      });
  }, [searchParams]);

  if (status === 'loading') {
    return (
      <p style={{ color: '#6b7494', fontSize: '1rem' }}>Confirming your subscription…</p>
    );
  }

  if (status === 'success') {
    return (
      <>
        <div style={{
          width: '52px',
          height: '52px',
          background: '#eaf0ec',
          color: '#84a38e',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.4rem',
          margin: '0 auto 1.5rem',
        }}>
          ✓
        </div>
        <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#2a3559' }}>
          You're subscribed
        </h1>
        <p style={{ color: '#6b7494', lineHeight: 1.7, marginBottom: '2rem' }}>
          {message}
        </p>
        <Link href="/" className="btn-primary" style={{ display: 'inline-block' }}>
          Back to home
        </Link>
      </>
    );
  }

  return (
    <>
      <div style={{
        width: '52px',
        height: '52px',
        background: '#fdf3eb',
        color: '#e3a671',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.4rem',
        margin: '0 auto 1.5rem',
      }}>
        !
      </div>
      <h1 style={{ fontSize: '1.8rem', marginBottom: '0.75rem', color: '#2a3559' }}>
        Confirmation failed
      </h1>
      <p style={{ color: '#6b7494', lineHeight: 1.7, marginBottom: '2rem' }}>
        {message}
      </p>
      <Link href="/" className="btn-secondary" style={{ display: 'inline-block' }}>
        Back to home
      </Link>
    </>
  );
}