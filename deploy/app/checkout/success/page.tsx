import Link from 'next/link'

export default function CheckoutSuccess() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-10">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-[28px] font-extrabold text-navy mb-3">Order received!</h1>
        <p className="text-slate-500 text-[15px] leading-[1.75] mb-6">
          Thank you for your order. Our team will be in touch shortly to confirm delivery details and any specific requirements.
        </p>
        <p className="text-[13px] text-slate-400 mb-8">Questions? Contact Stephen Raper: sraper@it4eo.co.uk · 01296 816012</p>
        <Link href="/" className="inline-block bg-navy text-white font-bold px-7 py-3.5 rounded-lg text-[14px] hover:bg-blue transition-colors">
          Back to home
        </Link>
      </div>
    </div>
  )
}
