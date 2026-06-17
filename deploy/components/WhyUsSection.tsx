import Image from 'next/image'

const stats = [
  { num: '2020', label: 'Founded in the UK' },
  { num: '3+', label: 'Leading brands' },
  { num: 'B2B', label: 'Enterprise focused' },
  { num: 'UK', label: 'Nationwide delivery' },
]

const reasons = [
  { icon: '🏆', title: 'Independent & impartial', body: 'Not tied to any single manufacturer — we recommend exactly what fits your business goals.' },
  { icon: '👤', title: 'Dedicated account management', body: 'Direct communication and a personal account manager as standard for every client.' },
  { icon: '🔄', title: 'Flexible procurement', body: 'Outright purchase, leasing or subscription — we build a model that works for your cash flow.' },
  { icon: '🚚', title: 'End-to-end delivery', body: 'From sourcing to installation — we manage the entire supply chain so you don\'t have to.' },
]

export default function WhyUsSection() {
  return (
    <section className="overflow-hidden" style={{ background: '#0D2B5E' }}>
      <div className="flex min-h-[420px]">
        {/* Left: image */}
        <div className="flex-1 relative">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80"
            alt="IT professional in server room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(13,43,94,0.3)' }} />
          {/* Stats overlay */}
          <div className="absolute bottom-6 left-6 right-6 grid grid-cols-4 gap-3">
            {stats.map(s => (
              <div key={s.num} className="text-center rounded-lg px-3 py-3" style={{ background: 'rgba(13,43,94,0.85)', backdropFilter: 'blur(8px)' }}>
                <div className="text-[22px] font-extrabold text-white">{s.num}</div>
                <div className="text-[10px] mt-0.5" style={{ color: '#8EBADF' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: reasons */}
        <div className="flex-shrink-0 px-10 py-12 flex flex-col justify-center" style={{ width: '480px' }}>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#5BA4D4' }}>Why choose us</p>
          <h2 className="text-[26px] font-extrabold text-white mb-7">Why IT4Everyone?</h2>
          <div className="flex flex-col gap-5">
            {reasons.map(r => (
              <div key={r.title} className="flex gap-4 items-start">
                <div className="text-xl flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(91,164,212,0.15)' }}>
                  {r.icon}
                </div>
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-1">{r.title}</h3>
                  <p className="text-[12.5px] leading-[1.65]" style={{ color: '#8EBADF' }}>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
