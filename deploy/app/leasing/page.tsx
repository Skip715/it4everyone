import Link from 'next/link'

export default function LeasingPage() {
  return (
    <>
      <div className="px-10 py-16 relative overflow-hidden" style={{ background: '#0D2B5E', minHeight: '240px' }}>
        <div className="relative z-10">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#5BA4D4' }}>Flexible IT finance</p>
          <h1 className="text-[36px] font-extrabold text-white mb-3">IT Leasing & Subscription</h1>
          <p className="text-[15px] max-w-lg leading-[1.75]" style={{ color: '#8EBADF' }}>
            Preserve capital, stay current with technology and scale on your terms — with flexible leasing and subscription models designed for modern businesses.
          </p>
        </div>
      </div>

      <div className="px-10 py-14">
        <div className="grid grid-cols-3 gap-6 mb-12">
          {[
            { icon: '💰', title: 'Preserve capital', body: 'Spread the cost of hardware over time and keep cash available for your core business operations.' },
            { icon: '🔄', title: 'Stay current', body: 'Refresh your hardware on a regular cycle so your team always has modern, reliable equipment.' },
            { icon: '📈', title: 'Scale with ease', body: 'Add or remove devices as your headcount changes — no large upfront commitments required.' },
            { icon: '🧾', title: 'Simple billing', body: 'One monthly invoice covering all your hardware — easy to budget and easy to approve.' },
            { icon: '🛡️', title: 'Covered & compliant', body: 'Leased assets come with full support options and end-of-life recertification included.' },
            { icon: '⚙️', title: 'Tailored agreements', body: 'We structure lease terms around your specific needs — not a one-size-fits-all contract.' },
          ].map(({ icon, title, body }) => (
            <div key={title} className="rounded-2xl p-7 border flex flex-col gap-3" style={{ background: '#F8FAFC', borderColor: '#DDE5EF', boxShadow: '0 2px 12px rgba(13,43,94,0.06)' }}>
              <div className="text-3xl">{icon}</div>
              <h3 className="text-[15px] font-extrabold" style={{ color: '#0D2B5E' }}>{title}</h3>
              <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>{body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl p-10 text-center" style={{ background: '#0D2B5E' }}>
          <h2 className="text-[24px] font-extrabold text-white mb-3">Ready to explore leasing?</h2>
          <p className="text-[14px] mb-6 max-w-md mx-auto leading-[1.75]" style={{ color: '#8EBADF' }}>
            Get in touch and we'll put together a leasing proposal tailored to your business size and budget.
          </p>
          <Link href="/contact" className="inline-block px-8 py-3.5 text-[14px] font-bold rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}>
            Get a leasing quote →
          </Link>
        </div>
      </div>
    </>
  )
}
