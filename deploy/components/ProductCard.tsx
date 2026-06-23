'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'

interface Product {
  id: number
  name: string
  brand: string
  category: string
  price: number
  badge: string
  image: string
  spec: string
  inStock: boolean
}

const badgeStyles: Record<string, { bg: string; text: string }> = {
  new: { bg: '#E8F5E9', text: '#2E7D32' },
  sale: { bg: '#FFF3E0', text: '#E65100' },
  b2b: { bg: '#EDE7F6', text: '#4527A0' },
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const badge = badgeStyles[product.badge]
  const hasImage = product.image && !product.image.includes('/images/products/')

  return (
    <div className="group bg-white rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1" style={{ border: '1px solid #E8EDF5', boxShadow: '0 2px 8px rgba(13,43,94,0.06)' }}>
      <Link href="https://competitve-components.myshopify.com/collections/all" className="block">
        <div className="h-[200px] flex items-center justify-center relative flex-shrink-0 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F4FA 0%, #E8EDF5 100%)' }}>
          {product.badge && badge && (
            <div className="absolute top-3 left-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-[0.5px]" style={{ background: badge.bg, color: badge.text }}>
              {product.badge === 'b2b' ? 'B2B' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
            </div>
          )}
          {hasImage ? (
            <div className="relative w-full h-full p-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-200 group-hover:scale-105 p-4"
                unoptimized
              />
            </div>
          ) : (
            <div className="text-[64px] select-none transition-transform duration-200 group-hover:scale-110">
              🖥️
            </div>
          )}
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href="https://competitve-components.myshopify.com/collections/all" className="block flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[1.5px] mb-1.5" style={{ color: '#1976D2' }}>
            {product.brand}
          </p>
          <h3 className="text-[14px] font-bold mb-1.5 leading-[1.3]" style={{ color: '#0D2B5E' }}>{product.name}</h3>
          <p className="text-[12px] leading-[1.6] mb-4" style={{ color: '#78909C' }}>{product.spec}</p>
        </Link>
        <div className="flex justify-between items-center mt-auto pt-4" style={{ borderTop: '1px solid #EEF2F7' }}>
          <div>
            <div className="text-[20px] font-extrabold" style={{ color: '#0D2B5E' }}>£{product.price.toLocaleString()}</div>
            <span className="text-[10px]" style={{ color: '#90A4AE' }}>exc. VAT</span>
          </div>
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              brand: product.brand,
              price: product.price,
              image: product.image,
            })}
            className="px-4 py-2 text-[12px] font-bold text-white rounded-lg transition-all"
            style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}
            aria-label={`Add ${product.name} to cart`}
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  )
}
