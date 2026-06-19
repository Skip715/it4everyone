import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <div className="px-10 py-16 relative overflow-hidden" style={{ background: '#0D2B5E', minHeight: '240px' }}>
        <div className="absolute inset-0 opacity-20">
          <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#5BA4D4' }}>Our story</p>
          <h1 className="text-[36px] font-extrabold text-white mb-3">About IT<span style={{ color: '#2196F3' }}>4</span>Everyone</h1>
          <p className="text-[15px] max-w-lg leading-[1.75]" style={{ color: '#8EBADF' }}>
            UK independent B2B IT stockist — founded in 2020, built on agility, impartiality and genuine customer service.
          </p>
        </div>
      </div>

      <div className="px-10 py-14 grid grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#1976D2' }}>Who we are</p>
          <h2 className="text-[22px] font-extrabold mb-4" style={{ color: '#0D2B5E' }}>Independent, impartial, invested in you</h2>
          <p className="text-[14px] leading-[1.8] mb-4" style={{ color: '#546E7A' }}>
            IT4Everyone Ltd is an independent UK-based IT stockist founded in 2020. We specialise in sourcing and supplying reliable hardware and technology solutions to businesses across multiple industries.
          </p>
          <p className="text-[14px] leading-[1.8]" style={{ color: '#546E7A' }}>
            As an independent stockist, we pride ourselves on agility, customised service, and strong vendor relationships — delivering the right technology at the right price for every client.
          </p>
        </div>
        <div className="relative h-[320px] rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" fill className="object-cover" />
        </div>
      </div>

      <div className="px-10 py-14">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#1976D2' }}>Why choose us</p>
        <h2 className="text-[22px] font-extrabold mb-7" style={{ color: '#0D2B5E' }}>Why IT<span style={{ color: '#2196F3' }}>4</span>Everyone?</h2>
        <div className="grid grid-cols-2 gap-4 max-w-3xl">
          {[
            { title: 'Independent & impartial', body: 'Not tied to a single manufacturer. We recommend exactly what fits your goals.' },
            { title: 'Tailored service', body: 'Every client\'s infrastructure is a unique priority. Direct communication as standard.' },
            { title: 'Agile & scalable', body: 'Solutions designed to adapt as your organisation grows.' },
            { title: 'Flexible procurement', body: 'Outright purchase, leasing or subscription — built for your cash flow.' },
          ].map(({ title, body }) => (
            <div key={title} className="rounded-xl p-5 border" style={{ background: '#F8FAFC', borderColor: '#DDE5EF' }}>
              <h3 className="text-[14px] font-extrabold mb-2" style={{ color: '#0D2B5E' }}>{title}</h3>
              <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>{body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="inline-block px-7 py-3.5 text-[14px] font-bold rounded-lg text-white" style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}>
            Get in touch →
          </Link>
        </div>
      </div>
    </>
  )
}
