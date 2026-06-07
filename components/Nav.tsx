'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt="MCUK — Medicinal Cannabis UK"
              width={120}
              height={42}
              className="logo-img"
            />
          </Link>
          <nav className="nav-links">
            <Link href="/about">About</Link>
            <Link href="/team">Our Team</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <Link href="/contact" className="nav-cta">Get support</Link>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/team" onClick={() => setMenuOpen(false)}>Our Team</Link>
        <Link href="/resources" onClick={() => setMenuOpen(false)}>Resources</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Get support</Link>
      </div>
    </>
  )
}