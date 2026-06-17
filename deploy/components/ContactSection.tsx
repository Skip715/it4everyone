'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      setSent(true)
    } catch {
      alert('Something went wrong. Please email sraper@it4eo.co.uk directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-10 py-14 bg-white">
      <div className="mb-8">
        <p className="text-[11px] font-bold text-blue tracking-[1.5px] uppercase mb-1.5">Get in touch</p>
        <h2 className="text-[26px] font-extrabold text-navy">Request a tailored proposal</h2>
      </div>
      <div className="grid grid-cols-[1fr_1.5fr] gap-12">
        {/* Info */}
        <div className="flex flex-col gap-5">
          <p className="text-[14px] text-slate-500 leading-[1.75]">
            Tell us about your technology roadmap and we&apos;ll prepare a fully customised procurement proposal — from a single device to a full enterprise rollout.
          </p>
          {[
            { label: 'Address', value: 'Regus The Gatehouse, Gatehouse Way, Aylesbury, Buckinghamshire', icon: '📍' },
            { label: 'Phone', value: '01296 816012 · 07518 577981', icon: '📞' },
            { label: 'Email', value: 'sraper@it4eo.co.uk', icon: '✉️' },
            { label: 'Website', value: 'www.it4eo.co.uk', icon: '🌐' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="flex gap-3.5 items-start">
              <div className="w-10 h-10 bg-pale border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 text-base">{icon}</div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-[0.5px] uppercase mb-0.5">{label}</p>
                <p className="text-[13px] font-semibold text-navy">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        {sent ? (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-extrabold text-navy mb-2">Enquiry sent!</h3>
              <p className="text-slate-500 text-sm">We&apos;ll be in touch within one business day.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
            <div className="grid grid-cols-2 gap-2.5">
              <input name="name" required placeholder="Your name" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="company" placeholder="Company name" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="email" type="email" required placeholder="Email address" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
              <input name="phone" placeholder="Phone number" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid" />
            </div>
            <textarea name="message" rows={3} required placeholder="What hardware or software are you looking to procure? How many devices?" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none focus:border-blue-mid resize-none" />
            <div className="grid grid-cols-2 gap-2.5">
              <select name="procurement" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none bg-white">
                <option>Outright purchase</option>
                <option>Leasing / subscription</option>
                <option>Flexible model</option>
              </select>
              <select name="devices" className="border-[1.5px] border-gray-200 rounded-lg px-3.5 py-2.5 text-[13.5px] text-navy outline-none bg-white">
                <option>1–10 devices</option>
                <option>11–50 devices</option>
                <option>51–200 devices</option>
                <option>200+ devices</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="bg-navy hover:bg-blue text-white font-bold py-3.5 rounded-lg text-[14px] transition-colors disabled:opacity-60 mt-1">
              {loading ? 'Sending…' : 'Send enquiry — get a proposal →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
