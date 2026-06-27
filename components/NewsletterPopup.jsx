'use client';

import { useState, useEffect, useCallback } from 'react';

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      sessionStorage.setItem('mcuk_newsletter_dismissed', '1');
    } catch {
      // sessionStorage unavailable (private browsing etc) — fail silently
    }
  }, []);

  useEffect(() => {
    let alreadyDismissed = false;
    try {
      alreadyDismissed = sessionStorage.getItem('mcuk_newsletter_dismissed') === '1';
    } catch {
      // ignore
    }

    if (alreadyDismissed) return;

    const timer = setTimeout(() => setVisible(true), 9000);
    return () => clearTimeout(timer);
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [visible, dismiss]);

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
        setMessage('Thank you! Please check your inbox to confirm.');
        try {
          sessionStorage.setItem('mcuk_newsletter_dismissed', '1');
        } catch {
          // ignore
        }
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to connect. Please try again later.');
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-popup-title"
      onClick={dismiss}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(42, 53, 89, 0.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#f7f7f9',
          borderRadius: '18px',
          padding: '2.5rem',
          maxWidth: '440px',
          width: '100%',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(42, 53, 89, 0.25)',
        }}
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.4rem',
            color: '#6b7494',
            cursor: 'pointer',
            lineHeight: 1,
            padding: '0.25rem',
          }}
        >
          ×
        </button>

        {status === 'success' ? (
          <>
            <h2
              id="newsletter-popup-title"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#2a3559',
                fontSize: '1.3rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
              }}
            >
              You're on the list
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", color: '#6b7494', lineHeight: 1.6 }}>
              {message}
            </p>
          </>
        ) : (
          <>
            <div
              style={{
                display: 'inline-block',
                background: '#eaf0ec',
                color: '#84a38e',
                fontSize: '0.78rem',
                fontWeight: 500,
                padding: '4px 14px',
                borderRadius: '20px',
                marginBottom: '1rem',
                letterSpacing: '0.3px',
              }}
            >
              Stay connected
            </div>

            <h2
              id="newsletter-popup-title"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#2a3559',
                fontSize: '1.4rem',
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: '0.6rem',
              }}
            >
              Join the MCUK community
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: '#6b7494',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                marginBottom: '1.5rem',
              }}
            >
              Get patient guides, resources, and community updates in your inbox. No spam, unsubscribe anytime.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name"
                aria-label="First name"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1.5px solid #c8d5cb',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  color: '#2a3559',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                aria-label="Email address"
                style={{
                  width: '100%',
                  padding: '0.8rem 1rem',
                  borderRadius: '8px',
                  border: '1.5px solid #c8d5cb',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.95rem',
                  color: '#2a3559',
                  backgroundColor: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />

              {status === 'error' && (
                <p style={{ color: '#c0392b', fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', margin: 0 }}>
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
                  borderRadius: '24px',
                  padding: '0.8rem 1.5rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
              </button>

              <button
                type="button"
                onClick={dismiss}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#b0b8cc',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  padding: '0.25rem',
                }}
              >
                No thanks
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}