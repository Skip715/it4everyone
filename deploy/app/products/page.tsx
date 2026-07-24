import ProductGrid from '@/components/ProductGrid'

export default function ProductsPage() {
  return (
    <>
      <div className="bg-navy px-4 sm:px-10 py-10 sm:py-12">
        <p className="text-[11px] font-bold text-sky tracking-[1.5px] uppercase mb-2">Our catalogue</p>
        <h1 className="text-[28px] sm:text-[36px] font-extrabold text-white leading-tight">Hardware for every business</h1>
        <p className="text-sky-muted text-[15px] mt-3 max-w-lg leading-[1.75]">
          Dell, HP, Lenovo and more &#8212; sourced directly, quality-checked and delivered UK-wide with dedicated account support.
        </p>
      </div>
      <ProductGrid />
    </>
  )
}
