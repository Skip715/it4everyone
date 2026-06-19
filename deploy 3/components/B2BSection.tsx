import Link from 'next/link'

export default function B2BSection() {
  return (
    <section id="b2b" className="px-10 py-16" style={{ background: '#F0F4FA' }}>
      <div className="mb-10 text-center">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#1976D2' }}>IT4Everyone B2B</p>
        <h2 className="text-[30px] font-extrabold" style={{ color: '#0D2B5E' }}>Hardware for business</h2>
        <p className="text-[14px] mt-3 max-w-xl mx-auto leading-[1.75]" style={{ color: '#546E7A' }}>
          Personalised hardware procurement, dedicated account management and flexible financing — designed around your business, not a generic catalogue.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        {[
          { icon: '🖥️', title: 'Tailored procurement', body: 'We source exactly what your business needs — from a single laptop to a full enterprise rollout.' },
          { icon: '💼', title: 'Dedicated account management', body: 'A single point of contact who knows your infrastructure and goals inside out.' },
          { icon: '📊', title: 'Flexible financing', body: 'Outright purchase, leasing or subscription — structured around your cash flow.' },
          { icon: '🔒', title: 'Secure & compliant', body: 'Data wiping, asset recertification and full audit trails as standard.' },
          { icon: '⚡', title: 'Fast turnaround', body: 'Quick quotes and swift delivery so your projects stay on schedule.' },
          { icon: '♻️', title: 'Sustainable IT', body: 'Recertified assets and responsible disposal to meet your ESG commitments.' },
        ].map(({ icon, title, body }) => (
          <div key={title} className="rounded-2xl p-7 bg-white border flex flex-col gap-3" style={{ borderColor: '#DDE5EF', boxShadow: '0 2px 12px rgba(13,43,94,0.06)' }}>
            <div className="text-3xl">{icon}</div>
            <h3 className="text-[15px] font-extrabold" style={{ color: '#0D2B5E' }}>{title}</h3>
            <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>{body}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-4 justify-center">
        <Link href="/contact" className="btn-primary px-6 py-3 text-[14px]" style={{ borderRadius: '8px' }}>
          Get started
        </Link>
        <Link href="/services" className="px-6 py-3 rounded-lg text-[14px] font-bold border-2 transition-all" style={{ background: 'transparent', color: '#0D2B5E', borderColor: '#0D2B5E' }}>
          Learn more
        </Link>
      </div>
    </section>
  )
}
