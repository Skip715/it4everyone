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
          <h1 className="text-[36px] font-extrabold text-white mb-3">About IT4Everyone</h1>
          <p className="text-[15px] max-w-lg leading-[1.75]" style={{ color: '#8EBADF' }}>
            UK independent B2B IT distributor — founded in 2020, built on agility, impartiality and genuine customer service.
          </p>
        </div>
      </div>

      <div className="px-10 py-14 grid grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#1976D2' }}>Who we are</p>
          <h2 className="text-[22px] font-extrabold mb-4" style={{ color: '#0D2B5E' }}>Independent, impartial, invested in you</h2>
          <p className="text-[14px] leading-[1.8] mb-4" style={{ color: '#546E7A' }}>
            IT4Everyone Ltd is an independent UK-based IT distributor founded by Stephen Raper in 2020. We specialise in sourcing and supplying reliable hardware and technology solutions to businesses across multiple industries.
          </p>
          <p className="text-[14px] leading-[1.8]" style={{ color: '#546E7A' }}>
            As an independent distributor, we pride ourselves on agility, customised service, and strong vendor relationships. Due to rapid growth, Christopher Reeves joined the board in 2023.
          </p>
        </div>
        <div className="relative h-[320px] rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" fill className="object-cover" />
        </div>
      </div>

      <div className="px-10 py-14" style={{ background: '#F8FAFC' }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: '#1976D2' }}>Our people</p>
          <h2 className="text-[26px] font-extrabold" style={{ color: '#0D2B5E' }}>The team behind IT4Everyone</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <div className="bg-white rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#DDE5EF' }}>
            <div className="relative h-[220px]">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Stephen Raper" fill className="object-cover object-top" />
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-extrabold" style={{ color: '#0D2B5E' }}>Stephen Raper</h3>
              <p className="text-[12px] font-bold mb-3" style={{ color: '#1976D2' }}>Founder & Sales Director</p>
              <p className="text-[13px] leading-[1.65] mb-3" style={{ color: '#546E7A' }}>Founded IT4Everyone in 2020 with a mission to make enterprise-grade IT procurement accessible to UK businesses of all sizes.</p>
              <div className="flex flex-wrap gap-1.5">
                <a href="tel:01296816012" className="text-[11px] px-3 py-1 rounded-xl" style={{ background: '#EAF2FB', color: '#0D47A1' }}>01296 816012</a>
                <a href="mailto:sraper@it4eo.co.uk" className="text-[11px] px-3 py-1 rounded-xl" style={{ background: '#EAF2FB', color: '#0D47A1' }}>sraper@it4eo.co.uk</a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#DDE5EF' }}>
            <div className="relative h-[220px]">
              <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80" alt="Christopher Reeves" fill className="object-cover object-top" />
            </div>
            <div className="p-5">
              <h3 className="text-[16px] font-extrabold" style={{ color: '#0D2B5E' }}>Christopher Reeves</h3>
              <p className="text-[12px] font-bold mb-3" style={{ color: '#1976D2' }}>Board Director</p>
              <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>Joined the board in 2023 following rapid company growth, bringing strategic direction to IT4Everyone&apos;s B2B enterprise expansion.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-10 py-14">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-2" style={{ color: '#1976D2' }}>Why choose us</p>
        <h2 className="text-[22px] font-extrabold mb-7" style={{ color: '#0D2B5E' }}>Why IT4Everyone?</h2>
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
