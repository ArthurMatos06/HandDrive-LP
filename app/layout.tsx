import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
})

export const metadata = {
  title: "HandDrive",
  description: "Adaptação veicular para PCD",

  openGraph: {
    title: "HandDrive",
    description: "Adaptação veicular para PCD",
    url: "https://handrive.com.br",
    siteName: "HandDrive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HandDrive",
      },
    ],
    icons: {
    icon: [
      { url: '/images/logo-handdrive-2026.png', type: 'image/png' },
    ],
  },
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
}

export const viewport: Viewport = {
  themeColor: '#2a6c00',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
