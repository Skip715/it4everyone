'use client'

import { useCart } from '@/lib/cart-context'
import Link from 'next/link'

export default function CartDrawer() {
  const { items, count, total, removeItem, updateQty, isOpen, closeCart } = useCart()

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={closeCart} aria-hidden="true" />
      )}
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 z-50 w-[420px] bg-white flex flex-col shadow-2xl">
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-[17px] font-extrabold text-navy">Your cart ({count})</h2>
            <button onClick={closeCart} className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 text-xl" aria-label="Close cart">×</button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-16">
                <div className="text-5xl opacity-30">🛒</div>
                <p className="text-gray-400 text-sm">Your cart is empty</p>
                <button onClick={closeCart} className="text-blue text-sm font-bold">Continue shopping</button>
              </div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-3 items-start border border-gray-100 rounded-lg p-3">
                  <div className="w-16 h-16 bg-pale rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">💻</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-navy leading-tight mb-1">{item.name}</p>
                    <p className="text-[12px] text-gray-400 mb-2">{item.brand}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-50">−</button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-6 h-6 border border-gray-200 rounded flex items-center justify-center text-sm hover:bg-gray-50">+</button>
                      </div>
                      <div className="text-right">
                        <p className="text-[14px] font-extrabold text-navy">£{(item.price * item.quantity).toLocaleString()}</p>
                        <p className="text-[10px] text-gray-400">+VAT</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-gray-300 hover:text-red-400 text-lg mt-0.5 flex-shrink-0" aria-label={`Remove ${item.name}`}>×</button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="px-6 py-4 border-t border-gray-200 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Subtotal (ex. VAT)</span>
                <span className="text-[18px] font-extrabold text-navy">£{total.toLocaleString()}</span>
              </div>
              <p className="text-[11px] text-gray-400">To place an order, please contact us directly and we will prepare a quote.</p>
              <Link
                href="/contact"
                onClick={closeCart}
                className="w-full bg-navy hover:bg-blue-mid text-white font-bold py-3.5 rounded-lg text-[14px] transition-colors text-center"
              >
                Enquire about this order →
              </Link>
              <button onClick={closeCart} className="text-center text-sm text-blue font-semibold hover:text-blue-dark">
                Continue shopping
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
