'use client'

import Link from 'next/link'
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

const brandColors: Record<string, string> = {
  Dell: 'text-blue-mid',
  HP: 'text-blue-mid',
  Lenovo: 'text-blue-mid',
}

const badgeStyles: Record<string, string> = {
  new: 'bg-green-50 text-green-800',
  sale: 'bg-orange-50 text-orange-700',
  b2b: 'bg-purple-50 text-purple-800',
}

const productIcons: Record<string, string> = {
  laptop: '💻',
  desktop: '🖥️',
  server: '🗄️',
  peripheral: '🖱️',
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="product-card bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col transition-all duration-150 cursor-pointer">
      <Link href={`/products/${product.id}`} className="block">
        {/* Image area */}
        <div className="h-[148px] bg-pale flex items-center justify-center relative flex-shrink-0">
          {product.badge && (
            <div className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-1 rounded-xl uppercase tracking-[0.4px] ${badgeStyles[product.badge] || ''}`}>
              {product.badge === 'b2b' ? 'B2B' : product.badge.charAt(0).toUpperCase() + product.badge.slice(1)}
            </div>
          )}
          {/* Placeholder — swap for <Image> when product photos are uploaded */}
          <div className="text-[60px] select-none opacity-60">
            {productIcons[product.category] || '📦'}
          </div>
          <div className="absolute bottom-2 right-2 text-[10px] text-sky font-semibold opacity-60">
            [Add product image]
          </div>
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={`/products/${product.id}`} className="block flex-1">
          <p className={`text-[10px] font-bold uppercase tracking-[1.2px] mb-1 ${brandColors[product.brand] || 'text-blue-mid'}`}>
            {product.brand}
          </p>
          <h3 className="text-[13.5px] font-bold text-navy mb-1.5 leading-[1.3]">{product.name}</h3>
          <p className="text-[11.5px] text-gray-400 leading-[1.55] mb-3">{product.spec}</p>
        </Link>
        <div className="flex justify-between items-center mt-auto">
          <div>
            <div className="text-[17px] font-extrabold text-navy">£{product.price.toLocaleString()}</div>
            <span className="text-[10px] text-gray-400">+VAT</span>
          </div>
          <button
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              brand: product.brand,
              price: product.price,
              image: product.image,
            })}
            className="w-9 h-9 bg-blue-mid hover:bg-blue-dark text-white rounded-lg flex items-center justify-center text-xl font-light transition-colors flex-shrink-0"
            aria-label={`Add ${product.name} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}
