import type { Metadata } from 'next'
import { DM_Sans, Lora } from 'next/font/google'
import '../styles/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  style: ['italic'],
})

export const metadata: Metadata = {
  title: {
    template: '%s — MCUK',
    default: 'MCUK — Medicinal Cannabis UK',
  },
  description: 'Patient-led support for UK prescription cannabis patients.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  )
}