import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Ostia Marari – Boutique Beach Stay | Thumpoly Beach, Alleppey',
  description:
    'Discover a blend of comfort, elegance, and exceptional hospitality at Ostia Marari. Luxury boutique beach stay near Thumpoly Beach, Alleppey, Kerala.',
  keywords: [
    'Ostia Marari',
    'Thumpoly Beach',
    'Alleppey boutique stay',
    'Marari beach resort',
    'luxury villa Kerala',
    'beachfront stay Alleppey',
    'Alappuzha beach house',
  ],

  icons: {
    icon: '/ostiamararilogo.png',
    shortcut: '/ostiamararilogo.png',
    apple: '/ostiamararilogo.png',
  },

  openGraph: {
    title: 'Ostia Marari – Boutique Beach Stay | Thumpoly Beach, Alleppey',
    description:
      'Discover a blend of comfort, elegance, and exceptional hospitality at Ostia Marari. Luxury boutique beach stay near Thumpoly Beach, Alleppey, Kerala.',
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