import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Ostia Marari – Ostia Marari',
  description:
    'Discover a blend of comfort, elegance, and exceptional hospitality at Ostia Marari. Luxury stay near Nagaon Beach, Alibaug.',
  keywords: [
    'Ostia Marari',
    'Alibag resort',
    'Nagaon beach',
    'luxury villa Alibaug',
  ],

  icons: {
    icon: '/ostiamararilogo.png', 
    shortcut: '/ostiamararilogo.png',
    apple: '/ostiamararilogo.png',
  },

  openGraph: {
    title: 'Ostia Marari – Ostia Marari',
    description:
      'Discover a blend of comfort, elegance, and exceptional hospitality at Ostia Marari.',
    url: 'https://ostiamarari.com/',
    siteName: 'Ostia Marari',
    type: 'website',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}