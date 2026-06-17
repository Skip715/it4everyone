'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCart } from '@/lib/cart-context'
import Logo from './Logo'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/#b2b', label: 'B2B' },
  { href: '/#leasing', label: 'Leasing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { count, openCart } = useCart()

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div style={{ background: '#0D2B5E' }} className="px-10 py-2 flex justify-between items-center">
        <div className="flex gap-5">
          <a href="tel:01296816012" className="text-[11.5px] flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: '#90B8E0' }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            01296 816012 · 07518 577981
          </a>
          <a href="mailto:sraper@it4eo.co.uk" className="text-[11.5px] flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: '#90B8E0' }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            sraper@it4eo.co.uk
          </a>
        </div>
        <div className="flex gap-5">
          <span className="text-[11.5px] flex items-center gap-1.5" style={{ color: '#90B8E0' }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
            Aylesbury, Buckinghamshire
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-white px-10 h-[76px] flex items-center justify-between" style={{ borderBottom: '2px solid #EEF2F7', boxShadow: '0 2px 12px rgba(13,43,94,0.08)' }}>
        <Link href="/" aria-label="IT4Everyone home">
          <Logo size={48} />
        </Link>

        <div className="flex h-[76px]">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="flex items-center px-3.5 text-[13.5px] font-semibold border-b-[3px] transition-all whitespace-nowrap"
                style={{
                  color: active ? '#1976D2' : '#3D5577',
                  borderBottomColor: active ? '#1976D2' : 'transparent',
                }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#1976D2'; (e.target as HTMLElement).style.borderBottomColor = '#1976D2' }}
                onMouseLeave={e => { if (!active) { (e.target as HTMLElement).style.color = '#3D5577'; (e.target as HTMLElement).style.borderBottomColor = 'transparent' }}}
              >
                {label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-secondary px-4 py-2 text-sm">
            Get a quote
          </Link>
          <Link href="/products" className="btn-orange px-5 py-2.5 text-sm">
            Shop now →
          </Link>
          <button
            onClick={openCart}
            className="relative p-2 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors"
            aria-label={`Cart (${count} items)`}
          >
            <svg className="w-6 h-6" style={{ color: '#3D5577' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
