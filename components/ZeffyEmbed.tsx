'use client'

import { useEffect } from 'react'

export default function ZeffyEmbed() {
  useEffect(() => {
    // Load Zeffy embed script
    const script = document.createElement('script')
    script.src = 'https://www.zeffy.com/embed/v2/zeffy-embed.js'
    script.async = true
    script.onerror = () => {
      // Fallback — show iframe directly if script fails
      const fallbacks = document.querySelectorAll('[data-zeffy-embed-fallback]')
      fallbacks.forEach((el) => {
        const element = el as HTMLElement
        element.style.display = 'block'
        const iframes = element.querySelectorAll('iframe[data-zeffy-embed-src]')
        iframes.forEach((iframe) => {
          const f = iframe as HTMLIFrameElement
          const src = f.getAttribute('data-zeffy-embed-src')
          if (src) f.src = src
        })
      })
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existing = document.querySelector('script[src="https://www.zeffy.com/embed/v2/zeffy-embed.js"]')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div>
      <div
        data-zeffy-embed
        data-form-url="/embed/donation-form/support-our-team-8"
      />
      <div
        data-zeffy-embed-fallback
        style={{ display: 'none' }}
      >
        <div style={{ position: 'relative', overflow: 'hidden', height: '450px', width: '100%' }}>
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: 'absolute',
              border: '0',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              width: '100%',
              height: '100%'
            }}
            data-zeffy-embed-src="https://www.zeffy.com/embed/donation-form/support-our-team-8"
            allow="payment"
          />
        </div>
      </div>
    </div>
  )
}