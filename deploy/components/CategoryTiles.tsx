import Link from 'next/link'
import { categories } from '@/lib/data'

const icons: Record<string, string> = {
  laptop: '💻', desktop: '🖥️', server: '🗄️', monitor: '🖥️',
  network: '🔌', database: '💾', cpu: '⚙️', recycle: '♻️',
}

export default function CategoryTiles() {
  return (
    <section className="px-10 py-12 bg-white">
      <div className="mb-6">
        <p className="text-[11px] font-bold text-blue tracking-[1.5px] uppercase mb-1.5">Shop by category</p>
        <h2 className="text-[26px] font-extrabold text-navy">Find the right hardware</h2>
      </div>
      <div className="grid grid-cols-4 gap-2.5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/products?category=${cat.id}`}
            className="group relative rounded-lg overflow-hidden cursor-pointer aspect-[4/3] flex items-end"
            style={{ background: cat.bg }}
          >
            {/* Background icon */}
            <div className="absolute inset-0 flex items-center justify-center text-[80px] opacity-20 select-none pointer-events-none">
              {icons[cat.icon]}
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy/50 group-hover:bg-navy/70 transition-colors duration-200" />
            {/* Label */}
            <span className="relative z-10 text-sm font-bold text-white p-3.5">
              {cat.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
