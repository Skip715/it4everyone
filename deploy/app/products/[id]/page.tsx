'use client'

import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const product = products.find(p => p.id === Number(params.id))

  return (
    <div style={{ background: '#F8FAFC' }}>
      {!product ? <div className="p-10 text-center">Product not found</div> : (
        <>
          <div className="px-4 sm:px-10 py-4 bg-white border-b" style={{ borderColor: '#EEF2F7' }}>
            <div className="flex items-center gap-2 text-xs" style={{ color: '#78909C' }}>
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <span>/</span>
              <span style={{ color: '#0D2B5E' }}>{product.name}</span>
            </div>
          </div>

          <div className="px-4 sm:px-10 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            <div>
              <div className="rounded-2xl overflow-hidden flex items-center justify-center p-6 sm:p-10" style={{ background: 'linear-gradient(135deg, #F0F4FA, #E8EDF5)', minHeight: '300px' }}>
                <div className="relative w-full h-[280px] sm:h-[380px]">
                  <Image src={product.image} alt={product.name} fill className="object-contain" unoptimized />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#1976D2' }}>{product.brand}</p>
                <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight mb-3" style={{ color: '#0D2B5E' }}>{product.name}</h1>
                <p className="text-sm leading-relaxed" style={{ color: '#546E7A' }}>{product.description}</p>
              </div>

              <div className="rounded-2xl p-5 mt-1" style={{ background: 'white', border: '1px solid #E8EDF5' }}>
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-3xl font-extrabold" style={{ color: '#0D2B5E' }}>&#163;{product.price.toLocaleString()}</span>
                  <span className="text-sm mb-1" style={{ color: '#90A4AE' }}>exc. VAT</span>
                </div>
                <p className="text-xs mb-4" style={{ color: '#90A4AE' }}>Price shown excludes VAT. Contact us for bulk pricing.</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image })}
                    className="w-full py-3.5 text-sm font-bold text-white rounded-xl transition-all"
                    style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}
                  >
                    Add to cart
                  </button>
                  
                  href="https://competitve-components.myshopify.com/collections/all"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full py-3.5 text-[14px] font-bold text-white rounded-xl text-center transition-all"
  style={{ background: 'linear-gradient(135deg, #0D2B5E, #1565C0)' }}
>
  Buy in our Shop
</a>
                  <Link href="/contact" className="w-full py-3.5 text-sm font-bold rounded-xl text-center border-2 transition-all" style={{ color: '#0D2B5E', borderColor: '#0D2B5E' }}>
                    Request a quote
                  </Link>
                </div>
              </div>

              <div className="text-sm font-semibold" style={{ color: '#2E7D32' }}>
                In stock - free UK delivery available
              </div>
            </div>
          </div>

          <div className="px-4 sm:px-10 py-10 text-center mb-6 mx-4 sm:mx-10 rounded-2xl" style={{ background: '#0D2B5E' }}>
            <h2 className="text-xl font-extrabold text-white mb-2">Need a tailored quote?</h2>
            <p className="text-sm mb-6" style={{ color: '#8EBADF' }}>Get in touch for bulk pricing, leasing options or a custom procurement proposal.</p>
            <Link href="/contact" className="inline-block px-8 py-3.5 text-sm font-bold rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}>
              Request a proposal
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
