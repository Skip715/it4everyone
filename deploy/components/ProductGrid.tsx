'use client'

import { useState } from 'react'
import { products } from '@/lib/data'
import ProductCard from './ProductCard'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'laptop', label: 'Laptops' },
  { id: 'desktop', label: 'Desktops' },
  { id: 'server', label: 'Servers' },
  { id: 'peripheral', label: 'Peripherals' },
]

export default function ProductGrid({ initialFilter = 'all' }: { initialFilter?: string }) {
  const [active, setActive] = useState(initialFilter)
  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

  return (
    <section className="px-10 py-14 bg-white">
      <div className="flex justify-between items-end mb-7 flex-wrap gap-3">
        <div>
          <p className="text-[11px] font-bold text-blue tracking-[1.5px] uppercase mb-1.5">Our catalogue</p>
          <h2 className="text-[26px] font-extrabold text-navy">Hardware for every business</h2>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`text-[12.5px] font-medium px-4 py-1.5 rounded-full border transition-all ${
                active === f.id
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-slate-500 border-gray-200 hover:border-blue hover:text-blue'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4">
        {filtered.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
