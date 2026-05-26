import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waveforce Studio | 3D Game Art Outsourcing',
  description:
    'Premium 3D game art outsourcing studio. Create stunning 3D characters, environments, and assets for your indie games. Founded by industry veterans.',
  generator: 'v0.app',

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],

    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">

      <body
        className="font-sans antialiased bg-background text-foreground relative min-h-screen overflow-x-hidden"
        style={{ zIndex: 1 }}
      >

        {/* BowNow Tracking */}
        <Script
          id="bownow-tracking"
          strategy="afterInteractive"
          src="https://contents.bownow.jp/js/UTC_8d7f93f3a4d5c3e2e101/trace.js"
          charSet="utf-8"
        />

        <div className="relative z-10">
          {children}
        </div>

        {process.env.NODE_ENV === 'production' && <Analytics />}

      </body>
    </html>
  )
}