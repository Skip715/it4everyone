import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#050E22' }}>
      <div className="px-10 py-12 grid grid-cols-4 gap-8">
        <div className="col-span-1">
          {/* SVG Logo — matches navbar exactly */}
          <div className="flex items-center gap-3 mb-4">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="5" fill="#1565C0"/>
              <rect x="3.5" y="3.5" width="37" height="37" rx="3" fill="none" stroke="white" strokeWidth="1.2"/>
              <rect x="6" y="6" width="32" height="32" rx="2" fill="none" stroke="white" strokeWidth="0.6"/>
              <text x="22" y="31" textAnchor="middle" fill="white" fontFamily="Georgia,serif" fontSize="22" fontWeight="700">I</text>
            </svg>
            <div className="flex flex-col leading-tight">
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', letterSpacing: '0.5px' }}>IT4EVERYONE LTD</span>
              <span style={{ fontSize: '9px', letterSpacing: '2px', color: '#5BA4D4', textTransform: 'uppercase' }}>YOUR DELL SPECIALIST</span>
            </div>
          </div>
          <p className="text-[13px] leading-[1.7] mt-2" style={{ color: '#546E7A' }}>
            UK independent B2B IT distributor. Dell, HP, Lenovo and more — delivered nationwide with dedicated account management.
          </p>
          <div className="mt-4 flex flex-col gap-1.5">
            <a href="tel:01296816012" className="text-[12px] hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>📞 01296 816012</a>
            <a href="tel:07518577981" className="text-[12px] hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>📱 07518 577981</a>
            <a href="mailto:sraper@it4eo.co.uk" className="text-[12px] hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>✉️ sraper@it4eo.co.uk</a>
          </div>
        </div>
        <div>
          <h3 className="text-[12px] font-bold text-white uppercase tracking-[1px] mb-4">Products</h3>
          {['Laptops', 'Desktops', 'Servers', 'Monitors & Peripherals', 'Networking', 'Data Storage', 'Recertified Assets'].map(l => (
            <Link key={l} href="/products" className="block text-[13px] mb-2 hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>{l}</Link>
          ))}
        </div>
        <div>
          <h3 className="text-[12px] font-bold text-white uppercase tracking-[1px] mb-4">Services</h3>
          {['B2B Procurement', 'Network Installation', 'IT Leasing', 'Data Wiping & Recertification', 'Account Management', 'Custom Procurement'].map(l => (
            <Link key={l} href="/services" className="block text-[13px] mb-2 hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>{l}</Link>
          ))}
        </div>
        <div>
          <h3 className="text-[12px] font-bold text-white uppercase tracking-[1px] mb-4">Company</h3>
          {[['About us', '/about'], ['Contact', '/contact'], ['Get a quote', '/contact']].map(([l, h]) => (
            <Link key={l} href={h} className="block text-[13px] mb-2 hover:text-sky-400 transition-colors" style={{ color: '#546E7A' }}>{l}</Link>
          ))}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[12px] leading-[1.6]" style={{ color: '#37474F' }}>
              Regus The Gatehouse<br />Gatehouse Way<br />Aylesbury, Buckinghamshire
            </p>
          </div>
        </div>
      </div>
      <div className="px-10 py-4 flex justify-between items-center flex-wrap gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p className="text-[12px]" style={{ color: '#1A2F4A' }}>© 2025 IT4Everyone Ltd · Registered in England & Wales</p>
        <div className="flex gap-5">
          {['Privacy policy', 'Terms & conditions', 'Cookie policy', 'Sitemap'].map(l => (
            <Link key={l} href="#" className="text-[12px] hover:text-slate-500 transition-colors" style={{ color: '#2D4A6E' }}>{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
