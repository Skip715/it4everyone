import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'B2B Hardware Procurement',
    description: 'Dell, HP, Lenovo and more — tailored enterprise procurement with flexible models for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80',
    alt: 'Business IT procurement meeting',
  },
  {
    id: 2,
    title: 'Network & Hardware Installation',
    description: 'End-to-end installation, configuration and commissioning of network infrastructure and enterprise hardware.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    alt: 'Network server installation',
  },
  {
    id: 3,
    title: 'IT Leasing Services',
    description: 'Flexible subscription and leasing models — preserve capital, stay current with technology and scale on your terms.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
    alt: 'Business leasing and finance',
  },
  {
    id: 4,
    title: 'Data Wiping & Asset Recertification',
    description: 'Certified secure data wiping and hardware recertification — responsible disposal and resale-ready assets.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    alt: 'Data security and hardware',
  },
]

export default function ServicesSection() {
  return (
    <section className="px-10 py-14" style={{ background: '#F8FAFC' }}>
      <div className="flex justify-between items-end mb-8 flex-wrap gap-3">
        <div>
          <p className="text-[11px] font-bold tracking-[1.5px] uppercase mb-1.5" style={{ color: '#1976D2' }}>What we do</p>
          <h2 className="text-[26px] font-extrabold" style={{ color: '#0D2B5E' }}>Our solutions & services</h2>
        </div>
        <Link href="/services" className="text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: '#1976D2' }}>
          View all services →
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {services.map(svc => (
          <Link key={svc.id} href="/services" className="group bg-white rounded-xl overflow-hidden border hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex flex-col" style={{ borderColor: '#DDE5EF' }}>
            <div className="relative h-[180px] overflow-hidden">
              <Image
                src={svc.image}
                alt={svc.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,43,94,0.4) 0%, transparent 60%)' }} />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-[14px] font-bold mb-2" style={{ color: '#0D2B5E' }}>{svc.title}</h3>
              <p className="text-[12.5px] leading-[1.65] flex-1" style={{ color: '#546E7A' }}>{svc.description}</p>
              <div className="mt-3 text-[12.5px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#1976D2' }}>
                Learn more <span>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
