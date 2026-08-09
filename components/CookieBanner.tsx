'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('mcuk-cookies-acknowledged')
    if (!accepted) setVisible(true)
  }, [])

  function acknowledge() {
    localStorage.setItem('mcuk-cookies-acknowledged', 'true')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie notice">
      <div className="cookie-banner-inner">
        <div className="cookie-text">
          <p>
            We use a small number of strictly necessary cookies to make this site work. We do not use tracking or advertising cookies. For full details see our{' '}
            <Link href="/policies/cookies">cookie policy</Link>.
          </p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-btn" onClick={acknowledge}>
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}