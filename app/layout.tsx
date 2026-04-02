import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chytrý Jídelníček',
  description: 'AISS-OS v.2026 - Inteligentní systém pro správu jídelníčku',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        {/* Přímé vstříknutí Tailwindu pro okamžitou opravu náhledu */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  ubuntu: { orange: '#e95420', aubergine: '#772953', dark: '#300a24' }
                },
                borderRadius: { 'apple': '2.5rem' }
              }
            }
          }
        `}} />
      </head>
      <body className={`${inter.className} bg-[#300a24] antialiased`}>{children}</body>
    </html>
  )
}
