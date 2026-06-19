'use client'

import { useState } from 'react'
import { products } from '@/lib/data'
import ProductCard from './ProductCard'

const filters = [
  { id: 'all', label: 'All products' },
  { id: 'laptop', label: 'Laptops' },
  { id: 'desktop', label: 'Desktops' },
  { id: 'server', label: 'Servers' },
  { id: 'peripheral', label: 'Peripherals' },
]

export default function ProductGrid({ initialFilter = 'all' }: { initialFilter?: string }) {
  const [active, setActive] = useState(initialFilter)
  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <section className="px-10 py-16" style={{ background: '#F8FAFC' }}>
      <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: '#1976D2' }}>Our catalogue</p>
          <h2 className="text-[28px] font-extrabold" style={{ color: '#0D2B5E' }}>Hardware for every business</h2>
        </div>
        <div className="flex gap-2 flex-wrap">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className="text-[12.5px] font-semibold px-5 py-2 rounded-full border transition-all"
              style={active === f.id
                ? { background: '#0D2B5E', color: 'white', borderColor: '#0D2B5E' }
                : { background: 'white', color: '#546E7A', borderColor: '#DDE5EF' }
              }
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
