export function TrustBar() {
  const items = [
    { icon: '🚚', label: 'Fast UK-wide delivery' },
    { icon: '🛡️', label: '100% genuine hardware' },
    { icon: '👤', label: 'Dedicated account manager' },
    { icon: '🔄', label: 'Flexible leasing & subscriptions' },
    { icon: '♻️', label: 'Certified data wiping' },
  ]

  return (
    <div className="bg-navy-dark border-t border-white/[0.06] px-10 py-4 flex justify-around flex-wrap gap-2">
      {items.map(({ icon, label }) => (
        <div key={label} className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-white/[0.07] rounded-lg flex items-center justify-center flex-shrink-0 text-sm">
            {icon}
          </div>
          <span className="text-[12.5px] text-sky-muted font-medium">{label}</span>
        </div>
      ))}
    </div>
  )
}

export function BrandsBar() {
  const brands = ['DELL', 'HP', 'LENOVO', 'MICROSOFT', 'CISCO', 'SAMSUNG', 'APPLE']

  return (
    <div className="bg-gray-50 border-b border-gray-200 px-10 py-4 flex items-center gap-3 flex-wrap">
      <span className="text-[10.5px] font-bold text-gray-400 uppercase tracking-[1.2px] mr-1">
        Brands we supply ·
      </span>
      {brands.map(b => (
        <div key={b} className="bg-white border border-gray-200 text-slate-600 text-xs font-bold px-4 py-1.5 rounded tracking-[0.8px]">
          {b}
        </div>
      ))}
    </div>
  )
}
