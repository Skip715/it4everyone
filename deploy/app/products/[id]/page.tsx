'use client'

import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id))
  const { addItem } = useCart()

  return (
    <div className="min-h-screen bg-gray-50">
      {!product ? (
        <div className="min-h-screen flex items-center justify-center">
          <p>Product not found</p>
        </div>
      ) : (
        <div>
          <div className="px-4 py-4 bg-white border-b border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-500 max-w-6xl mx-auto">
              <Link href="/" className="hover:text-blue-600">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-blue-600">Products</Link>
              <span>/</span>
              <span className="text-gray-800">{product.name}</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="relative w-full h-[280px] sm:h-[380px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{product.brand}</p>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">{product.name}</h1>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-gray-200">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-gray-900">&#163;{product.price.toLocaleString()}</span>
                  <span className="text-sm mb-1 text-gray-400">exc. VAT</span>
                </div>
                <p className="text-xs text-gray-400 mb-5">Price shown excludes VAT. Contact us for bulk pricing.</p>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image })}
                    className="w-full py-3.5 text-sm font-bold text-white rounded-xl bg-blue-600 hover:bg-blue-700 transition-all"
                  >
                    Add to cart
                  </button>
                  
                    href="https://competitve-components.myshopify.com/collections/all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 text-sm font-bold text-white rounded-xl text-center bg-[#0D2B5E] hover:bg-blue-900 transition-all"
                  >
                    Buy in our Shop
                  </a>
                  <Link
                    href="/contact"
                    className="w-full py-3.5 text-sm font-bold rounded-xl text-center border-2 border-[#0D2B5E] text-[#0D2B5E] hover:bg-[#0D2B5E] hover:text-white transition-all"
                  >
                    Request a quote
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-green-700">
                <span className="font-semibold">In stock - free UK delivery available</span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 pb-16">
            <div className="bg-[#0D2B5E] rounded-2xl p-10 text-white text-center">
              <h2 className="text-xl font-extrabold mb-2">Need a tailored quote?</h2>
              <p className="text-sm text-blue-200 mb-6">Get in touch for bulk pricing, leasing options or a custom procurement package.</p>
              <Link href="/contact" className="inline-block px-8 py-3.5 text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 transition-all">
                Request a proposal
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
