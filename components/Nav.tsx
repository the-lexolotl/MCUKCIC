'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('mcuk-theme')
    if (saved === 'dark') {
      setDarkMode(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  function toggleTheme() {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('mcuk-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('mcuk-theme', 'light')
    }
  }

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
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '☀' : '☽'}
          </button>
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
        <div className="mobile-menu-bottom">
          <button
            className="theme-toggle theme-toggle--mobile"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '☀ Light mode' : '☽ Dark mode'}
          </button>
          <Link href="/contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Get support</Link>
        </div>
      </div>
    </>
  )
}