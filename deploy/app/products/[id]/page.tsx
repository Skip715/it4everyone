'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/data'
import { useCart } from '@/lib/cart-context'

const fullSpecs: Record<number, { sections: { title: string; rows: [string, string][] }[] }> = {
  1: {
    sections: [
      { title: 'Display', rows: [
        ['Screen Size', '31.5 inches'],
        ['Panel Type', 'IPS Black'],
        ['Resolution', '4K UHD (3840 x 2160)'],
        ['Refresh Rate', '120Hz'],
        ['Contrast Ratio', '3000:1 (typical)'],
        ['Brightness', '600 cd/m² (typical)'],
        ['Colour Coverage', '99% sRGB, 99% DCI-P3'],
        ['Response Time', '5ms (GtG)'],
        ['Aspect Ratio', '16:9'],
        ['Eye Comfort', 'ComfortView Plus, TÜV-certified'],
      ]},
      { title: 'Connectivity', rows: [
        ['Thunderbolt 4', '1x upstream (140W PD)'],
        ['USB-C', '1x downstream (15W)'],
        ['USB-A 3.2', '4x (10Gbps)'],
        ['HDMI', '1x HDMI 2.1'],
        ['DisplayPort', '1x DP 1.4'],
        ['Audio', '3.5mm headphone jack'],
        ['RJ45 Ethernet', 'Yes (2.5GbE)'],
      ]},
      { title: 'Physical', rows: [
        ['VESA Mount', '100 x 100mm'],
        ['Height Adjustable', 'Yes (150mm)'],
        ['Tilt', '-5° to 21°'],
        ['Swivel', '-30° to 30°'],
        ['Pivot', '90°'],
        ['Weight (with stand)', '8.56kg'],
      ]},
    ],
  },
  2: {
    sections: [
      { title: 'Display', rows: [
        ['Screen Size', '27 inches'],
        ['Panel Type', 'IPS Black'],
        ['Resolution', '4K UHD (3840 x 2160)'],
        ['Refresh Rate', '120Hz'],
        ['Contrast Ratio', '3000:1 (typical)'],
        ['Brightness', '600 cd/m² (typical)'],
        ['Colour Coverage', '99% sRGB, 99% DCI-P3'],
        ['Response Time', '5ms (GtG)'],
        ['Aspect Ratio', '16:9'],
        ['Eye Comfort', 'ComfortView Plus, TÜV-certified'],
      ]},
      { title: 'Connectivity', rows: [
        ['Thunderbolt 4', '1x upstream (140W PD)'],
        ['USB-C', '1x downstream (15W)'],
        ['USB-A 3.2', '4x (10Gbps)'],
        ['HDMI', '1x HDMI 2.1'],
        ['DisplayPort', '1x DP 1.4'],
        ['Audio', '3.5mm headphone jack'],
        ['RJ45 Ethernet', 'Yes (2.5GbE)'],
      ]},
      { title: 'Physical', rows: [
        ['VESA Mount', '100 x 100mm'],
        ['Height Adjustable', 'Yes (130mm)'],
        ['Tilt', '-5° to 21°'],
        ['Swivel', '-30° to 30°'],
        ['Pivot', '90°'],
        ['Weight (with stand)', '6.87kg'],
      ]},
    ],
  },
  3: {
    sections: [
      { title: 'Display', rows: [
        ['Screen Size', '39.7 inches (curved)'],
        ['Panel Type', 'IPS'],
        ['Resolution', '5K2K (5120 x 2160)'],
        ['Refresh Rate', '120Hz'],
        ['Curvature', '2500R'],
        ['Brightness', '300 cd/m² (typical)'],
        ['Colour Coverage', '99% sRGB, 98% DCI-P3'],
        ['Response Time', '5ms (GtG)'],
        ['Aspect Ratio', '21:9'],
        ['Eye Comfort', 'ComfortView Plus, TÜV-certified'],
      ]},
      { title: 'Connectivity', rows: [
        ['Thunderbolt 4', '1x upstream (140W PD)'],
        ['USB-C', '1x downstream (15W)'],
        ['USB-A 3.2', '4x (10Gbps)'],
        ['HDMI', '1x HDMI 2.1'],
        ['DisplayPort', '1x DP 1.4'],
        ['Audio', '3.5mm headphone jack'],
        ['RJ45 Ethernet', 'Yes (2.5GbE)'],
      ]},
      { title: 'Physical', rows: [
        ['VESA Mount', '100 x 100mm'],
        ['Height Adjustable', 'Yes (120mm)'],
        ['Tilt', '-5° to 21°'],
        ['Swivel', '-30° to 30°'],
        ['Weight (with stand)', '12.45kg'],
      ]},
    ],
  },
  4: {
    sections: [
      { title: 'Power Delivery', rows: [
        ['USB-C Power Delivery', '100W'],
        ['Host Interface', 'USB-C / Thunderbolt'],
      ]},
      { title: 'Connectivity', rows: [
        ['USB-A 3.2 Gen 2', '2x (10Gbps)'],
        ['USB-C 3.2 Gen 2', '2x (10Gbps)'],
        ['HDMI', '1x HDMI 2.0'],
        ['DisplayPort', '1x DP 1.4'],
        ['RJ45 Ethernet', 'Yes (1GbE)'],
        ['Audio In/Out', 'Yes (combo jack)'],
        ['SD Card Reader', 'Yes (SD 4.0)'],
      ]},
      { title: 'Physical', rows: [
        ['Dimensions', '172 x 71 x 21mm'],
        ['Weight', '393g'],
        ['Cable Length', '0.8m'],
        ['Compatibility', 'USB-C & Thunderbolt laptops'],
      ]},
    ],
  },
  5: {
    sections: [
      { title: 'Power Delivery', rows: [
        ['USB-C Power Delivery', '130W'],
        ['Host Interface', 'USB-C / Thunderbolt'],
        ['Remote Management', 'Yes (Intel AMT compatible)'],
      ]},
      { title: 'Connectivity', rows: [
        ['USB-A 3.2 Gen 2', '2x (10Gbps)'],
        ['USB-C 3.2 Gen 2', '2x (10Gbps)'],
        ['HDMI', '1x HDMI 2.0'],
        ['DisplayPort', '2x DP 1.4'],
        ['RJ45 Ethernet', 'Yes (1GbE)'],
        ['Audio In/Out', 'Yes (combo jack)'],
      ]},
      { title: 'Physical', rows: [
        ['Dimensions', '172 x 71 x 21mm'],
        ['Weight', '400g'],
        ['Cable Length', '0.8m'],
        ['Compatibility', 'USB-C & Thunderbolt laptops'],
      ]},
    ],
  },
  6: {
    sections: [
      { title: 'Power', rows: [
        ['System Power Delivery', '180W'],
        ['USB-C Power Delivery', '90W'],
        ['Host Interface', 'Thunderbolt 4'],
      ]},
      { title: 'Connectivity', rows: [
        ['Thunderbolt 4 Ports', '4x (40Gbps)'],
        ['USB-A 3.2 Gen 2', '5x (10Gbps)'],
        ['DisplayPort', '2x DP 1.4'],
        ['RJ45 Ethernet', 'Yes (1GbE)'],
        ['Audio In/Out', 'Yes (combo jack)'],
        ['Remote Management', 'Yes'],
      ]},
      { title: 'Physical', rows: [
        ['Dimensions', '210 x 90 x 28mm'],
        ['Weight', '0.74kg'],
        ['Compatibility', 'Thunderbolt 4 laptops'],
      ]},
    ],
  },
  7: {
    sections: [
      { title: 'Display', rows: [
        ['Screen Size', '31.5 inches'],
        ['Panel Type', 'IPS'],
        ['Resolution', '4K UHD (3840 x 2160)'],
        ['Refresh Rate', '60Hz'],
        ['Brightness', '350 cd/m² (typical)'],
        ['Colour Coverage', '99% sRGB'],
        ['Response Time', '8ms (GtG)'],
        ['Aspect Ratio', '16:9'],
        ['Eye Comfort', 'ComfortView Plus, TÜV-certified'],
      ]},
      { title: 'Connectivity', rows: [
        ['USB-C', '1x upstream (90W PD)'],
        ['USB-A 3.2', '3x (10Gbps)'],
        ['HDMI', '1x HDMI 2.0'],
        ['DisplayPort', '1x DP 1.4'],
        ['Audio', '3.5mm headphone jack'],
        ['RJ45 Ethernet', 'Yes (1GbE)'],
      ]},
      { title: 'Physical', rows: [
        ['VESA Mount', '100 x 100mm'],
        ['Height Adjustable', 'Yes (130mm)'],
        ['Tilt', '-5° to 21°'],
        ['Swivel', '-30° to 30°'],
        ['Pivot', '90°'],
        ['Weight (with stand)', '8.3kg'],
      ]},
    ],
  },
  8: {
    sections: [
      { title: 'Display', rows: [
        ['Screen Size', '27 inches'],
        ['Panel Type', 'IPS'],
        ['Resolution', '4K UHD (3840 x 2160)'],
        ['Refresh Rate', '60Hz'],
        ['Brightness', '350 cd/m² (typical)'],
        ['Colour Coverage', '99% sRGB'],
        ['Response Time', '8ms (GtG)'],
        ['Aspect Ratio', '16:9'],
        ['Eye Comfort', 'ComfortView Plus, TÜV-certified'],
      ]},
      { title: 'Connectivity', rows: [
        ['USB-C', '1x upstream (90W PD)'],
        ['USB-A 3.2', '4x (10Gbps)'],
        ['HDMI', '1x HDMI 2.0'],
        ['DisplayPort', '1x DP 1.4'],
        ['Audio', '3.5mm headphone jack'],
        ['RJ45 Ethernet', 'Yes (2.5GbE)'],
      ]},
      { title: 'Physical', rows: [
        ['VESA Mount', '100 x 100mm'],
        ['Height Adjustable', 'Yes (130mm)'],
        ['Tilt', '-5° to 21°'],
        ['Swivel', '-30° to 30°'],
        ['Pivot', '90°'],
        ['Weight (with stand)', '6.96kg'],
      ]},
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id))
  if (!product) notFound()
  const specs = fullSpecs[product.id]
  const { addItem } = useCart()

  return (
    <div style={{ background: '#F8FAFC' }}>
      {/* Breadcrumb */}
      <div className="px-10 py-4 bg-white border-b" style={{ borderColor: '#EEF2F7' }}>
        <div className="flex items-center gap-2 text-[12px]" style={{ color: '#78909C' }}>
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <span style={{ color: '#0D2B5E' }}>{product.name}</span>
        </div>
      </div>

      <div className="px-10 py-12 grid grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Image */}
        <div>
          <div className="rounded-2xl overflow-hidden flex items-center justify-center p-10" style={{ background: 'linear-gradient(135deg, #F0F4FA, #E8EDF5)', minHeight: '400px' }}>
            <div className="relative w-full h-[380px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[1.5px] mb-2" style={{ color: '#1976D2' }}>{product.brand}</p>
            <h1 className="text-[28px] font-extrabold leading-[1.2] mb-3" style={{ color: '#0D2B5E' }}>{product.name}</h1>
            <p className="text-[14px] leading-[1.8]" style={{ color: '#546E7A' }}>{product.description}</p>
          </div>

          {/* Key specs pills */}
          <div className="flex flex-wrap gap-2">
            {product.spec.split(' · ').map(s => (
              <span key={s} className="px-3 py-1.5 rounded-full text-[11.5px] font-semibold" style={{ background: '#EEF2F7', color: '#0D2B5E' }}>{s}</span>
            ))}
          </div>

          {/* Price & CTA */}
          <div className="rounded-2xl p-6 mt-2" style={{ background: 'white', border: '1px solid #E8EDF5' }}>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-[32px] font-extrabold" style={{ color: '#0D2B5E' }}>£{product.price.toLocaleString()}</span>
              <span className="text-[13px] mb-2" style={{ color: '#90A4AE' }}>exc. VAT</span>
            </div>
            <p className="text-[12px] mb-5" style={{ color: '#90A4AE' }}>Price shown excludes VAT. Contact us for bulk pricing.</p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => addItem({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image })}
                className="w-full py-3.5 text-[14px] font-bold text-white rounded-xl transition-all"
                style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}
              >
                Add to cart
              </button>
              <Link href="/contact" className="w-full py-3.5 text-[14px] font-bold rounded-xl text-center border-2 transition-all" style={{ color: '#0D2B5E', borderColor: '#0D2B5E' }}>
                Request a quote →
              </Link>
            </div>
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 text-[13px]" style={{ color: '#2E7D32' }}>
            <span>✓</span>
            <span className="font-semibold">In stock — free UK delivery available</span>
          </div>
        </div>
      </div>

      {/* Full spec table */}
      {specs && (
        <div className="px-10 pb-16 max-w-6xl mx-auto">
          <h2 className="text-[20px] font-extrabold mb-6" style={{ color: '#0D2B5E' }}>Full specifications</h2>
          <div className="grid grid-cols-2 gap-5">
            {specs.sections.map(section => (
              <div key={section.title} className="rounded-2xl overflow-hidden" style={{ border: '1px solid #E8EDF5' }}>
                <div className="px-5 py-3" style={{ background: '#0D2B5E' }}>
                  <h3 className="text-[13px] font-bold text-white uppercase tracking-[1px]">{section.title}</h3>
                </div>
                <div className="bg-white">
                  {section.rows.map(([label, value], i) => (
                    <div key={label} className="px-5 py-3 flex justify-between gap-4" style={{ borderTop: i > 0 ? '1px solid #F0F4FA' : 'none' }}>
                      <span className="text-[12.5px] font-semibold" style={{ color: '#546E7A' }}>{label}</span>
                      <span className="text-[12.5px] text-right" style={{ color: '#0D2B5E' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Related CTA */}
      <div className="px-10 py-12 text-center mb-6 mx-10 rounded-2xl" style={{ background: '#0D2B5E' }}>
        <h2 className="text-[22px] font-extrabold text-white mb-2">Need a tailored quote?</h2>
        <p className="text-[14px] mb-6" style={{ color: '#8EBADF' }}>Get in touch for bulk pricing, leasing options or a custom procurement proposal.</p>
        <Link href="/contact" className="inline-block px-8 py-3.5 text-[14px] font-bold rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #1565C0, #2196F3)' }}>
          Request a proposal →
        </Link>
      </div>
    </div>
  )
}
