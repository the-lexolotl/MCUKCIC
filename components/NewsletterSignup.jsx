'use client';

import { useState } from 'react';

export default function NewsletterSignup({ variant = 'card' }) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const isCompact = variant === 'compact';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('Thanks! Please check your inbox to confirm.');
        setEmail('');
        setFirstName('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to connect. Please try again later.');
    }
  };

  // ---------- COMPACT (footer) VARIANT ----------
  if (isCompact) {
    return (
      <div>
        <h5 style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#b0b8cc',
          fontSize: '0.95rem',
          fontWeight: 600,
          marginBottom: '0.6rem',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
        }}>
          Stay updated
        </h5>

        {status === 'success' ? (
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            color: '#b8d4c0',
            fontSize: '0.9rem',
            lineHeight: 1.5,
          }}>
            {message}
          </p>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              aria-label="First name"
              style={compactInputStyle}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              aria-label="Email address"
              style={compactInputStyle}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              style={{
                backgroundColor: status === 'loading' ? '#6b8a76' : '#84a38e',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.6rem 1rem',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              }}
            >
              {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>

            {status === 'error' && (
              <p style={{ color: '#e3a671', fontFamily: "'DM Sans', sans-serif", fontSize: '0.8rem' }}>
                {message}
              </p>
            )}

            <p style={{
              fontSize: '0.72rem',
              color: '#a8b3c2',
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.5,
              marginTop: '0.2rem',
            }}>
              No spam. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    );
  }

  // ---------- CARD (homepage / page section) VARIANT ----------
  return (
    <section style={{
      backgroundColor: '#f0f4f1',
      borderRadius: '16px',
      padding: '2.5rem',
      maxWidth: '560px',
      margin: '0 auto',
    }}>
      <h2 style={{
        fontFamily: "'DM Sans', sans-serif",
        color: '#2a3559',
        fontSize: '1.5rem',
        fontWeight: 600,
        marginBottom: '0.5rem',
      }}>
        Stay in the loop
      </h2>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        color: '#4a5568',
        marginBottom: '1.5rem',
        lineHeight: 1.6,
      }}>
        Get updates on resources, guidance, and community news — straight to your inbox. No spam, ever.
      </p>

      {status === 'success' ? (
        <div style={{
          backgroundColor: '#d4e8da',
          border: '1px solid #84a38e',
          borderRadius: '10px',
          padding: '1rem 1.25rem',
          color: '#2d5a3d',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label htmlFor="firstName" style={labelStyle}>First name (optional)</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Your first name"
              style={inputStyle}
            />
          </div>

          <div>
            <label htmlFor="email" style={labelStyle}>Email address <span style={{ color: '#e3a671' }}>*</span></label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </div>

          {status === 'error' && (
            <p style={{ color: '#c0392b', fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem' }}>
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              backgroundColor: status === 'loading' ? '#b8c4ba' : '#84a38e',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '0.85rem 1.5rem',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>

          <p style={{
            fontSize: '0.78rem',
            color: '#718096',
            fontFamily: "'DM Sans', sans-serif",
            lineHeight: 1.5,
          }}>
            By subscribing, you agree to receive emails from MCUK. You can unsubscribe at any time.
            We handle your data in accordance with our{' '}
            <a href="/privacy" style={{ color: '#75628f' }}>Privacy Policy</a>.
          </p>
        </form>
      )}
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.9rem',
  fontWeight: 500,
  color: '#2a3559',
  marginBottom: '0.4rem',
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1.5px solid #c8d5cb',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '1rem',
  color: '#2a3559',
  backgroundColor: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
};

const compactInputStyle = {
  width: '100%',
  padding: '0.6rem 0.85rem',
  borderRadius: '8px',
  border: '1px solid #4a5a78',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: '0.9rem',
  color: '#2a3559',
  backgroundColor: '#ffffff',
  outline: 'none',
  boxSizing: 'border-box',
};