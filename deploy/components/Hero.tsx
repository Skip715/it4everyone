'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    headline: 'Enterprise hardware,',
    headline2: 'any scale.',
    sub: 'Dell, HP, Lenovo and more — sourced, procured and delivered with dedicated account management. From a single device to a full enterprise rollout.',
  },
  {
    headline: 'The right hardware,',
    headline2: 'right now.',
    sub: 'Independent and impartial — we recommend exactly what fits your business goals, with flexible leasing and subscription options available.',
  },
  {
    headline: 'Servers, storage,',
    headline2: 'sorted.',
    sub: 'From entry-level rack servers to full data centre deployments — procured, delivered and installed across the UK with expert support.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => { setActive(i => (i + 1) % slides.length); setFading(false) }, 400)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[active]

  return (
    <section className="relative overflow-hidden" style={{ background: '#0A1628', minHeight: '520px' }}>
      <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
        <Image
          src="/hero-laptop.png"
          alt="Enterprise Dell laptops"
          fill
          className="object-cover object-center"
          priority
          style={{ opacity: 0.85 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A1628 0%, #0A1628 10%, rgba(10,22,40,0.7) 40%, transparent 100%)' }} />
      </div>

      <div className="absolute inset-0 hero-grid opacity-[0.04]" aria-hidden="true" />

      <div className="relative z-10 px-10 py-20 max-w-[580px]">
        <div
          className="inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full mb-5 text-[10.5px] font-bold tracking-[1.5px] uppercase"
          style={{ borderColor: 'rgba(91,164,212,0.4)', color: '#8EBADF' }}
        >
          UK Independent B2B IT Distributor
        </div>

        <h1
          className="font-extrabold text-white leading-[1.1] tracking-tight mb-4"
          style={{ fontSize: '46px', opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          {slide.headline}<br />
          <span style={{ color: '#5BA4D4' }}>{slide.headline2}</span>
        </h1>

        <p
          className="text-[15px] leading-[1.75] mb-8 max-w-[460px]"
          style={{ color: '#8EBADF', opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          {slide.sub}
        </p>

        <div className="flex gap-3 mb-10">
          <Link href="/products" className="btn-primary px-7 py-3.5 text-[15px]" style={{ borderRadius: '8px' }}>
            Browse hardware
          </Link>
          <Link href="/contact" className="px-6 py-3.5 text-[15px] font-bold rounded-lg border-2 transition-all" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            Request a proposal
          </Link>
        </div>

        <div className="flex gap-7">
          {[
            { num: '2020', label: 'Founded' },
            { num: 'B2B', label: 'Enterprise specialist' },
            { num: 'Dell+', label: 'Certified partner' },
            { num: 'UK', label: 'Nationwide' },
          ].map((s, i, arr) => (
            <div key={s.num} className="flex items-center gap-7">
              <div>
                <div className="text-[24px] font-extrabold text-white">{s.num}</div>
                <div className="text-[11px] mt-0.5" style={{ color: '#8EBADF' }}>{s.label}</div>
              </div>
              {i < arr.length - 1 && <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-10 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false) }, 400) }}
            className="h-2 rounded-full transition-all"
            style={{ width: i === active ? '20px' : '8px', background: i === active ? '#5BA4D4' : 'rgba(255,255,255,0.3)' }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    headline: 'Enterprise hardware,',
    headline2: 'any scale.',
    sub: 'Dell, HP, Lenovo and more — sourced, procured and delivered with dedicated account management. From a single device to a full enterprise rollout.',
  },
  {
    headline: 'The right hardware,',
    headline2: 'right now.',
    sub: 'Independent and impartial — we recommend exactly what fits your business goals, with flexible leasing and subscription options available.',
  },
  {
    headline: 'Servers, storage,',
    headline2: 'sorted.',
    sub: 'From entry-level rack servers to full data centre deployments — procured, delivered and installed across the UK with expert support.',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true)
      setTimeout(() => { setActive(i => (i + 1) % slides.length); setFading(false) }, 400)
    }, 6000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[active]

  return (
    <section className="relative overflow-hidden" style={{ background: '#0A1628', minHeight: '520px' }}>
      <div className="absolute right-0 top-0 bottom-0 w-[55%] overflow-hidden">
        <Image
          src="/hero-laptop.png"
          alt="Enterprise Dell laptops"
          fill
          className="object-cover object-center"
          priority
          style={{ opacity: 0.85 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0A1628 0%, #0A1628 10%, rgba(10,22,40,0.7) 40%, transparent 100%)' }} />
      </div>

      <div className="absolute inset-0 hero-grid opacity-[0.04]" aria-hidden="true" />

      <div className="relative z-10 px-10 py-20 max-w-[580px]">
        <div
          className="inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full mb-5 text-[10.5px] font-bold tracking-[1.5px] uppercase"
          style={{ borderColor: 'rgba(91,164,212,0.4)', color: '#8EBADF' }}
        >
          UK Independent B2B IT Distributor
        </div>

        <h1
          className="font-extrabold text-white leading-[1.1] tracking-tight mb-4"
          style={{ fontSize: '46px', opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          {slide.headline}<br />
          <span style={{ color: '#5BA4D4' }}>{slide.headline2}</span>
        </h1>

        <p
          className="text-[15px] leading-[1.75] mb-8 max-w-[460px]"
          style={{ color: '#8EBADF', opacity: fading ? 0 : 1, transition: 'opacity 0.4s ease' }}
        >
          {slide.sub}
        </p>

        <div className="flex gap-3 mb-10">
          <Link href="/products" className="btn-primary px-7 py-3.5 text-[15px]" style={{ borderRadius: '8px' }}>
            Browse hardware
          </Link>
          <Link href="/contact" className="px-6 py-3.5 text-[15px] font-bold rounded-lg border-2 transition-all" style={{ background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
            Request a proposal
          </Link>
        </div>

        <div className="flex gap-7">
          {[
            { num: '2020', label: 'Founded' },
            { num: 'B2B', label: 'Enterprise specialist' },
            { num: 'Dell+', label: 'Certified partner' },
            { num: 'UK', label: 'Nationwide' },
          ].map((s, i, arr) => (
            <div key={s.num} className="flex items-center gap-7">
              <div>
                <div className="text-[24px] font-extrabold text-white">{s.num}</div>
                <div className="text-[11px] mt-0.5" style={{ color: '#8EBADF' }}>{s.label}</div>
              </div>
              {i < arr.length - 1 && <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.1)' }} />}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-6 left-10 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { setFading(true); setTimeout(() => { setActive(i); setFading(false) }, 400) }}
            className="h-2 rounded-full transition-all"
            style={{ width: i === active ? '20px' : '8px', background: i === active ? '#5BA4D4' : 'rgba(255,255,255,0.3)' }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
@keyframes slowRotate {
  0% { transform: perspective(1200px) rotateY(-8deg) rotateX(3deg); }
  25% { transform: perspective(1200px) rotateY(0deg) rotateX(0deg); }
  50% { transform: perspective(1200px) rotateY(8deg) rotateX(-3deg); }
  75% { transform: perspective(1200px) rotateY(0deg) rotateX(0deg); }
  100% { transform: perspective(1200px) rotateY(-8deg) rotateX(3deg); }
}
