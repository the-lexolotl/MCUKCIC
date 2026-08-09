import type { Metadata } from 'next'
import '../styles/globals.css'
import CookieBanner from '../components/CookieBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://mcukcic.co.uk'),
  title: {
    template: '%s — MCUK',
    default: 'MCUK — Medicinal Cannabis UK',
  },
  description: 'Patient-led support for UK prescription cannabis patients. Guidance, resources, community, and advocacy — free to access.',
  keywords: [
    'medical cannabis UK',
    'prescription cannabis',
    'medicinal cannabis',
    'cannabis patients UK',
    'cannabis medicine',
    'CBPM',
    'cannabis prescription UK',
    'medical cannabis support',
  ],
  authors: [{ name: 'Medicinal Cannabis UK CIC' }],
  creator: 'Medicinal Cannabis UK CIC',
  publisher: 'Medicinal Cannabis UK CIC',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://mcukcic.co.uk',
    siteName: 'MCUK — Medicinal Cannabis UK',
    title: 'MCUK — Medicinal Cannabis UK',
    description: 'Patient-led support for UK prescription cannabis patients. Guidance, resources, community, and advocacy — free to access.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MCUK — Medicinal Cannabis UK',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCUK — Medicinal Cannabis UK',
    description: 'Patient-led support for UK prescription cannabis patients.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}