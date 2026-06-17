import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart-context'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'IT4Everyone Ltd — Enterprise Hardware, Any Scale',
  description: 'UK independent B2B IT distributor specialising in Dell, HP and Lenovo hardware. Custom procurement, leasing, network installation and certified data wiping.',
  keywords: 'Dell distributor UK, enterprise hardware, B2B IT procurement, HP Lenovo laptops, server supply, IT leasing, data wiping',
  openGraph: {
    title: 'IT4Everyone Ltd — Enterprise Hardware, Any Scale',
    description: 'UK independent B2B IT distributor. Dell, HP, Lenovo and more.',
    url: 'https://it4eo.co.uk',
    siteName: 'IT4Everyone Ltd',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
