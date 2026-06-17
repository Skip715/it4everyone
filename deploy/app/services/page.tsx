import { services } from '@/lib/data'
import Link from 'next/link'

const serviceIcons: Record<number, string> = { 1: '💻', 2: '🔌', 3: '📊', 4: '♻️' }

export default function ServicesPage() {
  return (
    <>
      <div className="bg-navy px-10 py-12">
        <p className="text-[11px] font-bold text-sky tracking-[1.5px] uppercase mb-2">What we do</p>
        <h1 className="text-[36px] font-extrabold text-white">Our solutions &amp; services</h1>
        <p className="text-sky-muted text-[15px] mt-3 max-w-lg leading-[1.75]">
          End-to-end IT services built around your business — from procurement to installation, leasing to certified data destruction.
        </p>
      </div>

      <div className="px-10 py-14 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 bg-white">
        {services.map(svc => (
          <div key={svc.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="h-[180px] bg-pale flex items-center justify-center text-[80px] opacity-40 relative">
              {serviceIcons[svc.id]}
              <div className="absolute bottom-2 right-2 text-[9px] text-sky opacity-60">[Add service photo]</div>
            </div>
            <div className="p-6">
              <h2 className="text-[17px] font-extrabold text-navy mb-3">{svc.title}</h2>
              <p className="text-[13.5px] text-slate-500 leading-[1.7] mb-4">{svc.description}</p>
              <ul className="flex flex-col gap-1.5 mb-5">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-[13px] text-slate-600">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-block bg-navy text-white font-bold px-5 py-2.5 rounded-lg text-[13px] hover:bg-blue transition-colors">
                Enquire about this service
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
