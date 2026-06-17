import Link from 'next/link'
import Image from 'next/image'

export default function B2BSection() {
  return (
    <section id="b2b" className="flex min-h-[400px] overflow-hidden">
      {/* Left: real photo */}
      <div className="flex-1 relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
          alt="Business professionals working with IT"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(13,43,94,0.15)' }} />
      </div>

      {/* Right: content */}
      <div className="flex-shrink-0 flex flex-col justify-center gap-5 px-12 py-14" style={{ width: '460px', background: '#0D2B5E' }}>
        <p className="text-[10.5px] font-bold tracking-[1.5px] uppercase" style={{ color: '#5BA4D4' }}>IT4Everyone B2B</p>
        <h2 className="text-[28px] font-extrabold text-white leading-[1.2]">
          Your dedicated enterprise IT partner
        </h2>
        <p className="text-[14px] leading-[1.75]" style={{ color: '#8EBADF' }}>
          Personalised hardware procurement, dedicated account management and flexible financing — designed around your business, not a generic catalogue.
        </p>
        <div className="flex gap-3 flex-wrap mt-1">
          <Link href="/contact" className="btn-primary px-5 py-2.5 text-[13.5px]" style={{ borderRadius: '8px' }}>
            Get started
          </Link>
          <Link href="/services" className="px-5 py-2.5 rounded-lg text-[13.5px] font-bold border-2 transition-all" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            B2B benefits
          </Link>
        </div>
        <div className="flex gap-8 mt-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {[
            { icon: '🛒', label: 'Simplify purchasing' },
            { icon: '📈', label: 'Track spend' },
            { icon: '🛡️', label: 'Shop securely' },
          ].map(({ icon, label }) => (
            <div key={label} className="text-center">
              <div className="text-xl mb-1.5">{icon}</div>
              <div className="text-[11px]" style={{ color: '#8EBADF' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
