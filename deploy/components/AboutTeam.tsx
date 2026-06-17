import Image from 'next/image'

export default function AboutTeam() {
  return (
    <section className="px-10 py-14" style={{ background: '#F8FAFC' }}>
      <div className="mb-8">
        <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: '#1976D2' }}>Our people</p>
        <h2 className="text-[26px] font-extrabold" style={{ color: '#0D2B5E' }}>The team behind IT4Everyone</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 max-w-3xl">
        {/* Stephen */}
        <div className="bg-white rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#DDE5EF' }}>
          <div className="relative h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
              alt="Stephen Raper, Founder"
              fill
              className="object-cover object-top"
            />
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
        {/* Christopher */}
        <div className="bg-white rounded-xl overflow-hidden border flex flex-col" style={{ borderColor: '#DDE5EF' }}>
          <div className="relative h-[220px]">
            <Image
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80"
              alt="Christopher Reeves, Board Director"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="p-5">
            <h3 className="text-[16px] font-extrabold" style={{ color: '#0D2B5E' }}>Christopher Reeves</h3>
            <p className="text-[12px] font-bold mb-3" style={{ color: '#1976D2' }}>Board Director</p>
            <p className="text-[13px] leading-[1.65]" style={{ color: '#546E7A' }}>Joined the board in 2023 following rapid company growth, bringing strategic direction to IT4Everyone's B2B enterprise expansion across the UK.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
